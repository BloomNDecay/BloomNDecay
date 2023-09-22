document.addEventListener('DOMContentLoaded', function() {
    const themeWrapper = document.getElementById('theme-wrapper');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const mainTitle = document.querySelector('h1'); // Getting the h1 element

    function updateButtonTextAndTitle() {
        if (themeWrapper.classList.contains('bloom-theme')) {
            themeToggleBtn.textContent = "Decay";
            mainTitle.textContent = "Bloom"; // Set h1 text to Bloom
        } else {
            themeToggleBtn.textContent = "Bloom";
            mainTitle.textContent = "Decay"; // Set h1 text to Decay
        }
    }

    // Initially set the button text and h1 title based on the loaded theme
    updateButtonTextAndTitle();

    themeToggleBtn.addEventListener('click', function() {
        if (themeWrapper.classList.contains('bloom-theme')) {
            themeWrapper.classList.remove('bloom-theme');
            themeWrapper.classList.add('decay-theme');
        } else {
            themeWrapper.classList.remove('decay-theme');
            themeWrapper.classList.add('bloom-theme');
        }
        updateButtonTextAndTitle();
    });
});
