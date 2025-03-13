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
}); 