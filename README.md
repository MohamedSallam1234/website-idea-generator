# Website Idea Generator

A powerful full-stack application that transforms simple website ideas into comprehensive, structured sections using intelligent algorithms. Built with Next.js (frontend), NestJS (backend), and MongoDB (database).

## 🚀 Features

### Core Functionality
- **🎯 Smart Idea Processing**: Advanced algorithms analyze your website concept and automatically detect industry type and website category
- **📋 Intelligent Section Generation**: AI-powered logic generates contextual website sections based on industry patterns and website type
- **🎨 Real-time Visual Previews**: Beautiful, interactive previews of each generated section with realistic content
- **💾 Persistent Storage**: MongoDB database stores all ideas and generated sections for future reference
- **🔄 Community Examples**: Dynamic example suggestions from previously generated ideas

### User Experience
- **📱 Responsive Design**: Mobile-first design that works perfectly on all devices
- **🌙 Dark Mode Support**: Built-in dark/light mode with seamless switching
- **⚡ Loading States**: Smooth animations and real-time feedback during processing
- **🛡️ Error Handling**: Comprehensive error handling with user-friendly messages
- **✨ Interactive UI**: Modern, intuitive interface with hover effects and transitions

### Advanced Intelligence
- **🏭 Industry Detection**: Automatically identifies business type (Food & Beverage, Technology, Healthcare, Fashion, Education, Finance, Travel, Real Estate, etc.)
- **🌐 Website Type Recognition**: Detects website category (Portfolio, E-commerce, Blog, Landing Page, Corporate, Non-profit, etc.)
- **🏷️ Smart Tagging**: Generates relevant tags based on content analysis
- **📊 Priority Ranking**: Intelligent section prioritization based on industry best practices
- **💡 Contextual Content**: Generates specific, relevant content suggestions for each section

## 🛠 Tech Stack

### Frontend
- **Next.js 15.4.4** - React framework with App Router and Server Components
- **React 19** - Latest React with concurrent features
- **Tailwind CSS v4** - Modern utility-first CSS framework
- **TypeScript** - Full type safety and enhanced developer experience

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

```
website-idea-generator/
├── 📂 frontend/                    # Next.js React Application
│   ├── 📂 src/
│   │   ├── 📂 app/                 # App Router (Next.js 13+)
│   │   │   ├── favicon.ico
│   │   │   ├── globals.css         # Global styles with Tailwind
│   │   │   ├── layout.tsx          # Root layout component
│   │   │   └── page.tsx            # Main page component
│   │   ├── 📂 components/          # Reusable React Components
│   │   │   ├── SectionPreview.tsx  # Rich section preview component
│   │   │   └── WebsiteIdeaForm.tsx # Interactive form component
│   │   └── 📂 types/               # TypeScript Definitions
│   │       └── website-idea.ts     # Core type definitions
│   ├── 📂 public/                  # Static Assets
│   └── package.json                # Frontend dependencies
├── 📂 backend/                     # NestJS API Server
│   ├── 📂 src/
│   │   ├── 📂 website-ideas/       # Core Module
│   │   │   ├── 📂 dto/             # Data Transfer Objects
│   │   │   │   └── create-website-idea.dto.ts
│   │   │   ├── website-ideas.controller.ts  # REST API endpoints
│   │   │   ├── website-ideas.service.ts     # Business logic
│   │   │   ├── website-ideas.schema.ts      # MongoDB schema
│   │   │   └── website-ideas.module.ts      # NestJS module
│   │   ├── app.controller.ts       # Root controller
│   │   ├── app.module.ts           # Root module
│   │   ├── app.service.ts          # Root service
│   │   └── main.ts                 # Application bootstrap
│   ├── 📂 test/                    # E2E Tests
│   └── package.json                # Backend dependencies
└── README.md                       # This file
```

## 🚀 Quick Start Guide

### Prerequisites

- **Node.js** 18.0.0 or higher
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn** package manager

### 1. Clone Repository

