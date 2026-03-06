// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    }
});

// Form handling - Email + LocalStorage (No backend needed)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

// Cafe owner's email - CHANGE THIS TO YOUR EMAIL
const OWNER_EMAIL = "samarth1561@gmail.com";

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create email body
        const emailBody = `New Message from Website\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Phone: ${phone}\n` +
            `Subject: ${subject}\n\n` +
            `Message:\n${message}`;
        
        // Encode for mailto link
        const encodedBody = encodeURIComponent(emailBody);
        const encodedSubject = encodeURIComponent(`Samarth's Cafe: ${subject}`);
        
        // Open email client
        window.location.href = `mailto:${OWNER_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;
        
        // Save to localStorage as backup
        const submission = {
            id: Date.now(),
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message,
            date: new Date().toISOString()
        };
        
        // Get existing submissions
        let submissions = JSON.parse(localStorage.getItem('cafeMessages') || '[]');
        submissions.push(submission);
        localStorage.setItem('cafeMessages', JSON.stringify(submissions));
        
        // Show success message
        formStatus.innerHTML = '<i class="fas fa-check-circle"></i> Your email client has opened. Please send the email to complete your message. A copy is also saved locally.';
        formStatus.className = 'success';
        contactForm.reset();
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Clear status after 8 seconds
        setTimeout(() => {
            formStatus.innerHTML = '';
            formStatus.className = '';
        }, 8000);
    });
}

// Add scroll reveal animation
const revealElements = document.querySelectorAll('.menu-category, .about-image, .about-text, .contact-info, .contact-form');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize reveal styles
revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Active link highlighting
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Phone number validation
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        e.target.value = value;
    });
}

// Console welcome message
console.log('%c☕ Welcome to Samarth\'s Cafe! ☕', 'font-size: 20px; color: #8B4513; font-weight: bold;');
console.log('%cThank you for visiting our website!', 'color: #666;');

// ==========================================
// LOCAL STORAGE RESERVATION SYSTEM
// (No cloud needed - perfect for learning!)
// ==========================================

// Reservation Form Handling - Using LocalStorage
const reservationForm = document.getElementById('reservationForm');
const reservationStatus = document.getElementById('reservationStatus');

// Set minimum date to today
const resDateInput = document.getElementById('resDate');
if (resDateInput) {
    const today = new Date().toISOString().split('T')[0];
    resDateInput.setAttribute('min', today);
}

if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = reservationForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Booking...';
        submitBtn.disabled = true;
        
        // Get form values
        const reservationData = {
            id: Date.now(),
            name: document.getElementById('resName').value,
            email: document.getElementById('resEmail').value,
            phone: document.getElementById('resPhone').value,
            guests: document.getElementById('resGuests').value,
            date: document.getElementById('resDate').value,
            time: document.getElementById('resTime').value,
            specialRequests: document.getElementById('resSpecial').value,
            status: 'pending',
            createdAt: new Date().toLocaleString()
        };
        
        // Save to localStorage
        try {
            let reservations = JSON.parse(localStorage.getItem('cafeReservations') || '[]');
            reservations.push(reservationData);
            localStorage.setItem('cafeReservations', JSON.stringify(reservations));
            
            reservationStatus.innerHTML = '<i class="fas fa-check-circle"></i> Reservation confirmed! We\'ll contact you shortly for confirmation.';
            reservationStatus.className = 'success';
            reservationForm.reset();
            
            // Console log for testing
            console.log('New Reservation:', reservationData);
            console.log('All Reservations:', JSON.parse(localStorage.getItem('cafeReservations') || '[]'));
            
        } catch (error) {
            console.error('Error:', error);
            reservationStatus.innerHTML = 'Error saving reservation. Please try again.';
            reservationStatus.className = 'error';
        }
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Clear status after 8 seconds
        setTimeout(() => {
            reservationStatus.innerHTML = '';
            reservationStatus.className = '';
        }, 8000);
    });
}

// Admin function to view reservations
// Open browser console and type: viewReservations()
function viewReservations() {
    const reservations = JSON.parse(localStorage.getItem('cafeReservations') || '[]');
    console.log('=== SAMARTH\'S CAFE RESERVATIONS ===');
    console.log('Total:', reservations.length);
    console.log('-----------------------------------');
    reservations.forEach((res, index) => {
        console.log('#' + (index + 1));
        console.log('Name:', res.name);
        console.log('Email:', res.email);
        console.log('Phone:', res.phone);
        console.log('Guests:', res.guests);
        console.log('Date:', res.date);
        console.log('Time:', res.time);
        console.log('Special Requests:', res.specialRequests || 'None');
        console.log('-----------------------------------');
    });
    return reservations;
}

// To delete all reservations: type clearReservations() in console
function clearReservations() {
    if (confirm('Are you sure you want to delete all reservations?')) {
        localStorage.removeItem('cafeReservations');
        console.log('All reservations cleared!');
    }
}

