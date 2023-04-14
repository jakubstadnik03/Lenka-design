"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: external "react-bootstrap"
const external_react_bootstrap_namespaceObject = require("react-bootstrap");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/hero.js



const HeroSection = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: {
                position: "relative"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Carousel, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Carousel.Item, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "d-block w-100 object-fit-cover",
                                src: "img/uvod/uvod1.webp",
                                alt: "First slide",
                                style: {
                                    maxHeight: "calc(100vh - 90px)"
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Carousel.Item, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "d-block w-100 object-fit-cover",
                                src: "img/uvod/uvod2.webp",
                                alt: "Second slide",
                                style: {
                                    maxHeight: "calc(100vh - 90px)"
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Carousel.Item, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "d-block w-100 object-fit-cover",
                                src: "img/uvod/uvod3.webp",
                                alt: "Third slide",
                                style: {
                                    maxHeight: "calc(100vh - 90px)"
                                }
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Carousel.Caption, {
                    style: {
                        postion: "absolute"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "display-1",
                            children: "Lenka Design"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "fs-3",
                            children: "Design na m\xedru dle vašeho př\xe1n\xed"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/kontakt",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: "btn btn-outline-primary px-4 fs-4 text-light",
                                children: "Kontakt"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const hero = (HeroSection);

;// CONCATENATED MODULE: external "react-bootstrap/Button"
const Button_namespaceObject = require("react-bootstrap/Button");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Card"
const Card_namespaceObject = require("react-bootstrap/Card");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_namespaceObject);
;// CONCATENATED MODULE: ./components/card.js



function BasicExample({ title , desc , img  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        style: {
            width: "18rem"
        },
        className: "m-3 shadow flex-shrink-0 card border-light",
        border: "light",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Img, {
                variant: "top",
                src: img
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()).Body, {
                className: "d-flex flex-column justify-content-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Title, {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Card_default()).Text, {
                        children: desc
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "primary",
                        style: {
                            width: "80px"
                        },
                        children: "Otevř\xedt"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const card = (BasicExample);

;// CONCATENATED MODULE: ./pages/index.js






function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Lenka Design"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(hero, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "max-width uvodni_text texty ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Naše služby"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "uvodni-text-bold",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: "Chcete svůj interi\xe9r změnit, z\xfatulnit a c\xedtit se v něm př\xedjemně?"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "uvodni-text-bold",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: "Stav\xedte dům či\xa0předěl\xe1v\xe1te byt a nev\xedte, jak vše nejl\xe9pe uspoř\xe1dat a zař\xeddit?"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex justify-content-xl-center overflow-auto m-auto ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(card, {
                                        img: "img/sluzby/navrhy_bytovych_interieru_small.jpg",
                                        title: "N\xe1vrhy bytov\xfdch interi\xe9rů",
                                        link: "/bytovy-interier",
                                        desc: "Oživte svůj prostor s našimi n\xe1vrhy - proměňte ho v dokonal\xfd domov!"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(card, {
                                        img: "img/sluzby/navrhy_komercnich_interieru_small.jpg",
                                        title: "N\xe1vrh komerčn\xedch interi\xe9rů",
                                        link: "/komercni-interier",
                                        desc: "Proměňte svůj komerčn\xed prostor s našimi profesion\xe1ln\xedmi n\xe1vrhy interi\xe9ru!"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(card, {
                                        img: "img/sluzby/homestaging_small.jpg",
                                        title: "Homestaging",
                                        link: "/homestaging",
                                        desc: "Připravte svůj domov k prodeji s naš\xedm homestagingem!"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(card, {
                                        img: "img/sluzby/konzultace_small.jpg",
                                        title: "Konzultace",
                                        link: "/konzultace",
                                        desc: "Odhalte potenci\xe1l sv\xe9ho prostoru s našimi designov\xfdmi konzultacemi!"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "max-width max-width-small",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "",
                                children: "Věnuji se n\xe1vrhům interi\xe9rů, bytov\xe9mu designu a Home stagingu již přes 8let, m\xfdm c\xedlem je, aby každ\xfd klient byl spokojen. Mohu V\xe1m nab\xeddnout 3D vizualizaci, n\xe1vrhy dispozic nebo jen osobn\xed konzultaci v interi\xe9rov\xe9m designu. Pracuji i online a přes videokonference. Soustřed\xedm se na projekty a n\xe1vrhy interi\xe9rů v Liberci a okol\xed. Upřednostňuji př\xedrodn\xed materi\xe1ly či jejich imitace. Moj\xed největš\xed inspirac\xed je př\xedroda. Př\xedroda n\xe1s vytvořila, ovlivňuje n\xe1s, a proto se v jej\xed bl\xedzkosti c\xedt\xedme nejl\xe9pe. Nechci V\xe1s ale ovlivňovat m\xfdm stylem, m\xfdm c\xedlem je pochopit ten V\xe1š a pomoci V\xe1m zrealizovat V\xe1š sen, kter\xfd m\xe1te…"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                id: "citat",
                                className: "max-width max-width-small texty citat shadow p-2 ",
                                style: {
                                    backgroundColor: "#ffff"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Každ\xe9ho z n\xe1s ovlivňuje\xa0a formuje, jak bydl\xedme, někdy stač\xed jen m\xe1lo a dojde k velik\xe9 změně a člověk se doma c\xedt\xed hned l\xe9pe."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Doporučuji\xa0konzultace s design\xe9rem již v době hrub\xe9 stavby, ušetř\xedte si stres i n\xe1klady do budoucna. Vkusně, prakticky a zodpovědně dojdeme ke spr\xe1vn\xe9mu c\xedli."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-end fw-bold",
                                        children: "Mga. Lenka St\xe1dn\xedkov\xe1"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        id: "o-mne",
                        className: "max-width max-width-small d-flex justify-content-center flex-column flex-md-row align-items-center max-width ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "img/lenka.jpg",
                                alt: "Lenka St\xe1dn\xedkov\xe1",
                                className: "rounded-circle me-md-5 mb-2 "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "o_mne_text ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Lenka St\xe1dn\xedkov\xe1 – interi\xe9rov\xe1 n\xe1vrh\xe1řka v Liberci"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Po absolvov\xe1n\xed\xa0Technick\xe9 univerzity v Liberci v oboru Podnikov\xe1 Ekonomika jsem žila 14 let v zahranič\xed\xa0(USA, Holandsku a Velk\xe9 Brit\xe1nii), vychov\xe1vala 3 děti, čerpala jsem inspirace a zkušenosti nejen životn\xed, ale i profesn\xed. Po mnoha stěhov\xe1n\xed, přestavb\xe1ch \xa0domů\xa0 i stavbě vlastn\xedho domu a chalupy, jsem se rozhodla změnit\xa0svou profesi\xa0a studovat Interi\xe9rov\xfd design. Ve\xa0Velk\xe9 Brit\xe1nii jsem absolvovala\xa0studium bakal\xe1řsk\xe9ho a pot\xe9 magistersk\xe9ho\xa0Interi\xe9rov\xe9ho designu. Moc mě to\xa0bavilo, až se architektura a design stali\xa0moj\xed prac\xed i kon\xedčkem."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Pod vlastn\xed firmou jsem zpracovala již stovku projektů, konzultac\xed, rekonstrukc\xed a novostaveb. Nad\xe1le se k tomu vzděl\xe1v\xe1m, sleduji nejnovějš\xed trendy, inovace a veletrhy, aby moje z\xe1liba ušetřila klientům čas pomohla plnit jejich sny."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

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

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [664,636,675], () => (__webpack_exec__(8877)));
module.exports = __webpack_exports__;

})();