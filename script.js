const navbarNav = document.querySelector(".navbar-nav");
const humberger = document.querySelector("#humberger-menu");

humberger.addEventListener("click", () => {
	navbarNav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
	if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.toggle("active");
	}
});
