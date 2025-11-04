import { useEffect } from "react";

export default function Pwa() {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').catch(err => {
                    console.error('Service Worker registration failed:', err);
                });
            });
        }
    }, []);

    // Add manifest link
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'manifest';
        link.href = '/manifest.json';
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return <></>;
}