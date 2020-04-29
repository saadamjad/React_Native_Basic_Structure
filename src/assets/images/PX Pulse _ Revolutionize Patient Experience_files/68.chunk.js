(window["webpackJsonpreact-able-pro"] = window["webpackJsonpreact-able-pro"] || []).push([[68],{

/***/ "./src/App/layout/AdminLayout/Configuration/Layout/index.js":
/*!******************************************************************!*\
  !*** ./src/App/layout/AdminLayout/Configuration/Layout/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../hoc/_Aux */ "./src/hoc/_Aux/index.js");
/* harmony import */ var _store_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../store/constant */ "./src/store/constant.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../store/actions */ "./src/store/actions.js");
var _jsxFileName = "/Users/macbook/covid19/pxweb/src/App/layout/AdminLayout/Configuration/Layout/index.js";






class Layout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let layoutOption = '';
    layoutOption = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "text-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Layouts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "theme-color layout-type",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeLayoutType('menu-dark'),
      title: "Default Layout",
      className: this.props.layoutType === 'menu-dark' ? 'active' : '',
      "data-value": "menu-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeLayoutType('menu-light'),
      title: "Light",
      className: this.props.layoutType === 'menu-light' ? 'active' : '',
      "data-value": "menu-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeLayoutType('dark'),
      title: "Dark",
      className: this.props.layoutType === 'dark' ? 'active' : '',
      "data-value": "dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
      onClick: () => this.props.onReset('dark'),
      title: "Reset",
      className: this.props.layoutType === 'reset' ? 'active' : '',
      "data-value": "reset",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Reset to Default")));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, layoutOption);
  }

}

const mapStateToProps = state => {
  return {
    layoutType: state.layoutType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeLayoutType: layoutType => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_TYPE"],
      layoutType: layoutType
    }),
    onReset: layoutType => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["RESET"],
      layoutType: layoutType
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Layout));

/***/ }),

/***/ "./src/App/layout/AdminLayout/Configuration/TabConfig/ColorOptions/index.js":
/*!**********************************************************************************!*\
  !*** ./src/App/layout/AdminLayout/Configuration/TabConfig/ColorOptions/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../hoc/_Aux */ "./src/hoc/_Aux/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../store/actions */ "./src/store/actions.js");
/* harmony import */ var _store_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../store/constant */ "./src/store/constant.js");
var _jsxFileName = "/Users/macbook/covid19/pxweb/src/App/layout/AdminLayout/Configuration/TabConfig/ColorOptions/index.js";







class ColorOptions extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let colorOptions = '';
    colorOptions = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: " text-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Background Color"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "theme-color background-color flat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_5__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeHeaderBackColor('background-blue'),
      className: this.props.headerBackColor === 'background-blue' ? 'active' : '',
      "data-value": "background-blue",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_5__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeHeaderBackColor('background-red'),
      className: this.props.headerBackColor === 'background-red' ? 'active' : '',
      "data-value": "background-red",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_5__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeHeaderBackColor('background-purple'),
      className: this.props.headerBackColor === 'background-purple' ? 'active' : '',
      "data-value": "background-purple",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_5__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeHeaderBackColor('background-info'),
      className: this.props.headerBackColor === 'background-info' ? 'active' : '',
      "data-value": "background-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_5__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeHeaderBackColor('background-green'),
      className: this.props.headerBackColor === 'background-green' ? 'active' : '',
      "data-value": "background-green",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_5__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeHeaderBackColor('background-dark'),
      className: this.props.headerBackColor === 'background-dark' ? 'active' : '',
      "data-value": "background-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: " text-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Background Gradient"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "theme-color background-color gradient",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_5__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeHeaderBackColor('background-grd-blue'),
      className: this.props.headerBackColor === 'background-grd-blue' ? 'active' : '',
      "data-value": "background-grd-blue",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_5__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeHeaderBackColor('background-grd-red'),
      className: this.props.headerBackColor === 'background-grd-red' ? 'active' : '',
      "data-value": "background-grd-red",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_5__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeHeaderBackColor('background-grd-purple'),
      className: this.props.headerBackColor === 'background-grd-purple' ? 'active' : '',
      "data-value": "background-grd-purple",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_5__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeHeaderBackColor('background-grd-info'),
      className: this.props.headerBackColor === 'background-grd-info' ? 'active' : '',
      "data-value": "background-grd-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_5__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeHeaderBackColor('background-grd-green'),
      className: this.props.headerBackColor === 'background-grd-green' ? 'active' : '',
      "data-value": "background-grd-green",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_5__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeHeaderBackColor('background-grd-dark'),
      className: this.props.headerBackColor === 'background-grd-dark' ? 'active' : '',
      "data-value": "background-grd-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: " text-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Background Image"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "theme-color background-color image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_5__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeHeaderBackColor('background-img-1'),
      className: this.props.headerBackColor === 'background-img-1' ? 'active' : '',
      "data-value": "background-img-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_5__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeHeaderBackColor('background-img-2'),
      className: this.props.headerBackColor === 'background-img-2' ? 'active' : '',
      "data-value": "background-img-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_5__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeHeaderBackColor('background-img-3'),
      className: this.props.headerBackColor === 'background-img-3' ? 'active' : '',
      "data-value": "background-img-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_5__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeHeaderBackColor('background-img-4'),
      className: this.props.headerBackColor === 'background-img-4' ? 'active' : '',
      "data-value": "background-img-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_5__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeHeaderBackColor('background-img-5'),
      className: this.props.headerBackColor === 'background-img-5' ? 'active' : '',
      "data-value": "background-img-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_5__["default"].BLANK_LINK,
      onClick: () => this.props.onChangeHeaderBackColor('background-img-6'),
      className: this.props.headerBackColor === 'background-img-6' ? 'active' : '',
      "data-value": "background-img-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }))));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "config-scroll",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, colorOptions)));
  }

}

const mapStateToProps = state => {
  return {
    layout: state.layout,
    headerBackColor: state.headerBackColor
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeHeaderBackColor: headerBackColor => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["HEADER_BACK_COLOR"],
      headerBackColor: headerBackColor
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ColorOptions));

/***/ }),

/***/ "./src/App/layout/AdminLayout/Configuration/TabConfig/LayoutOptions/index.js":
/*!***********************************************************************************!*\
  !*** ./src/App/layout/AdminLayout/Configuration/TabConfig/LayoutOptions/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../hoc/_Aux */ "./src/hoc/_Aux/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../store/actions */ "./src/store/actions.js");
var _jsxFileName = "/Users/macbook/covid19/pxweb/src/App/layout/AdminLayout/Configuration/TabConfig/LayoutOptions/index.js";






class LayoutOptions extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let layoutOption = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "switch switch-primary d-inline m-r-10",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      id: "box-layouts",
      checked: this.props.boxLayout,
      onChange: this.props.onChangeBoxLayout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "box-layouts",
      className: "cr",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Box Layouts"));
    let layoutOptionHeaderFixWithoutBox = '';
    let layoutOptionNavFixWithoutBox = '';

    if (!this.props.boxLayout) {
      layoutOptionHeaderFixWithoutBox = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "switch switch-primary d-inline m-r-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        id: "header-fixed",
        checked: this.props.headerFixedLayout,
        onChange: this.props.onChangeHeaderFixedLayout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "header-fixed",
        className: "cr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Header Fixed"));
      layoutOptionNavFixWithoutBox = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "switch switch-primary d-inline m-r-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        id: "menu-fixed",
        checked: this.props.navFixedLayout,
        onChange: this.props.onChangeNavFixedLayout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "menu-fixed",
        className: "cr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Menu Fixed"));
    }

    layoutOption = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "switch switch-primary d-inline m-r-10",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      id: "theme-rtl",
      checked: this.props.rtlLayout,
      onChange: this.props.onChangeRtlLayout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "theme-rtl",
      className: "cr",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "RTL")), layoutOptionNavFixWithoutBox, layoutOptionHeaderFixWithoutBox, layoutOption);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "config-scroll",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, layoutOption)));
  }

}

const mapStateToProps = state => {
  return {
    rtlLayout: state.rtlLayout,
    navFixedLayout: state.navFixedLayout,
    headerFixedLayout: state.headerFixedLayout,
    boxLayout: state.boxLayout
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeRtlLayout: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["RTL_LAYOUT"]
    }),
    onChangeNavFixedLayout: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["NAV_FIXED_LAYOUT"]
    }),
    onChangeHeaderFixedLayout: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["HEADER_FIXED_LAYOUT"]
    }),
    onChangeBoxLayout: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_4__["BOX_LAYOUT"]
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(LayoutOptions));

/***/ }),

/***/ "./src/App/layout/AdminLayout/Configuration/TabConfig/index.js":
/*!*********************************************************************!*\
  !*** ./src/App/layout/AdminLayout/Configuration/TabConfig/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ColorOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorOptions */ "./src/App/layout/AdminLayout/Configuration/TabConfig/ColorOptions/index.js");
/* harmony import */ var _LayoutOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LayoutOptions */ "./src/App/layout/AdminLayout/Configuration/TabConfig/LayoutOptions/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../hoc/_Aux */ "./src/hoc/_Aux/index.js");
var _jsxFileName = "/Users/macbook/covid19/pxweb/src/App/layout/AdminLayout/Configuration/TabConfig/index.js";






class TabConfig extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColorOptions__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LayoutOptions__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }));
  }

}

const mapStateToProps = state => {
  return {
    layout: state.layout
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(TabConfig));

/***/ }),

/***/ "./src/App/layout/AdminLayout/Configuration/index.js":
/*!***********************************************************!*\
  !*** ./src/App/layout/AdminLayout/Configuration/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./src/App/layout/AdminLayout/Configuration/Layout/index.js");
/* harmony import */ var _TabConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabConfig */ "./src/App/layout/AdminLayout/Configuration/TabConfig/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hoc/_Aux */ "./src/hoc/_Aux/index.js");
/* harmony import */ var _store_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/constant */ "./src/store/constant.js");
var _jsxFileName = "/Users/macbook/covid19/pxweb/src/App/layout/AdminLayout/Configuration/index.js";






class Configuration extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      configOpen: false
    };
  }

  render() {
    let configClass = ['menu-styler'];

    if (this.state.configOpen) {
      configClass = [...configClass, 'open'];
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "styleSelector",
      className: configClass.join(' '),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "style-toggler",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_4__["default"].BLANK_LINK,
      onClick: () => this.setState(prevState => {
        return {
          configOpen: !prevState.configOpen
        };
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "style-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "mb-2 text-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Able Pro", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "font-weight-normal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "v8.0 Customizer")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "m-style-scroller",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TabConfig__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Configuration);

/***/ }),

/***/ "./src/App/layout/AdminLayout/NavBar/NavLeft/NavSearch/index.js":
/*!**********************************************************************!*\
  !*** ./src/App/layout/AdminLayout/NavBar/NavLeft/NavSearch/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-window-size */ "./node_modules/react-window-size/index.js");
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_window_size__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../hoc/_Aux */ "./src/hoc/_Aux/index.js");
/* harmony import */ var _store_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../store/constant */ "./src/store/constant.js");
var _jsxFileName = "/Users/macbook/covid19/pxweb/src/App/layout/AdminLayout/NavBar/NavLeft/NavSearch/index.js";





class NavSearch extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      isSearch: false
    };
  }

  render() {
    const searchSyle = this.state.isSearch ? 'block' : 'none';
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_3__["default"].BLANK_LINK,
      className: "pop-search",
      onClick: () => this.setState(prevState => {
        return {
          isSearch: !prevState.isSearch
        };
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "feather icon-search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "search-bar",
      style: {
        display: searchSyle
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: "form-control border-0 shadow-none",
      placeholder: "Search hear",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "close",
      "aria-label": "Close",
      onClick: () => this.setState(prevState => {
        return {
          isSearch: !prevState.isSearch
        };
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      "aria-hidden": "true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "\xD7"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (react_window_size__WEBPACK_IMPORTED_MODULE_1___default()(NavSearch));

/***/ }),

/***/ "./src/App/layout/AdminLayout/NavBar/NavLeft/index.js":
/*!************************************************************!*\
  !*** ./src/App/layout/AdminLayout/NavBar/NavLeft/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-window-size */ "./node_modules/react-window-size/index.js");
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_window_size__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavSearch */ "./src/App/layout/AdminLayout/NavBar/NavLeft/NavSearch/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../hoc/_Aux */ "./src/hoc/_Aux/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../store/actions */ "./src/store/actions.js");
var _jsxFileName = "/Users/macbook/covid19/pxweb/src/App/layout/AdminLayout/NavBar/NavLeft/index.js";







class NavLeft extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "navbar-nav mr-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavSearch__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }))));
  }

}

const mapStateToProps = state => {
  return {
    isFullScreen: state.isFullScreen,
    rtlLayout: state.rtlLayout
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFullScreen: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["FULL_SCREEN"]
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(react_window_size__WEBPACK_IMPORTED_MODULE_2___default()(NavLeft)));

/***/ }),

/***/ "./src/App/layout/AdminLayout/NavBar/NavRight/index.js":
/*!*************************************************************!*\
  !*** ./src/App/layout/AdminLayout/NavBar/NavRight/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../hoc/_Aux */ "./src/hoc/_Aux/index.js");