```bash
git clone <repository-url>
cd website-idea-generator
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create environment file:
```bash
# Create .env file in backend directory
touch .env
```

Add configuration to `.env`:
```env
# Database
MONGODB_URI=mongodb://localhost:27017/website-idea-generator

# Server
PORT=3001
FRONTEND_URL=http://localhost:3000

# Optional: Production settings
NODE_ENV=development
```

Start the backend server:
```bash
# Development mode with auto-reload
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

Backend will be available at: `http://localhost:3001`

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
# Development with Turbopack (faster)
npm run dev

# Standard development mode
npm run build && npm run start
```

Frontend will be available at: `http://localhost:3000`

### 4. Database Setup

#### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service:
   ```bash
   # macOS (with Homebrew)
   brew services start mongodb-community
   
   # Linux (systemctl)
   sudo systemctl start mongod
   
   # Windows
   net start MongoDB
   ```

#### Option B: MongoDB Atlas (Cloud)
1. Create account at [MongoDB Atlas](https://cloud.mongodb.com)
2. Create new cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env` file

## 🎯 How It Works

### 1. User Input Process
Users enter their website concept through an intuitive form:
- **Examples**: "Landing page for a bakery", "Portfolio for photographer", "E-commerce jewelry store"
- **Validation**: Real-time form validation with helpful error messages
- **Community Examples**: Dynamic suggestions from previously generated ideas

### 2. Intelligent Analysis
The backend performs sophisticated analysis:

#### Industry Detection Algorithm
```typescript
// Detects business industry based on keywords
- Food & Beverage: restaurant, bakery, food, cafe, catering
- Technology: tech, software, app, saas
- Healthcare: health, medical, doctor, clinic
- Fashion & Beauty: fashion, clothing, jewelry, beauty
- Education: education, course, school, training
- Finance: finance, bank, investment, insurance
- Travel: travel, hotel, tourism, vacation
- Real Estate: real estate, property, home, rent
```

#### Website Type Recognition
```typescript
// Identifies website category
- Portfolio: portfolio, personal work
- E-commerce: shop, store, buy, sell, ecommerce
- Blog/News: blog, news, article, content
- Landing Page: landing, product launch, campaign
- Corporate: corporate, company, business, agency
- Non-profit: nonprofit, charity, foundation
```

### 3. Advanced Section Generation
Based on analysis results, the system generates contextual sections:

#### Industry-Specific Sections
- **Food & Beverage**: Menu/Products, Location & Hours, Reservations
- **E-commerce**: Featured Products, Shopping Cart, Product Categories
- **Portfolio**: Project Gallery, Skills & Expertise, Case Studies
- **Healthcare**: Services, Appointment Booking, Insurance Information

#### Universal Sections
- **Hero Section**: Compelling headline and value proposition
- **About Us**: Company story and team information
- **Contact**: Multiple contact methods and forms
- **Testimonials**: Customer reviews and social proof
- **Pricing**: Service or product pricing structures

### 4. Rich Visual Previews
Each section includes:
- **Realistic Content**: Industry-specific sample content and copy
- **Interactive Elements**: Buttons, forms, and navigation components
- **Visual Design**: Beautiful layouts with proper spacing and typography
- **Responsive Behavior**: Mobile-optimized previews

## 🔧 API Documentation

### Endpoints

#### Create Website Idea
```http
POST /api/website-ideas
Content-Type: application/json

{
  "idea": "Landing page for a bakery specializing in organic pastries"
}
```

**Response:**
```json
{
  "_id": "unique-id",
  "idea": "Landing page for a bakery specializing in organic pastries",
  "industry": "Food & Beverage",
  "websiteType": "Landing Page",
  "tags": ["food & beverage", "landing page", "local-business"],
  "sections": [
    {
      "name": "Hero Section",
      "description": "Compelling headline and value proposition",
      "contentSuggestions": [...],
      "priority": 1,
      "category": "Essential"
    }
  ],
  "createdAt": "2024-01-01T12:00:00Z"
}
```

#### Get All Ideas
```http
GET /api/website-ideas
```

#### Get Single Idea
```http
GET /api/website-ideas/:id
```

#### Get Example Ideas
```http
GET /api/website-ideas/examples?limit=6
```

## 🎨 Section Categories

### Essential Sections (Priority 1-2)
Core sections every website needs:
- Hero Section
- Contact Information

### Core Sections (Priority 3-5)
Industry-specific important sections:
- Product/Service showcase
- About Us
- Key functionality

### Functionality Sections (Priority 6-7)
Advanced features:
- Online Booking
- Shopping Cart
- User Authentication

### Trust Building (Priority 8-9)
Credibility elements:
- Testimonials
- Team Information
- Certifications

### Support Sections (Priority 10+)
Additional helpful content:
- FAQ
- Support Documentation
- Resources

## 🔧 Development Scripts

### Backend Commands
```bash
# Development
npm run start:dev      # Start with auto-reload
npm run start:debug    # Start with debugging

# Production
npm run build          # Build for production
npm run start:prod     # Start production server

# Testing
npm run test           # Run unit tests
npm run test:e2e       # Run end-to-end tests
npm run test:cov       # Run with coverage

# Code Quality
npm run lint           # ESLint checking
npm run format         # Prettier formatting
```

### Frontend Commands
```bash
# Development
npm run dev            # Start development server

# Production
npm run build          # Build for production
npm run start          # Start production server

# Code Quality
npm run lint           # Next.js linting
```

## 🌐 Environment Variables

### Backend (.env)
```env
# Required
MONGODB_URI=mongodb://localhost:27017/website-idea-generator
PORT=3001
FRONTEND_URL=http://localhost:3000

# Optional
NODE_ENV=development
LOG_LEVEL=debug
```

### Frontend (Optional)
```env
# Next.js configuration
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 🚀 Deployment

### Backend Deployment
1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Set production environment variables:**
   - `MONGODB_URI`: Production database URL
   - `PORT`: Server port (default: 3001)
   - `FRONTEND_URL`: Production frontend URL

3. **Start production server:**
   ```bash
   npm run start:prod
   ```

### Frontend Deployment
1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Deploy to platform:** (Vercel, Netlify, etc.)
   ```bash
   # Vercel
   vercel deploy

   # Netlify
   npm run build && netlify deploy --prod
   ```

## 🧪 Testing

### Running Tests
```bash
# Backend tests
cd backend
npm run test           # Unit tests
npm run test:e2e       # End-to-end tests
npm run test:cov       # Coverage report

# Frontend tests (if configured)
cd frontend
npm run test
```

### Test Coverage
- Controllers: API endpoint testing
- Services: Business logic validation
- Schemas: Data model verification
- E2E: Full application workflow

## 🔒 Security Features

- **Input Validation**: Comprehensive validation using class-validator
- **CORS Protection**: Configured for specific origins
- **Data Sanitization**: MongoDB injection prevention
- **Rate Limiting**: API endpoint protection (configurable)
- **Environment Variables**: Secure configuration management

## 🛠️ Troubleshooting

### Common Issues

#### MongoDB Connection Failed
```bash
# Check MongoDB status
brew services list | grep mongodb  # macOS
sudo systemctl status mongod       # Linux

# Restart MongoDB
brew services restart mongodb-community  # macOS
sudo systemctl restart mongod           # Linux
```

#### Port Already in Use
```bash
# Find process using port
lsof -i :3001  # Backend port
lsof -i :3000  # Frontend port

# Kill process
kill -9 <PID>
```

#### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write comprehensive tests
- Use ESLint and Prettier configurations
- Document new features
- Update this README for significant changes

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **NestJS Team** - Amazing backend framework
- **Next.js Team** - Incredible React framework
- **MongoDB** - Flexible database solution
- **Tailwind CSS** - Beautiful utility-first CSS
- **Community Contributors** - Thank you for your ideas and feedback

---

**Built with ❤️ using modern web technologies**

*Need help? Open an issue or reach out to the development team!* 
