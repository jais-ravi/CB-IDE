# 🌩️ Cloud IDE Platform

### A modern cloud-based Integrated Development Environment (IDE) featuring per-project Docker container isolation, real-time code editing, file management, integrated terminal access, and dynamic public URLs — built for scalability, security, and seamless developer experience.

## 🚀 Features
- Multi-language support (Node.js, Python, Java, C++, etc.)
- Isolated Docker containers per project for secure project environments
- Real-time file explorer and editor with auto-save functionality
- Integrated Terminal (via node-pty and socket.io) inside the browser
- Dynamic Public URLs for live project previews using reverse proxy (Traefik)
- Resource Limits (CPU/RAM) for each container
- Idle container auto-shutdown for cost efficiency
- Authentication system (Firebase authentication integration ready)
- CI/CD-inspired Git push workflows (future)
- Scalable architecture (Docker Swarm-ready for future horizontal scaling)

## 🛠 Tech Stack

| Layer | Tech      |
| :-------- | :------- | 
| Frontend | Next.js, TailwindCSS, Monaco Editor, Socket.IO client|
| Backend |Node.js (Express), Dockerode, Node-PTY, Socket.IO server|
| Containers | Docker|
| Reverse Proxy | Traefik|


## ⚡ Key Components

- Container Manager: Create, start, stop, monitor per-user Docker containers
-	Terminal Bridge: Real-time WebSocket connection to container shell
-	File Explorer: Browse, edit, create, delete files inside the container
-	Public URL Generator: Dynamic hostname assignment via Traefik
-	Idle Monitor: Shuts down containers after inactivity timeout


## ⚡ Core Concepts

-	Per-Project Isolation:
	-	Every project runs inside its own dedicated Docker container.
	-	Files, terminal sessions, networking are isolated per project.
-	Container Lifecycle Management:
	-	Create, start, restart, stop, and destroy containers programmatically.
-	Terminal & Editor Bridge:
	-	Real-time terminal + file operations powered by WebSockets.
-	Dynamic Public URLs:
	-	Live preview apps (Node servers, Python apps, etc.) from inside containers.
-	Idle Container Auto-Shutdown:
	-	Shuts down containers automatically after inactivity to save resources.
