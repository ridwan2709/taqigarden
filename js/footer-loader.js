/**
 * Footer Loader for Taqi Garden
 * This script handles the dynamic loading of the footer component
 */

// Function to load footer content
function loadFooter() {
    // Get or create footer placeholder
    let footerPlaceholder = document.getElementById('footer-placeholder');
    
    // If no footer placeholder exists, create one at the end of the body
    if (!footerPlaceholder) {
        footerPlaceholder = document.createElement('div');
        footerPlaceholder.id = 'footer-placeholder';
        document.body.appendChild(footerPlaceholder);
    }

    // Fetch and inject footer content
    fetch('includes/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load footer');
            }
            return response.text();
        })
        .then(html => {
            if (footerPlaceholder) {
                footerPlaceholder.outerHTML = html;
                console.log('Footer loaded successfully');
            }
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            // Fallback to a simple footer if loading fails
            if (footerPlaceholder) {
                footerPlaceholder.outerHTML = `
                    <footer class="bg-gray-900 text-white py-8">
                        <div class="container mx-auto px-6 text-center">
                            <p>&​copy; ${new Date().getFullYear()} Taqi Garden. All rights reserved.</p>
                        </div>
                    </footer>
                `;
            }
        });
}

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadFooter);

// Also export the function in case it needs to be used elsewhere
export { loadFooter };