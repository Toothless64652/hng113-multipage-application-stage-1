// Form validation and accessibility enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize timestamp display (from Stage 0)
    initializeTimestamp();
    
    // Initialize form validation if contact form exists
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        initializeFormValidation();
    }
    
    // Initialize keyboard navigation enhancements
    initializeKeyboardNavigation();
    
    // Initialize focus management
    initializeFocusManagement();
});

function initializeTimestamp() {
    const timestampElement = document.getElementById('current-time');
    if (timestampElement) {
        // Display current timestamp in milliseconds (like Stage 0)
        const now = new Date();
        const timestamp = now.getTime();
        timestampElement.textContent = timestamp;
        
        // Update timestamp every second
        setInterval(() => {
            const now = new Date();
            const timestamp = now.getTime();
            timestampElement.textContent = timestamp;
        }, 1000);
    }
}

function initializeFormValidation() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, textarea');
    const submitButton = form.querySelector('[data-testid="test-contact-submit"]');
    const successMessage = document.getElementById('success-message');
    
    // Real-time validation
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearError);
    });
    
    // Form submission
    form.addEventListener('submit', handleFormSubmission);
    
    function validateField(event) {
        const field = event.target;
        const fieldName = field.name;
        const value = field.value.trim();
        
        clearError(event);
        
        switch (fieldName) {
            case 'fullName':
                if (!value) {
                    showError(field, 'Full name is required');
                } else if (value.length < 2) {
                    showError(field, 'Full name must be at least 2 characters');
                }
                break;
                
            case 'email':
                if (!value) {
                    showError(field, 'Email address is required');
                } else if (!isValidEmail(value)) {
                    showError(field, 'Please enter a valid email address');
                }
                break;
                
            case 'subject':
                if (!value) {
                    showError(field, 'Subject is required');
                } else if (value.length < 3) {
                    showError(field, 'Subject must be at least 3 characters');
                }
                break;
                
            case 'message':
                if (!value) {
                    showError(field, 'Message is required');
                } else if (value.length < 10) {
                    showError(field, 'Message must be at least 10 characters');
                }
                break;
        }
    }
    
    function clearError(event) {
        const field = event.target;
        const errorElement = document.getElementById(field.name + '-error');
        if (errorElement) {
            errorElement.classList.remove('show');
            errorElement.textContent = '';
            field.setAttribute('aria-invalid', 'false');
        }
    }
    
    function showError(field, message) {
        const errorElement = document.getElementById(field.name + '-error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
            field.setAttribute('aria-invalid', 'true');
        }
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function handleFormSubmission(event) {
        event.preventDefault();
        
        // Validate all fields
        let isValid = true;
        inputs.forEach(input => {
            const event = { target: input };
            validateField(event);
            
            const errorElement = document.getElementById(input.name + '-error');
            if (errorElement && errorElement.classList.contains('show')) {
                isValid = false;
            }
        });
        
        if (isValid) {
            // Show success message
            successMessage.style.display = 'block';
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Reset form
            form.reset();
            
            // Focus on success message for screen readers
            successMessage.focus();
            
            // Disable submit button temporarily
            submitButton.disabled = true;
            submitButton.textContent = 'Message Sent!';
            
            // Re-enable after 3 seconds
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
                successMessage.style.display = 'none';
            }, 3000);
        } else {
            // Focus on first error field
            const firstError = form.querySelector('[aria-invalid="true"]');
            if (firstError) {
                firstError.focus();
            }
        }
    }
}

function initializeKeyboardNavigation() {
    // Skip link functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID if it doesn't exist
    const main = document.querySelector('main');
    if (main && !main.id) {
        main.id = 'main-content';
    }
    
    // Enhanced keyboard navigation for navigation menu
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link, index) => {
        link.addEventListener('keydown', function(event) {
            if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                event.preventDefault();
                const nextIndex = (index + 1) % navLinks.length;
                navLinks[nextIndex].focus();
            } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                event.preventDefault();
                const prevIndex = index === 0 ? navLinks.length - 1 : index - 1;
                navLinks[prevIndex].focus();
            }
        });
    });
    
    // Trap focus in modals or forms when needed
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];
        
        element.addEventListener('keydown', function(event) {
            if (event.key === 'Tab') {
                if (event.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        event.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        event.preventDefault();
                    }
                }
            }
        });
    }
    
    // Apply focus trap to contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        trapFocus(contactForm);
    }
}

function initializeFocusManagement() {
    // Announce page changes to screen readers
    const pageTitle = document.querySelector('title');
    if (pageTitle) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.style.position = 'absolute';
        announcement.style.left = '-10000px';
        announcement.style.width = '1px';
        announcement.style.height = '1px';
        announcement.style.overflow = 'hidden';
        document.body.appendChild(announcement);
        
        // Announce page load
        setTimeout(() => {
            announcement.textContent = `Page loaded: ${pageTitle.textContent}`;
        }, 100);
    }
    
    // Enhanced focus indicators
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Utility function to announce messages to screen readers
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Add CSS for screen reader only content
const srOnlyCSS = `
.sr-only {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
}

.keyboard-navigation *:focus {
    outline: 2px solid #007bff !important;
    outline-offset: 2px !important;
}
`;

// Inject screen reader CSS
const style = document.createElement('style');
style.textContent = srOnlyCSS;
document.head.appendChild(style);
