# Full-Stack Application with Modern Frontend and Backend Architecture

## Overview

This is a full-stack web application built with a React frontend using modern UI components, an Express.js backend, and Drizzle ORM for database management. The application follows a modular architecture with clear separation between client, server, and shared components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **UI Library**: Radix UI components with custom styling using Tailwind CSS and shadcn/ui
- **State Management**: TanStack React Query for server state management
- **Routing**: React Router for client-side navigation
- **Styling**: Tailwind CSS with CSS variables for theming
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Express sessions with PostgreSQL store (connect-pg-simple)
- **Development**: Hot reload with tsx for TypeScript execution

### Project Structure
- `client/` - Frontend React application
- `server/` - Backend Express.js API
- `shared/` - Shared TypeScript types and schemas
- `migrations/` - Database migration files

## Key Components

### Frontend Components
- **UI Components**: Complete set of reusable UI components in `client/src/components/ui/`
- **Page Components**: Application-specific components like HeroSection, AboutSection, ProjectsSection
- **Portfolio Sections**: Personal portfolio showcasing projects, experience, and technical skills
- **Form Handling**: React Hook Form with Zod validation
- **Toast Notifications**: Multiple toast implementations (Radix UI Toast and Sonner)

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Route Registration**: Centralized route management system
- **User Management**: Basic user schema with username/password authentication
- **Development Tools**: Request logging and error handling middleware

### Shared Components
- **Database Schema**: Drizzle schema definitions with Zod validation
- **Type Safety**: Shared TypeScript types between frontend and backend

## Data Flow

1. **Frontend to Backend**: React components use TanStack React Query to make API calls
2. **Backend Processing**: Express routes handle requests and interact with storage layer
3. **Database Operations**: Storage interface abstracts database operations using Drizzle ORM
4. **Response Handling**: Structured JSON responses with proper error handling
5. **State Management**: React Query manages caching and synchronization of server state

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18+ with React Router and React Hook Form
- **UI Framework**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with class-variance-authority for component variants
- **State Management**: TanStack React Query for server state
- **Form Validation**: Zod schema validation with React Hook Form resolvers
- **Email Service**: EmailJS for contact form functionality

### Backend Dependencies
- **Database**: Neon Database (PostgreSQL-compatible) via @neondatabase/serverless
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Session Storage**: PostgreSQL-backed session store
- **Development Tools**: tsx for TypeScript execution and esbuild for production builds

### Development Tools
- **Replit Integration**: Vite plugins for Replit development environment
- **Build System**: Vite for frontend, esbuild for backend bundling
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: PostCSS with Tailwind CSS and Autoprefixer

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx with file watching for automatic restarts
- **Database**: Drizzle Kit for schema management and migrations
- **Integration**: Single development server setup with Vite middleware

### Production Build
- **Frontend**: Static files built with Vite and served from Express
- **Backend**: Bundled with esbuild for optimal performance
- **Database**: Production PostgreSQL database with connection pooling
- **Deployment**: Single Node.js process serving both frontend and API

### Environment Configuration
- **Database**: Environment variable-based configuration (DATABASE_URL)
- **Build Process**: Separate build steps for frontend and backend
- **Static Assets**: Frontend build output served by Express in production
- **Error Handling**: Production-ready error handling with proper status codes

The application is designed to be easily deployable on platforms like Replit, with development-friendly features and production-ready optimizations.