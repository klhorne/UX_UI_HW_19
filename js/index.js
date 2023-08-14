console.log("Your index.js file is loaded correctly!");

const workNavItem = document.querySelector('.nav-work');
const aboutNavItem = document.querySelector('.nav-about');
const resumeNavItem = document.querySelector('.nav-resume');
const contactNavItem = document.querySelector('.nav-contact');

const workSection = document.querySelector('.mywork1');
const aboutSection = document.querySelector('.aboutoverview');
const resumeSection = document.querySelector('.resumecenterpage');
const contactSection = document.querySelector('.contact'); // Add this line

workNavItem.addEventListener('click', () => scrollToSection(workSection));
aboutNavItem.addEventListener('click', () => scrollToSection(aboutSection));
resumeNavItem.addEventListener('click', () => scrollToSection(resumeSection));
contactNavItem.addEventListener('click', () => scrollToSection(contactSection)); // Add this line

function scrollToSection(section) {
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}

const footerLinks = document.querySelectorAll('.footer-section.links a');

footerLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            scrollToSection(targetSection);
        }
    });
});

