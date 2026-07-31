// ============ NAVBAR SCROLL EFFECT ============
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============ MOBILE NAV TOGGLE ============
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// ============ CLOSE NAV ON LINK CLICK (Mobile) ============
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ============ SMOOTH SCROLL FOR ANCHOR LINKS ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============ INTERSECTION OBSERVER (Trigger Animations) ============
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
        }
    });
}, observerOptions);

// Observe all animated elements (they start with opacity:0 in CSS)
document.querySelectorAll('.slide-up, .slide-up-delay, .slide-up-delay2, .zoom-in, .zoom-in-delay, .zoom-in-delay2, .scale-in, .scale-in-delay, .scale-in-delay2').forEach(el => {
    observer.observe(el);
});

// ============ BACK TO TOP BUTTON (Optional) ============
// Create and add back-to-top button if needed
const backToTop = document.createElement('button');
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: var(--accent);
    color: var(--dark);
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.4rem;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(244, 169, 0, 0.4);
    transition: all 0.3s ease;
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
`;

document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
        backToTop.style.transform = 'translateY(0)';
    } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
        backToTop.style.transform = 'translateY(20px)';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============ CURRENT YEAR FOR FOOTER ============
document.querySelector('.footer-bottom p').innerHTML = 
    `&copy; ${new Date().getFullYear()} Kelurahan Pasar Melintang. Dibuat untuk KKN.`;

console.log('🌿 Website Kelurahan Pasar Melintang siap!');