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
        
        // Blog post hover effects
        document.querySelectorAll('.blog-post').forEach(post => {
            post.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            });
            
            post.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
            });
        });
        
        // Newsletter form submission
        const newsletterForm = document.querySelector('.newsletter-form');
        const newsletterInput = newsletterForm.querySelector('input[type="email"]');
        const newsletterBtn = newsletterForm.querySelector('.btn');
        
        newsletterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (newsletterInput.value.trim() === '') {
                newsletterInput.style.borderColor = '#e74c3c';
                newsletterInput.placeholder = 'Please enter your email';
            } else if (!isValidEmail(newsletterInput.value)) {
                newsletterInput.style.borderColor = '#e74c3c';
                newsletterInput.value = '';
                newsletterInput.placeholder = 'Please enter a valid email';
            } else {
                newsletterInput.style.borderColor = '#2ecc71';
                newsletterInput.value = '';
                newsletterInput.placeholder = 'Thank you for subscribing!';
                newsletterBtn.textContent = 'Subscribed!';
                newsletterBtn.style.backgroundColor = '#2ecc71';
                newsletterBtn.style.borderColor = '#2ecc71';
                
                setTimeout(() => {
                    newsletterBtn.textContent = 'Subscribe';
                    newsletterBtn.style.backgroundColor = '';
                    newsletterBtn.style.borderColor = '';
                    newsletterInput.placeholder = 'Your email address';
                    newsletterInput.style.borderColor = '#ddd';
                }, 3000);
            }
        });
        
        function isValidEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        
        // Search functionality
        const searchInput = document.querySelector('input[type="text"]');
        const searchBtn = document.querySelector('.sidebar-widget .btn');
        
        searchBtn.addEventListener('click', function() {
            if (searchInput.value.trim() !== '') {
                alert(`Searching for: "${searchInput.value}"\n\nIn a real implementation, this would search the blog articles.`);
                searchInput.value = '';
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });