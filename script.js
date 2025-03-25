window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// document.querySelectorAll('nav ul li a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         if (this.getAttribute('href').startsWith('')) {
//             e.preventDefault();
//             const target = document.querySelector(this.getAttribute('href'));
//             if (target) {
//                 target.scrollIntoiView({ behavior: "smooth"});
//             }
//         }
//     });
// });

function popEffect(element) {
    element.classList.add("pop");

    setTimeout(() => {
        element.classList.remove("pop");
    }, 200);
}