document.addEventListener('DOMContentLoaded', function () {
    console.log("Your index.js file is loaded correctly!");

    // Navigation scrolling
    const sections = {
        work: document.querySelector('.mywork1'),
        about: document.querySelector('.aboutoverview'),
        resume: document.querySelector('.resumecenterpage'),
        contact: document.querySelector('.contact'),
    };

    const navItems = {
        work: document.querySelector('.nav-work'),
        about: document.querySelector('.nav-about'),
        resume: document.querySelector('.nav-resume'),
        contact: document.querySelector('.nav-contact'),
    };

    Object.keys(navItems).forEach(sectionKey => {
        navItems[sectionKey].addEventListener('click', () => scrollToSection(sections[sectionKey]));
    });

    function scrollToSection(section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }

    // Download resume button
    const downloadButton = document.getElementById("downloadButton");

    downloadButton.addEventListener("click", () => {
        const pdfUrl = "images/Resumeportfolio.pdf"; 
        const fileName = "Resumeportfolio.pdf"; 

        const a = document.createElement("a");
        a.href = pdfUrl;
        a.download = fileName;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});
