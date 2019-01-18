webpackHotUpdate("static/development/pages/index.js",{

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
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/users/create', user);
  },
  updateUser: function updateUser(user) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch('/api/users/update', user).then(function (res) {
      console.log(res);
    });
  },
  getUser: function getUser(obj) {
    console.log("Password: ".concat(obj.password, " Email: ").concat(obj.email));
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/user', {
      params: {
        user: obj
      }
    });
  },
  getUsers: function getUsers() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/users');
  }
});

/***/ })

})
//# sourceMappingURL=index.js.87feb85423823d859dae.hot-update.js.map