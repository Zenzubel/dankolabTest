////////////////////start slider Swiper////////////////////
new Swiper ('.decision__container', {
	containerModifierClass: 'decision__container', 
	wrapperClass: 'decision__wrapper',
	slideClass: 'decision__item',
	// direction: 'vertical',
	loop: false,
	watchOverflow: false,
	observeParents: false,
	observeSlideChildren: false,
	observer: false,
	spaceBetween: 12,
	autoHeight: false,
	slidesPerView: 1,
	centerSlides: false,
	simulateTouch: true,
	navigation: {
		nextEl: '.decision__button-next',
		prevEl: '.decision__button-prev',
	},
	breakpoints: {
		660: {
			slidesPerView: 2,
		},
		900: {
			slidesPerView: 3,
		},
	},
	autoplay: {
		delay: 2500,
	},
	pagination: {
		el: '.about__slider-paginations',
		clickable: true,
		type: 'fraction',
		renderFraction: function (currentClass, totalClass, index, total) {
			return '<span class="' + currentClass + '">0 '+ index +' </span>' +
			'  ' + '<span class="' + totalClass + '">0 '+ total +' </span>';
		},
	},
});

//custom-auto-height
	let getContainerHeight = document.querySelector('.reviews__slider-container');
	let getContentHeight = document.querySelectorAll('.reviews__content');

	function autoHeight(item, i) {
		let height = item[i].offsetHeight + 'px';
		getContainerHeight.style.cssText = `height: ${height};`;
	}
	autoHeight(getContentHeight, 0);

	mySwiper.on('slideChange', function () {
		let realIndex = mySwiper.realIndex;
		console.log(realIndex);
		autoHeight(getContentHeight, realIndex);
	});
////////////////////end slider Swiper////////////////////