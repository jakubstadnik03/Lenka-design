"use strict";
exports.id = 199;
exports.ids = [199];
exports.modules = {

/***/ 5199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ImageGallery)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lightgallery_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2697);
/* harmony import */ var lightgallery_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lightgallery_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lightgallery_css_lightgallery_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3527);
/* harmony import */ var lightgallery_css_lightgallery_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lightgallery_css_lightgallery_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lightgallery_css_lg_zoom_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8299);
/* harmony import */ var lightgallery_css_lg_zoom_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lightgallery_css_lg_zoom_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lightgallery_css_lg_thumbnail_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5563);
/* harmony import */ var lightgallery_css_lg_thumbnail_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lightgallery_css_lg_thumbnail_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lightgallery_plugins_thumbnail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8923);
/* harmony import */ var lightgallery_plugins_thumbnail__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lightgallery_plugins_thumbnail__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4608);
/* harmony import */ var lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_6__);







function ImageGallery(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "sluzba max-width",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sluzba-text-wrapper",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    id: props.id,
                    className: "sluzba-title",
                    children: props.title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((lightgallery_react__WEBPACK_IMPORTED_MODULE_1___default()), {
                speed: 500,
                plugins: [
                    (lightgallery_plugins_thumbnail__WEBPACK_IMPORTED_MODULE_5___default()),
                    (lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_6___default())
                ],
                children: props.render?.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: item.image,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: item.thumbnail,
                            className: "gallery-img",
                            loading: "lazy"
                        })
                    }, index))
            })
        ]
    }, props.title);
}


/***/ })

};
;