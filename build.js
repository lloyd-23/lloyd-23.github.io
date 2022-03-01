const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.getElementById('header');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#282d32';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
var form = document.getElementById("emailInput");

// document.getElementById("sendButton").addEventListener("click", function () {
//   form.submit();
// });

new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  dots: '.dots',
  draggable: true,
  rewind: true,
  arrows: {
    prev: '.slider-prev',
    next: '.slider-next'
  }
});