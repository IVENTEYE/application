// const headerScroll = () => {
// 	const header = document.querySelector('.header__bottom');
// 	if (window.pageYOffset > 180) {
// 		header.classList.add('fixed');
// 	} else {
// 		header.classList.remove('fixed');
// 	}
// };

// window.addEventListener('scroll', headerScroll);

if (document.querySelector('.menu-burger')) {
	const menu = document.querySelector('.menu-burger'),
	menuBody = document.querySelector('.menu-burger__body');

menu.addEventListener('click', () => {
	menu.classList.toggle('active');
	menuBody.classList.toggle('active');
	if (menuBody.classList.contains('active')) {
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'visible';
	}
});
}

let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

// const animItems = document.querySelectorAll('.anim-items');

// if (animItems.length > 0) {
// 	const animOnScroll = () => {
// 		for (animItem of animItems) {
// 			const animItemHeight = animItem.offsetHeight;
// 			const animItemOffset = offset(animItem).top;
// 			const animStart = 7;

// 			let animItemPoint = window.innerHeight - animItemHeight / animStart;

// 			if (animItemHeight > window.innerHeight) {
// 				animItemPoint = window.innerHeight - window.innerHeight / animStart;
// 			}

// 			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
// 				animItem.classList.add('active');
// 			} else {
// 				if (!animItem.classList.contains('anim-no-hide')) {
// 					animItem.classList.remove('active');
// 				}
// 			}
// 		}

// 		function offset(el) {
// 			const rect = el.getBoundingClientRect(),
// 				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// 		}
// 	};

// 	window.addEventListener('scroll', animOnScroll);

// 	setTimeout(() => {
// 		animOnScroll();
// 	}, 300);

// }

if (document.querySelectorAll('.slider__main').length > 0) {
	$(function () {
		$('.slider__main-content').slick({
			arrows: true,
			dots: false,
			autoplay: true,
			adaptiveHeight: true,
			centerMode:true,
			variableWidth: true,
			slidesToShow: 1,
			prevArrow: $('.slider__main-arrows-item--prev'),
			nextArrow: $('.slider__main-arrows-item--next'),
		});
	});
}

if (document.querySelectorAll('.events__slider').length > 0) {
	$(function () {
		$('.events__slider').slick({
			arrows: true,
			dots: false,
			autoplay: true,
			centerMode:true,
			centerPadding: '160px',
			variableWidth: true,
			slidesToShow: 3,
			prevArrow: $('.events__slider-arrows-item--prev'),
			nextArrow: $('.events__slider-arrows-item--next'),
			responsive: [
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 2,
						centerMode: false,
						centerPadding: '0px',
						variableWidth: false,
					}
				},
				{
					breakpoint: 720,
					settings: {
						slidesToShow: 1,
						centerMode: true,
						centerPadding: '160px',
						variableWidth: true,
					}
				},
				{
					breakpoint: 376,
					settings: {
						arrows: true,
					}
				},
			]
		});
	});
}

if (document.querySelectorAll('.exhibition__slider-content').length > 0) {
	$(function () {
		$('.exhibition__slider-content').slick({
			arrows: true,
			dots: false,
			autoplay: true,
			infinite: true,
			variableWidth: true,
			slidesToShow: 4,
			prevArrow: $('.exhibition__slider-arrows-item--prev'),
			nextArrow: $('.exhibition__slider-arrows-item--next'),
			responsive: [
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 3,
						centerMode: true,
						centerPadding: '0px',
						variableWidth: false,
					}
				},
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 2,
						centerMode: false,
						centerPadding: '0px',
						variableWidth: false,
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 2,
						centerMode: true,
						centerPadding: '0px',
						variableWidth: false,
					}
				},
			]
		});
	});
}

if (document.querySelectorAll('.competition__slider-content').length > 0) {
	$(function () {
		$('.competition__slider-content').slick({
			arrows: true,
			dots: false,
			autoplay: true,
			infinite: true,
			variableWidth: true,
			slidesToShow: 4,
			prevArrow: $('.competition__slider-arrows-item--prev'),
			nextArrow: $('.competition__slider-arrows-item--next'),
			responsive: [
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 3,
						centerMode: true,
						centerPadding: '0px',
						variableWidth: false,
					}
				},
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 2,
						centerMode: false,
						centerPadding: '0px',
						variableWidth: false,
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 2,
						centerMode: true,
						centerPadding: '0px',
						variableWidth: false,
					}
				},
			]
		});
	});
}

if (document.querySelectorAll('.art__slider-content').length > 0) {
	$(function () {
		$('.art__slider-content').slick({
			arrows: true,
			dots: false,
			autoplay: true,
			infinite: true,
			variableWidth: true,
			slidesToShow: 4,
			prevArrow: $('.art__slider-arrows-item--prev'),
			nextArrow: $('.art__slider-arrows-item--next'),
			responsive: [
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 3,
						centerMode: true,
						centerPadding: '0px',
						variableWidth: false,
					}
				},
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 2,
						centerMode: false,
						centerPadding: '0px',
						variableWidth: false,
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 2,
						centerMode: true,
						centerPadding: '0px',
						variableWidth: false,
					}
				},
			]
		});
	});
}

if (document.querySelectorAll('.shares__slider-content').length > 0) {
	$(function () {
		$('.shares__slider-content').slick({
			arrows: true,
			dots: false,
			autoplay: true,
			infinite: true,
			variableWidth: true,
			slidesToShow: 4,
			prevArrow: $('.shares__slider-arrows-item--prev'),
			nextArrow: $('.shares__slider-arrows-item--next'),
			responsive: [
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 3,
						centerMode: true,
						centerPadding: '0px',
						variableWidth: false,
					}
				},
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 2,
						centerMode: false,
						centerPadding: '0px',
						variableWidth: false,
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 2,
						centerMode: true,
						centerPadding: '0px',
						variableWidth: false,
					}
				},
			]
		});
	});
}

if (document.querySelectorAll('.locations__slider-content').length > 0) {
	$(function () {
		$('.locations__slider-content').slick({
			arrows: true,
			dots: false,
			autoplay: true,
			infinite: true,
			variableWidth: true,
			slidesToShow: 4,
			prevArrow: $('.locations__slider-arrows-item--prev'),
			nextArrow: $('.locations__slider-arrows-item--next'),
			responsive: [
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 3,
						centerMode: true,
						centerPadding: '0px',
						variableWidth: false,
					}
				},
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 2,
						centerMode: false,
						centerPadding: '0px',
						variableWidth: false,
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 2,
						centerMode: true,
						centerPadding: '0px',
						variableWidth: false,
					}
				},
			]
		});
	});
}

if (document.querySelectorAll('.autors').length > 0) {
	$('.slider-nav').slick({
		slidesToShow: 6,
		arrows: false,
		slidesToScroll: 1,
		asNavFor: '.autors__slider-content',
		centerMode: true,
		focusOnSelect: true,
		variableWidth: false,
		responsive: [
			{
				breakpoint: 1001,
				settings: {
					slidesToShow: 5,
					infinite: false,
					centerMode: false,
					variableWidth: true,
				}
			},
		]
	  });

	$('.autors__slider-content').slick({
		asNavFor: '.slider-nav',
		prevArrow: $('.autors__slider-arrows-item--prev'),
		nextArrow: $('.autors__slider-arrows-item--next'),
		centerMode: true,
		centerPadding: '140px',
		responsive: [
			{
				breakpoint: 1151,
				settings: {
					centerPadding: '30px',
				}
			},
			{
				breakpoint: 769,
				settings: {
					centerPadding: '5px',
				}
			},
		]
	});
}

if (document.querySelectorAll('.works').length > 0) {

	$('.works__slider-content').slick({
		prevArrow: $('.works__slider-arrows-item--prev'),
		nextArrow: $('.works__slider-arrows-item--next'),
		centerMode: true,
		centerPadding: '140px',
		responsive: [
			{
				breakpoint: 1151,
				settings: {
					centerPadding: '30px',
				}
			},
			{
				breakpoint: 769,
				settings: {
					centerPadding: '5px',
				}
			},
		]
	});
}

if (document.querySelectorAll('.works__slider-inside').length > 0) {
	$('.inside-slider__slides-works').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		asNavFor: '.nav-inside__slides-works',
		responsive: [
			{
				breakpoint: 701,
				settings: {
					variableWidth: false,
				}
			},
		]
	  });

	  $('.nav-inside__slides-works').slick({
		slidesToShow: 8,
		arrows: false,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: '.inside-slider__slides-works',
		responsive: [
			{
				breakpoint: 701,
				settings: {
					slidesToShow: 2,
					variableWidth: false,
				}
			},
			{
				breakpoint: 376,
				settings: {
					slidesToShow: 2,
					variableWidth: true,
				}
			},
		]
	  });
}

