// Simple Website - JavaScript

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// CTA Button click handler
document.querySelectorAll('.cta-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    console.log('CTA Button clicked!');
    // Add your action here
  });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    console.log('Form submitted:', {
      name: this.querySelector('input[type="text"]').value,
      email: this.querySelector('input[type="email"]').value,
      message: this.querySelector('textarea').value
    });

    // Show success message
    alert('Thank you for your message!');
    this.reset();
  });
}

// Scroll animation for feature cards
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

document.querySelectorAll('.feature-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s, transform 0.5s';
  observer.observe(card);
});

console.log('SimpleWeb initialized');
