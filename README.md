# Aurora Jewels

A responsive jewellery e-commerce front end built with Next.js, TypeScript and Tailwind CSS.

## Features

- Responsive layout
- Product gallery with filters
- Cart
- Wishlist
- Animations with Framer Motion

## Tech stack

- Next.js 16 (App Router), React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Three.js via `@react-three/fiber` and `@react-three/drei`
- Yarn

## Getting started

Requires Node.js 20.9 or newer and [Yarn](https://yarnpkg.com).

```bash
git clone https://github.com/amina-s232/Jewellery-website.git
cd Jewellery-website
yarn install
yarn dev
```

Open http://localhost:3000.

## Scripts

| Command      | What it does                  |
| ------------ | ----------------------------- |
| `yarn dev`   | Start the development server  |
| `yarn build` | Create a production build     |
| `yarn start` | Serve the production build    |
| `yarn lint`  | Run ESLint                    |

## Project structure

```
app/          Routes (Next.js App Router)
components/   UI components
lib/          Shared helpers
public/       Static assets
```

## License

MIT
