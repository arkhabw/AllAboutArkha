# ✦ Arkha — Personal Developer Portfolio

A premium, modern, minimalist developer portfolio website designed with a dark monochrome aesthetic. Built with Next.js (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

## ✨ Features

- **🎭 Motion & Animations**: Fluid page transitions, scroll-triggered reveals, and micro-interactions powered by Framer Motion.
- **🎨 Dark Minimalist Theme**: Curated dark monochrome colors (zinc values) with elegant glowing accents and glassmorphic card elements.
- **📱 Fully Responsive**: Thoughtfully designed layouts that look beautiful on mobile, tablet, and desktop screens.
- **🧭 Dynamic Interactive Navigation**: Sticky blurred navbar with custom scroll-spy highlight effect and mobile drawer menu.
- **🛠️ Tech Stack Showcase**: Grid of skills categorized by domain (Frontend, Backend, Tools) with hover glow effects.
- **📁 Projects Grid**: Premium cards featuring project descriptions, stack tags, source code, and live links.
- **⏳ Experience Timeline**: Responsive alternating vertical timeline showing professional history.
- **✉️ Contact Form & Links**: Easy access to social profiles and standard email action buttons.
- **🚀 Production-Ready**: Clean folder structure, SEO tags, metadata optimization, and fully compiled Next.js build.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: [Radix UI (Slot)](https://www.radix-ui.com/)

---

## 📂 Project Structure

```text
├── public/                 # Static assets (resume, logos, icons)
├── src/
│   ├── app/                # Next.js App Router (pages & global styles)
│   │   ├── layout.tsx      # Root layout (Inter font, SEO metadata, providers)
│   │   ├── page.tsx        # Main application page
│   │   └── globals.css     # Global styles & Tailwind CSS custom tokens
│   ├── components/         # Reusable React components
│   │   ├── ui/             # Core UI primitives (Button, Card, Badge)
│   │   ├── navbar.tsx      # Interactive header navigation
│   │   ├── hero.tsx        # Animated intro section with custom canvas/gradient
│   │   ├── about.tsx       # Bio & personal intro with scroll animation
│   │   ├── tech-stack.tsx  # Grouped skill badges with interactive states
│   │   ├── projects.tsx    # Card-based portfolio project list
│   │   ├── experience.tsx  # Vertical timeline display
│   │   ├── contact.tsx     # Links and email contact module
│   │   ├── footer.tsx      # Simple clean footer with copyright
│   │   ├── icons.tsx       # Custom SVG icons for Github, LinkedIn
│   │   ├── scroll-reveal.tsx # Reusable Framer Motion intersection wrapper
│   │   └── section-heading.tsx # Uniform typography styling for sections
│   └── lib/                # Utility modules & static data
│       ├── data.ts         # Centralized portfolio content database
│       └── utils.ts        # Helper functions (Tailwind merge utilities)
├── package.json            # Scripts & project dependencies
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.x or later) and [npm](https://www.npmjs.com/) / [yarn] / [pnpm] installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/All_About_Arkha.git
   cd All_About_Arkha
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🔧 Build & Deployment

To generate an optimized production bundle:

```bash
npm run build
```

This creates a highly-optimized static and server-rendered export in the `.next` directory, ready to deploy to Vercel, Netlify, or any static hosting service.

## 📄 License

This project is licensed under the MIT License. Feel free to use it to inspire or build your own portfolio!
