# Website Idea Generator

A full-stack application that transforms simple website ideas into comprehensive, structured sections using intelligent algorithms. Built with Next.js, NestJS, and MongoDB.

## 🚀 Features

- **Smart Industry Detection**: Automatically identifies business type (Food & Beverage, Technology, Healthcare, etc.)
- **Intelligent Section Generation**: Creates contextual website sections based on industry patterns
- **Real-time Visual Previews**: Beautiful, interactive previews with realistic content
- **Responsive Design**: Mobile-first design with dark mode support
- **Persistent Storage**: MongoDB database stores all ideas and sections

## 🛠 Tech Stack

**Frontend:** Next.js 15, React 19, Tailwind CSS, TypeScript  
**Backend:** NestJS, MongoDB, Mongoose, Class Validator  

<<<<<<< HEAD
## 📁 Project Structure
=======
### Backend
- **NestJS** - Enterprise-grade Node.js framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose 8.16.5** - Elegant MongoDB object modeling
- **Class Validator** - Decorator-based validation
- **CORS Enabled** - Secure cross-origin resource sharing

### Development Tools
- **ESLint** - Code quality and consistency
- **Prettier** - Automated code formatting
- **TypeScript** - Static type checking

## 📁 Project Architecture
>>>>>>> e4050915a781d46e0380e48e466f6d35a718fc88

```
website-idea-generator/
├── frontend/          # Next.js React Application
│   ├── src/app/       # App Router pages
│   ├── src/components/ # Reusable React Components
│   └── src/types/     # TypeScript definitions
├── backend/           # NestJS API Server
│   ├── src/website-ideas/ # Core business logic
│   └── src/           # App configuration
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB (local or Atlas)
- npm or yarn

### 1. Backend Setup
```bash
cd backend
npm install

# Create .env file
echo "MONGODB_URI=mongodb://localhost:27017/website-idea-generator
PORT=3001
FRONTEND_URL=http://localhost:3000" > .env

# Start development server
npm run start:dev
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 3. Access Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## 🎯 How It Works

1. **User Input**: Enter website concept (e.g., "Landing page for a bakery")
2. **Smart Analysis**: Backend detects industry and website type using keyword matching
3. **Section Generation**: Algorithm creates 5 prioritized, contextual sections
4. **Visual Preview**: Frontend renders beautiful previews with realistic content

### Example Industries Detected
- Food & Beverage, Technology, Healthcare, Fashion & Beauty
- Education, Finance, Travel & Tourism, Real Estate

### Generated Section Types
- Hero Section, About Us, Contact, Menu/Products, Testimonials
- Pricing Plans, Team, FAQ, Online Booking, Portfolio Gallery

## 🔧 Development Commands

### Backend
```bash
npm run start:dev    # Development with auto-reload
npm run build       # Build for production
npm run test        # Run tests
```

### Frontend
```bash
npm run dev         # Development server
npm run build       # Production build
npm run lint        # Code linting
```

## 🌐 API Endpoints

```bash
POST /api/website-ideas     # Create new idea
GET /api/website-ideas      # Get all ideas
GET /api/website-ideas/:id  # Get specific idea
GET /api/website-ideas/examples # Get example ideas
```

## 🔒 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb://localhost:27017/website-idea-generator
PORT=3001
FRONTEND_URL=http://localhost:3000
```

## 🛠️ Troubleshooting

**MongoDB Connection Issues:**
```bash
# Start MongoDB service
brew services start mongodb-community  # macOS
sudo systemctl start mongod           # Linux
```

**Port Already in Use:**
```bash
# Find and kill process
lsof -i :3001  # Backend
lsof -i :3000  # Frontend
kill -9 <PID>
```

**Dependencies Issues:**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Open Pull Request

## 📝 License

MIT License - see LICENSE file for details.

---

<<<<<<< HEAD
**Built with ❤️ using modern web technologies** 
=======
**Built with ❤️ using modern web technologies**

*Need help? Open an issue or reach out to the development team!* 
>>>>>>> e4050915a781d46e0380e48e466f6d35a718fc88
