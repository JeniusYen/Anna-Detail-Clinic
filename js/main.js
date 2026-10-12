/* ---------- Anna Dental Clinics JavaScript START ---------- */

/* ---------- Mobile Navigation START ---------- */

const mobileNavigation = document.querySelector(".mobile-nav");

if (mobileNavigation) {
    const mobileLinks = mobileNavigation.querySelectorAll("a");

    mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mobileNavigation.removeAttribute("open");
        });
    });
}

/* ---------- Mobile Navigation END ---------- */


/* ---------- Escape Key START ---------- */

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileNavigation) {
        mobileNavigation.removeAttribute("open");
    }
});

/* ---------- Escape Key END ---------- */


/* ---------- Treatment selection START ---------- */
const treatmentTabs = [...document.querySelectorAll('[data-treatment-target]')];
const treatmentCards = [...document.querySelectorAll('.package-card[data-treatment]')];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function selectTreatment(tab, navigate = true) {
    const target = tab.dataset.treatmentTarget;
    const matchingCards = treatmentCards.filter(card => card.dataset.treatment === target);
    if (!matchingCards.length) return;
    treatmentTabs.forEach(item => {
        const selected = item === tab;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
    });
    treatmentCards.forEach(card => {
        card.classList.toggle('selected-treatment', card.dataset.treatment === target);
    });
    if (navigate) {
        tab.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'nearest' });
        matchingCards[0].scrollIntoView({
            behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'nearest'
        });
    }
}

treatmentTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTreatment(tab));
    tab.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % treatmentTabs.length;
        if (event.key === 'ArrowLeft') next = (index - 1 + treatmentTabs.length) % treatmentTabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = treatmentTabs.length - 1;
        if (next === undefined) return;
        event.preventDefault();
        treatmentTabs[next].focus({ preventScroll: true });
        selectTreatment(treatmentTabs[next]);
    });
});
if (treatmentTabs.length) selectTreatment(treatmentTabs[0], false);
/* ---------- Treatment selection END ---------- */


/* ---------- Anna Dental Clinics JavaScript END ---------- */
