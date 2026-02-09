document.addEventListener('DOMContentLoaded', function() {
    const shopLink = document.getElementById('shopLink');
    const shopMenu = document.getElementById('shopMenu');
    const chevron = shopLink.querySelector('i');
    let menuOpen = false;
 
    // Toggle menu on click
    shopLink.addEventListener('click', function(e) {
        e.preventDefault();
        menuOpen = !menuOpen;
        
        if (menuOpen) {
            shopMenu.classList.remove('hidden');
            // Force reflow to ensure the element is in the DOM before animating
            void shopMenu.offsetWidth;
            shopMenu.classList.add('show');
        } else {
            shopMenu.classList.remove('show');
            // Wait for the animation to complete before hiding
            setTimeout(() => {
                if (!menuOpen) {
                    shopMenu.classList.add('hidden');
                }
            }, 200); // Match this with your CSS transition duration
        }
        
        // Toggle chevron rotation
        chevron.classList.toggle('fa-chevron-down', !menuOpen);
        chevron.classList.toggle('fa-chevron-right', menuOpen);
    });
 
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('#shopDropdown')) {
            if (menuOpen) {
                shopMenu.classList.remove('show');
                chevron.classList.remove('fa-chevron-right');
                chevron.classList.add('fa-chevron-down');
                setTimeout(() => {
                    shopMenu.classList.add('hidden');
                    menuOpen = false;
                }, 200);
            }
        }
    });
 
    // Keep menu open when clicking inside it
    shopMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});