if (document.querySelectorAll('.inside-slider').length > 0) {
	$('.inside-slider__slides').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		asNavFor: '.nav-inside__slides',
		responsive: [
			{
				breakpoint: 701,
				settings: {
					variableWidth: false,
				}
			},
		]
	  });

	  $('.nav-inside__slides').slick({
		slidesToShow: 8,
		arrows: false,
		// rows: 2,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: '.inside-slider__slides',
		responsive: [
			{
				breakpoint: 701,
				settings: {
					slidesToShow: 2,
					variableWidth: false,
				}
			},
			{
				breakpoint: 376,
				settings: {
					slidesToShow: 2,
					variableWidth: true,
				}
			},
		]
	  });
}

if (document.querySelectorAll('.catalog__slider-content').length > 0) {
	$(function () {
		$('.catalog__slider-content').slick({
			arrows: true,
			dots: false,
			autoplay: true,
			centerMode:true,
			infinite: true,
			variableWidth: true,
			slidesToShow: 6,
			prevArrow: $('.catalog__slider-arrows-item--prev'),
			nextArrow: $('.catalog__slider-arrows-item--next'),
			responsive: [
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 426,
					settings: {
						slidesToShow: 2,
					}
				},
			]
		});
	});
}

if (document.querySelectorAll('.parters__slider').length > 0) {
	$(function () {
		$('.parters__slider').slick({
			arrows: false,
			dots: false,
			autoplay: true,
			variableWidth: false,
			centerMode: true,
			slidesToShow: 4,
			responsive: [
				{
					breakpoint: 1031,
					settings: {
						slidesToShow: 3,
						variableWidth: true,
					}
				},
				{
					breakpoint: 501,
					settings: {
						slidesToShow: 2,
						centerMode: false,
						variableWidth: true,
					}
				},
				{
					breakpoint: 376,
					settings: {
						slidesToShow: 2,
						centerMode: true,
						variableWidth: true,
					}
				},
			]
		});
	});
}

if (document.querySelectorAll('.gallery__slider').length > 0) {
	$(function () {
		$('.gallery__slider').slick({
			arrows: true,
			dots: false,
			slidesToShow: 1,
			infinite: false,
			asNavFor: '.gallery__subslider',
			focusOnSelect: true,
			prevArrow: $('.gallery__slider-arrows-item--prev'),
			nextArrow: $('.gallery__slider-arrows-item--next'),
		});
	});
}

if (document.querySelectorAll('.gallery__subslider').length > 0) {
	$(function () {
		$('.gallery__subslider').slick({
			arrows: false,
			dots: false,
			variableWidth: true,
			slidesToShow: 6,
			infinite: false,
			asNavFor: '.gallery__slider',
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 2,
					}
				},
			]
		});
	});
}

if (document.querySelectorAll('.work__slider-content').length > 0) {
	$(function () {
		$('.work__slider-content').slick({
			arrows: true,
			dots: false,
			autoplay: true,
			centerMode:false,
			adaptiveHeight: true,
			infinite: true,
			variableWidth: true,
			slidesToShow: 6,
			prevArrow: $('.catalog__slider-arrows-item--prev'),
			nextArrow: $('.catalog__slider-arrows-item--next'),
			responsive: [
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 426,
					settings: {
						slidesToShow: 2,
					}
				},
			]
		});
	});
}

if (document.querySelectorAll('.inside-slider__work').length > 0) {
	$('.inside-slider__work').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		asNavFor: '.nav-inside__work',
		responsive: [
			{
				breakpoint: 701,
				settings: {
					variableWidth: false,
				}
			},
		]
	  });

	  $('.nav-inside__work').slick({
		slidesToShow: 8,
		arrows: false,
		// rows: 2,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: '.inside-slider__work',
		responsive: [
			{
				breakpoint: 701,
				settings: {
					slidesToShow: 2,
					variableWidth: false,
				}
			},
			{
				breakpoint: 376,
				settings: {
					slidesToShow: 2,
					variableWidth: true,
				}
			},
		]
	  });
}

