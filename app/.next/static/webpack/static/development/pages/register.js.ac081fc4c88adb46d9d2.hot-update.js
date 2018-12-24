webpackHotUpdate("static/development/pages/register.js",{

/***/ "./components/SignUp.js":
/*!******************************!*\
  !*** ./components/SignUp.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _utils_usersApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/usersApi */ "./components/utils/usersApi.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var SignUp =
/*#__PURE__*/
function (_Component) {
  _inherits(SignUp, _Component);

  function SignUp() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SignUp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SignUp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      name: '',
      email: '',
      password: '',
      loggedIn: 'false',
      registered: 'false'
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveToState", function (e) {
      console.log("BEFORE SET STATE...", _this.state);
      console.log(e.target.name, e.target.value);

      _this.setState(_defineProperty({}, e.target.name, e.target.value));

      console.log("AFTER SET STATE...", _this.state);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFormSubmit", function (event) {
      event.preventDefault();
      _utils_usersApi__WEBPACK_IMPORTED_MODULE_2__["default"].createUser({
        name: _this.state.name,
        email: _this.state.email,
        password: _this.state.password
      });
    });

    return _this;
  }

  _createClass(SignUp, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "name"
      }, "Name", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "name",
        placeholder: "name",
        value: this.state.name,
        onChange: this.saveToState
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "email"
      }, "Email", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "email",
        name: "email",
        placeholder: "email",
        value: this.state.email,
        onChange: this.saveToState
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "password"
      }, "Password", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        name: "password",
        placeholder: "password",
        value: this.state.password,
        onChange: this.saveToState
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        secondary: true,
        onClick: this.handleFormSubmit
      }, "Sign Up")));
    }
  }]);

  return SignUp;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ }),

/***/ "./components/utils/usersApi.js":
/*!**************************************!*\
  !*** ./components/utils/usersApi.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  createUser: function createUser(user) {
    console.log('user', user);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/users/create', user).then(function (res) {
      console.log(res);
    });
  },
  updateUser: function updateUser(user) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch('/api/users/update', user).then(function (res) {
      console.log(res);
    });
  },
  getUser: function getUser(id) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/users/get', {
      params: {
        id: id
      }
    }).then(function (res) {
      return res;
    });
  }
});

/***/ })

})
//# sourceMappingURL=register.js.ac081fc4c88adb46d9d2.hot-update.js.map