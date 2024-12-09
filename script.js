// // active hamburger menu 
// let menuIcon = document.querySelector(".menu-icon");
// let navlist = document.querySelector(".navlist")
// menuIcon.addEventListener("click",()=>{
//     menuIcon.classList.toggle("active");
//     navlist.classList.toggle("active");
//     document.body.classList.toggle("open");
// });

// // remove navlist
// navlist.addEventListener("click",()=>{
//     navlist.classList.remove("active");
//     menuIcon.classList.remove("active");
//     document.body.classList.remove("open");
// })

// // active menu 

// let menuLi = document.querySelectorAll("header ul li a");
// let section = document.querySelectorAll('section');

// function activeMenu(){
//     let len = section.length;
//     while(--len && window.scrollY + 67 < section[len].offsetTop){}
//     menuLi.forEach(sec => sec.classList.remove("active"));
//     menuLi[len].classList.add("active");
// }
// activeMenu();
// window.addEventListener("scroll",activeMenu);


// // scroll reveal

// ScrollReveal({ 
//     distance:"50px",
//     duration:1200,
//     delay:80,
//     // reset: true,
// });


// ScrollReveal().reveal('.hero-info,.main-text,.proposal,.heading', { origin: "top" });
// ScrollReveal().reveal('.about-img,.fillter-buttons,.contact-info,.allContacts', { origin: "left" });
// ScrollReveal().reveal('.about-content,.skills,.proposal', { origin: "right" });
// ScrollReveal().reveal('.allServices,.portfolio-gallery,.blog-box,footer,.contacts,.down-box,.blog,.portfolio, services,.about,.img-hero', { origin: "bottom" });


// Hamburger Menu Functionality
const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector(".navlist");
const body = document.body;

// Toggle the hamburger menu visibility
menuIcon?.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navList?.classList.toggle("active");
    body.classList.toggle("open");
});

// Close the menu when clicking on the nav list
navList?.addEventListener("click", () => {
    closeMenu();
});

// Function to close the hamburger menu
function closeMenu() {
    menuIcon?.classList.remove("active");
    navList?.classList.remove("active");
    body.classList.remove("open");
}

// Active Menu Highlighting Based on Scroll
const menuItems = document.querySelectorAll("header ul li a");
const sections = document.querySelectorAll("section");

function updateActiveMenu() {
    let activeIndex = sections.length - 1; // Start from the last section
    while (
        activeIndex > 0 &&
        window.scrollY + 67 < sections[activeIndex].offsetTop
    ) {
        activeIndex--;
    }

    // Update active state of menu items
    menuItems.forEach((item) => item.classList.remove("active"));
    if (menuItems[activeIndex]) {
        menuItems[activeIndex].classList.add("active");
    }
}

// Initialize the active menu
updateActiveMenu();
window.addEventListener("scroll", updateActiveMenu);

// scroll reveal

// Initialize ScrollReveal with global defaults
const scrollReveal = ScrollReveal({
    distance: "50px",    // How far the element moves during animation
    duration: 1500,      // Animation duration in milliseconds
    delay: 40,          // Delay before the animation starts
    // reset: true          // Reset the animation when scrolling back
});

// Reveal from the top
scrollReveal.reveal('.hero-info, .main-text, .proposal', {
    origin: "top",       // Animation starts from the top
});

// Reveal from the bottom
scrollReveal.reveal('.footer, .cta-button', {
    origin: "bottom",    // Animation starts from the bottom
    interval: 80        // Slightly faster interval for these elements
});

// // Reveal from the left
// scrollReveal.reveal('.left-menu,', {
//     origin: "left",      // Animation starts from the left
//     duration: 1800       // Slower animation for emphasis
// });

// // Reveal from the right
// scrollReveal.reveal('.portfolio .fillter-buttons,', {
//     origin: "right",     // Animation starts from the right
//     duration: 1800
// });

// Fade in without movement
scrollReveal.reveal('.portfolio-gallery, .about-content, .myfooter', {
    opacity: 0,          // Element starts completely transparent
});

// Scale up animation
scrollReveal.reveal('.portfolio-img', {
    scale: 0.85,         // Elements scale up from 85% to their original size
});


