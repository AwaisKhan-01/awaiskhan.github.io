/* ═══════════════════════════════════════════════════════════════
   AWAIS KHAN — AI & ML Portfolio
   script.js  |  All interactions & animations
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────────────────────────
   1. CUSTOM CURSOR
   ───────────────────────────────────────────────────────────── */
function initCursor() {
  // Only on true pointer devices
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  let mouseX = -100, mouseY = -100;
  let curX = -100,   curY = -100;
  let raf;

  // Raw mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth follow via lerp
  function lerp(a, b, t) { return a + (b - a) * t; }

  function animateCursor() {
    curX = lerp(curX, mouseX, 0.14);
    curY = lerp(curY, mouseY, 0.14);
    cursor.style.left = curX + 'px';
    cursor.style.top  = curY + 'px';
    raf = requestAnimationFrame(animateCursor);
  }
  raf = requestAnimationFrame(animateCursor);

  // Expand on interactive elements
  const hoverTargets = 'a, button, .accordion-header, .project-card, .skill-tag, .acc-tag';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.add('hovering');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.remove('hovering');
    }
  });

  // Hide when leaving window
  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });
}


/* ─────────────────────────────────────────────────────────────
   2. NAVBAR — scroll state + active link highlight
   ───────────────────────────────────────────────────────────── */
function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scrolled class for border highlight
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    highlightActiveLink();
  }, { passive: true });

  // Smooth scroll on nav link click
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = target.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
        // Close mobile menu if open
        closeMobileMenu();
      }
    });
  });

  // Highlight the section currently in view
  function highlightActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top <= 120) current = sec.getAttribute('id');
    });

    navLinks.forEach(link => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === '#' + current
      );
    });
  }
}


/* ─────────────────────────────────────────────────────────────
   3. HAMBURGER — mobile menu toggle
   ───────────────────────────────────────────────────────────── */
function initHamburger() {
  const btn     = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  if (!btn || !navMenu) return;

  btn.addEventListener('click', () => {
    const isOpen = btn.classList.toggle('open');
    navMenu.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !navMenu.contains(e.target)) {
      closeMobileMenu();
    }
  });
}

function closeMobileMenu() {
  const btn     = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  if (!btn || !navMenu) return;
  btn.classList.remove('open');
  navMenu.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}


/* ─────────────────────────────────────────────────────────────
   4. ACCORDION — skills section
   ───────────────────────────────────────────────────────────── */
function initAccordion() {
  const items = document.querySelectorAll('.accordion-item');

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body   = item.querySelector('.accordion-body');
    if (!header || !body) return;

    // Wrap body children in an inner div for the grid trick
    const inner = document.createElement('div');
    inner.classList.add('accordion-body-inner');
    while (body.firstChild) inner.appendChild(body.firstChild);
    body.appendChild(inner);

    header.setAttribute('aria-expanded', 'false');

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others
      items.forEach(other => {
        if (other !== item && other.classList.contains('open')) {
          other.classList.remove('open');
          other.querySelector('.accordion-header')
               .setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      item.classList.toggle('open', !isOpen);
      header.setAttribute('aria-expanded', String(!isOpen));
    });
  });
}


/* ─────────────────────────────────────────────────────────────
   5. SCROLL REVEAL — intersection observer
   ───────────────────────────────────────────────────────────── */
function initScrollReveal() {
  // Add reveal class to elements we want to animate in
  const revealTargets = [
    { selector: '.intro-grid',       delay: 0 },
    { selector: '.intro-heading',    delay: 0 },
    { selector: '.intro-body',       delay: 0 },
    { selector: '.intro-stats',      delay: 1 },
    { selector: '.accordion-item',   delay: 0 },
    { selector: '.project-card',     delay: 0 },
    { selector: '.contact-left',     delay: 0 },
    { selector: '.contact-right',    delay: 1 },
    { selector: '.section-label-row',delay: 0 },
  ];

  revealTargets.forEach(({ selector, delay }) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('reveal');
      if (delay || i > 0) {
        // Stagger siblings
        const d = Math.min(i * 0.08 + delay * 0.1, 0.5);
        el.style.transitionDelay = d + 's';
      }
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve after reveal (one-shot)
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


/* ─────────────────────────────────────────────────────────────
   6. MARQUEE — pause on hover (hero + contact)
   ───────────────────────────────────────────────────────────── */
function initMarquee() {
  const wrappers = document.querySelectorAll('.marquee-wrapper, .contact-marquee-wrap');

  wrappers.forEach(wrap => {
    const track = wrap.querySelector('.marquee-track, .contact-marquee-track');
    if (!track) return;

    wrap.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });
    wrap.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
  });
}


