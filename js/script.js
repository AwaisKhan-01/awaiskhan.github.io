/* ═══════════════════════════════════════════════════════════════
   AWAIS KHAN — PORTFOLIO INTERACTIONS
   Handles: Custom Cursor, Accordions, Mobile Nav, Scroll Reveals
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Custom Cursor Creation & Tracking
    // Only runs on devices that support hover
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        const cursor = document.createElement("div");
        cursor.classList.add("cursor");
        document.body.appendChild(cursor);

        document.addEventListener("mousemove", (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        // Add hover effect to interactive elements
        const interactives = document.querySelectorAll("a, button, .accordion-header, .project-card");
        interactives.forEach(el => {
            el.addEventListener("mouseenter", () => cursor.classList.add("hovering"));
            el.addEventListener("mouseleave", () => cursor.classList.remove("hovering"));
        });
    }

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 3. Mobile Hamburger Menu
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("open");
            navMenu.classList.toggle("open");
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("open");
                navMenu.classList.remove("open");
            });
        });
    }

    // 4. Skills Accordion Logic
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    
    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const currentItem = header.parentElement;
            const isOpen = currentItem.classList.contains("open");

            // Close all other accordions first (optional, for clean UI)
            document.querySelectorAll(".accordion-item").forEach(item => {
                item.classList.remove("open");
                item.querySelector(".accordion-header").setAttribute("aria-expanded", "false");
            });

            // If it wasn't open, open it
            if (!isOpen) {
                currentItem.classList.add("open");
                header.setAttribute("aria-expanded", "true");
            }
        });
    });

    // 5. Scroll Reveal Animations
    // Dynamically add the .reveal class to key elements if not already there
    const elementsToReveal = document.querySelectorAll(
        ".intro-heading, .intro-body, .stat, .accordion-item, .project-card, .contact-left, .contact-right"
    );
    
    elementsToReveal.forEach(el => el.classList.add("reveal"));

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, revealOptions);

    document.querySelectorAll(".reveal").forEach(el => {
        revealObserver.observe(el);
    });

    // 6. Smooth Scroll with Navbar Offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Get navbar height from CSS variable or default to 64px
                const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

});
