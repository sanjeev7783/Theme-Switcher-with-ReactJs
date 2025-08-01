# Multi-Theme Switcher App

A React-based web application featuring dynamic theme switching with three distinct visual experiences. Built with TypeScript, Tailwind CSS, and modern React patterns.

## Features

### 🎨 Three Distinct Themes
- **Theme 1**: Minimalist design with light colors and clean sans-serif typography
- **Theme 2**: Dark mode with sidebar layout and elegant serif fonts
- **Theme 3**: Colorful theme with grid-based layout and playful Pacifico font

### 🚀 Core Functionality
- **Dynamic Theme Switching**: Dropdown in header to switch between themes
- **Persistent Storage**: Theme selection saved in localStorage
- **Responsive Design**: Optimized for desktop and mobile devices
- **Smooth Animations**: 500ms transitions between theme changes
- **API Integration**: Product data fetched from FakeStore API

### 🛠 Technical Stack
- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for client-side routing
- **Context API** for theme state management
- **Tailwind CSS** for styling
- **Custom Hooks** for API data fetching

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Fixed header with theme dropdown
│   ├── Home.tsx           # Home page with theme-specific layouts
│   ├── About.tsx          # About page
│   └── Contact.tsx        # Contact page with form
├── contexts/
│   └── ThemeContext.tsx   # Theme management with Context API
├── hooks/
│   └── useProducts.ts     # Custom hook for API data
├── App.tsx               # Main app component
└── index.tsx            # App entry point
```

## Theme Variations

Each theme provides a completely different user experience:

### Theme 1 (Default)
- Light gray background
- Sans-serif fonts
- Standard layout
- Blue accent colors
- Clean, minimalist design

### Theme 2 (Dark)
- Dark gray/black background
- Serif fonts
- Sidebar navigation layout
- Purple accent colors
- Professional, elegant feel

### Theme 3 (Colorful)
- Gradient background
- Pacifico decorative font
- Grid-based card layout
- Pink/purple gradients
- Playful, creative design

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Components

- **ThemeProvider**: Manages theme state and localStorage persistence
- **Header**: Fixed navigation with theme dropdown
- **Dynamic Layouts**: Each theme renders different component structures
- **API Integration**: Fetches and displays product data
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Security & Best Practices

- TypeScript for type safety
- Secure API calls with error handling
- Input validation on forms
- Responsive design patterns
- Performance optimized with Vite
- Clean code architecture with separation of concerns