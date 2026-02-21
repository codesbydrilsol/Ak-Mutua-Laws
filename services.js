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
        
        // Initialize Testimonials Swiper
        const testimonialsSwiper = new Swiper('.testimonials-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                }
            }
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
         const servicesSwiper = new Swiper(".servicesSwiper", {
    loop: true,
    speed: 3000,
    spaceBetween: 18,
    grabCursor: true,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: false
    },

    pagination: {
      el: ".servicesPagination",
      clickable: true
    },

    breakpoints: {
      0: { slidesPerView: 1.05 },
      640: { slidesPerView: 1.5 },
      900: { slidesPerView: 2.1 },
      1100: { slidesPerView: 2.5 }
    }
  });

  // Click to jump to details section
  document.querySelectorAll(".service-card-mini").forEach(card => {
    card.addEventListener("click", () => {
      const target = document.querySelector(card.dataset.target);
      if (!target) return;

      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // optional: add a quick highlight
      target.classList.add("service-highlight");
      setTimeout(() => target.classList.remove("service-highlight"), 900);
    });
  });
        // Service card hover effects
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
            });
        });