/* harmony import */ var _store_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../store/constant */ "./src/store/constant.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../assets/images/user/avatar-1.jpg */ "./src/assets/images/user/avatar-1.jpg");
/* harmony import */ var _assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_user_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../assets/images/user/avatar-2.jpg */ "./src/assets/images/user/avatar-2.jpg");
/* harmony import */ var _assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_user_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _API_ApiActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../API/ApiActions */ "./src/API/ApiActions.js");
/* harmony import */ var _API_API__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../API/API */ "./src/API/API.js");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pnotify/dist/es/PNotify */ "./node_modules/pnotify/dist/es/PNotify.js");
/* harmony import */ var pnotify_dist_es_PNotifyButtons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! pnotify/dist/es/PNotifyButtons */ "./node_modules/pnotify/dist/es/PNotifyButtons.js");
/* harmony import */ var pnotify_dist_es_PNotifyConfirm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! pnotify/dist/es/PNotifyConfirm */ "./node_modules/pnotify/dist/es/PNotifyConfirm.js");
/* harmony import */ var pnotify_dist_es_PNotifyCallbacks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! pnotify/dist/es/PNotifyCallbacks */ "./node_modules/pnotify/dist/es/PNotifyCallbacks.js");
var _jsxFileName = "/Users/macbook/covid19/pxweb/src/App/layout/AdminLayout/NavBar/NavRight/index.js";











 // import {askForPermissioToReceiveNotifications} from './../../../../../init-fcm'





let token;

class NavRight extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      listOpen: false,
      dataNotification: [],
      showLoader: true,
      notificationCount: 0
    };

    this.logout = () => {
      this.props.logoutPayload(token);
      localStorage.clear();
      this.props.history.push('/auth/signin');
    };

    this.componentDidUpdate = () => {};

    this.formatDate = date => {
      date = new Date(date);
      var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return date.getDate() + ' ' + monthNames[date.getMonth()] + ', ' + date.getFullYear();
    };

    this.formatAMPM = date => {
      date = new Date(date);
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? ' PM' : ' AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'

      minutes = minutes < 10 ? '0' + minutes : minutes;
      return hours + ':' + minutes + '' + ampm;
    };

    this.getTitle = (name, item) => {
      if (name == 'actions') {
        return item.primaryObject.action;
      } else if (name == 'interventions') {
        return item.primaryObject.title;
      } else if (name == 'subscribe') {
        return item.createdByUserObj.lastname + ' ' + item.createdByUserObj.firstname + ' mentioned you in a comment';
      } else if (name == 'messages') {
        return item.createdByUserObj.lastname + ' ' + item.createdByUserObj.firstname + ' has sent a comment';
      }
    };

    this.getIcon = (name, item) => {
      if (name == 'actions') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "img-radius",
          src: __webpack_require__(/*! ../../../../../assets/images/action_Lightblue.png */ "./src/assets/images/action_Lightblue.png"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          __self: this
        });
      } else if (name == 'interventions') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "img-radius",
          src: __webpack_require__(/*! ../../../../../assets/images/intervention_Lightblue.png */ "./src/assets/images/intervention_Lightblue.png"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        });
      } else if (name == 'subscribe') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "img-radius",
          src: __webpack_require__(/*! ../../../../../assets/images/subscribe.png */ "./src/assets/images/subscribe.png"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          },
          __self: this
        });
      } else if (name == 'messages') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "img-radius",
          src: __webpack_require__(/*! ../../../../../assets/images/comment.png */ "./src/assets/images/comment.png"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: this
        });
      }
    };

    this.getRoute = async (name, id, data) => {
      this.props.updateNotification(token, id);
      this.props.getUnreadNotificationCount(token);
      this.setState({
        [data.id + "-Read"]: true // notificationCount:parseInt(this.state.notificationCount)-1

      }); // this.props.getMyNotification(token,1)

      console.log(data);

      if (name == 'actions') {
        this.props.history.push('/ur/actions/' + data.primaryObject.id.toString());
      } else if (name == 'interventions') {
        this.props.history.push('/ur/interventions/' + data.primaryObject.id.toString());
      } else if (name == 'subscribe' || name == 'messages') {
        if (data.primaryObject.actionId != null || data.primaryObject.actionId != undefined) {
          this.props.history.push('/ur/actions/' + data.primaryObject.actionId.toString());
        } else if (data.primaryObject.interventionId != null) {
          this.props.history.push('/ur/interventions/' + data.primaryObject.interventionId.toString());
        } else {
          this.props.history.push('/ur/interventions');
        }
      }
    };

    this.loadNotification = () => {
      console.log(this.state.pageNo, this.state.TotalPages);
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('#notificationLoader').css('display', "none");

      if (this.state.pageNo < this.state.TotalPages) {
        jquery__WEBPACK_IMPORTED_MODULE_11___default()('#notificationLoader').css('display', "block");
        console.log(parseInt(this.state.pageNo + 1));
        this.props.getMyNotification(token, parseInt(this.state.pageNo) + 1);
      }
    };

    this.noti = () => {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').css('overflow-y', 'hidden');
    };
  }

  componentDidMount() {
    const registerPushListener = () => navigator.serviceWorker.addEventListener("message", ({
      data
    }) => {
      console.log('data from real time notification', data);
      this.props.getUnreadNotificationCount(token);
      this.setState({
        dataNotification: []
      });
      this.props.getMyNotification(token, 1);

      if (data["firebase-messaging-msg-data"].data) {
        var objectNew = JSON.parse(data["firebase-messaging-msg-data"].data["gcm.notification.customAction"]);
        pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_12__["default"].info({
          title: objectNew.actionMessage,
          text: data["firebase-messaging-msg-data"].notification.title
        });

        if (objectNew.actionMessage == 'Add Action To Intervention') {
          console.log('New action added');
          this.props.actionPop(true);
        } else if (objectNew.actionMessage == 'Create Intervention') {
          console.log('New intervention added');
          this.props.interventionPop(true);
        } else if (objectNew.actionMessage == 'Update Action Status') {
          console.log('Completed intervention');
          this.props.actionDetailsPop(true);
        } else if (objectNew.actionMessage == 'Subscribe User On Action') {
          console.log('Subscribe User On Action');
          this.props.actionDetailsPop(true);
        } else if (objectNew.actionMessage == 'Create Message on Action') {
          console.log('Create Message on Action');
          this.props.actionDetailsPop(true);
        } else if (objectNew.actionMessage == 'Subscribe User On Intervention') {
          console.log('Subscribe User On Intervention');
          this.props.interventionDetailsPop(true);
        } else if (objectNew.actionMessage == 'Create Message on Intervention') {
          console.log('Create Message on Intervention');
          this.props.interventionDetailsPop(true);
        } else if (objectNew.actionMessage == 'Action Assigned') {
          console.log('Action Assigned');
          this.props.actionDetailsPop(true);
        }
      }
    });

    registerPushListener();
    jquery__WEBPACK_IMPORTED_MODULE_11___default()('#notificationLoader').css('display', "none");
    document.body.addEventListener("click", function (evt) {
      setTimeout(function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_11___default()('#noti').hasClass('show') == true) {
          jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').css('overflow-y', 'hidden');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').css('overflow-y', 'auto');
        }
      }.bind(this), 300);
    });
    token = localStorage.getItem('token');
    this.props.getMyNotification(token, 1);

    if (this.props.getUserProfile.data == undefined) {
      this.props.getMyprofileTest(token);
    } else {
      this.setState({
        data: this.props.getUserProfile.data
      });
    }

    if (this.props.getUnreadNotificationData == 0) {
      this.props.getUnreadNotificationCount(token);
    } else {
      this.setState({
        notificationCount: this.props.getUnreadNotificationData
      });
    }
  }

  componentWillReceiveProps(nextprops) {
    console.log('in header', nextprops);

    if (nextprops.getUserProfile !== this.props.getUserProfile) {
      this.setState({
        data: nextprops.getUserProfile.data
      }); // localStorage.setItem('id',nextprops.getUserProfile.data.user.id)

      console.log('Data Change of my profile', nextprops.getUserProfile);
    }

    if (nextprops.getMyNotificationData !== this.props.getMyNotificationData) {
      if (nextprops.getMyNotificationData == "No record found.") {
        console.log('no record in noti');
        setTimeout(function () {
          jquery__WEBPACK_IMPORTED_MODULE_11___default()('#notificationLoader').css('display', "none");
        }.bind(this), 1000);
        this.setState({
          showNotificationNoRecord: true
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_11___default()('#notificationLoader').css('display', "none");
        this.setState({
          showLoader: false,
          dataNotification: this.state.dataNotification.concat(nextprops.getMyNotificationData.data),
          pageNo: nextprops.getMyNotificationData.CurrentPage,
          TotalPages: nextprops.getMyNotificationData.TotalPages,
          showNotificationNoRecord: false
        });
      }

      console.log('Data Change of my notifiacrion', nextprops.getMyNotificationData);
    }

    if (nextprops.getUnreadNotificationData !== this.props.getUnreadNotificationData) {
      if (nextprops.getUnreadNotificationData > 1000) {
        this.setState({
          notificationCount: '999+'
        });
      } else {
        this.setState({
          notificationCount: nextprops.getUnreadNotificationData
        });
      }

      console.log('Data Change of my notifiacrion', nextprops.getUnreadNotificationData);
    }
  }

  render() {
    console.log(this.state.getMyNotificationData);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "navbar-nav ml-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      id: 'noti',
      alignRight: !this.props.rtlLayout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
      variant: 'link',
      id: "dropdown-basic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "feather icon-bell icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: this
    }), this.state.notificationCount === 0 || this.state.notificationCount === undefined ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "noti_Count",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314
      },
      __self: this
    }, this.state.notificationCount)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, {
      alignRight: true,
      className: "notification",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "noti-head",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "d-inline-block m-b-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320
      },
      __self: this
    }, "Notifications")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: '500px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "toolbox",
      onYReachEnd: this.loadNotification,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "noti-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328
      },
      __self: this
    }, this.state.showNotificationNoRecord == true && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "notification",
      style: {
        textAlign: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media",
      style: {
        textAlign: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        textAlign: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    }, 'No Record Found'))), this.state.dataNotification && this.state.dataNotification.map((notification, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "n-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "m-b-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342
      },
      __self: this
    }, notification.title)), notification && notification.data[0].map((item, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i,
      className: "notification",
      style: {
        backgroundColor: item.isRead != 0 || this.state[item.id + '-Read'] == true ? 'white' : '#ebf7ff',
        cursor: 'pointer'
      },
      onClick: () => this.getRoute(item.entityName, item.id, item),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346
      },
      __self: this
    }, this.getIcon(item.entityName, item.primaryObject), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "media-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }, this.getTitle(item.entityName, item)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "n-time text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon feather icon-clock m-r-10",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }), this.formatAMPM(item.createdAt))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351
      },
      __self: this
    }, item.message)))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: 'notificationLoader',
      speed: 2,
      width: 400,
      height: 160,
      style: {
        paddingLeft: 11,
        paddingTop: 17
      },
      viewBox: "0 0 400 160",
      backgroundColor: "#f3f3f3",
      foregroundColor: "#ecebeb",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
      x: "86",
      y: "21",
      rx: "3",
      ry: "3",
      width: "158",
      height: "8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
      x: "87",
      y: "46",
      rx: "3",
      ry: "3",
      width: "256",
      height: "16",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: "39",
      cy: "39",
      r: "39",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388
      },
      __self: this
    })))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      alignRight: !this.props.rtlLayout,
      className: "drp-user profile-notification",
      style: {
        width: 170
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
      variant: 'link',
      id: "dropdown-basic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pro-head",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.state.data && this.state.data.user.profilePicture != null && _API_API__WEBPACK_IMPORTED_MODULE_9__["baseUrl"] + '//images/' + this.state.data.user.profilePicture,
      className: "img-radius",
      style: {
        width: 35,
        marginRight: 15
      },
      alt: "User Profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405
      },
      __self: this
    }, this.state.data && this.state.data.user.firstname + ' ' + this.state.data.user.lastname))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, {
      alignRight: true,
      className: "profile-notification",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pro-head",
      onClick: this.logout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412
      },
      __self: this
    }, "Logout"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "dud-logout",
      style: {
        backgroundColor: '#073762',
        borderColor: '#073762'
      },
      title: "Logout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "feather icon-log-out",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "pro-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_4__["default"].BLANK_LINK,
      className: "dropdown-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "feather icon-settings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418
      },
      __self: this
    }), " Settings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_4__["default"].BLANK_LINK,
      className: "dropdown-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "feather icon-user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419
      },
      __self: this
    }), " Profile")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_4__["default"].BLANK_LINK,
      className: "dropdown-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "feather icon-mail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420
      },
      __self: this
    }), " My Messages")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_4__["default"].BLANK_LINK,
      className: "dropdown-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "feather icon-lock",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421
      },
      __self: this
    }), " Lock Screen"))))))));
  }

}

const mapStateToProps = state => ({
  getUserProfile: state.getUserProfile,
  getMyNotificationData: state.getMyNotificationData,
  getUnreadNotificationData: state.getUnreadNotificationData
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  actionDetailsPop: _API_ApiActions__WEBPACK_IMPORTED_MODULE_8__["actionDetailsPop"],
  interventionDetailsPop: _API_ApiActions__WEBPACK_IMPORTED_MODULE_8__["interventionDetailsPop"],
  interventionPop: _API_ApiActions__WEBPACK_IMPORTED_MODULE_8__["interventionPop"],
  actionPop: _API_ApiActions__WEBPACK_IMPORTED_MODULE_8__["actionPop"],
  getAllActionsCombine: _API_ApiActions__WEBPACK_IMPORTED_MODULE_8__["getAllActionsCombine"],
  getUnreadNotificationCount: _API_ApiActions__WEBPACK_IMPORTED_MODULE_8__["getUnreadNotificationCount"],
  logoutPayload: _API_ApiActions__WEBPACK_IMPORTED_MODULE_8__["logoutPayload"],
  updateNotification: _API_ApiActions__WEBPACK_IMPORTED_MODULE_8__["updateNotification"],
  getMyNotification: _API_ApiActions__WEBPACK_IMPORTED_MODULE_8__["getMyNotification"],
  getMyprofileTest: _API_ApiActions__WEBPACK_IMPORTED_MODULE_8__["getMyprofileTest"]
})(NavRight)); // export default ;

