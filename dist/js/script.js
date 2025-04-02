/******/ (() => { // webpackBootstrap
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modal__close = document.querySelector('.modal__close');
const registration__btn = document.querySelector('.registration__btn');
const promo__btn = document.querySelector('.promo__description-btn');
const header__login = document.querySelector('.header__login');
const body = document.querySelector('body');
const modal__login_content = document.querySelector('.modal__login-wrapper');
const modal__registration_content = document.querySelector('.modal__registration');
const modal__login_toggle = document.querySelector('.modal__login-title');
const modal__registration_toggle = document.querySelector('.modal__register-title');
modal__inputs = document.querySelectorAll('.modal__input');
promo__btn.addEventListener('click', e => {
  e.preventDefault();
  openModal();
});
modal__close.addEventListener('click', e => {
  e.preventDefault();
  closeModal();
});
body.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
overlay.addEventListener('click', () => {
  closeModal();
});
function openModal() {
  overlay.classList.add('overlay__show');
  modal.classList.add('modal__show');
}
;
function closeModal() {
  overlay.classList.remove('overlay__show');
  modal.classList.remove('modal__show');
  modal__inputs.forEach(item => item.value = "");
  showLoginContent();
}
header__login.addEventListener('click', () => {
  openModal();
});
function toggleModalContent(showElement, addClass, hideElement, removeClass) {
  showElement.classList.add(addClass);
  hideElement.classList.remove(removeClass);
}
;
function showLoginContent() {
  modal__login_content.classList.add('modal__login-wrapper-active');
  modal__registration_content.classList.remove('modal__registration-active');
  modal__registration_toggle.classList.remove('modal__register-title-active');
  modal__login_toggle.classList.add('modal__login-title-active');
}
function showRegistrationContent() {
  modal__login_content.classList.remove('modal__login-wrapper-active');
  modal__registration_content.classList.add('modal__registration-active');
  modal__registration_toggle.classList.add('modal__register-title-active');
  modal__login_toggle.classList.remove('modal__login-title-active');
}
modal__registration_toggle.addEventListener('click', () => {
  showRegistrationContent();
});
modal__login_toggle.addEventListener('click', () => {
  showLoginContent();
});
/******/ })()
;
//# sourceMappingURL=script.js.map