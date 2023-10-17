document.addEventListener("DOMContentLoaded", () => {
	const menu = document.querySelector('.menu__body');
	const menuBtn = document.querySelector('.menu__icon');
	const body = document.body;
	const menuLinks = document.querySelectorAll('.menu__link');

	menuBtn.addEventListener('click', () => {
		menu.classList.add('active');
		menuBtn.classList.add('active');
		body.classList.add('lock');
	});

	menuLinks.forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active');
			menuBtn.classList.remove('active');
			body.classList.remove('lock');
		});
	});
});

//# sourceMappingURL=index.579125c3.js.map
