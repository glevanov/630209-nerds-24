'use strict';

// Переключение модального окна
(function () {
  var contactsButton = document.querySelector('.contacts__button');
  var modal = document.querySelector('.feedback');
  var modalClose = modal.querySelector('.feedback__close');

  contactsButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('visually-hidden');
  });
  modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('visually-hidden');
  });
})();

// Переключение слайдов
(function () {
  var sliderControls = document.querySelector('.slider__controls');
  var slides = document.querySelectorAll('.slider__item');
  var resetActiveToggle = function () {
    document.querySelector('.slider__toggle--active')
      .classList.remove('slider__toggle--active');
  };
  var setActiveToggle = function (target) {
    target.classList.add('slider__toggle--active');
  };
  var switchSlide = function (index) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.add('visually-hidden')
    }
    slides[index].classList.remove('visually-hidden');
  };
  var switchActiveSlide = function (target) {
    switch(target.id) {
      case 'slider1':
        switchSlide(0);
        break;
      case 'slider2':
        switchSlide(1);
        break;
      case 'slider3':
        switchSlide(2);
        break;
    }
  };
  var onToggleClick = function (evt) {
    var target = evt.target;
    if (target.classList.contains('slider__toggle')) {
      resetActiveToggle();
      setActiveToggle(target);
      switchActiveSlide(target);
    }
  };

  sliderControls.addEventListener('click', onToggleClick);
})();
