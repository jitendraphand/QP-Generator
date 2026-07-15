/* NMTC Prep — shared UI helpers: entrance animations and celebratory sparkles. */

/* Reveal cards as they scroll into view. Elements opt in via .reveal;
   revealAll() also tags common blocks on static pages. */
function revealAll(root) {
    const targets = (root || document).querySelectorAll(
        '.card:not(.reveal), .stat:not(.reveal), .callout:not(.reveal)');
    targets.forEach(el => el.classList.add('reveal'));
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
}

/* Small emoji burst anchored to an element — used when an answer is correct. */
function sparkleBurst(anchor) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const glyphs = ['✨', '⭐', '💫', '🌟'];
    for (let i = 0; i < 7; i++) {
        const s = document.createElement('span');
        s.className = 'sparkle';
        s.textContent = glyphs[i % glyphs.length];
        const angle = (Math.PI * (0.15 + 0.7 * Math.random()));
        const dist = 45 + Math.random() * 55;
        s.style.setProperty('--dx', (Math.cos(angle) * dist * (Math.random() < 0.5 ? -1 : 1)) + 'px');
        s.style.setProperty('--dy', (-Math.sin(angle) * dist) + 'px');
        s.style.left = (20 + Math.random() * 60) + '%';
        s.style.top = '40%';
        anchor.appendChild(s);
        setTimeout(() => s.remove(), 850);
    }
}

/* Count a number element up from 0 to its data-count value. */
function animateCounters() {
    document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        const dur = 900;
        const t0 = performance.now();
        function tick(t) {
            const p = Math.min((t - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    revealAll();
    animateCounters();
});
