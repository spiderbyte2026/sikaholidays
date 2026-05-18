 const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
      document.querySelectorAll('.nav-link, .nav-btn').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
     const counts = document.querySelectorAll('.count-number');
    let counted = false;

    const startCounters = () => {
        counts.forEach(count => {
            const target = +count.getAttribute('data-target');
            const duration = 2000; // ms
            const increment = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    count.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    count.innerText = target;
                }
            };
            updateCounter();
        });
    };

    const countsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !counted) {
            startCounters();
            counted = true;
        }
    }, { threshold: 0.5 });

    const countSection = document.querySelector('.count-grid');
    if (countSection) {
        countsObserver.observe(countSection);
    }
