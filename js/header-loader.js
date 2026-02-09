/**
 * Header Loader for Taqi Garden
 * This script handles the dynamic loading of the header component and its functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Create header placeholder if it doesn't exist
    let headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) {
        headerPlaceholder = document.createElement('div');
        headerPlaceholder.id = 'header-placeholder';
        document.body.insertBefore(headerPlaceholder, document.body.firstChild);
    }

    // Load header content
    fetch('includes/header.html')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load header');
            return response.text();
        })
        .then(html => {
            headerPlaceholder.innerHTML = html;
            initHeaderScripts();
        })
        .catch(error => {
            console.error('Error loading header:', error);
            // Fallback header
            headerPlaceholder.innerHTML = `
                <header class="bg-white shadow-sm">
                    <div class="container mx-auto px-6 py-4">
                        <div class="flex justify-between items-center">
                            <a href="index.html" class="text-2xl font-bold text-gray-800">Taqi Garden</a>
                            <nav class="hidden md:flex space-x-6">
                                <a href="koleksi.html" class="text-gray-600 hover:text-gray-900">Collection</a>
                                <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
                                <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
                            </nav>
                            <button class="md:hidden text-gray-600">
                                <i class="fas fa-bars text-xl"></i>
                            </button>
                        </div>
                    </div>
                </header>
            `;
            initHeaderScripts();
        });

    function initHeaderScripts() {
        // Mobile menu toggle
        const mobileMenu = document.getElementById('mobile-menu');
        const openMenuBtn = document.querySelector('[aria-label="Open menu"]');
        const closeMenuBtn = document.getElementById('close-menu');

        if (openMenuBtn && mobileMenu) {
            openMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            });
        }

        if (closeMenuBtn && mobileMenu) {
            closeMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = '';
            });
        }

        // Shop dropdown functionality
        const shopLink = document.getElementById('shopLink');
        const shopMenu = document.getElementById('shopMenu');

        if (shopLink && shopMenu) {
            let menuOpen = false;
            const chevron = shopLink.querySelector('i');
            
            shopLink.addEventListener('click', function(e) {
                e.preventDefault();
                menuOpen = !menuOpen;
                
                if (menuOpen) {
                    shopMenu.classList.remove('hidden');
                    shopMenu.classList.add('show');
                    if (chevron) {
                        chevron.classList.add('rotate-180');
                    }
                } else {
                    shopMenu.classList.remove('show');
                    if (chevron) {
                        chevron.classList.remove('rotate-180');
                    }
                    // Wait for the animation to complete before hiding
                    setTimeout(() => {
                        if (!menuOpen) {
                            shopMenu.classList.add('hidden');
                        }
                    }, 300);
                }
            });

            // Close when clicking outside
            document.addEventListener('click', function(e) {
                if (!shopLink.contains(e.target) && !shopMenu.contains(e.target)) {
                    menuOpen = false;
                    shopMenu.classList.remove('show');
                    if (chevron) {
                        chevron.classList.remove('rotate-180');
                    }
                    setTimeout(() => {
                        shopMenu.classList.add('hidden');
                    }, 300);
                }
            });
        }

        // Search functionality
        const searchToggle = document.getElementById('search-toggle');
        const searchContainer = document.getElementById('search-container');
        const searchClose = document.getElementById('search-close');

        if (searchToggle && searchContainer && searchClose) {
            searchToggle.addEventListener('click', (e) => {
                e.preventDefault();
                searchContainer.classList.toggle('hidden');
                const searchInput = document.getElementById('search-input');
                if (searchInput && !searchContainer.classList.contains('hidden')) {
                    searchInput.focus();
                }
            });

            searchClose.addEventListener('click', () => {
                searchContainer.classList.add('hidden');
            });
        }
    }
});