/***/ }),

/***/ "./src/App/layout/AdminLayout/NavBar/index.js":
/*!****************************************************!*\
  !*** ./src/App/layout/AdminLayout/NavBar/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-window-size */ "./node_modules/react-window-size/index.js");
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_window_size__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavLeft__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavLeft */ "./src/App/layout/AdminLayout/NavBar/NavLeft/index.js");
/* harmony import */ var _NavRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavRight */ "./src/App/layout/AdminLayout/NavBar/NavRight/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hoc/_Aux */ "./src/hoc/_Aux/index.js");
/* harmony import */ var _store_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../store/constant */ "./src/store/constant.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../store/actions */ "./src/store/actions.js");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/macbook/covid19/pxweb/src/App/layout/AdminLayout/NavBar/index.js";










class NavBar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      rightToggle: false
    };
  }

  render() {
    let headerClass = ['navbar', 'pcoded-header', 'navbar-expand-lg', 'header-blue'];
    document.body.classList.remove('background-blue');
    document.body.classList.remove('background-red');
    document.body.classList.remove('background-purple');
    document.body.classList.remove('background-info');
    document.body.classList.remove('background-green');
    document.body.classList.remove('background-dark');
    document.body.classList.remove('background-grd-blue');
    document.body.classList.remove('background-grd-red');
    document.body.classList.remove('background-grd-purple');
    document.body.classList.remove('background-grd-info');
    document.body.classList.remove('background-grd-green');
    document.body.classList.remove('background-grd-dark');
    document.body.classList.remove('background-img-1');
    document.body.classList.remove('background-img-2');
    document.body.classList.remove('background-img-3');
    document.body.classList.remove('background-img-4');
    document.body.classList.remove('background-img-5');
    document.body.classList.remove('background-img-6');
    document.body.classList.add(this.props.headerBackColor);

    if (this.props.headerFixedLayout) {
      headerClass = [...headerClass, 'headerpos-fixed'];
    }

    let toggleClass = ['mobile-menu'];

    if (this.props.collapseMenu) {
      toggleClass = [...toggleClass, 'on'];
    }

    let mainLogo = _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_8___default.a;
    let navHtml;

    if (!this.state.rightToggle && this.props.windowWidth < 992) {
      navHtml = '';
    } else {
      navHtml = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "collapse navbar-collapse d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavLeft__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavRight__WEBPACK_IMPORTED_MODULE_4__["default"], {
        history: this.props.history,
        rtlLayout: this.props.rtlLayout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }));
    }

    let navBar = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "m-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: toggleClass.join(' '),
      id: "mobile-collapse1",
      href: _store_constant__WEBPACK_IMPORTED_MODULE_6__["default"].BLANK_LINK,
      onClick: this.props.onToggleNavigation,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_6__["default"].BLANK_LINK,
      className: "b-brand",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      id: "main-logo",
      src: mainLogo,
      alt: "",
      className: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "mob-toggler",
      href: _store_constant__WEBPACK_IMPORTED_MODULE_6__["default"].BLANK_LINK,
      onClick: () => this.setState(prevState => {
        return {
          rightToggle: !prevState.rightToggle
        };
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "feather icon-more-vertical",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }))), navHtml);

    if (this.props.layout === 'horizontal' && this.props.subLayout === 'horizontal-2') {
      navBar = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, navBar);
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: headerClass.join(' '),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, navBar));
  }

}

const mapStateToProps = state => {
  return {
    rtlLayout: state.rtlLayout,
    headerBackColor: state.headerBackColor,
    headerFixedLayout: state.headerFixedLayout,
    collapseMenu: state.collapseMenu,
    layout: state.layout,
    subLayout: state.subLayout
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleNavigation: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_7__["COLLAPSE_MENU"]
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(react_window_size__WEBPACK_IMPORTED_MODULE_2___default()(NavBar)));

/***/ }),

/***/ "./src/App/layout/AdminLayout/Navigation/NavContent/NavBadge/index.js":
/*!****************************************************************************!*\
  !*** ./src/App/layout/AdminLayout/Navigation/NavContent/NavBadge/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/macbook/covid19/pxweb/src/App/layout/AdminLayout/Navigation/NavContent/NavBadge/index.js";


const navBadge = props => {
  let navBadges = false;

  if (props.items.badge) {
    const badgeClass = ['label', 'pcoded-badge', props.items.badge.type];
    navBadges = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: badgeClass.join(' '),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    }, props.items.badge.title);
  }

  return navBadges;
};

/* harmony default export */ __webpack_exports__["default"] = (navBadge);

/***/ }),

/***/ "./src/App/layout/AdminLayout/Navigation/NavContent/NavCollapse/index.js":
/*!*******************************************************************************!*\
  !*** ./src/App/layout/AdminLayout/Navigation/NavContent/NavCollapse/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../hoc/_Aux */ "./src/hoc/_Aux/index.js");
/* harmony import */ var _store_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../store/constant */ "./src/store/constant.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../store/actions */ "./src/store/actions.js");
/* harmony import */ var _NavIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../NavIcon */ "./src/App/layout/AdminLayout/Navigation/NavContent/NavIcon/index.js");
/* harmony import */ var _NavBadge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../NavBadge */ "./src/App/layout/AdminLayout/Navigation/NavContent/NavBadge/index.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../NavItem */ "./src/App/layout/AdminLayout/Navigation/NavContent/NavItem/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index */ "./src/App/layout/AdminLayout/Navigation/NavContent/NavCollapse/index.js");
var _jsxFileName = "/Users/macbook/covid19/pxweb/src/App/layout/AdminLayout/Navigation/NavContent/NavCollapse/index.js";











class NavCollapse extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    const currentIndex = document.location.pathname.toString().split('/').findIndex(id => id === this.props.collapse.id);

    if (currentIndex > -1) {
      this.props.onCollapseToggle(this.props.collapse.id, this.props.type);
    }
  }

  render() {
    const _this$props = this.props,
          isOpen = _this$props.isOpen,
          isTrigger = _this$props.isTrigger;
    let navItems = '';

    if (this.props.collapse.children) {
      const collapses = this.props.collapse.children;
      navItems = Object.keys(collapses).map(item => {
        item = collapses[item];

        switch (item.type) {
          case 'collapse':
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
              key: item.id,
              collapse: item,
              type: "sub",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              },
              __self: this
            });

          case 'item':
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
              layout: this.props.layout,
              key: item.id,
              item: item,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: this
            });

          default:
            return false;
        }
      });
    }

    let itemTitle = this.props.collapse.title;

    if (this.props.collapse.icon) {
      itemTitle = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pcoded-mtext",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, this.props.collapse.title);
    }

    let navLinkClass = ['nav-link'];
    let navItemClass = ['nav-item', 'pcoded-hasmenu'];
    const openIndex = isOpen.findIndex(id => id === this.props.collapse.id);

    if (openIndex > -1) {
      navItemClass = [...navItemClass, 'active'];

      if (this.props.layout !== 'horizontal') {
        navLinkClass = [...navLinkClass, 'active'];
      }
    }

    const triggerIndex = isTrigger.findIndex(id => id === this.props.collapse.id);

    if (triggerIndex > -1) {
      navItemClass = [...navItemClass, 'pcoded-trigger'];
    }

    const currentIndex = document.location.pathname.toString().split('/').findIndex(id => id === this.props.collapse.id);

    if (currentIndex > -1) {
      navItemClass = [...navItemClass, 'active'];

      if (this.props.layout !== 'horizontal') {
        navLinkClass = [...navLinkClass, 'active'];
      }
    }

    const subContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _store_constant__WEBPACK_IMPORTED_MODULE_4__["default"].BLANK_LINK,
      className: navLinkClass.join(' '),
      onClick: () => this.props.onCollapseToggle(this.props.collapse.id, this.props.type),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      items: this.props.collapse,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), itemTitle, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBadge__WEBPACK_IMPORTED_MODULE_7__["default"], {
      layout: this.props.layout,
      items: this.props.collapse,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "pcoded-submenu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, navItems));
    let mainContent = '';

    if (this.props.layout === 'horizontal') {
      mainContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: navItemClass.join(' '),
        onMouseLeave: () => this.props.onNavCollapseLeave(this.props.collapse.id, this.props.type),
        onMouseEnter: () => this.props.onCollapseToggle(this.props.collapse.id, this.props.type),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, subContent);
    } else {
      mainContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: navItemClass.join(' '),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, subContent);
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, mainContent);
  }

}

const mapStateToProps = state => {
  return {
    layout: state.layout,
    isOpen: state.isOpen,
    isTrigger: state.isTrigger
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCollapseToggle: (id, type) => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["COLLAPSE_TOGGLE"],
      menu: {
        id: id,
        type: type
      }
    }),
    onNavCollapseLeave: (id, type) => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_5__["NAV_COLLAPSE_LEAVE"],
      menu: {
        id: id,
        type: type
      }
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(NavCollapse)));

/***/ }),

/***/ "./src/App/layout/AdminLayout/Navigation/NavContent/NavGroup/index.js":
/*!****************************************************************************!*\
  !*** ./src/App/layout/AdminLayout/Navigation/NavContent/NavGroup/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../hoc/_Aux */ "./src/hoc/_Aux/index.js");
/* harmony import */ var _NavCollapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../NavCollapse */ "./src/App/layout/AdminLayout/Navigation/NavContent/NavCollapse/index.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../NavItem */ "./src/App/layout/AdminLayout/Navigation/NavContent/NavItem/index.js");
var _jsxFileName = "/Users/macbook/covid19/pxweb/src/App/layout/AdminLayout/Navigation/NavContent/NavGroup/index.js";





const navGroup = props => {
  let navItems = '';

  if (props.group.children) {
    const groups = props.group.children;
    navItems = Object.keys(groups).map(item => {
      item = groups[item];

      switch (item.type) {
        case 'collapse':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavCollapse__WEBPACK_IMPORTED_MODULE_2__["default"], {
            key: item.id,
            collapse: item,
            type: "main",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: undefined
          });

        case 'item':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
            layout: props.layout,
            key: item.id,
            item: item,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: undefined
          });

        default:
          return false;
      }
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: props.group.id,
    className: "nav-item pcoded-menu-caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, props.group.title)), navItems);
};

/* harmony default export */ __webpack_exports__["default"] = (navGroup);

/***/ }),

/***/ "./src/App/layout/AdminLayout/Navigation/NavContent/NavIcon/index.js":
/*!***************************************************************************!*\
  !*** ./src/App/layout/AdminLayout/Navigation/NavContent/NavIcon/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/macbook/covid19/pxweb/src/App/layout/AdminLayout/Navigation/NavContent/NavIcon/index.js";


const navIcon = props => {
  let navIcons = false;

  if (props.items.icon) {
    navIcons = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "pcoded-micon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: props.items.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: undefined
    }));
  }

  return navIcons;
};

/* harmony default export */ __webpack_exports__["default"] = (navIcon);

/***/ }),

/***/ "./src/App/layout/AdminLayout/Navigation/NavContent/NavItem/index.js":
/*!***************************************************************************!*\
  !*** ./src/App/layout/AdminLayout/Navigation/NavContent/NavItem/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-window-size */ "./node_modules/react-window-size/index.js");
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_window_size__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../hoc/_Aux */ "./src/hoc/_Aux/index.js");
/* harmony import */ var _NavIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../NavIcon */ "./src/App/layout/AdminLayout/Navigation/NavContent/NavIcon/index.js");
/* harmony import */ var _NavBadge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../NavBadge */ "./src/App/layout/AdminLayout/Navigation/NavContent/NavBadge/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../store/actions */ "./src/store/actions.js");
var _jsxFileName = "/Users/macbook/covid19/pxweb/src/App/layout/AdminLayout/Navigation/NavContent/NavItem/index.js";










class NavItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let itemTitle = this.props.item.title;

    if (this.props.item.icon) {
      itemTitle = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pcoded-mtext",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, this.props.item.title);
    }

    let itemTarget = '';

    if (this.props.item.target) {
      itemTarget = '_blank';
    }

    let subContent;

    if (this.props.item.external) {
      subContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: this.props.item.url,
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        items: this.props.item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), itemTitle, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBadge__WEBPACK_IMPORTED_MODULE_6__["default"], {
        layout: this.props.layout,
        items: this.props.item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }));
    } else {
      subContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        to: this.props.item.url,
        className: "nav-link",
        exact: true,
        target: itemTarget,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        items: this.props.item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), itemTitle, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBadge__WEBPACK_IMPORTED_MODULE_6__["default"], {
        layout: this.props.layout,
        items: this.props.item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }));
    }

    let mainContent = '';

    if (this.props.layout === 'horizontal') {
      mainContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        onClick: this.props.onItemLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, subContent);
    } else {
      if (this.props.windowWidth < 992) {
        mainContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: this.props.item.classes,
          onClick: this.props.onItemClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, subContent);
      } else {
        mainContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: this.props.item.classes,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, subContent);
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, mainContent);
  }

}

const mapStateToProps = state => {
  return {
    layout: state.layout,
    collapseMenu: state.collapseMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onItemClick: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_7__["COLLAPSE_MENU"]
    }),
    onItemLeave: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_7__["NAV_CONTENT_LEAVE"]
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(react_window_size__WEBPACK_IMPORTED_MODULE_3___default()(NavItem))));

/***/ }),

/***/ "./src/App/layout/AdminLayout/Navigation/NavContent/index.js":
/*!*******************************************************************!*\
  !*** ./src/App/layout/AdminLayout/Navigation/NavContent/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-window-size */ "./node_modules/react-window-size/index.js");
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_window_size__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../hoc/_Aux */ "./src/hoc/_Aux/index.js");
/* harmony import */ var _NavGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavGroup */ "./src/App/layout/AdminLayout/Navigation/NavContent/NavGroup/index.js");
/* harmony import */ var _store_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../store/constant */ "./src/store/constant.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../store/actions */ "./src/store/actions.js");
var _jsxFileName = "/Users/macbook/covid19/pxweb/src/App/layout/AdminLayout/Navigation/NavContent/index.js";











