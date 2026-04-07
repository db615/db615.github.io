// Testimonials Carousel Navigation
const prevBtns = document.querySelectorAll('.prev-arrow');
const nextBtns = document.querySelectorAll('.next-arrow');
const testimonialCards = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    testimonialCards[index].classList.add('active');
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

prevBtns.forEach(btn => btn.addEventListener('click', prevTestimonial));
nextBtns.forEach(btn => btn.addEventListener('click', nextTestimonial));

// Auto-rotate testimonials every 5 seconds
setInterval(nextTestimonial, 5000);

function scrollToContact() {
    const contactSection = document.querySelector('.contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const services = Array.from(document.querySelectorAll('input[name="service"]:checked'))
        .map(checkbox => checkbox.value);
    const project = document.getElementById('project').value;
    
    // Validate at least one service is selected
    if (services.length === 0) {
        alert('Please select at least one service');
        return;
    }
    
    // Create message
    const message = `
    New Contact Form Submission:
    
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Services: ${services.join(', ')}
    Project: ${project}
    `;
    
    // Log to console (you can integrate with a backend service)
    console.log(message);
    
    // Show success message
    alert('Thank you for your inquiry! We will contact you soon.');
    
    // Reset form
    document.querySelector('.contact-form').reset();
}

// Scroll reveal animation
const revealElements = document.querySelectorAll('.scroll-reveal');

function revealOnScroll() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Call once on load

function handleNewsletterSubmit(e) {
    e.preventDefault();
    alert('Thank you for subscribing! Check your email for confirmation.');
    e.target.reset();
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Toggle nav link between Services and Home
const navToggleLink = document.getElementById('nav-toggle-link');
const heroSection = document.getElementById('hero');
const servicesSection = document.getElementById('services');

window.addEventListener('scroll', function() {
    const heroTop = heroSection.getBoundingClientRect().top;
    const servicesTop = servicesSection.getBoundingClientRect().top;
    const windowCenter = window.innerHeight / 2;

    if (servicesTop < windowCenter) {
        navToggleLink.textContent = 'Home';
        navToggleLink.href = '#hero';
    } else {
        navToggleLink.textContent = 'Services';
        navToggleLink.href = '#services';
    }
});
