// Living Museum Madrid - Interactive Script

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const sections = document.querySelectorAll('.section, .hero-section');
    const navDots = document.querySelectorAll('.nav-dot');
    
    // Smooth scroll behavior
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Update active navigation dot based on scroll position
    function updateActiveNavDot() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('href') === `#${current}`) {
                dot.classList.add('active');
            }
        });
    }
    
    // Scroll event listener
    window.addEventListener('scroll', updateActiveNavDot);
    
    // Initial call to set active dot
    updateActiveNavDot();
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const hamburgerLines = document.querySelectorAll('.hamburger');
    let isMenuOpen = false;
    
    menuToggle.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            hamburgerLines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            hamburgerLines[1].style.opacity = '0';
            hamburgerLines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            hamburgerLines[0].style.transform = 'none';
            hamburgerLines[1].style.opacity = '1';
            hamburgerLines[2].style.transform = 'none';
        }
    });
    
    // Contact button functionality
    const contactBtn = document.querySelector('.contact-btn');
    
    contactBtn.addEventListener('click', function() {
        // Simple contact alert (in a real implementation, this would open a modal or form)
        alert('¡Gracias por tu interés! En una implementación real, esto abriría un formulario de contacto.');
    });
    
    // Cookie consent functionality
    const cookieConsentBtn = document.querySelector('.cookie-consent');
    
    cookieConsentBtn.addEventListener('click', function() {
        // Simple cookie consent (in a real implementation, this would show a proper consent modal)
        if (confirm('¿Aceptas el uso de cookies para mejorar tu experiencia en nuestro sitio web?')) {
            this.style.display = 'none';
            localStorage.setItem('cookieConsent', 'accepted');
        }
    });
    
    // Hide cookie consent if already accepted
    if (localStorage.getItem('cookieConsent') === 'accepted') {
        cookieConsentBtn.style.display = 'none';
    }
    
    // Language selector functionality
    const langLinks = document.querySelectorAll('.lang-link');
    
    langLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all language links
            langLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // In a real implementation, this would change the language
            console.log('Language changed to:', this.textContent);
        });
    });
    
    // Parallax effect for sections
    function parallaxEffect() {
        const scrolled = window.pageYOffset;
        
        sections.forEach((section, index) => {
            const rate = scrolled * -0.5;
            section.style.transform = `translateY(${rate * 0.1}px)`;
        });
    }
    
    // Add parallax effect on scroll (optional, can be commented out if too resource intensive)
    // window.addEventListener('scroll', parallaxEffect);
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all section content for animations
    const sectionContents = document.querySelectorAll('.section-content');
    sectionContents.forEach(content => {
        content.style.opacity = '0';
        content.style.transform = 'translateY(30px)';
        content.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(content);
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            e.preventDefault();
            scrollToNextSection();
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            scrollToPreviousSection();
        }
    });
    
    function scrollToNextSection() {
        const currentScroll = window.scrollY;
        let nextSection = null;
        
        sections.forEach(section => {
            if (section.offsetTop > currentScroll + 100 && !nextSection) {
                nextSection = section;
            }
        });
        
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    function scrollToPreviousSection() {
        const currentScroll = window.scrollY;
        let previousSection = null;
        
        [...sections].reverse().forEach(section => {
            if (section.offsetTop < currentScroll - 100 && !previousSection) {
                previousSection = section;
            }
        });
        
        if (previousSection) {
            previousSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate hero section on load
        const heroContent = document.querySelector('.hero-section .section-content');
        if (heroContent) {
            heroContent.style.animation = 'fadeInUp 1s ease-out';
        }
    });
    
    // Performance optimization: throttle scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    // Apply throttling to scroll events
    window.addEventListener('scroll', throttle(updateActiveNavDot, 100));
});

// Additional utility functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Handle window resize events
window.addEventListener('resize', debounce(function() {
    // Recalculate positions if needed
    updateActiveNavDot();
}, 250));
