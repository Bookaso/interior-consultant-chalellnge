const navLinks = document.getElementsByClassName('nav-link')
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click",()=>{
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(" active","");
        navLinks[i].className += " active";
    })
}

//Burger menu on Click
let btn = document.getElementsByClassName("burger-menu");

btn[0].addEventListener('click', () => {
    btn[0].classList.toggle('active-2');
    btn[0].classList.toggle('not-active');

    let navMenu = document.getElementsByClassName("nav-menu");
    if (navMenu[0].style.display === "" || navMenu[0].style.display === "none") {
        navMenu[0].style.display = "grid"
    }else{
        navMenu[0].style.display = "none"
    }
});
window.addEventListener("resize", () => {
    let w = window.screen.width;
    let navMenu = document.getElementsByClassName("nav-menu");
    if (w >= 820) {
        navMenu[0].style.display = "grid"
    }else{
        navMenu[0].style.display = "none"
    }
})