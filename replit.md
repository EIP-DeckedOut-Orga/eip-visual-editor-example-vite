# Visual Editor - Vite + React Example

## Overview
This is a Vite + React + TypeScript application that demonstrates the `@deckedout/visual-editor` package. It showcases three different editor configurations:
- **Basic Editor** (`/`): Simple editor integration with all panels enabled
- **Custom Mode** (`/custom-mode`): Advanced customization with custom canvas size and toolbar actions
- **With Assets** (`/with-assets`): Asset management with file upload capabilities

## Project Architecture

### Tech Stack
- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.11
- **Language**: TypeScript
- **Routing**: React Router DOM 6.27.0
- **Styling**: Tailwind CSS 3.4.17
- **Visual Editor**: @deckedout/visual-editor 1.0.7

### Project Structure
```
├── src/
│   ├── pages/
│   │   ├── BasicEditor.tsx      # Simple editor integration
│   │   ├── CustomMode.tsx       # Custom mode with toolbar/topbar
│   │   └── WithAssets.tsx       # Asset picker integration
│   ├── App.tsx                  # Main app with routing
│   ├── App.css                  # App styles
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles (Tailwind)
├── index.html                   # HTML template
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript config
└── package.json                 # Dependencies
```

## Replit Configuration

### Development Server
- **Port**: 5000
- **Host**: 0.0.0.0 (configured for Replit proxy)
- **Command**: `npm run dev`
- **Workflow**: "Start application" (webview mode)

### Deployment
- **Type**: Static site
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Key Configurations
1. **Vite Config**: Modified to run on port 5000 with host 0.0.0.0 for Replit environment
2. **HMR**: Configured with clientPort 5000 for hot module replacement through Replit proxy

## Recent Changes
- **2025-11-27**: Initial Replit setup
  - Fixed @deckedout/visual-editor package installation (reinstalled from npm registry)
  - Updated Vite config for Replit environment (port 5000, host 0.0.0.0)
  - Configured deployment settings for static site
  - Verified all three example pages work correctly

## Available Scripts
- `npm run dev` - Start development server (port 5000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Notes
- This is a standalone example app originally part of the @deckedout/visual-editor package
- The visual editor package is installed from npm (v1.0.7) rather than a local file reference
- All dependencies are installed and working correctly
