/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navBar = document.getElementById('navbar__list');

let numberOfSections = sections.length;

const links = document.querySelectorAll('.menu__link');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function makeNavBar() {
    for (const section of sections) {
        const sectionName = section.getAttribute('data-nav'); // Gets section name for use
        const sectionLink = section.getAttribute('id'); // Use for creating a clickable link to the corresponding section
        const navItem = document.createElement('li'); 
        navItem.innerHTML = `<a class='menu__link ${sectionLink}' href='#'>${sectionName}</a>`; // sets the HTML of the new list element including
        navBar.appendChild(navItem);                                                                          // making it a link
    }
}

// Add class 'active' to section when it is near top of viewport
// gotta figure out how to get an index
function makeActive() {
    for (const [index, section] of sections.entries()) { // Found this entries method which allows use of an index, where a for ...of loop doesn't normally
      const box = section.getBoundingClientRect();
      // You can play with the values in the "if" condition to further make it more accurate. 
      if (box.top <= 400 && box.bottom >= 400) {
        // Apply active state on the current section and the corresponding Nav link.
        section.classList.add('your-active-class');
        navBar.children[index].classList.add('your-active-class'); // Takes the index of the corresponding child element and adds the class
      } 
      else {
        // Remove active state from other section and corresponding Nav link.
        section.classList.remove('your-active-class');
        navBar.children[index].classList.remove('your-active-class'); // Removes class
      }
    }
  }


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

makeNavBar();

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', () => {
    makeActive();
});

// More simple callback function --- document.addEventListener('scroll', makeActive);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

document.addEventListener('click', function(e) {
    e.preventDefault();

    for (let i = 0; i <= sections.length; i++) {
        let target = document.getElementById(`section${i}`);
        console.log(target);
    }

    console.log(target);
    
    let targetPos = target.getBoundingClientRect();
    
    window.scrollTo({
        top: targetPos.top,
        behavior: 'smooth'
    });
});

// Set sections as active