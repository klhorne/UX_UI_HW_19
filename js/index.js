console.log("Your index.js file is loaded correctly!");

document.addEventListener('DOMContentLoaded', function() {
    // Create the design container
    const designContainer = document.createElement('div');
    designContainer.className = 'design-container';
    designContainer.textContent = 'Design';

    // Create the overlay container
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = `
        <p>User-Centered Design: Developed intuitive and user-centric interfaces by conducting user research, creating user personas, and employing journey mapping to ensure seamless and engaging user experiences.</p>
        <p>Testing: Conducted usability tests to gather valuable user feedback and iteratively refine designs, utilizing tools like User Testing to validate design choices and enhance user satisfaction.</p>
    `;

    // Append the overlay to the design container
    designContainer.appendChild(overlay);

    // Append the design container to the center-container section
    const centerContainer = document.querySelector('.center-container');
    centerContainer.appendChild(designContainer);
});
