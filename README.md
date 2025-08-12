# My Personal Portfolio

A modern, interactive portfolio website to showcase my projects and introduce who I am. Built with JavaScript and React (Vite), it features smooth animations, dark/light themes, and a clean, responsive design.

## Features
- Interactive, responsive UI with subtle motion
- Dark/light mode with a persistent theme toggle
- Projects gallery with tag-based filtering
- About page with resume view and download (PDF)
- Contact page with direct links and copy‑to‑clipboard email
- Client-side routing for fast navigation

## Pages
- Home: Intro hero with quick calls to action
- Projects: Grid of projects with filters and external links (live/code)
- About: Brief bio, skills, and resume (PDF) actions
- Contact: Email, GitHub, LinkedIn, and quick copy

## Tech Stack
- React + Vite
- react-router-dom (routing)
- framer-motion (animations)
- react-icons (icons)
- CSS (custom variables and utility styles)

## Running Locally
```bash
cd web
npm install
npm run dev
```
Then open the local URL shown by the dev server.

## Production Build
```bash
cd web
npm run build
```
Outputs static assets to `web/dist` suitable for any static hosting.

## Deploy
Host the contents of `web/dist` on your preferred static host (e.g., GitHub Pages, Netlify, Vercel).

## License
MIT
