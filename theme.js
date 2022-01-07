const light = document.getElementById('light');

light.addEventListener('change', () => {
	document.body.classList.toggle('body-light');

	document.querySelector(".main").classList.toggle('light-main');

	document.querySelector(".header").classList.toggle('light-header');
	document.querySelector(".content").classList.toggle('light-content');
	document.querySelector(".aside").classList.toggle('light-aside');
	document.querySelector(".nav").classList.toggle('light-nav');

	document.querySelector(".container_main").classList.toggle('container_main-light');
	document.querySelector(".container").classList.toggle('light-container');
});

// .container_main body-light main