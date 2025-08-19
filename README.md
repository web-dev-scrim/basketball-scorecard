# Basketball Scorecard

A modern basketball scorecard application built with HTML, CSS, JavaScript, and Vite for fast development and deployment.

## Features

- Interactive score tracking for HOME and GUEST teams
- Add 1, 2, or 3 points with dedicated buttons
- Reset functionality to clear both scores
- Responsive design with a clean, professional look
- Rounded corners and smooth hover effects

## Development

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173/`

3. **Build for production:**
   ```bash
   npm run build
   ```
   The built files will be in the `dist/` directory.

4. **Preview the production build:**
   ```bash
   npm run preview
   ```

## Deployment

This project is set up with automatic deployment to Netlify via GitHub Actions.

### Setup Netlify Deployment

1. **Create a Netlify account** and create a new site
2. **Get your Netlify credentials:**
   - Site ID: Found in Site settings → General → Site details
   - Auth Token: User settings → Applications → Personal access tokens

3. **Add GitHub Secrets:**
   Go to your GitHub repository → Settings → Secrets and variables → Actions, and add:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
   - `NETLIFY_SITE_ID`: Your Netlify site ID

4. **Push to main branch:**
   The deployment will trigger automatically on every push to the main branch.

## Project Structure

```
basketball-scorecard/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD pipeline
├── dist/                       # Built files (auto-generated)
├── index.html                  # Main HTML file
├── script.js                   # JavaScript functionality
├── styles.css                  # CSS styling
├── package.json                # Node.js dependencies and scripts
├── vite.config.js              # Vite configuration
└── .gitignore                  # Git ignore rules
```

## Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Interactive functionality
- **Vite** - Build tool and development server
- **Netlify** - Hosting and deployment
- **GitHub Actions** - CI/CD pipeline

## License

This project is open source and available under the [MIT License](LICENSE).
