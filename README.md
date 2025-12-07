# Q4 2025 Earnings Report - RevealJS Presentation

Interactive earnings presentation created with RevealJS for financial stakeholders.

## Features

- 📊 **Interactive Financial Metrics**: Animated revenue, profit, and performance indicators
- 📝 **Markdown Support**: Easy-to-edit content using Markdown syntax
- 💻 **Code Examples**: Syntax-highlighted Python, SQL, and JavaScript code
- 🔢 **Mathematical Formulas**: LaTeX/KaTeX support for financial equations
- 🎯 **Fragment Animations**: Progressive disclosure of information
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 🎤 **Speaker Notes**: Detailed notes for presenters (Press 'S' to view)
- 🖼️ **Multiple Themes**: Customizable appearance

## Presentation Contents

1. **Title Slide** - Q4 2025 Overview
2. **Executive Summary** - Key highlights (Markdown)
3. **Financial Metrics** - Animated KPIs with fragments
4. **Revenue Breakdown** - Segment analysis
5. **Risk-Adjusted Returns** - Sharpe Ratio formula
6. **Capital Adequacy** - Basel III Tier 1 calculation
7. **Data Analysis Pipeline** - Python code example
8. **SQL Queries** - Database query examples
9. **JavaScript Dashboard** - Interactive code
10. **Risk Assessment** - Stacked animations
11. **Technology Investment** - Grid layout with fragments
12. **Market Outlook** - 2026 guidance (Markdown table)
13. **CAGR Calculation** - Investment growth formula
14. **Q&A Slide** - Contact information

## Quick Start

### View Locally

```bash
# Install dependencies
npm install

# Start a local server (choose one):
npx http-server -p 8000
# or
python -m http.server 8000

# Open in browser
http://localhost:8000
```

### Keyboard Shortcuts

- `F` - Fullscreen mode
- `S` - Speaker notes view
- `O` - Overview mode (see all slides)
- `B` - Pause (black screen)
- `.` - Pause (blank screen)
- `ESC` - Exit overview mode
- `?` - Show help menu
- `Arrow Keys` - Navigate slides

## Requirements

- Node.js (for npm packages)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- reveal.js 4.5.0 or higher

## Customization

### Edit Content

Edit `index.html` to modify slide content. Sections are wrapped in `<section>` tags:

```html
<section>
  <h2>Your Title</h2>
  <p>Your content here</p>
</section>
```

### Customize Styling

Edit `css/custom.css` to change colors, fonts, and layouts:

```css
:root {
    --primary-color: #3b82f6;
    --secondary-color: #1e3a8a;
}
```

### Add Interactivity

Edit `js/presentation.js` to add custom JavaScript functionality.

## Deployment

### GitHub Pages

1. Push to GitHub repository
2. Go to Settings > Pages
3. Select branch and folder
4. Save and wait for deployment

### Export to PDF

```bash
# Using decktape
npm install -g decktape
decktape reveal http://localhost:8000 earnings-q4-2025.pdf

# Or use browser print (Ctrl+P / Cmd+P)
# Add ?print-pdf to URL: http://localhost:8000?print-pdf
```

## Project Structure

```
.
├── index.html              # Main presentation file
├── css/
│   └── custom.css         # Custom styling
├── js/
│   └── presentation.js    # Custom JavaScript
├── node_modules/          # Dependencies
│   └── reveal.js/         # RevealJS framework
├── package.json           # Node.js configuration
└── README.md             # This file
```

## Technical Details

- **Framework**: RevealJS 4.5.0
- **Plugins**: Markdown, Highlight, Notes, Math (KaTeX)
- **Languages**: HTML5, CSS3, JavaScript (ES6+)
- **Math Rendering**: KaTeX/MathJax
- **Code Highlighting**: highlight.js with Monokai theme

## Contact

Financial Analytics Team  
Email: [23f2005347@ds.study.iitm.ac.in](mailto:23f2005347@ds.study.iitm.ac.in)

## License

This presentation is for demonstration purposes.

## Resources

- [RevealJS Documentation](https://revealjs.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [KaTeX Documentation](https://katex.org/)
