const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100; // Trigger point

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
};

// Check on scroll
window.addEventListener("scroll", reveal);

// Initial check on load
window.addEventListener("DOMContentLoaded", reveal);



