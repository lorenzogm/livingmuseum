<!-- copilot automation test: safe to revert -->
# Living Museum Madrid - Next.js Website

This is a modern Next.js implementation of the Living Museum Madrid website (https://livingmuseum.madrid/), featuring a responsive design, interactive components, and dynamic video backgrounds built with React and Tailwind CSS.

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management and side effects

## ✨ Features

- **Component-Based Architecture**: Modular React components for maintainability
- **Video Backgrounds**: Dynamic video backgrounds for each section
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Navigation**: Side navigation dots that update based on scroll position
- **Modern Animations**: Fade-in effects and smooth transitions
- **Accessibility**: WCAG compliant with proper focus management and screen reader support
- **Performance Optimized**: Next.js optimization with lazy loading and intersection observers
- **Cookie Consent**: GDPR-compliant cookie notification
- **TypeScript**: Full type safety and developer experience

## 🎬 Video Integration

Each section features a background video from the original Living Museum Madrid website:
- **Hero Section**: Introduction video (`quienes-somos.mp4`)
- **Artists Section**: Artists showcase video (`artistas.mp4`)
- **News Section**: Latest updates video (`noticias.mp4`)
- **Projects Section**: Projects overview video (`proyectos.mp4`)
- **Collaboration Section**: Collaboration invitation video (`colabora.mp4`)

Videos are optimized with:
- Intersection Observer for performance
- Lazy loading and preload metadata
- Auto-pause when out of view
- Responsive scaling and proper aspect ratios

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── SideNavigation.tsx  # Floating navigation dots
│   ├── VideoBackground.tsx # Optimized video background component
│   ├── HeroSection.tsx     # Landing section
│   ├── ArtistasSection.tsx # Artists section
│   ├── NoticiasSection.tsx # News section
│   ├── ProyectosSection.tsx# Projects section
│   ├── ColaboraSection.tsx # Collaboration section
│   ├── Footer.tsx          # Footer with social links
│   └── CookieConsent.tsx   # GDPR cookie consent
├── public/
│   ├── videos/             # Video files (excluded from git)
│   ├── logo-white.svg      # Main logo
│   ├── logo-footer.svg     # Footer logo
│   └── kit-digital-logo.svg# Kit Digital logo
└── download-videos.sh      # Script to download video files
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lorenzogm/livingmuseum.git
cd livingmuseum
```

2. Install dependencies:
```bash
npm install
```

3. Download video files:
```bash
./download-videos.sh
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `./download-videos.sh` - Download all video files

## 🎨 Styling

The project uses Tailwind CSS for styling with:
- Custom color palette matching the original design
- Responsive utilities for mobile-first design
- Custom animations and transitions
- Video overlay effects for text readability

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## 🔧 Development

### Component Development
Each component is self-contained with:
- TypeScript interfaces for props
- Tailwind CSS for styling
- React hooks for state management
- Proper accessibility attributes

### Video Optimization
- `VideoBackground` component with intersection observer
- Automatic play/pause based on viewport visibility
- Preload metadata for faster loading
- Fallback support for browsers without video support

### State Management
- React useState for local component state
- useEffect for scroll event handling
- Custom scroll throttling for performance

## 🌟 Key Features

### Navigation
- Fixed header with mobile hamburger menu
- Side navigation dots that highlight current section
- Smooth scrolling between sections
- Responsive mobile menu overlay

### Video Sections
- **Hero**: Full-screen landing with background video
- **Artistas**: Artists showcase with video background
- **Noticias**: News section with dynamic video
- **Proyectos**: Projects overview with video
- **Colabora**: Collaboration invitation with video background

### Interactive Elements
- Hover effects on buttons and links
- Scroll-triggered video playback
- Mobile-optimized touch interactions
- Cookie consent modal

## 📄 License

This project is a clone for educational purposes. All rights to the original design belong to Living Museum Madrid.

## 🙏 Acknowledgments

- Original website: [Living Museum Madrid](https://livingmuseum.madrid/)
- Built with Next.js, TypeScript, and Tailwind CSS
- Video content from the original Living Museum Madrid website