if (document.querySelectorAll('.author__card-content').length > 0) {
	$('.author__card-content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		infinite: false,
		prevArrow: $('.author__card-arrows-item--prev'),
		nextArrow: $('.author__card-arrows-item--next'),
		responsive: [
			{
				breakpoint: 426,
				settings: {
					centerMode: false,
					arrows: false,
				}
			},
		]
	  });

	  $('.author__card-content--2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		infinite: false,
		prevArrow: $('.author__card-arrows-item--prev-2'),
		nextArrow: $('.author__card-arrows-item--next-2'),
		responsive: [
			{
				breakpoint: 426,
				settings: {
					centerMode: false,
					arrows: false,
				}
			},
		]
	  });

	  $('.author__card-content--3').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		infinite: false,
		prevArrow: $('.author__card-arrows-item--prev-3'),
		nextArrow: $('.author__card-arrows-item--next-3'),
		responsive: [
			{
				breakpoint: 426,
				settings: {
					centerMode: false,
					arrows: false,
				}
			},
		]
	  });

	  $('.author__card-content--4').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		infinite: false,
		prevArrow: $('.author__card-arrows-item--prev-4'),
		nextArrow: $('.author__card-arrows-item--next-4'),
		responsive: [
			{
				breakpoint: 426,
				settings: {
					centerMode: false,
					arrows: false,
				}
			},
		]
	  });

	  $('.author__card-content--5').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		infinite: false,
		prevArrow: $('.author__card-arrows-item--prev-5'),
		nextArrow: $('.author__card-arrows-item--next-5'),
		responsive: [
			{
				breakpoint: 426,
				settings: {
					centerMode: false,
					arrows: false,
				}
			},
		]
	  });

	  $('.author__card-content--6').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		infinite: false,
		prevArrow: $('.author__card-arrows-item--prev-6'),
		nextArrow: $('.author__card-arrows-item--next-6'),
		responsive: [
			{
				breakpoint: 426,
				settings: {
					centerMode: false,
					arrows: false,
				}
			},
		]
	  });

	  $('.author__card-content--7').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		infinite: false,
		prevArrow: $('.author__card-arrows-item--prev-7'),
		nextArrow: $('.author__card-arrows-item--next-7'),
		responsive: [
			{
				breakpoint: 426,
				settings: {
					centerMode: false,
					arrows: false,
				}
			},
		]
	  });

	  $('.author__card-content--8').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		infinite: false,
		prevArrow: $('.author__card-arrows-item--prev-8'),
		nextArrow: $('.author__card-arrows-item--next-8'),
		responsive: [
			{
				breakpoint: 426,
				settings: {
					centerMode: false,
					arrows: false,
				}
			},
		]
	  });

	  $('.author__card-content--9').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		infinite: false,
		prevArrow: $('.author__card-arrows-item--prev-9'),
		nextArrow: $('.author__card-arrows-item--next-9'),
		responsive: [
			{
				breakpoint: 426,
				settings: {
					centerMode: false,
					arrows: false,
				}
			},
		]
	  });

	  $('.author__card-content--10').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		infinite: false,
		prevArrow: $('.author__card-arrows-item--prev-10'),
		nextArrow: $('.author__card-arrows-item--next-10'),
		responsive: [
			{
				breakpoint: 426,
				settings: {
					centerMode: false,
					arrows: false,
				}
			},
		]
	  });

	  $('.author__card-content--11').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		infinite: false,
		prevArrow: $('.author__card-arrows-item--prev-11'),
		nextArrow: $('.author__card-arrows-item--next-11'),
		responsive: [
			{
				breakpoint: 426,
				settings: {
					centerMode: false,
					arrows: false,
				}
			},
		]
	  });

	  $('.author__card-content--12').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		infinite: false,
		prevArrow: $('.author__card-arrows-item--prev-12'),
		nextArrow: $('.author__card-arrows-item--next-12'),
		responsive: [
			{
				breakpoint: 426,
				settings: {
					centerMode: false,
					arrows: false,
				}
			},
		]
	  });

	  $('.author__card-content--13').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		infinite: false,
		prevArrow: $('.author__card-arrows-item--prev-13'),
		nextArrow: $('.author__card-arrows-item--next-13'),
		responsive: [
			{
				breakpoint: 426,
				settings: {
					centerMode: false,
					arrows: false,
				}
			},
		]
	  });

	  $('.author__card-content--14').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		infinite: false,
		prevArrow: $('.author__card-arrows-item--prev-14'),
		nextArrow: $('.author__card-arrows-item--next-14'),
		responsive: [
			{
				breakpoint: 426,
				settings: {
					centerMode: false,
					arrows: false,
				}
			},
		]
	  });
}

//================================================Adaptive js=============================================================

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());

