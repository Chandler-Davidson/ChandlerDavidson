'use client';

import Pwa from '../partials/pwa';
import { useEffect, useState } from 'react';
import styles from '../styles/Games.module.css';

// List of available games. Extend up to 25 games as needed.
// icon should correspond to a public/<icon>.png file.
const games = [
    {
        name: 'Hello Phaser',
        icon: 'phaser-game',
        loader: async () => {
            const module = await import('template-bun/dist/game.es');
            module.default();
        }
    }
    // Add more games here (up to 25)
];

// Safely remove any existing Phaser canvas before loading a new game.
const removeExistingCanvas = () => {
    const canvas = document.querySelector('canvas');
    if (canvas && canvas.parentElement) {
        canvas.parentElement.removeChild(canvas);
    }
};

export default function Games() {
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(false);

    // After each game load, move the Phaser canvas (if any) inside our centered wrapper.
    useEffect(() => {
        if (!selected) return;
        const canvas = document.querySelector('canvas');
        const wrapper = document.getElementById('canvas-wrapper');
        if (canvas && wrapper && canvas.parentElement !== wrapper) {
            wrapper.innerHTML = '';
            wrapper.appendChild(canvas);
            canvas.classList.add(styles.phaserCanvas);
        }
    }, [selected, loading]);

    const loadGame = async (name, loader) => {
        if (selected) {
            removeExistingCanvas();
        }
        setSelected(name);
        setLoading(true);
        try {
            await loader();
        } finally {
            setLoading(false);
        }
    };

    const closeGame = () => {
        removeExistingCanvas();
        setSelected(null);
    };

    // Filler tiles for when < 3 games.
    const fillers = games.length < 3 ? Array.from({ length: 3 - games.length }) : [];

    return (
        <>
            <Pwa />
            <header className={styles.header}>
                <h1 className={styles.title}>Games Arcade</h1>
                <p className={styles.subtitle}>Tap a game card to play!</p>
            </header>
            <section className={styles.grid} aria-label="Available games">
                {games.map(({ name, icon, loader }) => {
                    const isActive = selected === name;
                    return (
                        <button
                            key={name}
                            type="button"
                            className={`${styles.card} ${isActive ? styles.active : ''}`}
                            onClick={() => loadGame(name, loader)}
                            aria-pressed={isActive}
                            aria-label={`Play ${name}`}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.iconWrapper}>
                                    <img
                                        src={`${icon}.png`}
                                        alt={name}
                                        className={styles.icon}
                                        draggable={false}
                                    />
                                </div>
                                <span className={styles.cardTitle}>{name}</span>
                                {isActive && (
                                    <span className={styles.badge}>Playing</span>
                                )}
                            </div>
                        </button>
                    );
                })}
                {fillers.map((_, idx) => (
                    <div
                        key={`filler-${idx}`}
                        className={`${styles.card} ${styles.comingSoon}`}
                        aria-disabled="true"
                        aria-label="Coming soon game slot"
                    >
                        <div className={styles.cardInner}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.soonText}>🎮</span>
                            </div>
                            <span className={styles.cardTitle}>Coming Soon!</span>
                        </div>
                    </div>
                ))}
            </section>
            <section className={styles.playArea} aria-label="Game play area">
                {selected && (
                    <>
                <div id="canvas-wrapper" className={styles.canvasWrapper} />
                    <div className={styles.controls}>
                        <p className={styles.nowPlaying}>Now Playing: {selected}</p>
                        <button
                            type="button"
                            onClick={closeGame}
                            className={styles.closeBtn}
                            aria-label="Close current game"
                        >
                            Close Game ✖
                        </button>
                        {loading && <div className={styles.loader} aria-live="polite">Loading…</div>}
                    </div>
                    </>
                )}
            </section>
        </>
    );
}