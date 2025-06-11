# TypeScript Monorepos Course

This repository contains the code and exercises for the TypeScript Monorepos course. The project is a seed catalog application built with Svelte, TypeScript, and Express.

## Prerequisites

- Node.js (version 22.16.0 or higher)
- npm (version 11.4.1 or higher)
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:mike-north/ts-monorepos-v2.git
cd ts-monorepos-v2
```

### 2. Node Version Management

This project uses Node.js version 22.16.0. If you have `nvm` (Node Version Manager) installed, you can automatically use the correct version:

```bash
nvm use
```

If you don't have `nvm`, you can install Node.js 22.16.0 directly from [nodejs.org](https://nodejs.org/).

### 3. Install Dependencies

Install all project dependencies using npm:

```bash
npm install
```

This will install both development and production dependencies as specified in `package.json`.

## Available Scripts

### Development Scripts

- **`npm run dev`** - Start both the server and client in development mode with hot reload
  - Runs the Express server and Vite dev server concurrently
  - Server runs on the backend, client runs on the frontend
  - Uses colored output to distinguish between server (yellow) and client (blue) logs

- **`npm run dev-server`** - Start only the Express server in development mode
  - Runs the backend API server using `tsx`

- **`npm run dev-client`** - Start only the Vite development server
  - Runs the frontend Svelte application

### Build Scripts

- **`npm run build`** - Build the project for production
  - Creates optimized build files in the `dist` directory

- **`npm run preview`** - Preview the production build locally
  - Serves the built application for testing

### Testing Scripts

- **`npm run test`** - Run tests once (no watch mode)
  - Useful for CI/CD pipelines

- **`npm run test:watch`** - Run tests in watch mode
  - Uses Vitest for running tests
  - Automatically re-runs tests when files change

- **`npm run test:ui`** - Run tests with Vitest UI
  - Opens a web interface for running and viewing tests

- **`npm run test:coverage`** - Run tests with coverage report
  - Generates code coverage reports

### Quality Assurance Scripts

- **`npm run check`** - Run TypeScript and Svelte type checking
  - Validates TypeScript types across the project

- **`npm run lint`** - Run ESLint to check code quality
  - Checks for code style and potential issues

## Project Structure

```
ts-monorepos-v2/
├── src/
│   ├── server/          # Express server code
│   ├── lib/             # Shared library code
│   ├── models/          # Data models
│   └── utils/           # Utility functions
├── tests/               # Test files
├── public/              # Static assets
├── dist/                # Build output (generated)
└── coverage/            # Test coverage reports (generated)
```

## Tech Stack

- **Frontend**: Svelte 5, TypeScript, Tailwind CSS, DaisyUI
- **Backend**: Express.js, TypeScript
- **Build Tool**: Vite
- **Testing**: Vitest, Testing Library
- **Linting**: ESLint
- **Styling**: Tailwind CSS, PostCSS, Sass

## Getting Started with Development

1. **Start the development environment**:
   ```bash
   npm run dev
   ```

2. **Run tests**:
   ```bash
   npm run test
   ```

3. **Check code quality**:
   ```bash
   npm run lint
   npm run check
   ```

4. **Build for production**:
   ```bash
   npm run build
   npm run preview
   ```

## Course Workflow

This repository is designed to support a hands-on TypeScript monorepos course. Throughout the course, you'll work with:

- TypeScript configuration and compilation
- Monorepo structure and organization
- Shared libraries and dependencies
- Build tools and bundling
- Testing strategies
- Code quality and linting

Happy coding! 🚀
