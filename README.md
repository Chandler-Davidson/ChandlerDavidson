This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Games Arcade (`/games`)

The games hub presents up to 25 game tiles in a responsive, colorful grid inspired by PBS Kids.

### Adding a game
Edit `pages/games.js` and append an object to the `games` array:

```js
{
	name: 'My Cool Game',
	icon: 'my-cool-game', // expects public/my-cool-game.png
	loader: async () => {
		const module = await import('path-to-your-game');
		module.default(); // should create a Phaser game that injects a <canvas>
	}
}
```

Place the icon at `public/my-cool-game.png` (transparent PNG recommended, ~512x512).

### Canvas handling
When you start a game, any existing `<canvas>` is removed. After loading finishes, the Phaser-created canvas is moved into a centered wrapper so it stays neatly positioned on all devices. Closing the game removes the canvas and deselects the tile.

### Coming Soon tiles
If there are fewer than 3 games defined, disabled "Coming Soon" filler tiles are automatically added until there are 3 visible tiles. No action needed—just add real games and the fillers disappear.

### Accessibility & UX
Each tile is a button with an accessible label. Focus and hover effects are provided. The active game shows a "Playing" badge and a close button appears beneath the canvas.

