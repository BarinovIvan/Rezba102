const burger = document.querySelector('#burger');
const navBar = document.querySelector(".header__nav");
const headerUnderline = document.querySelector('.header .container')

const mediaQuery = window.matchMedia('(max-width: 768px)');

const headerAddLink = (event) => {
	if (event.matches) {
		navBar.insertAdjacentHTML(
			'beforeend',
			'<a href="#" class = "nav__item">Связаться с нами</a>'
		);
		
		console.log("Matches");
	} else {
		if (document.querySelectorAll('.header__nav>*').length > 2) {
			console.log("Deletim");
			document.querySelector('.header__nav>*:last-child').remove();
		}
	}
}

headerAddLink(mediaQuery);
mediaQuery.addEventListener("change", headerAddLink);



burger.addEventListener("click", () => {
	burger.classList.toggle("active");
	navBar.classList.toggle("active");
	headerUnderline.classList.toggle("active");

})