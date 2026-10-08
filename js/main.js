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


/* ---------- Demo Tab Chips START ---------- */

const tabChips = document.querySelectorAll(".tab-chip");

tabChips.forEach((chip) => {
    chip.addEventListener("click", () => {
        tabChips.forEach((item) => item.classList.remove("active"));
        chip.classList.add("active");
    });
});

/* ---------- Demo Tab Chips END ---------- */


/* ---------- Anna Dental Clinics JavaScript END ---------- */
