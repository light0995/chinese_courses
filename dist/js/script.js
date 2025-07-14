/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/courses.js":
/*!***********************************!*\
  !*** ./src/js/modules/courses.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function courses() {
  const getCourseInfo = async url => {
    const result = await fetch(url);
    if (!result.ok) {
      throw new Error(`Could not fetch ${url}. Status: ${result.status}`);
    }
    return result.json();
  };
  const courseParent = document.querySelector(".product__cards");
  class CourseInfo {
    constructor(title, description, purposeList, courseAudienceTitle, courseAudienceList, courseContentList) {
      this.title = title;
      this.description = description;
      this.purposeList = purposeList;
      this.courseAudienceTitle = courseAudienceTitle;
      this.courseAudienceList = courseAudienceList;
      this.courseContentList = courseContentList;
    }
    render() {
      courseParent.innerHTML = ` 
        <h2 class="course-details-title"> ${this.title} </h2>
        <div class="container">
        </div>

        <div class="course-details-wrapper">
        <div class="course-details-description">${this.description}</div> 
        <div class=course-details-purpose>
        <div class="course-details-subtitle">Цели курса:</div>
        <ul class="course-details-list">
        ${this.purposeList.map(item => `<li class="course-details-list-item" >${item}</li>`).join("")}
        </ul>
        </div>

        <div class="course-details-audience" >
        <div class="course-details-subtitle">${this.courseAudienceTitle}</div>
        <ul class="course-details-list">
        ${this.courseAudienceList.map(item => `<li class="course-details-list-item">${item}</li>`).join("")}
        </ul>

        <ul class="course-details-list">
        ${this.courseContentList.map(item => `<li class="course-details-list-item">${item}</li>`).join("")}
        </ul>



        </div>





        </div>

        
        
        
        
        
        `;
    }
  }
  getCourseInfo(`http://localhost:3000/courses`).then(data => {
    console.log(data[0].title);
    new CourseInfo(data[0].title, data[0].description, data[0].purpose, data[0].courseAudienceTitle, data[0].courseAudienceList, data[0].courseContentList).render();
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (courses);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_courses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/courses */ "./src/js/modules/courses.js");
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

const modal__inputs = document.querySelectorAll('.modal__input');
document.addEventListener('DOMContentLoaded', () => {
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
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map