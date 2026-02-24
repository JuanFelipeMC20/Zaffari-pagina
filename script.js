// script.js

// Function to show a section
function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
        // Smooth scrolling to the section
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Function to hide a section
function hideSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'none';
    }
}

// Example usage:
// showSection('activities');
// hideSection('activities');