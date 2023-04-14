"use strict";
(() => {
var exports = {};
exports.id = 878;
exports.ids = [878];
exports.modules = {

/***/ 7621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ naseSluzby)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/sluzbyNav.js
var sluzbyNav = __webpack_require__(2855);
// EXTERNAL MODULE: external "lightgallery/react"
var react_ = __webpack_require__(2697);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/lightgallery/css/lightgallery.css
var lightgallery = __webpack_require__(3527);
// EXTERNAL MODULE: ./node_modules/lightgallery/css/lg-zoom.css
var lg_zoom = __webpack_require__(8299);
// EXTERNAL MODULE: ./node_modules/lightgallery/css/lg-thumbnail.css
var lg_thumbnail = __webpack_require__(5563);
// EXTERNAL MODULE: external "lightgallery/plugins/thumbnail"
var thumbnail_ = __webpack_require__(8923);
var thumbnail_default = /*#__PURE__*/__webpack_require__.n(thumbnail_);
// EXTERNAL MODULE: external "lightgallery/plugins/zoom"
var zoom_ = __webpack_require__(4608);
var zoom_default = /*#__PURE__*/__webpack_require__.n(zoom_);
;// CONCATENATED MODULE: ./components/sluzbyImg.js







function ImageGallery(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "sluzba max-width",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "sluzba-text-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        id: props.id,
                        className: "sluzba-title",
                        children: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: props.text
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((react_default()), {
                speed: 500,
                plugins: [
                    (thumbnail_default()),
                    (zoom_default())
                ],
                children: props.render?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: item.image,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: item.thumbnail,
                            className: "gallery-img",
                            loading: "lazy"
                        })
                    }, index))
            })
        ]
    }, props.title);
}

