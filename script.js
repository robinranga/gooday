 // Mobile Menu Toggle
 const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
 const menu = document.querySelector('.menu');

 mobileMenuBtn.addEventListener('click', () => {
     menu.classList.toggle('active');
 });

 // Back to Top Button
 const backToTopBtn = document.querySelector('.back-to-top');

 window.addEventListener('scroll', () => {
     if (window.pageYOffset > 300) {
         backToTopBtn.classList.add('active');
     } else {
         backToTopBtn.classList.remove('active');
     }
 });

 

 // Contact Form Submission
 const contactForm = document.getElementById('contactForm');
 
 contactForm.addEventListener('submit', (e) => {
     e.preventDefault();
     
     // Basic form validation
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const subject = document.getElementById('subject').value;
     const message = document.getElementById('message').value;
     
     if (name && email && subject && message) {
         // In a real application, you would send this data to a server
         alert('Thank you for your message! We will get back to you soon.');
         contactForm.reset();
     }
 });

 // Add to Cart functionality
 const addToCartBtns = document.querySelectorAll('.product-btn');
 let cartCount = 0;

 addToCartBtns.forEach(btn => {
     btn.addEventListener('click', () => {
         cartCount++;
         alert('Product added to cart!');
         // In a real application, you would update a cart icon/counter
     });
 });

 // Newsletter Submission
 const newsletterForm = document.querySelector('.newsletter-form');
 
 newsletterForm.addEventListener('submit', (e) => {
     e.preventDefault();
     alert('Thank you for subscribing to our newsletter!');
     newsletterForm.reset();
 });

 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         
         const targetId = this.getAttribute('href');
         const targetElement = document.querySelector(targetId);
         
         if (targetElement) {
             window.scrollTo({
                 top: targetElement.offsetTop - 70, // Adjust for header height
                 behavior: 'smooth'
             });
             
             // Close mobile menu if open
             if (menu.classList.contains('active')) {
                 menu.classList.remove('active');
             }
         }
     });
 });