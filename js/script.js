/**
 * AWAIS KHAN - PORTFOLIO CORE ENGINE
 * Focusing on smooth transitions and intersection reveals.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    // 2. Reveal Animation Logic (The "Framer" Look)
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                // Once revealed, stop observing to save performance
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Apply reveal classes to sections and cards
    const elementsToReveal = document.querySelectorAll(
        ".hero-display, .service-item, .work-card, .label-row, .hero-bio"
    );

    elementsToReveal.forEach((el, index) => {
        // Add initial state class
        el.classList.add("reveal-init");
        // Add a slight delay for a "staggered" effect
        el.style.transitionDelay = `${(index % 3) * 0.1}s`;
        revealOnScroll.observe(el);
    });

    // 3. Navbar background behavior
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)";
        } else {
            navbar.style.borderBottom = "1px solid transparent";
        }
    });

    // 4. Marquee Loop duplication for seamless scroll
    const marquee = document.querySelector(".marquee-content");
    if (marquee) {
        const content = marquee.innerHTML;
        // Duplicate content twice to ensure no gaps in the loop
        marquee.innerHTML = content + content + content;
    }
});
