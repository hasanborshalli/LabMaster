//Lazy loading
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const main = document.getElementById("main");
    main.style.visibility = "visible"; // Show body content
    main.style.opacity = "1"; // Make content visible
    preloader.style.display = "none";
});
//show and hide burger menu
const hiddenLinks = document.getElementById("hidden-links");
function showLinks() {
    if (hiddenLinks.style.display == "block") {
        hiddenLinks.classList.remove("show");
        hiddenLinks.classList.add("remove");
        setTimeout(() => {
            hiddenLinks.style.display = "none";
        }, 900);
    } else {
        hiddenLinks.style.display = "block";
        hiddenLinks.classList.add("show");
        hiddenLinks.classList.remove("remove");
    }
}
//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        const navHeight = document.querySelector("nav").offsetHeight; // Get the height of the fixed navbar
        const targetPosition =
            target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        const startPosition = window.pageYOffset;
        const duration = 1000; // Duration in milliseconds
        const startTime = performance.now();

        function scrollAnimation(currentTime) {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            window.scrollTo(
                0,
                startPosition + (targetPosition - startPosition) * progress
            );
            if (timeElapsed < duration) {
                requestAnimationFrame(scrollAnimation);
            }
        }

        requestAnimationFrame(scrollAnimation);
    });
});
//animations
document.addEventListener("DOMContentLoaded", mainFunction);

function mainFunction() {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.07,
    };

    let observer = new IntersectionObserver(changeLinks, observerOptions);

    document.querySelectorAll("section").forEach((section) => {
        observer.observe(section);
    });
    const observerOptions2 = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    let observer2 = new IntersectionObserver(changeLinks2, observerOptions2);

    document.querySelectorAll("section").forEach((section) => {
        observer2.observe(section);
    });
}

function changeLinks(elements, observer) {
    elements.forEach((element) => {
        if (element.isIntersecting) {
            if (element.target.className == "home") {
                document
                    .querySelector(".home h1")
                    .classList.add("h1Animate-home");
                document.querySelectorAll(".home p").forEach((p) => {
                    p.classList.add("pAnimate-home");
                });
            }
            if (element.target.className == "info") {
                document.querySelectorAll(".block").forEach((block) => {
                    block.classList.add("infoAnimate");
                });
            }
            if (element.target.className == "about") {
                document.querySelectorAll(".advantage").forEach((advantage) => {
                    advantage.classList.add("aboutAnimate");
                });
            }
            if (element.target.className == "suppliers") {
                document
                    .querySelectorAll(".suppliers img")
                    .forEach((supplier) => {
                        supplier.classList.add("supplierAnimate");
                    });
            }
        }
    });
}
let links = document.querySelectorAll("nav li");
function changeLinks2(elements, observer2) {
    elements.forEach((element) => {
        if (element.isIntersecting) {
            if (element.target.className == "home") {
                links.forEach((link) => {
                    link.classList.remove("active");
                });
                links[0].classList.add("active");
            }
            if (element.target.className == "about") {
                links.forEach((link) => {
                    link.classList.remove("active");
                });
                links[1].classList.add("active");
            }
            if (element.target.className == "scopes") {
                links.forEach((link) => {
                    link.classList.remove("active");
                });
                links[2].classList.add("active");
            }
            if (element.target.className == "suppliers") {
                links.forEach((link) => {
                    link.classList.remove("active");
                });
                links[3].classList.add("active");
            }
            if (element.target.className == "contact") {
                links.forEach((link) => {
                    link.classList.remove("active");
                });
                links[4].classList.add("active");
            }
        }
    });
}
