const imgsub = document.querySelector('#imgsub');

const changeText = () => {
    if (imgsub.innerHTML == "Web Dev") {
        imgsub.innerHTML = "Mobile Dev";
    } else {
        imgsub.innerHTML = "Web Dev";
    }
    setTimeout(changeText, 3000);
}

changeText();
const scrollto = document.querySelector('#scrollto');
document.querySelector('#downarrow').addEventListener('click', (event) => {
    scrollto.scrollIntoView({ behavior: "smooth" })
})

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('#navbar');
    if (window.scrollY >= scrollto.scrollHeight && window.innerHeight * 0.9 <= window.scrollY) {
        navbar.className = navbar.className.replace('navbar-theme-2', '');
        navbar.className = navbar.className.replace('navbar-theme-1', '') + " navbar-theme-2 ";
    } else {
        navbar.className = navbar.className.replace('navbar-theme-1', '');
        navbar.className = navbar.className.replace('navbar-theme-2', '') + " navbar-theme-1 ";
    }
})