const popupLinks = document.querySelectorAll('.popup-link'),
      body = document.querySelector('body'),
      lockPadding = document.querySelectorAll('.lock-padding'), // для фиксированных обьектов
      timeout = 800;

let unlock = true;

if (popupLinks.length > 0) {
    popupLinks.forEach(item => {
        item.addEventListener('click', function (e) {
            const popupName = item.getAttribute('href').replace('#', ''),
                  currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    });
}

const popupCloseIcon = document.querySelectorAll('.close-popup');

if (popupCloseIcon.length > 0) {
    popupCloseIcon.forEach(item => {
        item.addEventListener('click', function(e) {
            popupClose(item.closest('.popup'));
            e.preventDefault();
        });
    });
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.active');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        currentPopup.classList.add('active');
        currentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnLock = true) {
    if (unlock) {
        popupActive.classList.remove('active');
        if (doUnLock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
    if (lockPadding.langth > 0) {
        lockPadding.forEach(item => {
            item.style.paddingRight = lockPaddingValue;
        });
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock'); // в css добавить body.lock overflow: hidden; 
    
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            lockPadding.forEach(item => {
                item.style.paddingRight = '0px';
            });
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', (e) => {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.active');
        popupClose(popupActive);
    }
});

(function () {
    //проверяем поддержку
    if (Element.prototype.closest) {
        // реализуем
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    if (Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector;
    }
})();

//=========================================================Tabs=============================================================
if (document.querySelector('.tabs')) {
	const tabsProduct = document.querySelectorAll('.tabcontent-product__block'),
		  tabsNav = document.querySelectorAll('.tabnav-product__item');
		  
		  tabsNav.forEach(item => {
			  item.addEventListener('click', function (e) {
				  e.preventDefault();
				  const id = e.target.getAttribute('data-href');
	  
				  tabsNav.forEach(child => child.classList.remove('active'));
				  tabsProduct.forEach(child => child.classList.remove('active'));
	  
				  item.classList.add('active');
				  document.getElementById(id).classList.add('active');
			  });
		  });
  }

// =========================================================Spoils=============================================================

if (document.querySelectorAll('.tabs').length > 0) {
	const tabsProduct = document.querySelectorAll('.tabcontent-application__item'),
		  tabsNav = document.querySelectorAll('.tabnav-application__item');
		  
		  tabsNav.forEach(item => {
			  item.addEventListener('click', function (e) {
				  e.preventDefault();
				  const id = e.target.getAttribute('data-href');
	  
				  tabsNav.forEach(child => child.classList.remove('active'));
				  tabsProduct.forEach(child => child.classList.remove('active'));
	  
				  item.classList.add('active');
				  document.getElementById(id).classList.add('active');
			  });
		  });
}

if (document.querySelectorAll('.works-tabnav').length > 0) {
	const worksProduct = document.querySelectorAll('.works-tabcontent__item'),
	worksNav = document.querySelectorAll('.works-tabnav__item');
	
	worksNav.forEach(item => {
		item.addEventListener('click', function (e) {
			e.preventDefault();
			const id = e.target.getAttribute('data-href');

			worksNav.forEach(child => child.classList.remove('active'));
			worksProduct.forEach(child => child.classList.remove('active'));

			item.classList.add('active');
			document.getElementById(id).classList.add('active');
		});
	});
}

//==================================================Select===================================================================
if (document.querySelectorAll('.select').length > 0) {
	const select = function () {
		const selectHeader = document.querySelectorAll('.select-header'),
			selectItem = document.querySelectorAll('.select-body__item'),
			selects = document.querySelectorAll('.select');
		
		const findIcon = () => {
			for (itSelect of selects) {
				const selectArrow = itSelect.querySelector('.select-header__icon img');
				if (itSelect.classList.contains('active')) {
					selectArrow.classList.add('active');
				} else {
					selectArrow.classList.remove('active');
				}
			}
		};
	
		const selectToggle = function (e) {
			this.parentElement.classList.toggle('active');
			findIcon();
		};
	
		const selectChoose = function (e) {
			const text = this.innerHTML,
				select = this.closest('.select'),
				currentText = this.closest('.select').querySelector('.select-header__current');
	
			currentText.innerHTML = text;
			select.classList.remove('active');
			findIcon();
		};
	
		if (document.querySelector('.select')) {
			document.addEventListener('click', (e) => {
				if (!e.target.closest('.select')) {
					for (itSelect of selects) {
						const selectArrow = itSelect.querySelector('.select-header__icon img');
						itSelect.classList.remove('active');
						selectArrow.classList.remove('active');
					}
				}
			});
		}
	
		selectHeader.forEach(item => {
			item.addEventListener('click', selectToggle);
		});
	
		selectItem.forEach(item => {
			item.addEventListener('click', selectChoose);
		});
	};
	
	select();
}

//========================================================Spoils=============================================================

if (document.querySelectorAll('.spoil').length > 0) {
	const spoils = document.querySelectorAll('.spoil');
	for (spoil of spoils) {
		const spoilHeader = spoil.querySelector('.spoil-header'),
		spoilbody = spoil.querySelector('.spoiler-body'),
		spoilClose = spoil.querySelector('.spoil-close');
		if (spoilHeader.classList.contains('active')) {
			$(spoilbody).slideDown();
		}
		spoilHeader.addEventListener('click', (e) => {
			spoilHeader.classList.toggle('active');
			$(spoilbody).slideToggle();

		});
	}
}

//=====================================================inputDown=======================================================

if (isMobile.any()) {
	if(document.querySelector('.header__bottom-search')) {
		const search = document.querySelector('.header__bottom-search-icon');

		search.addEventListener('click', (e) => {
			document.querySelector('.header__bottom-search').classList.toggle('active');
		});
	}
}

// =======================================================================================

const hoverMenu = (element, dropdown) => {
	if (!isMobile.any()) {
		element.forEach(item => {
			const dropdownElement = item.querySelector(dropdown);
			item.addEventListener('mouseenter', () => {
				dropdownElement.classList.add('active');
			});
			item.addEventListener('mouseleave', () => {
				dropdownElement.classList.remove('active');
			});
		});
	} else {
		element.forEach(item => {
			const dropdownElement = item.querySelector(dropdown);
			item.addEventListener('click', (e) => {
				e.preventDefault();
				dropdownElement.classList.toggle('active');
			});
		});
	}

};

const navSettings = (settingsButton, settings) => {
	document.querySelector(settingsButton).addEventListener('click', () => {
		document.querySelector(settingsButton).classList.toggle('active');
		$(settings).slideToggle();
	});
}

const menuTop = document.querySelectorAll('.menu-top'),
	  menuTopBody = document.querySelectorAll('.menu-top__body'),
	  navBottomItem = document.querySelectorAll('.nav-bottom__item'),
	  contentItem = document.querySelectorAll('.content-item'),
	  actionsBottomAvatar = document.querySelectorAll('.actions-bottom__avatar'),
	  settingsButton = document.querySelector('.settings-button');



menuTop.forEach(item => {
	item.addEventListener('mouseenter', hoverMenu(menuTop, '.menu-top__body'));
});

navBottomItem.forEach(item => {
	item.addEventListener('mouseenter', hoverMenu(navBottomItem, '.content-item'));
	if (isMobile.any()) {
		item.addEventListener('click', () => {
			const dropdownElement = item.querySelector('.content-item');
			dropdownElement.classList.toggle('active');
		});
	}
});

actionsBottomAvatar.forEach(item => {
	item.addEventListener('mouseenter', hoverMenu(actionsBottomAvatar, '.menu-avatar'));
});

if (settingsButton) {
	settingsButton.addEventListener('click', navSettings('.settings-button', '.content__side-settings'));
}

if (document.querySelector('.alerts__header-btn')) {
	const alertsHeaderBtn = document.querySelector('.alerts__header-btn'),
		  btnHeaderContent = document.querySelector('.btn-header__content');
		  
	alertsHeaderBtn.addEventListener('click', () => {
		btnHeaderContent.classList.toggle('active');
	});

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.alerts__header-btn')) {
			btnHeaderContent.classList.remove('active');
		}
		if (e.target.closest('.btn-header__content')) {
			btnHeaderContent.classList.add('active');
		}
	});
}

//=====================================================Checking checkbox====================================================

const publicationActions = document.querySelectorAll('.publication-actions');

if (publicationActions.length > 0) {
	const checkInput = () => {
		for (publicationAction of publicationActions) {
				const publicationCheckbox = publicationAction.querySelector('input');
				if (publicationCheckbox.checked) {
					publicationAction.classList.add('active');
				} else {
					publicationAction.classList.remove('active');
				}
		}
	};
	
	publicationActions.forEach(item => {
		item.addEventListener('click', checkInput);
	});
}
	  