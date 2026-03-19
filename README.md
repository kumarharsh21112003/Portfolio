# Kumar Harsh - Personal Portfolio

A modern, single-page personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Features

- **Animated Preloader** with custom logo animation
- **Glassmorphism UI** with smooth animations
- **Role Rotation** animation in hero section (Cloud Engineer, ML Engineer, Full Stack Developer)
- **Tabbed Work Section** showcasing Development projects
- **Scroll Reveal Animations** throughout all sections
- **Tubelight Navigation** with glowing active indicator
- **Responsive Design** optimized for all devices
- **Contact Form** with email integration
- **Dark Theme** with vibrant crimson accent colors

## 🎯 Sections

1. **Hero** - Introduction with role rotation and social links
2. **Skills** - Development skills with categorized tabs
3. **Work** - Project showcase with images
4. **Experience** - AWS Academy & Google Developer internships
5. **Education** - KIIT University and academic background
6. **Certifications** - Professional certifications and achievements
7. **Contact** - Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Color Palette

- **Background**: Dark gradient (#0a0a0a to purple)
- **Primary Accent**: Crimson (`#cc1a3e`)
- **Glass Effects**: White with opacity

## 📝 Customization

### Update Personal Information

Edit the constants in `/lib/constants.ts`:

- Social links (Phone, LinkedIn)
- Projects
- Skills
- Work experience
- Education
- Certifications

### Add Your Photo

1. Add your image to `/public/assets/images/`
2. Update the path in relevant components

### Update Resume

Replace `/public/assets/kumarharshresume.pdf` with your resume file.

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons, Lucide React
- **Scroll Detection**: react-intersection-observer

## 📦 Project Structure

```
Portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Preloader.tsx
│   ├── NavbarWrapper.tsx
│   ├── Hero.tsx
│   ├── Education.tsx
│   ├── Work.tsx
│   ├── ProjectCard.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   └── ui/
│       ├── TubelightNavbar.tsx
│       ├── ProfileCard.tsx
│       └── rainbow-button.tsx
├── hooks/
│   └── useScrollReveal.ts
├── lib/
│   ├── constants.ts
│   ├── downloadResume.ts
│   └── utils.ts
├── types/
│   └── index.ts
└── public/
    └── assets/
        ├── images/
        └── kumarharshresume.pdf
```

## 👨‍💻 About Me

Computer Science Engineering student at KIIT University specializing in Cloud Computing, Machine Learning, and Full Stack Development. Completed internships at AWS Academy and Google Developer Programs.

## 📄 License

© 2025 Kumar Harsh. All rights reserved.

## 🤝 Contact

- **Email**: kumarharsh4325@gmail.com
- **LinkedIn**: [Kumar Harsh](https://www.linkedin.com/in/kumar-harsh-99b4982b1/)
