'use client';

import Pwa from '../partials/pwa';
import { useState } from 'react';

const games = [{
    name: 'Hello Phaser',
    icon: 'phaser-game',
    loader: async () => {
        const module = await import('template-bun/dist/game.es');
        module.default();
    }
}];

// Phaser recreates a canvas element on game start
const removeExistingCanvas = () => document.getElementsByTagName('canvas')[0].remove();

export default function Games() {
    const [selected, setSelected] = useState(null);
    const loadGame = (name, loader) => {
        if (selected) {
            removeExistingCanvas();
        }

        setSelected(name);
        loader();
    }

    return (<>
        <Pwa />
        <h1>Games!</h1>
        <ul>
            {games.map(({ name, icon, loader }) =>
                <div key={name}>
                    <h3>{name}</h3>
                    <img src={`${icon}.png`} onClick={() => loadGame(name, loader)} />
                </div>
            )}
        </ul>
        <div id="app">
            <div id="game-container"></div>
        </div>
    </>
    )
}