# HNG Stage 1 - Multi-Page Application

A responsive, accessible multi-page web application built for HNG Stage 1, featuring a Contact Us page with form validation and an About Me page with reflective content.

## 🚀 Features

### Contact Us Page
- **Form Validation**: Real-time validation with proper error messages
- **Required Fields**: Full name, email, subject, and message
- **Email Validation**: Proper email format validation
- **Message Length**: Minimum 10 characters required
- **Accessibility**: Full ARIA support, keyboard navigation, screen reader compatibility
- **Success Feedback**: Confirmation message after successful submission

### About Me Page
- **Reflective Content**: Bio, goals, areas of improvement, and future notes
- **Semantic Structure**: Proper HTML5 semantic elements
- **Organized Sections**: Clear headings and well-structured content
- **Personal Touch**: Authentic reflections on the HNG journey

### General Features
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Accessibility**: WCAG 2.1 AA compliant with proper focus management
- **Keyboard Navigation**: Full keyboard accessibility with skip links
- **Screen Reader Support**: ARIA labels, live regions, and semantic markup
- **Modern CSS**: Flexbox, Grid, and CSS custom properties
- **Progressive Enhancement**: Works without JavaScript, enhanced with it

## 📁 Project Structure

```
HNG113-STAGE-1/
├── index.html          # Home page
├── contact.html        # Contact Us page with form
├── about.html          # About Me page
├── styles.css          # Responsive CSS with accessibility features
├── script.js           # Form validation and accessibility enhancements
└── README.md           # This file
```

## 🎯 Data Test IDs

### Contact Us Page
- `test-contact-name` - Full name input field
- `test-contact-email` - Email input field
- `test-contact-subject` - Subject input field
- `test-contact-message` - Message textarea
- `test-contact-submit` - Submit button
- `test-contact-error-<field>` - Error messages for each field
- `test-contact-success` - Success message

### About Me Page
- `test-about-page` - Main container
- `test-about-bio` - Bio section
- `test-about-goals` - Goals section
- `test-about-confidence` - Areas of low confidence section
- `test-about-future-note` - Note to future self section
- `test-about-extra` - Extra thoughts section

## 🛠️ Setup and Installation

### Local Development

1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **Navigate** between pages using the navigation menu

### Using a Local Server (Recommended)

For the best development experience, serve the files through a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🌐 Deployment

### Netlify (Recommended)

1. **Create a Netlify account** at [netlify.com](https://netlify.com)
2. **Drag and drop** your project folder to the Netlify dashboard
3. **Get your live URL** instantly

### GitHub Pages

1. **Create a GitHub repository**
2. **Upload** your project files
3. **Go to Settings** → **Pages**
4. **Select source** as "Deploy from a branch"
5. **Choose main branch** and save
6. **Access your site** at `https://yourusername.github.io/repository-name`

### Vercel

1. **Create a Vercel account** at [vercel.com](https://vercel.com)
2. **Import your project** from GitHub or upload files
3. **Deploy** with one click

## ♿ Accessibility Features

### Keyboard Navigation
- **Tab navigation** through all interactive elements
- **Skip links** to jump to main content
- **Arrow key navigation** in navigation menu
- **Focus trapping** in forms
- **Visible focus indicators**

### Screen Reader Support
- **Semantic HTML** with proper headings hierarchy
- **ARIA labels** and descriptions
- **Live regions** for dynamic content updates
- **Alt text** for images (when added)
- **Form labels** properly associated with inputs

### Visual Accessibility
- **High contrast** support
- **Reduced motion** support for users with vestibular disorders
- **Scalable text** that works with browser zoom
- **Color is not the only** way to convey information

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

### Mobile-First Approach
- **Base styles** for mobile devices
- **Progressive enhancement** for larger screens
- **Touch-friendly** interface elements
- **Optimized typography** for different screen sizes

## 🧪 Testing

### Manual Testing Checklist

#### Contact Form
- [ ] All fields are required
- [ ] Email validation works correctly
- [ ] Message minimum length validation
- [ ] Error messages appear and disappear appropriately
- [ ] Success message shows after valid submission
- [ ] Form resets after successful submission

#### Accessibility
- [ ] Tab navigation works throughout the site
- [ ] Screen reader announces content properly
- [ ] Focus indicators are visible
- [ ] Skip links function correctly
- [ ] Form validation is announced to screen readers

#### Responsiveness
- [ ] Layout adapts to different screen sizes
- [ ] Text remains readable at all sizes
- [ ] Navigation works on mobile devices
- [ ] Forms are usable on touch devices

### Browser Testing
- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)

## 🔧 Customization

### Adding New Pages
1. **Create** a new HTML file
2. **Add** navigation link in all pages
3. **Follow** the same structure and accessibility patterns
4. **Update** the navigation active states

### Styling Modifications
- **CSS Custom Properties** are used for easy theming
- **Modular CSS** structure for easy maintenance
- **Responsive mixins** for consistent breakpoints

### Form Enhancements
- **Add new fields** following the same validation pattern
- **Custom validation rules** can be added to the JavaScript
- **Error message styling** can be customized in CSS

## 📚 Learning Resources

### Accessibility
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Resources](https://webaim.org/)

### Form Validation
- [MDN Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [HTML5 Form Validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation)

### Responsive Design
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)

## 🤝 Contributing

This is a learning project for HNG Stage 1. If you find any issues or have suggestions for improvement:

1. **Document** the issue clearly
2. **Provide** steps to reproduce
3. **Suggest** potential solutions
4. **Test** any changes thoroughly

## 📄 License

This project is created for educational purposes as part of the HNG internship program.

## 🎉 Acknowledgments

- **HNG Team** for providing this learning opportunity
- **MDN Web Docs** for comprehensive web development resources
- **WebAIM** for accessibility guidance
- **CSS-Tricks** for responsive design techniques

---

**Built with ❤️ for HNG Stage 1**

*Focus on accessibility, responsiveness, and user experience*
