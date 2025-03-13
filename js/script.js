// JavaScript for the website
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');
    
    // Get the current year for the footer copyright
    const footer = document.querySelector('footer p');
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace('2023', year);
    }
    
    // Add a simple animation to the heading
    const heading = document.querySelector('h1');
    if (heading) {
        heading.style.opacity = '0';
        heading.style.transition = 'opacity 1s ease-in-out';
        
        setTimeout(() => {
            heading.style.opacity = '1';
        }, 300);
    }
    
    // Make the URL clickable and copyable
    const urlElement = document.querySelector('.large-url');
    if (urlElement) {
        urlElement.addEventListener('click', () => {
            // Copy the URL to clipboard
            const url = urlElement.textContent;
            navigator.clipboard.writeText(url)
                .then(() => {
                    // Show a temporary "Copied!" message
                    const originalText = urlElement.textContent;
                    urlElement.textContent = 'Copied to clipboard!';
                    urlElement.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    
                    // Revert back after 2 seconds
                    setTimeout(() => {
                        urlElement.textContent = originalText;
                        urlElement.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy URL: ', err);
                });
        });
        
        // Add a pulsing animation to draw attention
        setTimeout(() => {
            urlElement.classList.add('pulse');
        }, 1000);
    }
}); 