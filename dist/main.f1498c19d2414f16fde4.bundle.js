/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/webpack.svg":
/*!********************************!*\
  !*** ./src/assets/webpack.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "webpack.svg";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_webpack_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/webpack.svg */ "./src/assets/webpack.svg");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// " Exercise 3 "

var numberOneInput = document.getElementById("numberOne");
var numberTwoInput = document.getElementById("numberTwo");
var addValuesButton = document.getElementById("addValues");
var resultDiv = document.getElementById("result");
var errorBox = document.getElementById("error");
var image = document.getElementById("webpackImg");
image.src = _assets_webpack_svg__WEBPACK_IMPORTED_MODULE_0__;
image.alt = "webpack image";
var parseInputs = function parseInputs() {
  for (var _len = arguments.length, input = new Array(_len), _key = 0; _key < _len; _key++) {
    input[_key] = arguments[_key];
  }
  return input.map(function (str) {
    return parseInt(str);
  });
};
var inputsAreValid = function inputsAreValid() {
  for (var _len2 = arguments.length, input = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    input[_key2] = arguments[_key2];
  }
  return input.every(function (num) {
    return typeof num === "number" && !isNaN(num);
  });
};
var handleAdditionError = function handleAdditionError(inputs, numbers) {
  var fullMessage = inputs.reduce(function (message, str, index) {
    if (inputsAreValid(numbers[index])) {
      return message + "";
    } else {
      return message + "".concat(str, " is not a number. ");
    }
  }, "Please enter two valid numbers! ");
  errorBox.classList.remove("invisible");
  errorBox.innerText = fullMessage;
};
var hideErrors = function hideErrors() {
  errorBox.classList.add("invisible");
};
hideErrors();
addValuesButton.addEventListener("click", function () {
  hideErrors();
  var inputs = [numberOneInput.value, numberTwoInput.value];
  var parsedInputs = parseInputs.apply(void 0, inputs);
  if (inputsAreValid.apply(void 0, _toConsumableArray(parsedInputs))) {
    var _parsedInputs = _slicedToArray(parsedInputs, 2),
      numA = _parsedInputs[0],
      numB = _parsedInputs[1];
    resultDiv.innerText = numA + numB;
  } else {
    resultDiv.innerText = "";
    handleAdditionError(inputs, parsedInputs);
  }
});

// " Exercise 2 "

// import "./styles/main.scss";
// import laughing from "./assets/laughing.svg";
// import generateJoke from "./generateJoke";

// const laughImg = document.getElementById("laughImg");
// laughImg.src = laughing;
// laughImg.alt = "laughing";

// const jokeBtn = document.getElementById("jokeBtn");
// jokeBtn.addEventListener("click", generateJoke);

// generateJoke();

// " Exercise 1 "

// const getComponent = async () => {
//   const element = document.createElement("div");
//   const { default: _ } = await import("lodash");

//   element.innerHTML = _.join(["Hello", "webpack"], " ");

//   return element;
// };

// getComponent().then((component) => {
//   document.body.appendChild(component);
// });
})();

/******/ })()
;
//# sourceMappingURL=main.f1498c19d2414f16fde4.bundle.js.map