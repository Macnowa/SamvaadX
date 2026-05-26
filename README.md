# Samvaad X — Real-time Video Conferencing

Samvaad X is a full-stack video conferencing application designed for real-time meetings and collaboration. The app combines a React frontend with an Express backend and uses WebRTC + Socket.IO for audio/video calls and signaling.

## What this project includes

- React frontend for user interaction and video meeting UI
- Express backend for user authentication, meeting data, and signaling support
- Socket.IO for real-time communication and event updates
- WebRTC-based audio/video streaming for peer-to-peer calls
- Responsive design for desktop and mobile use

## Key features

- Join or create video meetings
- Real-time audio/video streaming
- User authentication and session handling
- Live updates through Socket.IO
- Clean and responsive React interface

## Tech Stack

- Frontend: React, React Router, Material UI
- Backend: Node.js, Express, Socket.IO
- Media: WebRTC for audio/video calls
- Database: (if used) MongoDB / any supported database via models

## How to start

### 1. Prerequisites

- Node.js 16 or later
- npm or pnpm

### 2. Install backend dependencies

Open a terminal and run:

```bash
cd SamvaadX/backend
npm install
```

### 3. Install frontend dependencies

Open a second terminal and run:

```bash
cd SamvaadX/frontend
npm install
```

### 4. Start the backend server

In the backend terminal:

```bash
cd SamvaadX/backend
npm start
```

### 5. Start the frontend app

In the frontend terminal:

```bash
cd SamvaadX/frontend
npm start
```


## Project structure

- `backend/` — server code, API routes, controllers, and models
- `frontend/` — React app, pages, components, and styles

Made with ❤️ for SamvaadX.