class NavContent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      scrollWidth: 0,
      prevDisable: true,
      nextDisable: false
    };

    this.scrollPrevHandler = () => {
      const wrapperWidth = document.getElementById('sidenav-wrapper').clientWidth;
      let scrollWidth = this.state.scrollWidth - wrapperWidth;

      if (scrollWidth < 0) {
        this.setState({
          scrollWidth: 0,
          prevDisable: true,
          nextDisable: false
        });
      } else {
        this.setState({
          scrollWidth: scrollWidth,
          prevDisable: false
        });
      }
    };

    this.scrollNextHandler = () => {
      const wrapperWidth = document.getElementById('sidenav-wrapper').clientWidth;
      const contentWidth = document.getElementById('sidenav-horizontal').clientWidth;
      let scrollWidth = this.state.scrollWidth + (wrapperWidth - 80);

      if (scrollWidth > contentWidth - wrapperWidth) {
        scrollWidth = contentWidth - wrapperWidth + 80;
        this.setState({
          scrollWidth: scrollWidth,
          prevDisable: false,
          nextDisable: true
        });
      } else {
        this.setState({
          scrollWidth: scrollWidth,
          prevDisable: false
        });
      }
    };
  }

  render() {
    const navItems = this.props.navigation.map(item => {
      switch (item.type) {
        case 'group':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavGroup__WEBPACK_IMPORTED_MODULE_7__["default"], {
            layout: this.props.layout,
            key: item.id,
            group: item,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          });

        default:
          return false;
      }
    });
    let scrollStyle = {
      marginLeft: '-' + this.state.scrollWidth + 'px'
    };

    if (this.props.layout === 'horizontal' && this.props.rtlLayout) {
      scrollStyle = {
        marginRight: '-' + this.state.scrollWidth + 'px'
      };
    }

    let mainContent = '';

    if (this.props.layout === 'horizontal') {
      let prevClass = ['sidenav-horizontal-prev'];

      if (this.state.prevDisable) {
        prevClass = [...prevClass, 'disabled'];
      }

      let nextClass = ['sidenav-horizontal-next'];

      if (this.state.nextDisable) {
        nextClass = [...nextClass, 'disabled'];
      }

      mainContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-content sidenav-horizontal",
        id: "layout-sidenav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_8__["default"].BLANK_LINK,
        className: prevClass.join(' '),
        onClick: this.scrollPrevHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "sidenav-wrapper",
        className: "sidenav-horizontal-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        id: "sidenav-horizontal",
        className: "nav pcoded-inner-navbar sidenav-inner",
        onMouseLeave: this.props.onNavContentLeave,
        style: scrollStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, navItems)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _store_constant__WEBPACK_IMPORTED_MODULE_8__["default"].BLANK_LINK,
        className: nextClass.join(' '),
        onClick: this.scrollNextHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })));
    } else {
      mainContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-content next-scroll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "nav pcoded-inner-navbar",
        id: "nav-ps-next",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, navItems)));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, mainContent);
  }

}

const mapStateToProps = state => {
  return {
    layout: state.layout,
    rtlLayout: state.rtlLayout,
    collapseMenu: state.collapseMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNavContentLeave: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_9__["NAV_CONTENT_LEAVE"]
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(react_window_size__WEBPACK_IMPORTED_MODULE_4___default()(NavContent))));

/***/ }),

/***/ "./src/App/layout/AdminLayout/Navigation/OutsideClick/index.js":
/*!*********************************************************************!*\
  !*** ./src/App/layout/AdminLayout/Navigation/OutsideClick/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-window-size */ "./node_modules/react-window-size/index.js");
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_window_size__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../store/actions */ "./src/store/actions.js");
var _jsxFileName = "/Users/macbook/covid19/pxweb/src/App/layout/AdminLayout/Navigation/OutsideClick/index.js";





class OutsideClick extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  /**
   * close menu if clicked on outside of element
   */


  handleOutsideClick(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.props.windowWidth < 992 && this.props.collapseMenu) {
        this.props.onToggleNavigation();
      }
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "nav-outside",
      ref: this.setWrapperRef,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, this.props.children);
  }

}

const mapStateToProps = state => {
  return {
    collapseMenu: state.collapseMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleNavigation: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_3__["COLLAPSE_MENU"]
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(react_window_size__WEBPACK_IMPORTED_MODULE_2___default()(OutsideClick)));

/***/ }),

/***/ "./src/App/layout/AdminLayout/Navigation/index.js":
/*!********************************************************!*\
  !*** ./src/App/layout/AdminLayout/Navigation/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-window-size */ "./node_modules/react-window-size/index.js");
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_window_size__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NavContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavContent */ "./src/App/layout/AdminLayout/Navigation/NavContent/index.js");
/* harmony import */ var _OutsideClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OutsideClick */ "./src/App/layout/AdminLayout/Navigation/OutsideClick/index.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../hoc/_Aux */ "./src/hoc/_Aux/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../store/actions */ "./src/store/actions.js");
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../menu-items */ "./src/menu-items.js");
var _jsxFileName = "/Users/macbook/covid19/pxweb/src/App/layout/AdminLayout/Navigation/index.js";










class Navigation extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.resize = () => {
      const contentWidth = document.getElementById('root').clientWidth;

      if (this.props.layout === 'horizontal' && contentWidth < 992) {
        this.props.onChangeLayout('vertical');
      }
    };

    this.scroll = () => {
      if (this.props.navFixedLayout && this.props.headerFixedLayout === false) {
        const el = document.querySelector('.pcoded-navbar.menupos-fixed');
        const scrollPosition = window.pageYOffset;

        if (scrollPosition > 60) {
          el.style.position = 'fixed';
          el.style.transition = 'none';
          el.style.marginTop = '0';
        } else {
          el.style.position = 'absolute';
          el.style.marginTop = '60px';
        }
      } else {
        document.querySelector('.pcoded-navbar').removeAttribute('style');
      }
    };
  }

  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  render() {
    let navClass = ['pcoded-navbar'];
    navClass = [...navClass, this.props.layoutType];

    if (this.props.layout === 'horizontal') {
      navClass = [...navClass, 'theme-horizontal'];
    } else {
      if (this.props.navFixedLayout) {
        navClass = [...navClass, 'menupos-fixed'];
      }

      if (this.props.navFixedLayout && !this.props.headerFixedLayout) {
        window.addEventListener('scroll', this.scroll, true);
        window.scrollTo(0, 0);
      } else {
        window.removeEventListener('scroll', this.scroll, false);
      }
    }

    if (this.props.windowWidth < 992 && this.props.collapseMenu) {
      navClass = [...navClass, 'mob-open'];
    } else if (this.props.collapseMenu) {
      navClass = [...navClass, 'navbar-collapsed'];
    }

    if (this.props.layoutType === 'dark') {
      document.body.classList.add('able-pro-dark');
    } else {
      document.body.classList.remove('able-pro-dark');
    }

    if (this.props.rtlLayout) {
      document.body.classList.add('able-pro-rtl');
    } else {
      document.body.classList.remove('able-pro-rtl');
    }

    if (this.props.boxLayout) {
      document.body.classList.add('container');
      document.body.classList.add('box-layout');
    } else {
      document.body.classList.remove('container');
      document.body.classList.remove('box-layout');
    }

    let navBarClass = ['navbar-wrapper'];

    if (this.props.layout === 'horizontal' && this.props.subLayout === 'horizontal-2') {
      navBarClass = [...navBarClass, 'container'];
    }

    let navContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: navBarClass.join(' '),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      navigation: _menu_items__WEBPACK_IMPORTED_MODULE_8__["default"].items,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }));

    if (this.props.windowWidth < 992) {
      navContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OutsideClick__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
        navigation: _menu_items__WEBPACK_IMPORTED_MODULE_8__["default"].items,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      })));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: navClass.join(' '),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, navContent));
  }

}

const mapStateToProps = state => {
  return {
    layout: state.layout,
    subLayout: state.subLayout,
    collapseMenu: state.collapseMenu,
    layoutType: state.layoutType,
    rtlLayout: state.rtlLayout,
    navFixedLayout: state.navFixedLayout,
    headerFixedLayout: state.headerFixedLayout,
    boxLayout: state.boxLayout
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleNavigation: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_7__["COLLAPSE_MENU"]
    }),
    onChangeLayout: layout => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_7__["CHANGE_LAYOUT"],
      layout: layout
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(react_window_size__WEBPACK_IMPORTED_MODULE_3___default()(Navigation))));

/***/ }),

/***/ "./src/App/layout/AdminLayout/index.js":
/*!*********************************************!*\
  !*** ./src/App/layout/AdminLayout/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_full_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-full-screen */ "./node_modules/react-full-screen/dist/index.js");
/* harmony import */ var react_full_screen__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_full_screen__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-window-size */ "./node_modules/react-window-size/index.js");
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_window_size__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navigation */ "./src/App/layout/AdminLayout/Navigation/index.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavBar */ "./src/App/layout/AdminLayout/NavBar/index.js");
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Breadcrumb */ "./src/App/layout/AdminLayout/Breadcrumb/index.js");
/* harmony import */ var _Configuration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Configuration */ "./src/App/layout/AdminLayout/Configuration/index.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Loader */ "./src/App/layout/Loader/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../routes */ "./src/routes.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./src/hoc/_Aux/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../store/actions */ "./src/store/actions.js");
var _jsxFileName = "/Users/macbook/covid19/pxweb/src/App/layout/AdminLayout/index.js";












 //import '../../../app.scss';

class AdminLayout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.fullScreenExitHandler = () => {
      if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        this.props.onFullScreenExit();
      }
    };
  }

  UNSAFE_componentWillMount() {
    if (this.props.windowWidth > 992 && this.props.windowWidth <= 1024 && this.props.layout !== 'horizontal') {
      this.props.onUNSAFE_componentWillMount();
    }
  }

  mobileOutClickHandler() {
    if (this.props.windowWidth < 992 && this.props.collapseMenu) {
      this.props.onUNSAFE_componentWillMount();
    }
  }

  componentDidMount() {// askForPermissioToReceiveNotifications()
  }

  render() {
    /* full screen exit call */
    document.addEventListener('fullscreenchange', this.fullScreenExitHandler);
    document.addEventListener('webkitfullscreenchange', this.fullScreenExitHandler);
    document.addEventListener('mozfullscreenchange', this.fullScreenExitHandler);
    document.addEventListener('MSFullscreenChange', this.fullScreenExitHandler);
    const menu = _routes__WEBPACK_IMPORTED_MODULE_10__["default"].map((route, index) => {
      return route.component ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        key: index,
        path: route.path,
        exact: route.exact,
        name: route.name,
        render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(route.component, Object.assign({}, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        })),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }) : null;
    });
    let mainClass = ['pcoded-wrapper'];

    if (this.props.layout === 'horizontal' && this.props.subLayout === 'horizontal-2') {
      mainClass = [...mainClass, 'container'];
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_full_screen__WEBPACK_IMPORTED_MODULE_3___default.a, {
      enabled: this.props.isFullScreen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      history: this.props.history,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pcoded-main-container",
      onClick: () => this.mobileOutClickHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: mainClass.join(' '),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pcoded-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pcoded-inner-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Breadcrumb__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "page-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, menu, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      from: "/",
      to: this.props.defaultPath,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Configuration__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    })));
  }

}

const mapStateToProps = state => {
  return {
    defaultPath: state.defaultPath,
    isFullScreen: state.isFullScreen,
    collapseMenu: state.collapseMenu,
    layout: state.layout,
    subLayout: state.subLayout
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFullScreenExit: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_12__["FULL_SCREEN_EXIT"]
    }),
    onUNSAFE_componentWillMount: () => dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_12__["COLLAPSE_MENU"]
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(react_window_size__WEBPACK_IMPORTED_MODULE_4___default()(AdminLayout)));

/***/ }),

/***/ "./src/assets/images/action_Lightblue.png":
/*!************************************************!*\
  !*** ./src/assets/images/action_Lightblue.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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LyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTExLTIwVDE1OjA4OjE0KzA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTAxLTIyVDE5OjQ4OjA2KzA1OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMS0yMlQxOTo0ODowNiswNTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphZTM3N2YyZS1kYzc1LTQ5ZTctYmE2ZC0xZmMzYzA3MzQ5YjQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozMmU0YmE3MS05NDA1LWVhNDMtOGI3My1kOGMwMGFjYTdhNDEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZDUyMjNlNy0xMmU0LTQ1YjItYWYwMi0xMTgwYzhhZTE2NDUiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iRGlzcGxheSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZmQ1MjIzZTctMTJlNC00NWIyLWFmMDItMTE4MGM4YWUxNjQ1IiBzdEV2dDp3aGVuPSIyMDE5LTExLTIwVDE1OjA4OjE0KzA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3Rh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"

/***/ }),

/***/ "./src/assets/images/comment.png":
/*!***************************************!*\
  !*** ./src/assets/images/comment.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/comment.423dbec8.png";

/***/ }),

