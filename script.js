let burger = document.querySelector('#burger');
let navBar = document.querySelector(".header__nav");

const mediaQuery = window.matchMedia('(max-width: 768px)');

const callback = (event) => {
	if (event.matches) {
		navBar.insertAdjacentHTML(
			'beforeend',
			'<a href="#">Связаться с нами</a>'
		);
		console.log("Matches");
	} else {
		if (document.querySelectorAll('.header__nav>*').length > 2) {
			console.log("Deletim");
			document.querySelector('.header__nav>*:last-child').remove();
		}
	}
}

callback(mediaQuery);
mediaQuery.addEventListener("change", callback);



burger.addEventListener("click", () => {
	burger.classList.toggle("active");
	navBar.classList.toggle("active");
})