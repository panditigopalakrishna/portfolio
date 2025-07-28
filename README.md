#RevanthKumar Reedy - Portfolio Website

A modern, responsive portfolio website showcasing my full-stack development experience with a tech-themed design and blue-greenish color palette.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Tech-Themed Animations**: Smooth transitions, hover effects, and floating elements
- **Modern UI/UX**: Clean design with blue-greenish color scheme
- **Interactive Sections**: Skills with animated progress bars, project showcase, experience timeline
- **Contact Form**: Direct email integration
- **Resume Download**: PDF download functionality

## 🛠️ Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Styling**: CSS3 with custom animations
- **Icons**: Font Awesome, Lucide React
- **Fonts**: Inter, Roboto, Poppins

## 📁 Project Structure

```
portfolio/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/           # Reusable UI components
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── EducationSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── SkillsSection.tsx
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   └── index.html
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
├── shared/
│   └── schema.ts
├── assets/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5000`

### Building for Production

```bash
npm run build
```

## 📧 Contact

- **Email**: revanthgosula5@gmail.com
- **LinkedIn**: [Revathkumar Reddy](https://www.linkedin.com/in/gosularevanth/)
- **Location**: Cincinnati, OH

## Client-Side Only Version

This project is now a purely client-side React + TypeScript application. There is no server-side code or API. All assets, including the resume PDF, are served statically.

### Serving the Resume
- The resume PDF is located at `client/src/assets/Revanth_Resume_DataEng.pdf`.
- The download button in the app will open this file directly.
- Make sure to keep the PDF in the `client/src/assets` folder.

### Running the App
- Use `npm run dev`