// Combined effects (e.g., rotate and scale)
scrollReveal.reveal('.button, .skill, .contactsItem, .servicesItem, .icon-contacts, .icon-services, .bg-icon', {
    scale: 0.9,          // Slight scale up
    rotate: { x: 0, y: 80, z: 0 }, // Rotate around the Y-axis
    interval: 80        // Delay between revealing each grid item
});

// Staggered reveal for a grid layout
scrollReveal.reveal('.grid-item', {
    interval: 80,       // Delay between revealing each grid item
    origin: "bottom"
});

// // Delayed animations for specific sections
// scrollReveal.reveal('.bg-icon, .skill, .icon-contacts, .icon-services', {
//     delay: 200,          // Wait 500ms before starting the animation
//     origin: "top",
//     duration: 1500,
//     interval: 200        // Delay between revealing each grid item
// });


// // rotate text js code 
// let text = document.querySelector(".text p");

// text.innerHTML = text.innerHTML.split("").map((char,i)=>
//     `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
// ).join("");


// switch between about buttons 
// function showCompany(companyIndex) {
//     const companyDescriptions = document.querySelectorAll('.company-description');
//     companyDescriptions.forEach(description => description.style.display = 'none');

//     const selectedCompany = document.getElementById(`company${companyIndex}`);
//     selectedCompany.style.display = 'block';

//     const companyButtons = document.querySelectorAll('.company-button');
//     companyButtons.forEach(btn => btn.classList.remove('active'));
//     companyButtons[companyIndex - 1].classList.add('active');
// }

// function showContent(contentType, companyIndex) {
//     const contentSections = document.querySelectorAll(`#company${companyIndex} .content-section`);
//     contentSections.forEach(section => section.style.display = 'none');

//     const selectedContent = document.getElementById(`content${contentType}${companyIndex}`);
//     selectedContent.style.display = 'block';
// }

function showCompany(companyIndex) {
    // Hide all company descriptions
    const companyDescriptions = document.querySelectorAll('.company-description');
    companyDescriptions.forEach(description => description.style.display = 'none');

    // Show the selected company description
    const selectedCompany = document.getElementById(`company${companyIndex}`);
    selectedCompany.style.display = 'block';

    // Remove 'active' class from all company buttons
    const companyButtons = document.querySelectorAll('.company-button');
    companyButtons.forEach(btn => btn.classList.remove('active'));

    // Add 'active' class to the selected company button
    companyButtons[companyIndex - 1].classList.add('active');

    // Show "Course Work" content for the selected company
    showContent('CourseWork', companyIndex);
}

function showContent(contentType, companyIndex) {
    // Hide all content sections for the selected company
    const contentSections = document.querySelectorAll(`#company${companyIndex} .content-section`);
    contentSections.forEach(section => section.style.display = 'none');

    // Show the selected content section
    const selectedContent = document.getElementById(`content${contentType}${companyIndex}`);
    selectedContent.style.display = 'block';
}

function setInitialState() {
    // Show the default company
    showCompany(1);
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', setInitialState);


// portfolio fillter 

var mixer = mixitup('.portfolio-gallery',{
    selectors: {
        target: '.portfolio-box'
    },
    // animation: {
    //     duration: 500
    // }
});


// Initialize swiperjs 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        576:{
            slidesPerView:2,
            spaceBetween:10,
        },
        1200:{
            slidesPerView:3,
            spaceBetween:20,
        },
    }
  });



//   skill Progress bar 

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll",()=>{
    if(!skillsPlayed)
    skillsCounter();
})


function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight >= topPosition + el.offsetHeight)return true;
    return false;
}

function updateCount(num,maxNum){
    let currentNum = +num.innerText;
    
    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(()=>{
            updateCount(num,maxNum)
        },12)
    }
}


let skillsPlayed = false;

function skillsCounter(){
    if(!hasReached(first_skill))return;
    skillsPlayed = true;
    sk_counters.forEach((counter,i)=>{
        let target = +counter.dataset.target;
        let strokeValue = 465 - 465 * (target / 100);

        progress_bars[i].style.setProperty("--target",strokeValue);

        setTimeout(()=>{
            updateCount(counter,target);
        },400)
    });

    progress_bars.forEach(p => p.style.animation = "progress 2s ease-in-out forwards");
}


// side progress bar 

let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#D7E2F6 ${scrollValue}%,#0967FF ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;





// document.getElementById('chatButton').addEventListener('click', function() {
//     // Open the chatbot when the button is clicked
//     window.ChatbaseSDK.open();
// });
