// Botón hamburguesa
const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")
const navMenuItems = document.querySelectorAll('.nav-menu-item');

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menu");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menu");
    }
});

for (let i = 0; i < navMenuItems.length; i++) {
    navMenuItems[i].addEventListener('click', () => {
        navMenu.classList.remove('nav-menu_visible')
    });
};

//Activar skills
function reveal() {
    var reveals = document.querySelectorAll(".skill");
    var elementTop = document.querySelector(".section-list-hab").getBoundingClientRect().top;
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        //   var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();

