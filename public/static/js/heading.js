// script to make the header transparent when the user is at the top of the page and solid when they scroll down
const header = document.querySelector('.heading');
function updateHeaderState() {
    if (!header) return;
    header.classList.toggle('solid', window.scrollY > 0);
}

if (header) {
    // set initial state on load
    updateHeaderState();

    // throttle scroll updates using requestAnimationFrame
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateHeaderState();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // keep state correct on resize/navigation
    window.addEventListener('resize', updateHeaderState);
}