/***/ "./src/assets/images/intervention_Lightblue.png":
/*!******************************************************!*\
  !*** ./src/assets/images/intervention_Lightblue.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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bW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMTEtMDZUMTc6NDI6MTUrMDU6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDEtMjJUMTk6NDc6MzIrMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTAxLTIyVDE5OjQ3OjMyKzA1OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY2NjY4OWRhLTNhNzItNDAwOS05YjZjLTkyZjQ0NjhlYmE4MCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmIxMjYwNmI4LWE1Y2UtOTU0Mi1iMTQyLTY3MzYyMTdkMTQzYiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmM3ZDdkMWRhLTQ0ODAtNDNhOC05NmM5LWUzODhiODQ5MmE3NyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJEaXNwbGF5Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjN2Q3ZDFkYS00NDgwLTQzYTgtOTZjOS1lMzg4Yjg0OTJhNzciIHN0RXZ0OndoZW49IjIwMTktMTEtMDZUMTc6NDI6MTUrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Yzg3MjRhZi1mYzA0LTQyNjUtYjhlMS1kMTBkM2FkNzZkNmIiIHN0RXZ0OndoZW49IjIwMTktMTEtMDZUMTc6NDI6MTUrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmNjY2ODlkYS0zYTcyLTQwMDktOWI2Yy05MmY0NDY4ZWJhODAiIHN0RXZ0OndoZW49IjIwMjAtMDEtMjJUMTk6NDc6MzIrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MGRmMTIzMWQtODY5OC03MDQ4LWI5NDEtOTBjZjY1ZTZlMDJhPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjQwZmEyOWQ0LTg1YjEtMzg0Ni04ODk2LWY3OGU5YmNkMWY0NTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1MTNkODZjZS03NTkyLWJjNGUtOTVlOS00YTM4YjA1ODMxODI8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6NjdhYjNkMzctMWY2Mi1kNzQzLWI3NDktNDEyODAzYWIyOGQyPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDoxMGY1MjA5Mi0xMTM5LTQzYTEtODMyMS1mOWEyOTUwOTQ2Nzk8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjdkYmEyNzI5LTAwOGEtNDI2OC1hMjQxLTRiMTVkNTkzNTg2NTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9w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"

/***/ }),

/***/ "./src/assets/images/subscribe.png":
/*!*****************************************!*\
  !*** ./src/assets/images/subscribe.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/subscribe.99d9663d.png";

/***/ }),

/***/ "./src/assets/images/user/avatar-1.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/user/avatar-1.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5QzE5QTYzMjM0RkExMUU5OUNGQUQzNEVCODUwQzFBOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5QzE5QTYzMzM0RkExMUU5OUNGQUQzNEVCODUwQzFBOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlDMTlBNjMwMzRGQTExRTk5Q0ZBRDM0RUI4NTBDMUE5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlDMTlBNjMxMzRGQTExRTk5Q0ZBRDM0RUI4NTBDMUE5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJ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"

/***/ }),

/***/ "./src/assets/images/user/avatar-2.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/user/avatar-2.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2OTQyNUE3OTM0RkIxMUU5Qjc1RERDNTEwNEM0NUY1MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2OTQyNUE3QTM0RkIxMUU5Qjc1RERDNTEwNEM0NUY1MiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY5NDI1QTc3MzRGQjExRTlCNzVEREM1MTA0QzQ1RjUyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY5NDI1QTc4MzRGQjExRTlCNzVEREM1MTA0QzQ1RjUyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJ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"

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);

 // import Maps from './Demo/Dashboard/Maps';
// import Intervention from './Demo/Dashboard/Intervene/Intervention';

window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_1___default.a;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_1___default.a;
global.jQuery = jquery__WEBPACK_IMPORTED_MODULE_1___default.a;
const Maps = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(47), __webpack_require__.e(67), __webpack_require__.e(31), __webpack_require__.e(120)]).then(__webpack_require__.bind(null, /*! ./Demo/Dashboard/Maps */ "./src/Demo/Dashboard/Maps.js")));
const SignIn = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 138).then(__webpack_require__.bind(null, /*! ./Demo/SignIn/SignIn */ "./src/Demo/SignIn/SignIn.js")));
const DashboardDefault = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(11), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(13), __webpack_require__.e(17), __webpack_require__.e(16), __webpack_require__.e(19), __webpack_require__.e(22), __webpack_require__.e(24), __webpack_require__.e(25), __webpack_require__.e(29), __webpack_require__.e(3), __webpack_require__.e(31), __webpack_require__.e(70)]).then(__webpack_require__.bind(null, /*! ./Demo/Dashboard/Default */ "./src/Demo/Dashboard/Default.js")));
const Predict = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(31), __webpack_require__.e(121)]).then(__webpack_require__.bind(null, /*! ./Demo/Dashboard/Predict */ "./src/Demo/Dashboard/Predict.js")));
const PredictList = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(11), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(13), __webpack_require__.e(17), __webpack_require__.e(15), __webpack_require__.e(16), __webpack_require__.e(19), __webpack_require__.e(22), __webpack_require__.e(24), __webpack_require__.e(25), __webpack_require__.e(29), __webpack_require__.e(31), __webpack_require__.e(46), __webpack_require__.e(71)]).then(__webpack_require__.bind(null, /*! ./Demo/Dashboard/PredictList */ "./src/Demo/Dashboard/PredictList.js")));
const PredictDetails = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(12), __webpack_require__.e(27), __webpack_require__.e(28), __webpack_require__.e(33), __webpack_require__.e(3), __webpack_require__.e(83)]).then(__webpack_require__.bind(null, /*! ./Demo/Dashboard/PredictDetails */ "./src/Demo/Dashboard/PredictDetails.js")));
const Intervene = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(11), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(13), __webpack_require__.e(17), __webpack_require__.e(16), __webpack_require__.e(19), __webpack_require__.e(22), __webpack_require__.e(24), __webpack_require__.e(25), __webpack_require__.e(29), __webpack_require__.e(3), __webpack_require__.e(81)]).then(__webpack_require__.bind(null, /*! ./Demo/Dashboard/Intervene/Intervene */ "./src/Demo/Dashboard/Intervene/Intervene.js")));
const InterveneActions = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(6), __webpack_require__.e(32), __webpack_require__.e(54), __webpack_require__.e(128), __webpack_require__.e(55), __webpack_require__.e(246)]).then(__webpack_require__.bind(null, /*! ./Demo/URPortal/Actions/Actions */ "./src/Demo/URPortal/Actions/Actions.js"))); // const NewIntervention  = React.lazy(() => import('./Demo/URPortal/Interventions/NewIntervention'));

