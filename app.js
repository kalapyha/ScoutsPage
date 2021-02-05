window.addEventListener('scroll', function (e) {
	const logo = document.querySelector('.navbar-brand').children;
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		// Get logo img and update its width and height
		logo[0].style.width = '90px';
		logo[0].style.height = '90px';
	} else {
		logo[0].style.width = '130px';
		logo[0].style.height = '130px';
	}
});
