# Public Folder

This folder contains static assets that will be served at the root URL.

## Required Files

Place the following files here:

- `img/dev2.jpeg` - Your profile image
- `img/p1.png` - Project 1 image
- `img/p2.png` - Project 2 image  
- `img/p3.png` - Project 3 image
- `Resume.pdf` - Your resume PDF

## File Structure

\`\`\`
public/
├── img/
│   ├── dev2.jpeg
│   ├── p1.png
│   ├── p2.png
│   └── p3.png
└── Resume.pdf
\`\`\`

**Note:** If your images are currently in the root `img/` folder, you can either:
1. Move them to `public/img/` folder, OR
2. Keep them in root and update image paths in components to use `../img/` or import them

For Vite, it's recommended to use the `public/` folder for static assets.

