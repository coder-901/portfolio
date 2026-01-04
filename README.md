# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, contact form integration, and automated deployment via GitHub Actions.

**Live Demo:** [https://coder-901.github.io/portfolio/](https://coder-901.github.io/portfolio/)

## Features

- 🎨 Modern, responsive design with smooth animations
- ⚡ Fast development with Vite
- 🎭 Framer Motion animations
- 📧 EmailJS contact form integration
- 🚀 Automated deployment with GitHub Actions
- 📱 Fully responsive and mobile-friendly

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **EmailJS** - Contact form service

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/coder-901/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── common/      # Reusable components
│   ├── layout/      # Layout components
│   └── sections/    # Page sections
├── data/            # Data files
├── hooks/           # Custom React hooks
└── App.jsx          # Main application component
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions. The workflow triggers on every push to the `main` branch.

### Manual Deployment

You can also deploy to other platforms:

- **Vercel:** `vercel --prod`
- **Netlify:** Connect your repository or use the Netlify CLI

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run clean` - Clean build artifacts

## License

This project is private and proprietary.

## Contact

**Tarun Kumar** - Data Analyst & Front-End Developer

- Email: trn901@gmail.com
- LinkedIn: [tarun-kumar-74b0031a1](https://www.linkedin.com/in/tarun-kumar-74b0031a1)
- GitHub: [@coder-901](https://github.com/coder-901)
