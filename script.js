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

// Form handling with Formspree
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                formStatus.textContent = 'Thank you! Your message has been sent successfully. We\'ll get back to you soon!';
                formStatus.className = 'success';
                contactForm.reset();
            } else {
                const data = await response.json();
                if (data.errors) {
                    formStatus.textContent = data.errors.map(error => error.message).join(', ');
                } else {
                    formStatus.textContent = 'Oops! There was a problem sending your message. Please try again.';
                }
                formStatus.className = 'error';
            }
        } catch (error) {
            formStatus.textContent = 'Oops! There was a problem sending your message. Please try again.';
            formStatus.className = 'error';
        }
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Clear status message after 5 seconds
        setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = '';
        }, 5000);
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
// FIREBASE RESERVATION SYSTEM (DATABASE)
// ==========================================

// Initialize Firebase (Replace with your Firebase config)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();

// Reservation Form Handling
const reservationForm = document.getElementById('reservationForm');
const reservationStatus = document.getElementById('reservationStatus');

// Set minimum date to today
const dateInput = document.getElementById('resDate');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
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
            name: document.getElementById('resName').value,
            email: document.getElementById('resEmail').value,
            phone: document.getElementById('resPhone').value,
            guests: document.getElementById('resGuests').value,
            date: document.getElementById('resDate').value,
            time: document.getElementById('resTime').value,
            specialRequests: document.getElementById('resSpecial').value,
            status: 'pending',
            createdAt: new Date().toISOString()
        };
        
        // Save to Firebase Realtime Database
        const reservationsRef = database.ref('reservations');
        reservationsRef.push(reservationData)
            .then(() => {
                reservationStatus.innerHTML = '<i class="fas fa-check-circle"></i> Reservation confirmed! We\'ll send you a confirmation email shortly.';
                reservationStatus.className = 'success';
                reservationForm.reset();
                
                // Send confirmation email (via Formspree as fallback)
                sendConfirmationEmail(reservationData);
            })
            .catch((error) => {
                console.error('Error:', error);
                reservationStatus.innerHTML = 'Error saving reservation. Please try again or call us directly.';
                reservationStatus.className = 'error';
            });
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Clear status after 8 seconds
        setTimeout(() => {
            reservationStatus.innerHTML = '';
            reservationStatus.className = '';
        }, 8000);
    });
}

// Function to send confirmation email (using Formspree)
function sendConfirmationEmail(data) {
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            subject: `New Reservation: ${data.name}`,
            name: data.name,
            email: data.email,
            message: `New Reservation Received!\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nGuests: ${data.guests}\nDate: ${data.date}\nTime: ${data.time}\nSpecial Requests: ${data.specialRequests}`
        })
    }).catch(err => console.log('Email notification error:', err));
}

// Admin Panel - View Reservations (for cafe owner)
// To view reservations, create an admin.html page or use Firebase Console

