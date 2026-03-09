  // Top Header Slider JS Logic
        const track = document.getElementById("header-track");
        const originalSlide = track.querySelector(".slide");

        let exactSlideWidth = 0;
        let position = window.innerWidth;
        let baseSpeed = 1.0;
        let currentSpeed = baseSpeed;

        function initSlider() {
            exactSlideWidth = originalSlide.getBoundingClientRect().width;
            if (exactSlideWidth === 0) exactSlideWidth = window.innerWidth;

            if (position < -exactSlideWidth) {
                position = window.innerWidth;
            }
        }

        initSlider();

        function getSpeed() {
            return window.innerWidth < 480 ? 0.8 : 1.2;
        }

        baseSpeed = getSpeed();
        currentSpeed = baseSpeed;

        function animate() {
            position -= currentSpeed;

            if (position <= -exactSlideWidth) {
                position = window.innerWidth;
            }

            track.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(animate);
        }

        animate();

        window.addEventListener("resize", () => {
            initSlider();
            baseSpeed = getSpeed();
            if (currentSpeed > 0) currentSpeed = baseSpeed;
        });

        track.addEventListener("mouseenter", () => currentSpeed = 0);
        track.addEventListener("mouseleave", () => currentSpeed = baseSpeed);

        // ========== //

        // 1. Navbar Scroll Effect
        // Removed the scroll effect toggling so the navbar is always "active"
        // and doesn't change background colors when scrolling up and down.
        window.addEventListener('scroll', function () {
            // Background is now permanently handled via the CSS .custom-navbar class
        });

        // 2. Hamburger menu animation toggle
        const navbarToggler = document.getElementById('navbarToggler');
        const hamburgerIcon = document.querySelector('.hamburger-icon');

        navbarToggler.addEventListener('click', function () {
            hamburgerIcon.classList.toggle('open');
        });

        // 3. Multi-level Submenu logic (specifically for Mobile clicks)
        document.addEventListener("DOMContentLoaded", function () {
            const dropdownSubmenuToggles = document.querySelectorAll('.dropdown-submenu > a.dropdown-toggle');

            dropdownSubmenuToggles.forEach(function (element) {
                element.addEventListener('click', function (e) {

                    if (window.innerWidth < 1200) {
                        e.preventDefault();
                        e.stopPropagation();

                        // Close sibling submenus to prevent massive stack
                        const parentLi = this.parentElement;
                        const siblings = parentLi.parentElement.querySelectorAll('.dropdown-submenu');
                        siblings.forEach(function (sibling) {
                            if (sibling !== parentLi) {
                                const submenu = sibling.querySelector('.dropdown-menu');
                                if (submenu) {
                                    submenu.classList.remove('show');
                                }
                            }
                        });

                        // Toggle the current submenu dropdown
                        const nextEl = this.nextElementSibling;
                        if (nextEl && nextEl.classList.contains('dropdown-menu')) {
                            // Close deep nested if collapsing current
                            if (nextEl.classList.contains('show')) {
                                const deepMenus = nextEl.querySelectorAll('.dropdown-menu.show');
                                deepMenus.forEach(menu => menu.classList.remove('show'));
                            }
                            nextEl.classList.toggle('show');
                        }
                    }
                });
            });

            // 4. Dark/Light Theme Switching Logic
            const themeSwitch = document.getElementById('themeSwitch');

            // Check for saved theme preference, otherwise use system preference
            const savedTheme = localStorage.getItem('theme');
            const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
                document.body.setAttribute('data-theme', 'dark');
                themeSwitch.checked = true;
            }

            themeSwitch.addEventListener('change', function () {
                if (this.checked) {
                    document.body.setAttribute('data-theme', 'dark');
                    localStorage.setItem('theme', 'dark');
                } else {
                    document.body.removeAttribute('data-theme');
                    localStorage.setItem('theme', 'light');
                }
            });
        });