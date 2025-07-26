# Website Idea Generator

Transform simple website ideas into structured sections using intelligent algorithms. Built with Next.js, NestJS, and MongoDB.

## Features

- Smart industry detection and website type classification
- Generates contextual website sections based on patterns
- Real-time visual previews with realistic content
- Responsive design with dark mode

## Tech Stack

**Frontend:** Next.js 15, React 19, Tailwind CSS  
**Backend:** NestJS, MongoDB, TypeScript

## Quick Setup

### 1. Backend
```bash
cd backend
npm install
echo "MONGODB_URI=mongodb://localhost:27017/website-idea-generator
PORT=3001
FRONTEND_URL=http://localhost:3000" > .env
npm run start:dev
```

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```

### 3. Access
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## How It Works

1. Enter website idea (e.g., "Landing page for a bakery")
2. Backend detects industry and website type
3. Algorithm generates 5 prioritized sections
4. Frontend shows beautiful previews

## API Endpoints

```bash
POST /api/website-ideas     # Create idea
GET /api/website-ideas      # Get all ideas
GET /api/website-ideas/examples # Get examples
```

## Troubleshooting

**MongoDB not running:**
```bash
brew services start mongodb-community  # macOS
sudo systemctl start mongod           # Linux
```

**Port conflicts:**
```bash
lsof -i :3001  # Find backend process
kill -9 <PID>
```

## License

MIT License