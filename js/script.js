
       
       /* start cursor dot with mouse */
        let slider = document.querySelector('#bannerSlider');
        new bootstrap.Carousel(slider, {
            interval: 3000,
            pause: false,
            wrap: true
        }); 
         
       /* end cursor dot with mouse */

        
       /* start banner slider js */
        
        const cursor = document.getElementById("cursorDot");
        document.addEventListener("mousemove", (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
   
     
       /* end banner slider js */
   
   