/* ─────────────────────────────────────────────────────────────
   7. HERO IMAGE — graceful fallback if awais.jpg missing
   ───────────────────────────────────────────────────────────── */
function initImageFallbacks() {
  const imgs = document.querySelectorAll('img');

  imgs.forEach(img => {
    img.addEventListener('error', function () {
      const parent = this.parentElement;

      if (this.classList.contains('hero-portrait')) {
        // Replace with initials block
        parent.innerHTML = `
          <div style="
            width:100%; height:100%;
            display:flex; align-items:center; justify-content:center;
            background:#111; font-family:'Syne',sans-serif;
            font-size:4rem; font-weight:800; color:#222;
            letter-spacing:-0.02em;
          ">AK</div>`;
      }

      if (this.classList.contains('intro-img')) {
        parent.style.background = 'var(--bg-3)';
        this.style.display = 'none';
      }
    });
  });
}


/* ─────────────────────────────────────────────────────────────
   8. PROJECT CARDS — tilt micro-interaction (desktop)
   ───────────────────────────────────────────────────────────── */
function initCardTilt() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect   = card.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      const midX   = rect.width  / 2;
      const midY   = rect.height / 2;
      const rotX   = ((y - midY) / midY) * -2;   // max ±2 deg
      const rotY   = ((x - midX) / midX) *  2;

      card.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1), background 0.4s';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'background 0.4s';
    });
  });
}


/* ─────────────────────────────────────────────────────────────
   9. CONTACT FORM — open mailto
   ───────────────────────────────────────────────────────────── */
function initContact() {
  const btn = document.querySelector('.contact-btn');
  if (!btn) return;
  // The button is already an <a href="mailto:...">, so no extra logic needed.
  // Add a small click feedback just for feel.
  btn.addEventListener('click', () => {
    btn.style.transform = 'scale(0.97)';
    setTimeout(() => { btn.style.transform = ''; }, 200);
  });
}


/* ─────────────────────────────────────────────────────────────
   10. ACTIVE NAV LINK — CSS injection
   ───────────────────────────────────────────────────────────── */
function injectActiveNavStyle() {
  const style = document.createElement('style');
  style.textContent = `
    .nav-link.active {
      color: var(--text) !important;
    }
    .nav-link.active::after {
      width: 100% !important;
    }
  `;
  document.head.appendChild(style);
}


/* ─────────────────────────────────────────────────────────────
   11. HERO ENTRANCE — stagger children on load
   ───────────────────────────────────────────────────────────── */
function initHeroEntrance() {
  const elements = [
    document.querySelector('.marquee-wrapper'),
    document.querySelector('.hero-bottom'),
    document.querySelector('.hero-image-strip'),
  ];

  elements.forEach((el, i) => {
    if (!el) return;
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(20px)';
    el.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 0.15 + 0.2}s,
                           transform 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 0.15 + 0.2}s`;

    // Trigger after paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity   = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  });

  // Sidebar social links
  const sidebar = document.querySelector('.social-sidebar');
  if (sidebar) {
    sidebar.style.opacity   = '0';
    sidebar.style.transition = 'opacity 1s ease 0.8s';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { sidebar.style.opacity = '1'; });
    });
  }
}


/* ─────────────────────────────────────────────────────────────
   12. SMOOTH ANCHOR SCROLL — for any in-page link
   ───────────────────────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    // Skip nav links (already handled above)
    if (link.classList.contains('nav-link')) return;

    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    });
  });
}


/* ─────────────────────────────────────────────────────────────
   13. KEYBOARD ACCESSIBILITY — accordion Enter/Space
   ───────────────────────────────────────────────────────────── */
function initKeyboardA11y() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');

    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });
}


/* ─────────────────────────────────────────────────────────────
   BOOT — run everything on DOMContentLoaded
   ───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNavbar();
  initHamburger();
  initAccordion();
  initScrollReveal();
  initMarquee();
  initImageFallbacks();
  initCardTilt();
  initContact();
  injectActiveNavStyle();
  initHeroEntrance();
  initSmoothScroll();
  initKeyboardA11y();
});
