# Component Architecture Map

## Component Tree Structure

```
App.jsx (Router + Global Effects)
├── ScrollProgress (Top bar)
├── PageLoader (Initial load)
│
├── Home Page (/)
│   ├── Navbar
│   ├── Hero
│   ├── About
│   ├── Services
│   ├── Portfolio
│   ├── Testimonials
│   ├── Contact
│   └── Footer
│
├── About Page (/about)
│   ├── Navbar
│   ├── Hero Section
│   ├── Mission/Vision/Values
│   ├── Story Section
│   ├── Team Section
│   └── Footer
│
├── Services Page (/services)
│   ├── Navbar
│   ├── Hero Section
│   ├── Services Grid (Detailed)
│   ├── CTA Section
│   └── Footer
│
└── Contact Page (/contact)
    ├── Navbar
    ├── Hero Section
    ├── Contact Cards
    ├── Contact Form + Info Sidebar
    └── Footer
```

---

## Component Details

### 🧭 Navbar Component
**File**: `src/components/Navbar.jsx`

**Features**:
- Sticky positioning
- Transparent → Opaque on scroll
- Mobile hamburger menu
- Active route highlighting
- Smooth hover animations

**Props**: None (uses React Router location)

**State**:
- `isScrolled` - Tracks scroll position
- `isMobileMenuOpen` - Mobile menu toggle

---

### 🦸 Hero Component
**File**: `src/components/Hero.jsx`

**Features**:
- Full viewport height
- Gradient animated background
- Floating icons (Code, Smartphone, Globe, Sparkles)
- Staggered text animations
- Two CTA buttons
- Scroll indicator

**Animation Timeline**:
1. Background fade-in
2. Icons float-in (staggered)
3. Heading fade-up
4. Subtext fade-up
5. CTAs fade-up
6. Scroll indicator pulse

---

### 👤 About Component
**File**: `src/components/About.jsx`

**Features**:
- Two-column layout
- Animated count-up statistics
- Floating badge element
- Image placeholder with icon
- 4 stat cards

**Statistics**:
- Happy Clients: 150+
- Projects Completed: 200+
- Awards Won: 25+
- Success Rate: 98%

**Sub-Components**:
- `CountUp` - Number animation component

---

### 🛠️ Services Component
**File**: `src/components/Services.jsx`

**Features**:
- 3-column grid (responsive)
- 6 service cards
- Glass effect styling
- Hover scale + glow
- Unique gradient per service

**Services List**:
1. Web Development (Blue-Cyan)
2. Mobile Apps (Purple-Pink)
3. UI/UX Design (Orange-Red)
4. Digital Marketing (Green-Teal)
5. Cloud Solutions (Indigo-Blue)
6. Security & Support (Red-Orange)

---

### 💼 Portfolio Component
**File**: `src/components/Portfolio.jsx`

**Features**:
- 3-column grid (responsive)
- 6 project cards
- Click to open modal
- Image zoom on hover
- Overlay with gradient

**Projects**:
1. E-Commerce Platform
2. Fitness Tracking App
3. Real Estate Portal
4. Healthcare Dashboard
5. Social Media Platform
6. Restaurant Management

**Modal Features**:
- Full project details
- Technology tags
- Close button
- Click outside to close

---

### 💬 Testimonials Component
**File**: `src/components/Testimonials.jsx`

**Features**:
- Auto-rotating carousel
- 5 client testimonials
- Navigation arrows
- Dot indicators
- Star ratings
- Client avatars

**Auto-Slide**:
- Interval: 5 seconds
- Smooth transitions
- Pause on interaction (optional)

**Navigation**:
- Previous/Next buttons
- Dot indicators (click to jump)

---

### 📧 Contact Component
**File**: `src/components/Contact.jsx`

**Features**:
- Two-column layout
- Contact info cards (3)
- Contact form (5 fields)
- Form validation
- Hover effects

**Form Fields**:
- Name (required)
- Email (required)
- Message (required)

**Contact Info**:
- Email: hello@appdost.com
- Phone: +1 (555) 123-4567
- Location: San Francisco, CA

