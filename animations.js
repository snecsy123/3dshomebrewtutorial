// 3DS-style animations
document.addEventListener('DOMContentLoaded', function() {
    // Boot animation
    const topScreen = document.querySelector('.top-screen');
    topScreen.style.opacity = '0';
    
    setTimeout(() => {
        // Simulate 3DS boot sequence
        topScreen.style.transition = 'opacity 1s';
        topScreen.style.opacity = '1';
        
        // Add animated elements
        const animationArea = document.querySelector('.animation-area');
        const pixelGrid = document.createElement('div');
        pixelGrid.className = 'pixel-grid';
        animationArea.appendChild(pixelGrid);
        
        // Create floating 3DS elements
        for (let i = 0; i < 10; i++) {
            createFloatingIcon();
        }
    }, 500);
    
    // Create floating 3DS icons animation
    function createFloatingIcon() {
        const icon = document.createElement('div');
        icon.className = 'floating-icon';
        
        // Random icon from a set
        const icons = ['gamecard', 'home', 'settings', 'fbi', 'luma'];
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        icon.innerHTML = `<img src="icons/${randomIcon}.png" alt="${randomIcon}">`;
        
        // Random position and animation
        const startX = Math.random() * 80 + 10;
        const startY = Math.random() * 60 + 10;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        
        icon.style.left = `${startX}%`;
        icon.style.top = `${startY}%`;
        icon.style.animation = `float ${duration}s infinite ${delay}s`;
        
        document.querySelector('.animation-area').appendChild(icon);
    }
    
    // Button hover effects
    const buttons = document.querySelectorAll('.button, .app-icon');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.filter = 'brightness(1.2)';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.filter = 'brightness(1)';
        });
    });
});