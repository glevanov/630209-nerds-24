'use strict';

// Переключение модального окна
(function () {
  var contactsButton = document.querySelector('.contacts__button');
  var modal = document.querySelector('.feedback');
  var modalClose = modal.querySelector('.feedback__close');
  var name = modal.querySelector('input[type="text"]');
  var email = modal.querySelector('input[type="email"]');
  var textArea = modal.querySelector('.feedback__textarea')

  var closeModal = function () {
    modal.classList.remove('feedback__show');
    modal.classList.remove("feedback__error");
    document.removeEventListener('keydown', onKeyDown);
  }
  var onKeyDown = function (evt) {
    if (evt.key === 'Escape') {
      closeModal();
    }
  };

  contactsButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('feedback__show');
    document.addEventListener('keydown', onKeyDown);
    name.focus();
  });
  modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeModal();
  });
  modal.addEventListener('submit', function (evt) {
    if (!name.value || !email.value || !textArea.value) {
      evt.preventDefault();
      modal.classList.remove("feedback__error");
      modal.classList.add("feedback__error");
    }
  })
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

  if (sliderControls) {
    sliderControls.addEventListener('click', onToggleClick);
  }
})();
