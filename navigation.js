// Navigation logic
document.addEventListener('DOMContentLoaded', function() {
    const appIcons = document.querySelectorAll('.app-icon');
    const contentSections = document.querySelectorAll('.content-section');
    const selectBtn = document.getElementById('select-btn');
    const backBtn = document.getElementById('back-btn');
    
    // Current selection tracking
    let currentSelection = 0;
    let currentSection = null;
    
    // Navigation functions
    function navigateToSection(sectionId) {
        // Hide all sections
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show selected section with animation
        const section = document.getElementById(`${sectionId}-content`);
        if (section) {
            section.style.display = 'block';
            section.style.animation = 'slideIn 0.5s forwards';
            currentSection = sectionId;
        }
    }
    
    // Icon click handling
    appIcons.forEach((icon, index) => {
        icon.addEventListener('click', function() {
            currentSelection = index;
            navigateToSection(this.dataset.section);
        });
    });
    
    // Button controls
    selectBtn.addEventListener('click', function() {
        if (appIcons[currentSelection]) {
            navigateToSection(appIcons[currentSelection].dataset.section);
        }
    });
    
    backBtn.addEventListener('click', function() {
        if (currentSection) {
            // Hide current section with animation
            const section = document.getElementById(`${currentSection}-content`);
            section.style.animation = 'slideOut 0.5s forwards';
            setTimeout(() => {
                section.style.display = 'none';
                currentSection = null;
            }, 500);
        }
    });
    
    // D-pad navigation
    const upBtn = document.getElementById('up-btn');
    const downBtn = document.getElementById('down-btn');
    const leftBtn = document.getElementById('left-btn');
    const rightBtn = document.getElementById('right-btn');
    
    upBtn.addEventListener('click', function() {
        if (currentSelection >= 3) {
            updateSelection(currentSelection - 3);
        }
    });
    
    downBtn.addEventListener('click', function() {
        if (currentSelection + 3 < appIcons.length) {
            updateSelection(currentSelection + 3);
        }
    });
    
    leftBtn.addEventListener('click', function() {
        if (currentSelection % 3 !== 0) {
            updateSelection(currentSelection - 1);
        }
    });
    
    rightBtn.addEventListener('click', function() {
        if (currentSelection % 3 !== 2 && currentSelection + 1 < appIcons.length) {
            updateSelection(currentSelection + 1);
        }
    });
    
    function updateSelection(newSelection) {
        // Reset previous selection
        appIcons[currentSelection].style.transform = 'scale(1)';
        appIcons[currentSelection].style.filter = 'brightness(1)';
        
        // Update to new selection
        currentSelection = newSelection;
        appIcons[currentSelection].style.transform = 'scale(1.2)';
        appIcons[currentSelection].style.filter = 'brightness(1.5)';
        
        // Play sound effect
        playSound('select');
    }
    
    // Sound effects
    function playSound(type) {
        const audio = new Audio();
        audio.src = type === 'select' ? 'sounds/select.wav' : 'sounds/back.wav';
        audio.volume = 0.3;
        audio.play();
    }
});