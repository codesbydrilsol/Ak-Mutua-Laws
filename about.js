 // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Sticky Navbar Background on Scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(10, 36, 99, 0.95)';
                navbar.style.backdropFilter = 'blur(5px)';
            } else {
                navbar.style.backgroundColor = 'var(--navy-blue)';
                navbar.style.backdropFilter = 'none';
            }
        });
        
        // Animate statistics on scroll
        function animateStats() {
            const statNumbers = document.querySelectorAll('.stat-number');
            const statsSection = document.querySelector('.stats-container').parentElement;
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        statNumbers.forEach(stat => {
                            const target = parseInt(stat.textContent);
                            let current = 0;
                            const increment = target / 50;
                            const timer = setInterval(() => {
                                current += increment;
                                if (current >= target) {
                                    stat.textContent = target + (stat.textContent.includes('+') ? '+' : '');
                                    clearInterval(timer);
                                } else {
                                    stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
                                }
                            }, 30);
                        });
                        observer.unobserve(statsSection);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(statsSection);
        }
         new Swiper(".valuesSwiper2", {
    loop: true,
    speed: 3000,
    spaceBetween: 18,
    grabCursor: true,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true
    },

    pagination: {
      el: ".valuesPagination2",
      clickable: true
    },

    breakpoints: {
      0: { slidesPerView: 1.05 },
      640: { slidesPerView: 1.4 },
      900: { slidesPerView: 2.2 },
      1100: { slidesPerView: 3 }
    }
  });
        
        // Initialize stats animation
        document.addEventListener('DOMContentLoaded', animateStats);