const InterveneActionsDetails = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(9), __webpack_require__.e(15), __webpack_require__.e(27), __webpack_require__.e(39), __webpack_require__.e(107)]).then(__webpack_require__.bind(null, /*! ./Demo/URPortal/Actions/ActionDetail */ "./src/Demo/URPortal/Actions/ActionDetail.js")));
const InterventionDetails = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(9), __webpack_require__.e(12), __webpack_require__.e(15), __webpack_require__.e(27), __webpack_require__.e(33), __webpack_require__.e(39), __webpack_require__.e(3), __webpack_require__.e(97)]).then(__webpack_require__.bind(null, /*! ./Demo/URPortal/Interventions/InterventionDetail */ "./src/Demo/URPortal/Interventions/InterventionDetail.js")));
const Collaborate = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(11), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(13), __webpack_require__.e(17), __webpack_require__.e(16), __webpack_require__.e(19), __webpack_require__.e(22), __webpack_require__.e(24), __webpack_require__.e(25), __webpack_require__.e(29), __webpack_require__.e(3), __webpack_require__.e(46), __webpack_require__.e(91)]).then(__webpack_require__.bind(null, /*! ./Demo/Dashboard/Collaborate/Collaborate */ "./src/Demo/Dashboard/Collaborate/Collaborate.js")));
const Intervention = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(17), __webpack_require__.e(30), __webpack_require__.e(28), __webpack_require__.e(32), __webpack_require__.e(145), __webpack_require__.e(51), __webpack_require__.e(189)]).then(__webpack_require__.bind(null, /*! ./Demo/URPortal/Interventions/Intervention */ "./src/Demo/URPortal/Interventions/Intervention.js")));
const AddIntervention = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(6), __webpack_require__.e(20), __webpack_require__.e(30), __webpack_require__.e(36), __webpack_require__.e(54), __webpack_require__.e(115)]).then(__webpack_require__.bind(null, /*! ./Demo/URPortal/Interventions/AddIntervention */ "./src/Demo/URPortal/Interventions/AddIntervention.js")));
const AddAction = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(6), __webpack_require__.e(15), __webpack_require__.e(20), __webpack_require__.e(30), __webpack_require__.e(140)]).then(__webpack_require__.bind(null, /*! ./Demo/URPortal/Actions/AddAction */ "./src/Demo/URPortal/Actions/AddAction.js")));
const AddAssignee = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(6), __webpack_require__.e(15), __webpack_require__.e(20), __webpack_require__.e(30), __webpack_require__.e(141)]).then(__webpack_require__.bind(null, /*! ./Demo/URPortal/Actions/AddAssignee */ "./src/Demo/URPortal/Actions/AddAssignee.js")));
const Survey = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(30), __webpack_require__.e(47), __webpack_require__.e(89)]).then(__webpack_require__.bind(null, /*! ./Demo/URPortal/Survey/Survey */ "./src/Demo/URPortal/Survey/Survey.js")));
const PatientProfile = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(13), __webpack_require__.e(17), __webpack_require__.e(19), __webpack_require__.e(32), __webpack_require__.e(37), __webpack_require__.e(40), __webpack_require__.e(41), __webpack_require__.e(51), __webpack_require__.e(55), __webpack_require__.e(113)]).then(__webpack_require__.bind(null, /*! ./Demo/PatientProfile/PatientProfile */ "./src/Demo/PatientProfile/PatientProfile.js")));
const Patients = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(29), __webpack_require__.e(32), __webpack_require__.e(3), __webpack_require__.e(186)]).then(__webpack_require__.bind(null, /*! ./Demo/PatientProfile/Patients */ "./src/Demo/PatientProfile/Patients.js")));
const StaffMembers = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(8), __webpack_require__.e(14), __webpack_require__.e(3), __webpack_require__.e(18), __webpack_require__.e(21), __webpack_require__.e(98)]).then(__webpack_require__.bind(null, /*! ./Demo/Staff/StaffMembers */ "./src/Demo/Staff/StaffMembers.js")));
const StaffProfile = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(8), __webpack_require__.e(14), __webpack_require__.e(37), __webpack_require__.e(38), __webpack_require__.e(3), __webpack_require__.e(18), __webpack_require__.e(21), __webpack_require__.e(41), __webpack_require__.e(88)]).then(__webpack_require__.bind(null, /*! ./Demo/StaffProfile/StaffProfile */ "./src/Demo/StaffProfile/StaffProfile.js")));
const DashboardSales = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(45), __webpack_require__.e(86)]).then(__webpack_require__.bind(null, /*! ./Demo/Dashboard/Sales */ "./src/Demo/Dashboard/Sales.js")));
const DashboardCRM = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(78)]).then(__webpack_require__.bind(null, /*! ./Demo/Dashboard/Crm */ "./src/Demo/Dashboard/Crm.js")));
const DashboardAnalytics = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(85)]).then(__webpack_require__.bind(null, /*! ./Demo/Dashboard/Analytics */ "./src/Demo/Dashboard/Analytics.js")));
const DashboardProject = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(101)]).then(__webpack_require__.bind(null, /*! ./Demo/Dashboard/Project */ "./src/Demo/Dashboard/Project.js")));
const LayoutHorizontal = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(205)]).then(__webpack_require__.bind(null, /*! ./Demo/PageLayout/Horizontal */ "./src/Demo/PageLayout/Horizontal.js")));
const LayoutHorizontalV2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(206)]).then(__webpack_require__.bind(null, /*! ./Demo/PageLayout/HorizontalL2 */ "./src/Demo/PageLayout/HorizontalL2.js")));
const LayoutHorizontalRtl = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(207)]).then(__webpack_require__.bind(null, /*! ./Demo/PageLayout/HorizontalRtl */ "./src/Demo/PageLayout/HorizontalRtl.js")));
const LayoutStatic = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(213)]).then(__webpack_require__.bind(null, /*! ./Demo/PageLayout/Vertical/Static */ "./src/Demo/PageLayout/Vertical/Static.js")));
const LayoutFixed = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(210)]).then(__webpack_require__.bind(null, /*! ./Demo/PageLayout/Vertical/Fixed */ "./src/Demo/PageLayout/Vertical/Fixed.js")));
const LayoutNavFixed = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(211)]).then(__webpack_require__.bind(null, /*! ./Demo/PageLayout/Vertical/NavFixed */ "./src/Demo/PageLayout/Vertical/NavFixed.js")));
const LayoutCollapseMenu = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(209)]).then(__webpack_require__.bind(null, /*! ./Demo/PageLayout/Vertical/CollapseMenu */ "./src/Demo/PageLayout/Vertical/CollapseMenu.js")));
const LayoutBox = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(203)]).then(__webpack_require__.bind(null, /*! ./Demo/PageLayout/BoxLayout */ "./src/Demo/PageLayout/BoxLayout.js")));
const LayoutRtl = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(212)]).then(__webpack_require__.bind(null, /*! ./Demo/PageLayout/Vertical/RtlLayout */ "./src/Demo/PageLayout/Vertical/RtlLayout.js")));
const LayoutLight = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(208)]).then(__webpack_require__.bind(null, /*! ./Demo/PageLayout/LightLayout */ "./src/Demo/PageLayout/LightLayout.js")));
const LayoutDark = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(204)]).then(__webpack_require__.bind(null, /*! ./Demo/PageLayout/DarkLayout */ "./src/Demo/PageLayout/DarkLayout.js")));
const WdgtStatistic = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 142).then(__webpack_require__.bind(null, /*! ./Demo/Widget/WdgtStatistic */ "./src/Demo/Widget/WdgtStatistic.js")));
const WdgtData = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(45), __webpack_require__.e(73)]).then(__webpack_require__.bind(null, /*! ./Demo/Widget/WdgtData */ "./src/Demo/Widget/WdgtData.js")));
const WdgetChart = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(33), __webpack_require__.e(62)]).then(__webpack_require__.bind(null, /*! ./Demo/Widget/WdgetChart */ "./src/Demo/Widget/WdgetChart.js")));
const UsersProfile = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(8), __webpack_require__.e(14), __webpack_require__.e(3), __webpack_require__.e(18), __webpack_require__.e(21), __webpack_require__.e(99)]).then(__webpack_require__.bind(null, /*! ./Demo/Users/UserProfile */ "./src/Demo/Users/UserProfile.js")));
const UsersCards = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(79)]).then(__webpack_require__.bind(null, /*! ./Demo/Users/UserCards */ "./src/Demo/Users/UserCards.js")));
const UsersList = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(191)]).then(__webpack_require__.bind(null, /*! ./Demo/Users/UserList */ "./src/Demo/Users/UserList.js")));
const HospitalDashboard = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(123)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Hospital/Dashboard */ "./src/Demo/Panels/Hospital/Dashboard.js")));
const HospitalDepartment = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(104)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Hospital/Department */ "./src/Demo/Panels/Hospital/Department.js")));
const HospitalDoctor = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(181)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Hospital/Doctor */ "./src/Demo/Panels/Hospital/Doctor.js")));
const HospitalPatient = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(223)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Hospital/Patient */ "./src/Demo/Panels/Hospital/Patient.js")));
const HospitalNurse = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(183)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Hospital/Nurse */ "./src/Demo/Panels/Hospital/Nurse.js")));
const HospitalPharmacist = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(184)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Hospital/Pharmacist */ "./src/Demo/Panels/Hospital/Pharmacist.js")));
const HospitalLaboratory = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(182)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Hospital/Laboratory */ "./src/Demo/Panels/Hospital/Laboratory.js")));
const PCDashboard = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(6), __webpack_require__.e(100)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/ProjectNCrm/Dashboard */ "./src/Demo/Panels/ProjectNCrm/Dashboard.js")));
const PCCustomers = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(225)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/ProjectNCrm/Customers */ "./src/Demo/Panels/ProjectNCrm/Customers.js")));
const PCProject = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(12), __webpack_require__.e(28), __webpack_require__.e(124)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/ProjectNCrm/Project */ "./src/Demo/Panels/ProjectNCrm/Project.js")));
const PCTask = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(12), __webpack_require__.e(28), __webpack_require__.e(125)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/ProjectNCrm/Task */ "./src/Demo/Panels/ProjectNCrm/Task.js")));
const MshpDashboard = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(112)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Membership/Dashboard */ "./src/Demo/Panels/Membership/Dashboard.js")));
const MshpEmail = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(23), __webpack_require__.e(154)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Membership/Email */ "./src/Demo/Panels/Membership/Email.js")));
const MshpCountry = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(224)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Membership/Country */ "./src/Demo/Panels/Membership/Country.js")));
const MshpCoupons = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 105).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Membership/Coupons */ "./src/Demo/Panels/Membership/Coupons.js")));
const MshpNewsletter = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(23), __webpack_require__.e(155)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Membership/Newsletter */ "./src/Demo/Panels/Membership/Newsletter.js")));
const MshpUser = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 133).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Membership/User */ "./src/Demo/Panels/Membership/User.js")));
const MshpMembership = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 106).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Membership/Membership */ "./src/Demo/Panels/Membership/Membership.js")));
const HelpdeskDashboard = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(111)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Helpdesk/Dashboard */ "./src/Demo/Panels/Helpdesk/Dashboard.js")));
const HelpdeskCreateTicket = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(12), __webpack_require__.e(180)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Helpdesk/CreateTicket */ "./src/Demo/Panels/Helpdesk/CreateTicket.js")));
const HelpdeskTicketList = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(8), __webpack_require__.e(12), __webpack_require__.e(14), __webpack_require__.e(26), __webpack_require__.e(3), __webpack_require__.e(18), __webpack_require__.e(21), __webpack_require__.e(82)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Helpdesk/TicketList */ "./src/Demo/Panels/Helpdesk/TicketList.js")));
const HelpdeskTicketDetails = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(8), __webpack_require__.e(14), __webpack_require__.e(26), __webpack_require__.e(3), __webpack_require__.e(18), __webpack_require__.e(21), __webpack_require__.e(117)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Helpdesk/TicketDetails */ "./src/Demo/Panels/Helpdesk/TicketDetails.js")));
const HelpdeskCustomer = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 222).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Helpdesk/Customer */ "./src/Demo/Panels/Helpdesk/Customer.js")));
const SchoolDashboard = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(43), __webpack_require__.e(134)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/School/Dashboard */ "./src/Demo/Panels/School/Dashboard.js")));
const SchoolStudent = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(136)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/School/Student */ "./src/Demo/Panels/School/Student.js")));
const SchoolParents = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(135)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/School/Parents */ "./src/Demo/Panels/School/Parents.js")));
const SchoolTeacher = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(137)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/School/Teacher */ "./src/Demo/Panels/School/Teacher.js")));
const SisDashboard = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(185)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Sis/Dashboard */ "./src/Demo/Panels/Sis/Dashboard.js")));
const SisLeave = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(229)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Sis/Leave */ "./src/Demo/Panels/Sis/Leave.js")));
const SisEvaluation = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(228)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Sis/Evaluation */ "./src/Demo/Panels/Sis/Evaluation.js")));
const SisEvent = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 126).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Sis/Event */ "./src/Demo/Panels/Sis/Event.js")));
const SisCircular = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 226).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Sis/Circular */ "./src/Demo/Panels/Sis/Circular.js")));
const SisCourse = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 227).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Sis/Course */ "./src/Demo/Panels/Sis/Course.js")));
const CryptoDashboard = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(102)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Crypto/Dashboard */ "./src/Demo/Panels/Crypto/Dashboard.js")));
const CryptoExchange = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(109)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Crypto/Exchange */ "./src/Demo/Panels/Crypto/Exchange.js")));
const CryptoWallet = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(219)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Crypto/Wallet */ "./src/Demo/Panels/Crypto/Wallet.js")));
const CryptoTransaction = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(218)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Crypto/Transaction */ "./src/Demo/Panels/Crypto/Transaction.js")));
const CryptoHistory = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(214)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Crypto/History */ "./src/Demo/Panels/Crypto/History.js")));
const CryptoTrading = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(217)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Crypto/Trading */ "./src/Demo/Panels/Crypto/Trading.js")));
const CryptoInitialCoin = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(27), __webpack_require__.e(216)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Crypto/InitialCoin */ "./src/Demo/Panels/Crypto/InitialCoin.js")));
const CryptoIcoListing = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 215).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Crypto/IcoListing */ "./src/Demo/Panels/Crypto/IcoListing.js")));
const EcommProduct = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(76)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Ecommerce/Product */ "./src/Demo/Panels/Ecommerce/Product.js")));
const EcommProductDetails = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 103).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Ecommerce/ProductDetails */ "./src/Demo/Panels/Ecommerce/ProductDetails.js")));
const EcommOrder = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 110).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Ecommerce/Order */ "./src/Demo/Panels/Ecommerce/Order.js")));
const EcommCheckout = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 93).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Ecommerce/Checkout */ "./src/Demo/Panels/Ecommerce/Checkout.js")));
const EcommCart = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 122).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Ecommerce/Cart */ "./src/Demo/Panels/Ecommerce/Cart.js")));
const EcommSellers = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(221)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Ecommerce/Sellers */ "./src/Demo/Panels/Ecommerce/Sellers.js")));
const EcommCustomers = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(220)]).then(__webpack_require__.bind(null, /*! ./Demo/Panels/Ecommerce/Customers */ "./src/Demo/Panels/Ecommerce/Customers.js")));
const UIBasicAlert = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 160).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Basic/Alert */ "./src/Demo/UIElements/Basic/Alert.js")));
const UIBasicButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 130).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Basic/Button */ "./src/Demo/UIElements/Basic/Button.js")));
const UIBasicBadges = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 129).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Basic/Badges */ "./src/Demo/UIElements/Basic/Badges.js")));
const UIBasicBreadcrumbPagination = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 161).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Basic/BreadcrumbPagination */ "./src/Demo/UIElements/Basic/BreadcrumbPagination.js")));
const UIBasicCards = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 90).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Basic/Cards */ "./src/Demo/UIElements/Basic/Cards.js")));
const UIBasicCollapse = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 238).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Basic/Collapse */ "./src/Demo/UIElements/Basic/Collapse.js")));
const UIBasicCarousels = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 95).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Basic/Carousels */ "./src/Demo/UIElements/Basic/Carousels.js")));
const UIBasicGridSystem = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(26), __webpack_require__.e(164)]).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Basic/GridSystem */ "./src/Demo/UIElements/Basic/GridSystem.js")));
const UIBasicProgress = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 241).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Basic/Progress */ "./src/Demo/UIElements/Basic/Progress.js")));
const UIBasicModals = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 239).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Basic/Modals */ "./src/Demo/UIElements/Basic/Modals.js")));
const UIBasicSpinner = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 242).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Basic/Spinner */ "./src/Demo/UIElements/Basic/Spinner.js")));
const UIBasicTabsPills = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 243).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Basic/TabsPills */ "./src/Demo/UIElements/Basic/TabsPills.js")));
const UIBasicBasicTypography = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 245).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Basic/Typography */ "./src/Demo/UIElements/Basic/Typography.js")));
const UIBasicBasicTooltipsPopovers = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 244).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Basic/TooltipsPopovers */ "./src/Demo/UIElements/Basic/TooltipsPopovers.js")));
const UIBasicBasicOther = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 240).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Basic/Other */ "./src/Demo/UIElements/Basic/Other.js")));
const UIAdvanceAlert = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(50), __webpack_require__.e(231)]).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Advance/Alert */ "./src/Demo/UIElements/Advance/Alert.js")));
const UIAdvanceDatepicker = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(53), __webpack_require__.e(56), __webpack_require__.e(232)]).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Advance/Datepicker */ "./src/Demo/UIElements/Advance/Datepicker.js")));
const UIAdvanceTaskBoard = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(5), __webpack_require__.e(9), __webpack_require__.e(42), __webpack_require__.e(59), __webpack_require__.e(187)]).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Advance/TaskBoard */ "./src/Demo/UIElements/Advance/TaskBoard.js")));
const UIAdvanceLightBox = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(8), __webpack_require__.e(14), __webpack_require__.e(147), __webpack_require__.e(18), __webpack_require__.e(21), __webpack_require__.e(233)]).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Advance/LightBox */ "./src/Demo/UIElements/Advance/LightBox.js")));
const UIAdvanceModal = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(36), __webpack_require__.e(157)]).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Advance/Modal */ "./src/Demo/UIElements/Advance/Modal.js")));
const UIAdvanceNotification = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(15), __webpack_require__.e(16), __webpack_require__.e(52), __webpack_require__.e(64), __webpack_require__.e(162)]).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Advance/Notification */ "./src/Demo/UIElements/Advance/Notification.js")));
const UIAdvanceNestable = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(8), __webpack_require__.e(65), __webpack_require__.e(234)]).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Advance/Nestable */ "./src/Demo/UIElements/Advance/Nestable.js")));
const UIAdvancePNotify = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 235).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Advance/PNotify */ "./src/Demo/UIElements/Advance/PNotify.js")));
const UIAdvanceRating = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(33), __webpack_require__.e(237)]).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Advance/Rating */ "./src/Demo/UIElements/Advance/Rating.js")));
const UIAdvanceRangeSlider = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(38), __webpack_require__.e(236)]).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Advance/RangeSlider */ "./src/Demo/UIElements/Advance/RangeSlider.js")));
const UIAdvanceSlider = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(13), __webpack_require__.e(19), __webpack_require__.e(40), __webpack_require__.e(94)]).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Advance/Slider */ "./src/Demo/UIElements/Advance/Slider.js")));
const UIAdvanceSyntaxHighlighter = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(26), __webpack_require__.e(163)]).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Advance/SyntaxHighlighter */ "./src/Demo/UIElements/Advance/SyntaxHighlighter.js")));
const UIAdvanceTour = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(13), __webpack_require__.e(42), __webpack_require__.e(63), __webpack_require__.e(159)]).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Advance/Tour */ "./src/Demo/UIElements/Advance/Tour.js")));
const UIAdvanceTree = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(114), __webpack_require__.e(188)]).then(__webpack_require__.bind(null, /*! ./Demo/UIElements/Advance/Tree */ "./src/Demo/UIElements/Advance/Tree.js")));
const FormsElements = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 198).then(__webpack_require__.bind(null, /*! ./Demo/Forms/FormsElements */ "./src/Demo/Forms/FormsElements.js")));
const FormsAdvance = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(28), __webpack_require__.e(197)]).then(__webpack_require__.bind(null, /*! ./Demo/Forms/FormsAdvance */ "./src/Demo/Forms/FormsAdvance.js")));
const FormsValidation = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(6), __webpack_require__.e(20), __webpack_require__.e(36), __webpack_require__.e(156)]).then(__webpack_require__.bind(null, /*! ./Demo/Forms/FormsValidation */ "./src/Demo/Forms/FormsValidation.js")));
const FormsMasking = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(148), __webpack_require__.e(199)]).then(__webpack_require__.bind(null, /*! ./Demo/Forms/FormsMasking */ "./src/Demo/Forms/FormsMasking.js")));
const FormsWizard = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 92).then(__webpack_require__.bind(null, /*! ./Demo/Forms/FormsWizard */ "./src/Demo/Forms/FormsWizard.js")));
const FormsPicker = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(5), __webpack_require__.e(8), __webpack_require__.e(11), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(22), __webpack_require__.e(53), __webpack_require__.e(61), __webpack_require__.e(200)]).then(__webpack_require__.bind(null, /*! ./Demo/Forms/FormsPicker */ "./src/Demo/Forms/FormsPicker.js")));
const FormsSelect = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(15), __webpack_require__.e(16), __webpack_require__.e(52), __webpack_require__.e(146), __webpack_require__.e(87)]).then(__webpack_require__.bind(null, /*! ./Demo/Forms/FormsSelect */ "./src/Demo/Forms/FormsSelect.js")));
const BootstrapTable = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 230).then(__webpack_require__.bind(null, /*! ./Demo/Tables/BootstrapTable */ "./src/Demo/Tables/BootstrapTable.js")));
const DataTables = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(24), __webpack_require__.e(48), __webpack_require__.e(44), __webpack_require__.e(60), __webpack_require__.e(139)]).then(__webpack_require__.bind(null, /*! ./Demo/Tables/DataTables */ "./src/Demo/Tables/DataTables.js")));
const ApexChart = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(69)]).then(__webpack_require__.bind(null, /*! ./Demo/Charts/ApexChart/index */ "./src/Demo/Charts/ApexChart/index.js")));
const ChartJs = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(5), __webpack_require__.e(11), __webpack_require__.e(10), __webpack_require__.e(17), __webpack_require__.e(74)]).then(__webpack_require__.bind(null, /*! ./Demo/Charts/ChartJs/index */ "./src/Demo/Charts/ChartJs/index.js")));
const HighChart = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(144), __webpack_require__.e(84)]).then(__webpack_require__.bind(null, /*! ./Demo/Charts/HighChart/index */ "./src/Demo/Charts/HighChart/index.js")));
const ReChart = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(5), __webpack_require__.e(9), __webpack_require__.e(10), __webpack_require__.e(13), __webpack_require__.e(16), __webpack_require__.e(19), __webpack_require__.e(22), __webpack_require__.e(24), __webpack_require__.e(25), __webpack_require__.e(75)]).then(__webpack_require__.bind(null, /*! ./Demo/Charts/ReChart/index */ "./src/Demo/Charts/ReChart/index.js")));
const PeityChart = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(8), __webpack_require__.e(66), __webpack_require__.e(193)]).then(__webpack_require__.bind(null, /*! ./Demo/Charts/PeityChart/index */ "./src/Demo/Charts/PeityChart/index.js")));
const GoogleMap = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(72), __webpack_require__.e(201)]).then(__webpack_require__.bind(null, /*! ./Demo/Maps/GoogleMap/index */ "./src/Demo/Maps/GoogleMap/index.js")));
const VectorMaps = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(250), __webpack_require__.e(202)]).then(__webpack_require__.bind(null, /*! ./Demo/Maps/VectorMap/index */ "./src/Demo/Maps/VectorMap/index.js")));
const AppTaskList = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(167)]).then(__webpack_require__.bind(null, /*! ./Demo/AppPages/Task/TaskList */ "./src/Demo/AppPages/Task/TaskList.js")));
const AppTaskBoard = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 165).then(__webpack_require__.bind(null, /*! ./Demo/AppPages/Task/TaskBoard */ "./src/Demo/AppPages/Task/TaskBoard.js")));
const AppTaskDetails = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(27), __webpack_require__.e(166)]).then(__webpack_require__.bind(null, /*! ./Demo/AppPages/Task/TaskDetails */ "./src/Demo/AppPages/Task/TaskDetails.js")));
const AppToDo = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(6), __webpack_require__.e(118)]).then(__webpack_require__.bind(null, /*! ./Demo/AppPages/ToDo/ToDo */ "./src/Demo/AppPages/ToDo/ToDo.js")));
const AppNotes = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(11), __webpack_require__.e(26), __webpack_require__.e(58), __webpack_require__.e(116)]).then(__webpack_require__.bind(null, /*! ./Demo/AppPages/ToDo/Notes */ "./src/Demo/AppPages/ToDo/Notes.js")));
const AppGalleryGrid = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(8), __webpack_require__.e(14), __webpack_require__.e(18), __webpack_require__.e(96)]).then(__webpack_require__.bind(null, /*! ./Demo/AppPages/Gallery/GalleryGrid */ "./src/Demo/AppPages/Gallery/GalleryGrid.js")));
const AppMasonryGallery = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 80).then(__webpack_require__.bind(null, /*! ./Demo/AppPages/Gallery/MasonryGallery */ "./src/Demo/AppPages/Gallery/MasonryGallery.js")));
const ExtensionEditorCkClassic = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(23), __webpack_require__.e(151)]).then(__webpack_require__.bind(null, /*! ./Demo/Extension/Editor/EditorCkClassic */ "./src/Demo/Extension/Editor/EditorCkClassic.js")));
const ExtensionEditorCkBalloon = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(23), __webpack_require__.e(150)]).then(__webpack_require__.bind(null, /*! ./Demo/Extension/Editor/EditorCkBalloon */ "./src/Demo/Extension/Editor/EditorCkBalloon.js")));
const ExtensionEditorCkInline = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(23), __webpack_require__.e(153)]).then(__webpack_require__.bind(null, /*! ./Demo/Extension/Editor/EditorCkInline */ "./src/Demo/Extension/Editor/EditorCkInline.js")));
const ExtensionEditorCkDocument = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(23), __webpack_require__.e(152)]).then(__webpack_require__.bind(null, /*! ./Demo/Extension/Editor/EditorCkDocument */ "./src/Demo/Extension/Editor/EditorCkDocument.js")));
const ExtensionEditorJoditWYSIWYG = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(12), __webpack_require__.e(173)]).then(__webpack_require__.bind(null, /*! ./Demo/Extension/Editor/EditorJoditWYSIWYG */ "./src/Demo/Extension/Editor/EditorJoditWYSIWYG.js")));
const ExtensionEditorRichNib = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(248), __webpack_require__.e(194)]).then(__webpack_require__.bind(null, /*! ./Demo/Extension/Editor/EditorRichNib */ "./src/Demo/Extension/Editor/EditorRichNib.js")));
const ExtensionInvoiceBasic = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(251), __webpack_require__.e(175)]).then(__webpack_require__.bind(null, /*! ./Demo/Extension/Invoice/InvoiceBasic */ "./src/Demo/Extension/Invoice/InvoiceBasic.js")));
const ExtensionInvoiceSummary = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(177)]).then(__webpack_require__.bind(null, /*! ./Demo/Extension/Invoice/InvoiceSummary */ "./src/Demo/Extension/Invoice/InvoiceSummary.js")));
const ExtensionInvoiceList = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 176).then(__webpack_require__.bind(null, /*! ./Demo/Extension/Invoice/InvoiceList */ "./src/Demo/Extension/Invoice/InvoiceList.js")));
const ExtensionFullEventCalendar = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(43), __webpack_require__.e(196)]).then(__webpack_require__.bind(null, /*! ./Demo/Extension/FullEventCalendar */ "./src/Demo/Extension/FullEventCalendar.js")));
const ExtensionFileUpload = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(249), __webpack_require__.e(195)]).then(__webpack_require__.bind(null, /*! ./Demo/Extension/FileUpload */ "./src/Demo/Extension/FileUpload.js")));
const ExtensionImageCropper = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(127), __webpack_require__.e(174)]).then(__webpack_require__.bind(null, /*! ./Demo/Extension/ImageCropper */ "./src/Demo/Extension/ImageCropper.js")));
const OtherSamplePage = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() */ 158).then(__webpack_require__.bind(null, /*! ./Demo/Other/SamplePage */ "./src/Demo/Other/SamplePage.js")));
const routes = [{
  path: '/SignIn',
  exact: true,
  name: 'Sign In',
  component: SignIn
}, {
  path: '/dashboard/survey',
  exact: true,
  name: 'Survey',
  component: Survey
}, {
  path: '/dashboard/map',
  exact: true,
  name: 'Sign In',
  component: Maps
}, {
  path: '/dashboard/default',
  exact: true,
  name: 'Analytics',
  component: DashboardDefault
}, {
  path: '/dashboard/predict',
  exact: true,
  name: 'Predict',
  component: Predict
}, {
  path: '/dashboard/predictlist',
  exact: true,
  name: 'Predict List',
  component: PredictList
}, {
  path: '/dashboard/predictdetails',
  exact: true,
  name: 'Predict Details',
  component: PredictDetails
}, {
  path: '/dashboard/Intervene',
  exact: true,
  name: 'Intervene',
  component: Intervene
}, {
  path: '/dashboard/Intervene/actions',
  exact: true,
  name: 'Intervene',
  component: InterveneActions
}, {
  path: '/dashboard/Intervene/addaction/:id',
  exact: true,
  name: 'Add Action',
  component: AddAction
}, {
  path: '/dashboard/Intervene/addassignee/:id',
  exact: true,
  name: 'Add Assignee',
  component: AddAssignee
}, {
  path: '/dashboard/Intervene/actions/:id',
  exact: true,
  name: 'Intervene',
  component: InterveneActionsDetails
}, // { path: '/dashboard/Intervene/newintervension', exact: true, name: 'New Intervention', component: NewIntervention },
{
  path: '/dashboard/Intervene/addintervention',
  exact: true,
  name: 'Add Intervention',
  component: AddIntervention
}, {
  path: '/dashboard/Intervene/newintervension/:id',
  exact: true,
  name: 'New Intervention',
  component: InterventionDetails
}, {
  path: '/dashboard/intervention',
  exact: true,
  name: 'Intervention',
  component: Intervention
}, //Ur routes
{
  path: '/ur/actions',
  exact: true,
  name: 'Intervene',
  component: InterveneActions
}, {
  path: '/ur/actions/:id',
  exact: true,
  name: 'Intervene',
  component: InterveneActionsDetails
}, {
  path: '/ur/interventions',
  exact: true,
  name: 'Intervention',
  component: Intervention
}, {
  path: '/ur/interventions/:id',
  exact: true,
  name: 'New Intervention',
  component: InterventionDetails
}, {
  path: '/ur/addintervention',
  exact: true,
  name: 'Add Intervention',
  component: AddIntervention
}, {
  path: '/dashboard/Collaborate',
  exact: true,
  name: 'Collaborate',
  component: Collaborate
}, // { path: '/PatientProfile', exact: true, name: 'Patient Profile', component: PatientProfile },
{
  path: '/Patients',
  exact: true,
  name: 'Patients',
  component: Patients
}, {
  path: '/Patients/:id',
  exact: true,
  name: 'Patient Profile',
  component: PatientProfile
}, // { path: '/StaffProfile', exact: true, name: 'Staff Profile', component: StaffProfile },
{
  path: '/staffmembers',
  exact: true,
  name: 'Staff Members',
  component: StaffMembers
}, {
  path: '/staffmembers/:id',
  exact: true,
  name: 'Staff Members',
  component: StaffProfile
}, {
  path: '/dashboard/sales',
  exact: true,
  name: 'Crypto',
  component: DashboardSales
}, {
  path: '/dashboard/crm',
  exact: true,
  name: 'Crypto',
  component: DashboardCRM
}, {
  path: '/dashboard/analytics',
  exact: true,
  name: 'Analytics',
  component: DashboardAnalytics
}, {
  path: '/dashboard/project',
  exact: true,
  name: 'Crypto',
  component: DashboardProject
}, {
  path: '/layout/horizontal',
  exact: true,
  name: 'Horizontal',
  component: LayoutHorizontal
}, {
  path: '/layout/horizontal-v2',
  exact: true,
  name: 'Horizontal v2',
  component: LayoutHorizontalV2
}, {
  path: '/layout/horizontal-rtl',
  exact: true,
  name: 'Horizontal v2',
  component: LayoutHorizontalRtl
}, {
  path: '/layout/static',
  exact: true,
  name: 'Static',
  component: LayoutStatic
}, {
  path: '/layout/fixed',
  exact: true,
  name: 'Fixed',
  component: LayoutFixed
}, {
  path: '/layout/nav-fixed',
  exact: true,
  name: 'Nav Fixed',
  component: LayoutNavFixed
}, {
  path: '/layout/collapse-menu',
  exact: true,
  name: 'Collapse Menu',
  component: LayoutCollapseMenu
}, {
  path: '/layout/v-rtl',
  exact: true,
  name: 'Vertical RTL',
  component: LayoutRtl
}, {
  path: '/layout/box',
  exact: true,
  name: 'Box Layout',
  component: LayoutBox
}, {
  path: '/layout/light',
  exact: true,
  name: 'Light Layout',
  component: LayoutLight
}, {
  path: '/layout/dark',
  exact: true,
  name: 'Dark Layout',
  component: LayoutDark
}, {
  path: '/widget/wdgt-statistic',
  exact: true,
  name: 'Widget Statistic',
  component: WdgtStatistic
}, {
  path: '/widget/wdgt-data',
  exact: true,
  name: 'Widget Data',
  component: WdgtData
}, {
  path: '/widget/wdgt-chart',
  exact: true,
  name: 'Widget Chart',
  component: WdgetChart
}, {
  path: '/users/user-profile',
  exact: true,
  name: 'User Profile',
  component: UsersProfile
}, {
  path: '/users/user-cards',
  exact: true,
  name: 'User Cards',
  component: UsersCards
}, {
  path: '/users/user-list',
  exact: true,
  name: 'User List',
  component: UsersList
}, {
  path: '/hospital/hosp-dashboard',
  exact: true,
  name: 'Hospital Dashboard',
  component: HospitalDashboard
}, {
  path: '/hospital/hosp-department',
  exact: true,
  name: 'Hospital Department',
  component: HospitalDepartment
}, {
  path: '/hospital/hosp-doctor',
  exact: true,
  name: 'Hospital Doctor',
  component: HospitalDoctor
}, {
  path: '/hospital/hosp-patient',
  exact: true,
  name: 'Hospital Patient',
  component: HospitalPatient
}, {
  path: '/hospital/hosp-nurse',
  exact: true,
  name: 'Hospital Nurse',
  component: HospitalNurse
}, {
  path: '/hospital/hosp-pharmacist',
  exact: true,
  name: 'Hospital Pharmacist',
  component: HospitalPharmacist
}, {
  path: '/hospital/hosp-laboratory',
  exact: true,
  name: 'Hospital Laboratory',
  component: HospitalLaboratory
}, {
  path: '/project-crm/pc-dashboard',
  exact: true,
  name: 'Project & CRM Dashboard',
  component: PCDashboard
}, {
  path: '/project-crm/pc-customers',
  exact: true,
  name: 'Project & CRM Customers',
  component: PCCustomers
}, {
  path: '/project-crm/pc-project',
  exact: true,
  name: 'Project & CRM Project',
  component: PCProject
}, {
  path: '/project-crm/pc-task',
  exact: true,
  name: 'Project & CRM Task',
  component: PCTask
}, {
  path: '/membership/mshp-dashboard',
  exact: true,
  name: 'Membership Dashboard',
  component: MshpDashboard
}, {
  path: '/membership/mshp-email',
  exact: true,
  name: 'Membership Email Template',
  component: MshpEmail
}, {
  path: '/membership/mshp-country',
  exact: true,
  name: 'Membership Country',
  component: MshpCountry
}, {
  path: '/membership/mshp-coupons',
  exact: true,
  name: 'Membership Coupons',
  component: MshpCoupons
}, {
  path: '/membership/mshp-newsletter',
  exact: true,
  name: 'Membership Newsletter',
  component: MshpNewsletter
}, {
  path: '/membership/mshp-user',
  exact: true,
  name: 'Membership Newsletter',
  component: MshpUser
}, {
  path: '/membership/mshp-membership',
  exact: true,
  name: 'Membership',
  component: MshpMembership
}, {
  path: '/helpdesk/hd-dashboard',
  exact: true,
  name: 'Helpdesk Dashboard',
  component: HelpdeskDashboard
}, {
  path: '/helpdesk/hd-ticket',
  exact: true,
  name: 'Helpdesk Create Ticket',
  component: HelpdeskCreateTicket
}, {
  path: '/helpdesk/hd-ticket-list',
  exact: true,
  name: 'Helpdesk Ticket List',
  component: HelpdeskTicketList
}, {
  path: '/helpdesk/hd-ticket-details',
  exact: true,
  name: 'Helpdesk Ticket Details',
  component: HelpdeskTicketDetails
}, {
  path: '/helpdesk/hd-customer-list',
  exact: true,
  name: 'Helpdesk Customer',
  component: HelpdeskCustomer
}, {
  path: '/school/sch-dashboard',
  exact: true,
  name: 'School Dashboard',
  component: SchoolDashboard
}, {
  path: '/school/sch-student',
  exact: true,
  name: 'School Student',
  component: SchoolStudent
}, {
  path: '/school/sch-parents',
  exact: true,
  name: 'School Parents',
  component: SchoolParents
}, {
  path: '/school/sch-teacher',
  exact: true,
  name: 'School Teacher',
  component: SchoolTeacher
}, {
  path: '/sis/sis-dashboard',
  exact: true,
  name: 'SIS Dashboard',
  component: SisDashboard
}, {
  path: '/sis/sis-leave',
  exact: true,
  name: 'SIS Leave',
  component: SisLeave
}, {
  path: '/sis/sis-evaluation',
  exact: true,
  name: 'SIS Evaluation',
  component: SisEvaluation
}, {
  path: '/sis/sis-event',
  exact: true,
  name: 'SIS Event',
  component: SisEvent
}, {
  path: '/sis/sis-circular',
  exact: true,
  name: 'SIS Circular',
  component: SisCircular
}, {
  path: '/sis/sis-course',
  exact: true,
  name: 'SIS Course',
  component: SisCourse
}, {
  path: '/crypto/cp-dashboard',
  exact: true,
  name: 'Crypto Dashboard',
  component: CryptoDashboard
}, {
  path: '/crypto/cp-exchange',
  exact: true,
  name: 'Crypto Exchange',
  component: CryptoExchange
}, {
  path: '/crypto/cp-wallet',
  exact: true,
  name: 'Crypto Wallet',
  component: CryptoWallet
}, {
  path: '/crypto/cp-transactions',
  exact: true,
  name: 'Crypto Transaction',
  component: CryptoTransaction
}, {
  path: '/crypto/cp-history',
  exact: true,
  name: 'Crypto History',
  component: CryptoHistory
}, {
  path: '/crypto/cp-trading',
  exact: true,
  name: 'Crypto Trading',
  component: CryptoTrading
}, {
  path: '/crypto/cp-coin',
  exact: true,
  name: 'Crypto Initial Coin',
  component: CryptoInitialCoin
}, {
  path: '/crypto/cp-ico',
  exact: true,
  name: 'Crypto Ico Listing',
  component: CryptoIcoListing
}, {
  path: '/ecommerce/ecomm-product',
  exact: true,
  name: 'Ecommerce Product',
  component: EcommProduct
}, {
  path: '/ecommerce/ecomm-product-details',
  exact: true,
  name: 'Ecommerce Product Details',
  component: EcommProductDetails
}, {
  path: '/ecommerce/ecomm-order',
  exact: true,
  name: 'Ecommerce Order',
  component: EcommOrder
}, {
  path: '/ecommerce/ecomm-checkout',
  exact: true,
  name: 'Ecommerce Checkout',
  component: EcommCheckout
}, {
  path: '/ecommerce/ecomm-cart',
  exact: true,
  name: 'Ecommerce Cart',
  component: EcommCart
}, {
  path: '/ecommerce/ecomm-seller',
  exact: true,
  name: 'Ecommerce Sellers',
  component: EcommSellers
}, {
  path: '/ecommerce/ecomm-customer',
  exact: true,
  name: 'Ecommerce Customers',
  component: EcommCustomers
}, {
  path: '/basic/alert',
  exact: true,
  name: 'Basic Alert',
  component: UIBasicAlert
}, {
  path: '/basic/button',
  exact: true,
  name: 'Basic Button',
  component: UIBasicButton
}, {
  path: '/basic/badges',
  exact: true,
  name: 'Basic Badges',
  component: UIBasicBadges
}, {
  path: '/basic/breadcrumb-paging',
  exact: true,
  name: 'Basic Breadcrumb Pagination',
  component: UIBasicBreadcrumbPagination
}, {
  path: '/basic/cards',
  exact: true,
  name: 'Basic Cards',
  component: UIBasicCards
}, {
  path: '/basic/collapse',
  exact: true,
  name: 'Basic Collapse',
  component: UIBasicCollapse
}, {
  path: '/basic/carousel',
  exact: true,
  name: 'Basic Carousels',
  component: UIBasicCarousels
}, {
  path: '/basic/grid-system',
  exact: true,
  name: 'Basic Grid System',
  component: UIBasicGridSystem
}, {
  path: '/basic/progress',
  exact: true,
  name: 'Basic Progress',
  component: UIBasicProgress
}, {
  path: '/basic/modal',
  exact: true,
  name: 'Basic Modals',
  component: UIBasicModals
}, {
  path: '/basic/spinner',
  exact: true,
  name: 'Basic Spinner',
  component: UIBasicSpinner
}, {
  path: '/basic/tabs-pills',
  exact: true,
  name: 'Basic Tabs & Pills',
  component: UIBasicTabsPills
}, {
  path: '/basic/typography',
  exact: true,
  name: 'Basic Typography',
  component: UIBasicBasicTypography
}, {
  path: '/basic/tooltip-popovers',
  exact: true,
  name: 'Basic Tooltips Popovers',
  component: UIBasicBasicTooltipsPopovers
}, {
  path: '/basic/other',
  exact: true,
  name: 'Basic Other',
  component: UIBasicBasicOther
}, {
  path: '/advance/alert',
  exact: true,
  name: 'Sweet Alert',
  component: UIAdvanceAlert
}, {
  path: '/advance/datepicker',
  exact: true,
  name: 'Datepicker',
  component: UIAdvanceDatepicker
}, {
  path: '/advance/task-board',
  exact: true,
  name: 'Task Board',
  component: UIAdvanceTaskBoard
}, {
  path: '/advance/light-box',
  exact: true,
  name: 'Light Box',
  component: UIAdvanceLightBox
}, {
  path: '/advance/modal',
  exact: true,
  name: 'Animation Modal',
  component: UIAdvanceModal
}, {
  path: '/advance/notification',
  exact: true,
  name: 'Notification',
  component: UIAdvanceNotification
}, {
  path: '/advance/nestable',
  exact: true,
  name: 'Neastable',
  component: UIAdvanceNestable
}, {
  path: '/advance/p-notify',
  exact: true,
  name: 'P-Notify',
  component: UIAdvancePNotify
}, {
  path: '/advance/rating',
  exact: true,
  name: 'Rating',
  component: UIAdvanceRating
}, {
  path: '/advance/range-slider',
  exact: true,
  name: 'Range Slider',
  component: UIAdvanceRangeSlider
}, {
  path: '/advance/slider',
  exact: true,
  name: 'Slider',
  component: UIAdvanceSlider
}, {
  path: '/advance/syntax-highlighter',
  exact: true,
  name: 'Syntax Highlighter',
  component: UIAdvanceSyntaxHighlighter
}, {
  path: '/advance/tour',
  exact: true,
  name: 'Tour',
  component: UIAdvanceTour
}, {
  path: '/advance/tree-view',
  exact: true,
  name: 'Tree',
  component: UIAdvanceTree
}, {
  path: '/forms/form-basic',
  exact: true,
  name: 'Forms Elements',
  component: FormsElements
}, {
  path: '/forms/form-advance',
  exact: true,
  name: 'Forms Advance',
  component: FormsAdvance
}, {
  path: '/forms/form-validation',
  exact: true,
  name: 'Forms Validation',
  component: FormsValidation
}, {
  path: '/forms/form-masking',
  exact: true,
  name: 'Forms Masking',
  component: FormsMasking
}, {
  path: '/forms/form-wizard',
  exact: true,
  name: 'Forms Wizard',
  component: FormsWizard
}, {
  path: '/forms/form-picker',
  exact: true,
  name: 'Forms Picker',
  component: FormsPicker
}, {
  path: '/forms/form-select',
  exact: true,
  name: 'Forms Select',
  component: FormsSelect
}, {
  path: '/tables/bootstrap',
  exact: true,
  name: 'Bootstrap Table',
  component: BootstrapTable
}, {
  path: '/tables/datatable',
  exact: true,
  name: 'Data Table',
  component: DataTables
}, {
  path: '/charts/apex-chart',
  exact: true,
  name: 'Apex Chart',
  component: ApexChart
}, {
  path: '/charts/chart-js',
  exact: true,
  name: 'Chart JS',
  component: ChartJs
}, {
  path: '/charts/high-chart',
  exact: true,
  name: 'High Chart',
  component: HighChart
}, {
  path: '/charts/re-chart',
  exact: true,
  name: 'Re Chart',
  component: ReChart
}, {
  path: '/charts/peity',
  exact: true,
  name: 'Peity Chart',
  component: PeityChart
}, {
  path: '/maps/google-map',
  exact: true,
  name: 'Google Map',
  component: GoogleMap
}, {
  path: '/maps/vector',
  exact: true,
  name: 'Vector Map',
  component: VectorMaps
}, {
  path: '/task/task-list',
  exact: true,
  name: 'Task List',
  component: AppTaskList
}, {
  path: '/task/task-board',
  exact: true,
  name: 'Task Board',
  component: AppTaskBoard
}, {
  path: '/task/task-detail',
  exact: true,
  name: 'Task Details',
  component: AppTaskDetails
}, {
  path: '/todo/todo-basic',
  exact: true,
  name: 'To Do',
  component: AppToDo
}, {
  path: '/todo/todo-notes',
  exact: true,
  name: 'Notes',
  component: AppNotes
}, {
  path: '/gallery/gallery-grid',
  exact: true,
  name: 'Gallery Grid',
  component: AppGalleryGrid
}, {
  path: '/gallery/gallery-masonry',
  exact: true,
  name: 'Gallery Masonry',
  component: AppMasonryGallery
}, {
  path: '/editor/ck-editor/ck-classic',
  exact: true,
  name: 'CK Editor Classic',
  component: ExtensionEditorCkClassic
}, {
  path: '/editor/ck-editor/ck-balloon',
  exact: true,
  name: 'CK Editor Balloon',
  component: ExtensionEditorCkBalloon
}, {
  path: '/editor/ck-editor/ck-inline',
  exact: true,
  name: 'CK Editor Inline',
  component: ExtensionEditorCkInline
}, {
  path: '/editor/ck-editor/ck-document',
  exact: true,
  name: 'CK Editor Document',
  component: ExtensionEditorCkDocument
}, {
  path: '/editor/jodit-wysiwyg',
  exact: true,
  name: 'Jodit WYSIWYG',
  component: ExtensionEditorJoditWYSIWYG
}, {
  path: '/editor/rich-editor',
  exact: true,
  name: 'Rich Editor',
  component: ExtensionEditorRichNib
}, {
  path: '/invoice/invoice-basic',
  exact: true,
  name: 'Basic Invoice',
  component: ExtensionInvoiceBasic
}, {
  path: '/invoice/invoice-summary',
  exact: true,
  name: 'Summary Invoice',
  component: ExtensionInvoiceSummary
}, {
  path: '/invoice/invoice-list',
  exact: true,
  name: 'Invoice List',
  component: ExtensionInvoiceList
}, {
  path: '/full-calendar',
  exact: true,
  name: 'Full Calendar',
  component: ExtensionFullEventCalendar
}, {
  path: '/file-upload',
  exact: true,
  name: 'File Upload',
  component: ExtensionFileUpload
}, {
  path: '/image-cropper',
  exact: true,
  name: 'Image Cropper',
  component: ExtensionImageCropper
}, {
  path: '/sample-page',
  exact: true,
  name: 'Sample Page',
  component: OtherSamplePage
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=68.chunk.js.map