;// CONCATENATED MODULE: ./data/sluzbyData.json
const sluzbyData_namespaceObject = JSON.parse('{"UD":[{"thumbnail":"img/nase-sluzby/3d-navrhy/3d_navrhy_dispozic_small1.jpg","image":"img/nase-sluzby/3d-navrhy/3d_navrhy_dispozic_large1.jpg"},{"thumbnail":"img/nase-sluzby/3d-navrhy/3d_navrhy_dispozic_small2.jpg","image":"img/nase-sluzby/3d-navrhy/3d_navrhy_dispozic_large2.jpg"},{"thumbnail":"img/nase-sluzby/3d-navrhy/3d_navrhy_dispozic_small3.jpg","image":"img/nase-sluzby/3d-navrhy/3d_navrhy_dispozic_large3.jpg"},{"thumbnail":"img/nase-sluzby/3d-navrhy/3d_navrhy_dispozic_small4.jpg","image":"img/nase-sluzby/3d-navrhy/3d_navrhy_dispozic_large4.jpg"},{"thumbnail":"img/nase-sluzby/3d-navrhy/3d_navrhy_dispozic_small5.jpg","image":"img/nase-sluzby/3d-navrhy/3d_navrhy_dispozic_large5.jpg"},{"thumbnail":"img/nase-sluzby/3d-navrhy/3d_navrhy_dispozic_small6.jpg","image":"img/nase-sluzby/3d-navrhy/3d_navrhy_dispozic_large6.jpg"},{"thumbnail":"img/nase-sluzby/3d-navrhy/3d_navrhy_dispozic_small7.jpg","image":"img/nase-sluzby/3d-navrhy/3d_navrhy_dispozic_large7.jpg"},{"thumbnail":"img/nase-sluzby/3d-navrhy/3d_navrhy_dispozic_small8.jpg","image":"img/nase-sluzby/3d-navrhy/3d_navrhy_dispozic_large8.jpg"}],"gf":[{"thumbnail":"img/nase-sluzby/2d-navrhy/2d_navrhy_dispozic_small1.jpg","image":"img/nase-sluzby/2d-navrhy/2d_navrhy_dispozic_large1.jpg"},{"thumbnail":"img/nase-sluzby/2d-navrhy/2d_navrhy_dispozic_small2.jpg","image":"img/nase-sluzby/2d-navrhy/2d_navrhy_dispozic_large2.jpg"},{"thumbnail":"img/nase-sluzby/2d-navrhy/2d_navrhy_dispozic_small3.jpg","image":"img/nase-sluzby/2d-navrhy/2d_navrhy_dispozic_large3.jpg"},{"thumbnail":"img/nase-sluzby/2d-navrhy/2d_navrhy_dispozic_small4.jpg","image":"img/nase-sluzby/2d-navrhy/2d_navrhy_dispozic_large4.jpg"},{"thumbnail":"img/nase-sluzby/2d-navrhy/2d_navrhy_dispozic_small5.jpg","image":"img/nase-sluzby/2d-navrhy/2d_navrhy_dispozic_large5.jpg"},{"thumbnail":"img/nase-sluzby/2d-navrhy/2d_navrhy_dispozic_small6.jpg","image":"img/nase-sluzby/2d-navrhy/2d_navrhy_dispozic_large6.jpg"},{"thumbnail":"img/nase-sluzby/2d-navrhy/2d_navrhy_dispozic_small7.jpg","image":"img/nase-sluzby/2d-navrhy/2d_navrhy_dispozic_large7.jpg"},{"thumbnail":"img/nase-sluzby/2d-navrhy/2d_navrhy_dispozic_small8.jpg","image":"img/nase-sluzby/2d-navrhy/2d_navrhy_dispozic_large8.jpg"},{"thumbnail":"img/nase-sluzby/2d-navrhy/2d_navrhy_dispozic_small9.jpg","image":"img/nase-sluzby/2d-navrhy/2d_navrhy_dispozic_large9.jpg"}],"Oc":[{"thumbnail":"img/nase-sluzby/homestaging/homestaging_small1.jpeg","image":"img/nase-sluzby/homestaging/homestaging_large1.jpeg"},{"thumbnail":"img/nase-sluzby/homestaging/homestaging_small2.jpeg","image":"img/nase-sluzby/homestaging/homestaging_large2.jpeg"},{"thumbnail":"img/nase-sluzby/homestaging/homestaging_small3.jpeg","image":"img/nase-sluzby/homestaging/homestaging_large3.jpeg"},{"thumbnail":"img/nase-sluzby/homestaging/homestaging_small4.jpeg","image":"img/nase-sluzby/homestaging/homestaging_large4.jpeg"},{"thumbnail":"img/nase-sluzby/homestaging/homestaging_small5.jpeg","image":"img/nase-sluzby/homestaging/homestaging_large5.jpeg"},{"thumbnail":"img/nase-sluzby/homestaging/homestaging_small6.jpeg","image":"img/nase-sluzby/homestaging/homestaging_large6.jpeg"},{"thumbnail":"img/nase-sluzby/homestaging/homestaging_small7.jpeg","image":"img/nase-sluzby/homestaging/homestaging_large7.jpeg"},{"thumbnail":"img/nase-sluzby/homestaging/homestaging_small8.jpeg","image":"img/nase-sluzby/homestaging/homestaging_large8.jpeg"},{"thumbnail":"img/nase-sluzby/homestaging/homestaging_small9.jpeg","image":"img/nase-sluzby/homestaging/homestaging_large9.jpeg"}],"Or":[{"thumbnail":"img/nase-sluzby/konzultace/konzultace_small_1.jpg","image":"img/nase-sluzby/konzultace/konzultace_large_1.jpeg"},{"thumbnail":"img/nase-sluzby/konzultace/konzultace_small_2.jpg","image":"img/nase-sluzby/konzultace/konzultace_large_2.jpeg"},{"thumbnail":"img/nase-sluzby/konzultace/konzultace_small_3.jpg","image":"img/nase-sluzby/konzultace/konzultace_large_3.jpeg"},{"thumbnail":"img/nase-sluzby/konzultace/konzultace_small_4.jpg","image":"img/nase-sluzby/konzultace/konzultace_large_4.jpeg"},{"thumbnail":"img/nase-sluzby/konzultace/konzultace_small_5.jpg","image":"img/nase-sluzby/konzultace/konzultace_large_5.jpeg"}],"$b":[{"thumbnail":"img/nase-sluzby/realizace/realizace_small1.jpg","image":"img/nase-sluzby/realizace/realizace_large1.jpg"},{"thumbnail":"img/nase-sluzby/realizace/realizace_small2.jpg","image":"img/nase-sluzby/realizace/realizace_large2.jpg"},{"thumbnail":"img/nase-sluzby/realizace/realizace_small3.jpg","image":"img/nase-sluzby/realizace/realizace_large3.jpg"},{"thumbnail":"img/nase-sluzby/realizace/realizace_small4.jpg","image":"img/nase-sluzby/realizace/realizace_large4.jpg"},{"thumbnail":"img/nase-sluzby/realizace/realizace_small5.jpg","image":"img/nase-sluzby/realizace/realizace_large5.jpg"},{"thumbnail":"img/nase-sluzby/realizace/realizace_small6.jpg","image":"img/nase-sluzby/realizace/realizace_large6.jpg"},{"thumbnail":"img/nase-sluzby/realizace/realizace_small7.jpg","image":"img/nase-sluzby/realizace/realizace_large7.jpg"},{"thumbnail":"img/nase-sluzby/realizace/realizace_small8.jpg","image":"img/nase-sluzby/realizace/realizace_large8.jpg"}]}');
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/nase-sluzby.js





