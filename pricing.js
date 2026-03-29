
const monthlyBtn = document.getElementById('monthlyBtn');
const yearlyBtn = document.getElementById('yearlyBtn');
const slider = document.querySelector('.toggle-slider');
const saveBadge = document.getElementById('saveBadge');

// Get the price elements
const plusPrice = document.getElementById('plusPrice');
const premiumPrice = document.getElementById('premiumPrice');

// --- Yearly Click Event ---
yearlyBtn.addEventListener('click', () => {
    // 1. UI Feedback
    slider.style.transform = 'translateX(100%)';
    yearlyBtn.classList.add('active');
    monthlyBtn.classList.remove('active');
    
    // 2. Show the "Save 49%" badge
    saveBadge.classList.remove('hidden');

    // 3. Update to Yearly Prices
    plusPrice.innerText = '$0.99'; 
    premiumPrice.innerText = '$2.49';
});

// --- Monthly Click Event ---
monthlyBtn.addEventListener('click', () => {
    // 1. UI Feedback
    slider.style.transform = 'translateX(0)';
    monthlyBtn.classList.add('active');
    yearlyBtn.classList.remove('active');
    
    // 2. Hide the badge
    saveBadge.classList.add('hidden');

    // 3. Update back to Monthly Prices
    plusPrice.innerText = '$1.99';
    premiumPrice.innerText = '$4.99';
});