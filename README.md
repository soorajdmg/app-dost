# AppDost Revamped

A modern, creative redesign of AppDost built with React.js and Tailwind CSS. Features a clean, futuristic design with smooth animations and a consistent design system.

## Features

- Modern, responsive design
- Smooth animations using Framer Motion
- Glassmorphism effects
- Scroll progress indicator
- Page loader animation
- Mobile-friendly navigation
- Interactive components with hover effects
- Clean and minimal UI

## Tech Stack

- **React.js** - UI library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Router DOM** - Routing
- **Vite** - Build tool

## Project Structure

```
src/
 ┣ components/
 ┃ ┣ Navbar.jsx          # Sticky navigation with scroll effects
 ┃ ┣ Hero.jsx            # Full-screen hero section
 ┃ ┣ About.jsx           # About section with stats
 ┃ ┣ Services.jsx        # Services grid with cards
 ┃ ┣ Portfolio.jsx       # Project showcase with modal
 ┃ ┣ Testimonials.jsx    # Client testimonials slider
 ┃ ┣ Contact.jsx         # Contact form and info
 ┃ ┗ Footer.jsx          # Footer with links and social
 ┣ pages/
 ┃ ┣ Home.jsx            # Main landing page
 ┃ ┣ AboutPage.jsx       # Extended about page
 ┃ ┣ ServicesPage.jsx    # Detailed services page
 ┃ ┗ ContactPage.jsx     # Full contact page
 ┣ assets/               # Static assets
 ┣ App.jsx               # Main app component
 ┣ main.jsx              # Entry point
 ┗ index.css             # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Design System

### Colors

- Primary Gradient: Blue (#3b82f6) to Cyan (#06b6d4)
- Background: Light gray/white with blue tints
- Text: Gray scale for hierarchy

### Typography

- Font Family: Poppins
- Headings: Bold (600-800 weight)
- Body: Regular (400 weight)

### Components

All components feature:
- Glassmorphism effects (`bg-white/10 backdrop-blur-lg`)
- Rounded corners (2xl = 1rem)
- Smooth transitions and animations
- Hover effects with scale and glow
- Responsive design for all screen sizes

## Key Features

### Animations

- Framer Motion for page transitions
- Scroll-triggered animations using `whileInView`
- Staggered children animations
- Hover and tap interactions

### Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Collapsible mobile menu
- Optimized layouts for all devices

### Performance

- Lazy loading components
- Optimized images
- Minimal bundle size
- Fast page loads with Vite

## Customization

### Update Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: {
    blue: '#your-color',
    cyan: '#your-color',
  },
}
```

### Modify Content

All content is directly in the components, making it easy to update text, images, and data.

### Add New Pages

1. Create a new component in `src/pages/`
2. Import and add route in `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

## License

This project is open source and available under the MIT License.

## Credits

Built with love by the AppDost team.