---

### 🔗 Footer Component
**File**: `src/components/Footer.jsx`

**Features**:
- 4-column grid (responsive)
- Social media icons (5)
- Quick links
- Services list
- Newsletter signup

**Sections**:
1. Company Info + Social
2. Quick Links (4)
3. Services (6)
4. Newsletter Signup

**Social Platforms**:
- Facebook, Twitter, Instagram, LinkedIn, GitHub

---

## Page Components

### 🏠 Home Page
**File**: `src/pages/Home.jsx`

**Structure**:
```jsx
<Navbar />
<Hero />
<About />
<Services />
<Portfolio />
<Testimonials />
<Contact />
<Footer />
```

**Purpose**: Complete landing page with all sections

---

### 📖 About Page
**File**: `src/pages/AboutPage.jsx`

**Sections**:
1. Hero Section
2. Mission/Vision/Values (3 cards)
3. Company Story
4. Team Members (4 members)

**Team**:
- Alex Thompson (CEO)
- Sarah Martinez (CTO)
- James Wilson (Lead Designer)
- Emily Chen (Head of Development)

---

### 🔧 Services Page
**File**: `src/pages/ServicesPage.jsx`

**Sections**:
1. Hero Section
2. Detailed Services (6, alternating layout)
3. CTA Section

**Features List**: Each service shows 6 features

---

### 📞 Contact Page
**File**: `src/pages/ContactPage.jsx`

**Sections**:
1. Hero Section
2. Contact Cards (3)
3. Contact Form (left 2/3)
4. Info Sidebar (right 1/3)

**Additional Info**:
- Business Hours
- Response Time
- Languages

---

## Global Components

### 📊 Scroll Progress Bar
**Location**: `App.jsx`

**Features**:
- Fixed at top
- Gradient colored
- Scales with scroll
- Updates in real-time

---

### ⏳ Page Loader
**Location**: `App.jsx`

**Features**:
- Full-screen overlay
- Brand animation
- Progress bar
- Auto-hide after 1.5s

---

## State Management

### Component State (useState)
- Navbar: Scroll state, menu toggle
- Portfolio: Selected project
- Testimonials: Current slide index
- Contact: Form data
- App: Loader visibility

### No Global State Management
- Props drilling not needed
- Each component self-contained
- React Router for navigation state

---

## Animation Patterns

### Common Patterns

**Fade Up**:
```jsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
```

**Slide In**:
```jsx
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
```

**Scale In**:
```jsx
initial={{ scale: 0 }}
animate={{ scale: 1 }}
```

**Stagger Children**:
```jsx
<motion.div variants={containerVariants}>
  {items.map(item => (
    <motion.div variants={itemVariants}>
  ))}
</motion.div>
```

---

## Styling Patterns

### Glass Effect
```jsx
className="glass"
// = bg-white/10 backdrop-blur-lg border border-white/20
```

### Gradient Text
```jsx
className="text-gradient"
// = bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent
```

### Hover Glow
```jsx
className="hover-glow"
// = Custom glow effect on hover
```

---

## File Dependencies

```
main.jsx
  └── App.jsx
      ├── index.css (Tailwind)
      ├── React Router
      ├── Framer Motion
      │
      └── Pages
          ├── Home.jsx
          │   └── All Components
          ├── AboutPage.jsx
          │   ├── Navbar
          │   └── Footer
          ├── ServicesPage.jsx
          │   ├── Navbar
          │   └── Footer
          └── ContactPage.jsx
              ├── Navbar
              └── Footer
```

---

## Icon Usage

**Lucide React Icons Used**:
- Navigation: Menu, X, ArrowRight
- Services: Code, Smartphone, Palette, TrendingUp, Cloud, Shield
- About: Award, Users, Briefcase, Target
- Contact: Mail, Phone, MapPin, Send, Clock, MessageCircle, Globe
- Social: Facebook, Twitter, Instagram, Linkedin, Github
- Misc: Sparkles, Heart, Check, Quote, ChevronLeft, ChevronRight, ExternalLink, Eye

---

This map provides a complete overview of how all components fit together!