function naseSluzby() {
    const navrhTri = sluzbyData_namespaceObject.UD.map((item)=>{
        return item;
    });
    const navrhDva = sluzbyData_namespaceObject.gf.map((item)=>{
        return item;
    });
    const homestaging = sluzbyData_namespaceObject.Oc.map((item)=>{
        return item;
    });
    const konzultace = sluzbyData_namespaceObject.Or.map((item)=>{
        return item;
    });
    const realizace = sluzbyData_namespaceObject.$b.map((item)=>{
        return item;
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Seznam poskytovan\xfdch služeb | Lenka Design"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sluzby scroll sluzby-wrapper sluzby-second",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(sluzbyNav/* default */.Z, {
                                img: "svg/3d-design.svg",
                                title: "3D n\xe1vrhy interi\xe9rů ikona",
                                link: "#3d-navrhy-interieru"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(sluzbyNav/* default */.Z, {
                                img: "svg/2d-navrh.svg",
                                title: "2D n\xe1vrhy dispozic",
                                link: "#2d-navrhy-interieru"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(sluzbyNav/* default */.Z, {
                                img: "svg/realizace.svg",
                                title: "Realizace",
                                link: "#realizace"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(sluzbyNav/* default */.Z, {
                                img: "svg/konzultace.svg",
                                title: "Konzultace",
                                link: "#konzultace"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(sluzbyNav/* default */.Z, {
                                img: "svg/home-staging.svg",
                                title: "Homestaging",
                                link: "#homestaging"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageGallery, {
                        title: "Homestaging",
                        text: "Homestaging je profesion\xe1ln\xed př\xedprava nemovitosti k prodeji nebo k pron\xe1jmu. Doporučuji ji k rychlejš\xedmu a dražš\xedmu prodeji či pron\xe1jmu nemovitosti, pro lepš\xed si představen\xed prostoru a přil\xe1k\xe1n\xed v\xedce potencion\xe1ln\xedch klientů.  ",
                        id: "homestaging",
                        render: homestaging
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageGallery, {
                        title: "3D n\xe1vrhy interi\xe9rů",
                        text: "3D vizualizace V\xe1m uk\xe1že interi\xe9r ještě před t\xedm, nežli se pust\xedte do realizace. Uvid\xedte zde l\xe9pe rozm\xedstěn\xed n\xe1bytku, barvy, materi\xe1ly, tapety, podlahy, n\xe1bytek a doplňky, kter\xe9 V\xe1m doporuč\xedm. 3D n\xe1vrh ob\xfdvac\xedho pokoje",
                        id: "3d-navrhy-interieru",
                        render: navrhTri
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageGallery, {
                        title: "2D n\xe1vrhy dispozic",
                        text: "2D n\xe1vrhy interi\xe9ru, jsou varianty dispozičn\xedho řešen\xed navrhovan\xe9ho prostoru. Z nich z\xedsk\xe1te představu o rozvržen\xed m\xedstnost\xed, možn\xe9 změny dispozic v interi\xe9ru, velikosti prostoru s možnost\xed rozm\xedstěn\xed vybaven\xed.",
                        id: "2d-navrhy-interieru",
                        render: navrhDva
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageGallery, {
                        title: "Realizace",
                        text: "V př\xedpadě Vašeho z\xe1jmu doporuč\xedm vyzkoušenou firmu na realizaci či jen doporučen\xed truhl\xe1řů či řemesln\xedků např. n\xe1bytku na m\xedru, položen\xed podlahy, v\xfdmalba,…. Zař\xedd\xedm cenovou nab\xeddku a pomohu i s ř\xedzen\xedm a dohledem na realizaci.",
                        id: "realizace",
                        render: realizace
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageGallery, {
                        title: "Konzultace",
                        text: "Konzultace bytov\xe9ho designu jsou vhodn\xe9 na doporučen\xed menš\xedch změn v interi\xe9ru či doporučen\xed vhodn\xfdch, praktick\xfdch změn v projektu od architekta. Prov\xe1d\xedm je nejčastěji v m\xedstě realizace změn či online po dod\xe1n\xed podkladů nebo telefonicky. Možno zakoupit d\xe1rkov\xfd poukaz, s platnost\xed 1 rok, na konzultaci či doporučen\xed změn v interi\xe9ru. Souč\xe1st\xed poukazu je n\xe1sledn\xfd souhrn doporučen\xfdch změn a tipů v elektronick\xe9 podobě.",
                        id: "konzultace",
                        render: konzultace
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 8923:
/***/ ((module) => {

module.exports = require("lightgallery/plugins/thumbnail");

/***/ }),

/***/ 4608:
/***/ ((module) => {

module.exports = require("lightgallery/plugins/zoom");

/***/ }),

/***/ 2697:
/***/ ((module) => {

module.exports = require("lightgallery/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,434], () => (__webpack_exec__(7621)));
module.exports = __webpack_exports__;

})();