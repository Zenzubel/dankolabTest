'use strict';
document.addEventListener('DOMContentLoaded', () => {

	//start slider Swiper////////////////////
	function swiperInit() {
			let mySwiper = new Swiper ('.table__swiper-wrap', {
			containerModifierClass: 'table__swiper-wrap', 
			wrapperClass: 'table__swiper-cont',
			slideClass: 'table__swiper-item',
			loop: false,
			watchOverflow: false,
			observeParents: true,
			observeSlideChildren: true,
			observer: true,
			spaceBetween: 10,
			autoHeight: false,
			slidesPerView: 1,
			centerSlides: false,
			simulateTouch: false,
			navigation: {
				nextEl: '.table__button-next',
				prevEl: '.table__button-prev',
			},
			breakpoints: {
				479: {
					slidesPerView: 2,
				},
			},
		});
	}

	function getMedia() {
		const mediaQuery = window.matchMedia('(max-width: 768px)');
		if (mediaQuery.matches) {
			swiperInit();
			console.log('asdasd');
		}
	}
	getMedia();
	//end slider Swiper////////////////////

	const getTextBodyHeight = document.querySelectorAll('.table__item-body');
	const getTextItem = document.querySelectorAll('.table__item');

	getTextBodyHeight.forEach(item => {
		if (item.scrollHeight >= 100) {
			item.parentElement.classList.add('table__item--arrow');
		} else if (item.scrollHeight < 100) {
			item.parentElement.classList.remove('table__item--arrow');
		}
		console.log(item.scrollHeight);
	});

});
