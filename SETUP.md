# Setup Instructions

## Step 1: Install Dependencies

\`\`\`bash
npm install
\`\`\`

## Step 2: Set Up Environment Variables

Create a `.env` file in the root directory:

\`\`\`env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_SITE_URL=https://tarunkumar.dev
\`\`\`

**Note:** To get EmailJS credentials:
1. Sign up at https://www.emailjs.com/
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Public Key from Account settings

## Step 3: Verify Assets

Make sure these files exist in the `public` folder (or root for images):
- `/img/dev2.jpeg` - Profile image
- `/img/p1.png`, `/img/p2.png`, `/img/p3.png` - Project images
- `/Resume.pdf` - Your resume

## Step 4: Run Development Server

\`\`\`bash
npm run dev
\`\`\`

The app will open at http://localhost:3000

## Step 5: Build for Production

\`\`\`bash
npm run build
\`\`\`

The production build will be in the `dist` folder.

## Step 6: Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## Project Structure

\`\`\`
Portfolio/
├── public/
│   ├── img/          # Images (dev2.jpeg, p1.png, etc.)
│   └── Resume.pdf    # Resume file
├── src/
│   ├── components/
│   │   ├── common/   # Button, Loader, ScrollToTop
│   │   ├── layout/   # Header, Footer
│   │   └── sections/ # Hero, About, Projects, Contact
│   ├── data/         # personal.js, skills.js, projects.js
│   ├── hooks/        # useScrollPosition, useMediaQuery
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css     # Tailwind imports
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
\`\`\`

## Customization

### Update Personal Information
Edit `src/data/personal.js`

### Update Skills
Edit `src/data/skills.js`

### Update Projects
Edit `src/data/projects.js`

### Change Colors
Edit `tailwind.config.js` - modify the color values in the `theme.extend.colors` section

### Change Fonts
Edit `tailwind.config.js` - modify the `fontFamily` section

## Troubleshooting

### Tailwind classes not working?
- Make sure Tailwind is properly installed: `npm install -D tailwindcss postcss autoprefixer`
- Check that `index.css` has the Tailwind directives
- Restart the dev server

### Images not loading?
- Make sure images are in the `public/img/` folder
- Use paths like `/img/dev2.jpeg` (starting with `/`)

### EmailJS not working?
- Check that all environment variables are set correctly
- Verify EmailJS service and template IDs are correct
- Check browser console for errors

