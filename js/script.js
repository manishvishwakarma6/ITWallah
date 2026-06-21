
       /* start banner slider js */
        let slider = document.querySelector('#bannerSlider');
        if (slider) {
            new bootstrap.Carousel(slider, {
                interval: 3000,
                pause: false,
                wrap: true
            }); 
        }
         
       /* start cursor dot with mouse & touch */
        const cursor = document.getElementById("cursorDot");
        if (cursor) {
            const moveCursor = (e) => {
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                requestAnimationFrame(() => {
                    cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
                });
            };
            document.addEventListener("mousemove", moveCursor);
            document.addEventListener("touchmove", moveCursor, { passive: true });
        }
       /* end cursor dot */

       /* start lightbox logic for gallery images */
        document.addEventListener("DOMContentLoaded", () => {
            const galleryImages = document.querySelectorAll('.gallery-card .img-wrapper img');
            if (galleryImages.length > 0) {
                // Create lightbox elements
                const overlay = document.createElement('div');
                overlay.className = 'lightbox-overlay';
                
                const closeBtn = document.createElement('span');
                closeBtn.className = 'lightbox-close';
                closeBtn.innerHTML = '&times;';
                
                const lightboxImg = document.createElement('img');
                
                overlay.appendChild(closeBtn);
                overlay.appendChild(lightboxImg);
                document.body.appendChild(overlay);
                
                // Add click listener to each gallery image
                galleryImages.forEach(img => {
                    img.style.cursor = 'zoom-in';
                    img.addEventListener('click', (e) => {
                        e.stopPropagation(); // prevent default behaviors
                        lightboxImg.src = img.src;
                        overlay.classList.add('active');
                        document.body.style.overflow = 'hidden'; // prevent scrolling
                    });
                });
                
                // Close lightbox
                const closeLightbox = () => {
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                    setTimeout(() => {
                        lightboxImg.src = '';
                    }, 300); // clear src after animation
                };
                
                closeBtn.addEventListener('click', closeLightbox);
                overlay.addEventListener('click', (e) => {
                    if (e.target !== lightboxImg) {
                        closeLightbox();
                    }
                });
                
                // Escape key support
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && overlay.classList.contains('active')) {
                        closeLightbox();
                    }
                });
            }
        });
       /* end lightbox logic */
