
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
