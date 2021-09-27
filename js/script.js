$(document).ready(function () {
	$('.item-1').click(function(event) {
		$('.arrow__nav-1').toggleClass('active');
	});
	$('.item-2').click(function(event) {
		$('.arrow__nav-2').toggleClass('active');
	});
	$('.item-3').click(function(event) {
		$('.arrow__nav-3').toggleClass('active');
	});
	$('.item-4').click(function(event) {
		$('.arrow__nav-4').toggleClass('active');
	});
	$('.item-5').click(function(event) {
		$('.arrow__nav-5').toggleClass('active');
	});
	$('.nav__search').click(function(event) {
		$('.search').toggleClass('active');
	});
	 $('.marine__slider').slick({
	 });
	 $('.projects__slider').slick({
			arrows: false,
	 });
	$('.twitter__slider').slick({

	});
});

let arrow = (document.querySelector(".butArrow"));
let coll = document.getElementsByClassName('collapsible');
for (let i = 0; i < coll.length; i++) {
	coll[i].addEventListener('click', function () {
		this.classList.toggle('active');
		let content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
			content.classList.remove('border');
			arrow.classList.remove('arrowUp');
			arrow.classList.add('arrowDown');
		} else {
			content.style.maxHeight = '130px'
			content.classList.add('border');
			arrow.classList.add('arrowUp');
		}
	});

}