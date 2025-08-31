
        // Hamburger Menu Toggle
        const menuButton = document.querySelector('.menu-button');
        const navbarLinks = document.querySelector('.navbar-links');
        menuButton.addEventListener('click', () => {
            menuButton.classList.toggle('active');
            navbarLinks.classList.toggle('active');
            menuButton.setAttribute('aria-expanded', menuButton.classList.contains('active'));
        });

        // Smooth Scroll
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
                if (navbarLinks.classList.contains('active')) {
                    menuButton.classList.remove('active');
                    navbarLinks.classList.remove('active');
                    menuButton.setAttribute('aria-expanded', false);
                }
            });
        });

        // Project Filter
        const filterButtons = document.querySelectorAll('.filter-button');
        const projectCards = document.querySelectorAll('.project-card');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const filter = button.getAttribute('data-filter');
                projectCards.forEach(card => {
                    card.classList.toggle('hidden', !(filter === 'all' || card.getAttribute('data-category') === filter));
                });
            });
        });

        // Contact Form Validation
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const error = document.getElementById('error');

            if (!name || !email || !message) {
                error.textContent = 'Please fill in all fields';
                return;
            }
            if (!/\S+@\S+\.\S+/.test(email)) {
                error.textContent = 'Please enter a valid email address';
                return;
            }

            error.textContent = '';
            alert('Message sent successfully!');
            this.reset();
        });

        // Scroll-to-Top Button
        const scrollTop = document.querySelector('.scroll-top');
        window.addEventListener('scroll', () => {
            scrollTop.classList.toggle('visible', window.scrollY > 300);
        });
        scrollTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
   