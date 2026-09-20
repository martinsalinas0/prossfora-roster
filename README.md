# Work Together — Frontend

The frontend of the **Work Together** platform, built with [Next.js 15](https://nextjs.org), [React 19](https://react.dev), and [Tailwind CSS 4](https://tailwindcss.com). It provides the user interface for job collaboration features and talks to the [Work Together backend](https://github.com/martinsalinas0/wt-backend-ts) over a REST API.

## Tech stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Features

- Job listings UI
- REST API integration with the backend
- Responsive layout across mobile and desktop

## Getting started

Requires Node.js 18.18 or later.

```bash
git clone https://github.com/martinsalinas0/wt-frontend.git
cd wt-frontend
npm install
npm run dev
```

The app runs at http://localhost:3000.

## Environment variables

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8080
```

Point `NEXT_PUBLIC_API_URL` at wherever the backend is running.

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Build for production         |
| `npm start`     | Serve the production build   |
| `npm run lint`  | Run ESLint                   |

## License

MIT

## Author

[martinsalinas0](https://github.com/martinsalinas0)
