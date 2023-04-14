"use strict";
(() => {
var exports = {};
exports.id = 231;
exports.ids = [231];
exports.modules = {

/***/ 2026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Realizace)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-bootstrap/Carousel"
const Carousel_namespaceObject = require("react-bootstrap/Carousel");
var Carousel_default = /*#__PURE__*/__webpack_require__.n(Carousel_namespaceObject);
// EXTERNAL MODULE: ./components/sluzbyNav.js
var sluzbyNav = __webpack_require__(2855);
;// CONCATENATED MODULE: ./data/webData.json
const webData_namespaceObject = JSON.parse('{"D8":[{"thumbnail":"img/web/business_card.jpg","image":"img/web/business_card.jpg"},{"thumbnail":"img/web/business_card2.jpg","image":"img/web/business_card2.jpg"},{"thumbnail":"img/web/business_card3.jpg","image":"img/web/business_card3.jpg"},{"thumbnail":"img/web/business_card4.jpg","image":"img/web/business_card4.jpg"},{"thumbnail":"img/web/business_card5.jpg","image":"img/web/business_card5.jpg"}],"jY":[{"thumbnail":"img/web/logo1.png","image":"img/web/logo1.png"},{"thumbnail":"img/web/logo2.png","image":"img/web/logo2.png"},{"thumbnail":"img/web/logo3.png","image":"img/web/logo3.png"},{"thumbnail":"img/web/logo4.png","image":"img/web/logo4.png"}],"jv":[{"thumbnail":"img/web/plakat1.png","image":"img/web/plakat1.png"}],"xw":[{"thumbnail":"img/web/laptop_mockup1.png","image":"https://ikurzysiti.cz/"},{"thumbnail":"img/web/laptop_mockup2.png","image":"https://lenkadesign.cz"},{"thumbnail":"img/web/laptop_mockup3.png","image":"https://truhlarstvi-hajlek.vercel.app/index.html"}]}');
// EXTERNAL MODULE: ./components/galleryImg.js
var galleryImg = __webpack_require__(5199);
;// CONCATENATED MODULE: ./pages/web-grafika.js







function Realizace() {
    // window.addEventListener("load", function (e) {
    //   window.dispatchEvent(new Event("resize"));
    // });
    const slideImage = [
        {
            url: "img/web/laptop_mockup1.png"
        },
        {
            url: "img/web/laptop_mockup2.png"
        },
        {
            url: "img/web/laptop_mockup3.png"
        },
        {
            url: "img/web/business_card5.jpg"
        },
        {
            url: "img/web/business_card.jpg"
        }
    ];
    const plakat = webData_namespaceObject.jv.map((item)=>{
        return item;
    });
    const logo = webData_namespaceObject.jY.map((item)=>{
        return item;
    });
    const businessCard = webData_namespaceObject.D8.map((item)=>{
        return item;
    });
    const web = webData_namespaceObject.xw.map((item)=>{
        return item;
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Tvorba webu | Lenka Design"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "max-width",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "herowb",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "herowb-text",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: "Profesion\xe1ln\xed n\xe1vrh a design webov\xfdch str\xe1nek, či jin\xe9 grafiky na m\xedru"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Jste zač\xednaj\xedc\xed firma? A potřebujete web a grafiku co nejdř\xedve, ať můžete zač\xedt vyděl\xe1vat?"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "O vše se postar\xe1me od designu loga, nafocen\xed produktů, grafiky webu a nak\xf3dov\xe1n\xed cel\xe9 struktury webu."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "slide-container slide-small",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Carousel_default()), {
                                    style: {
                                        width: "600px"
                                    },
                                    children: slideImage.map((slideImage, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Carousel_default()).Item, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "d-block w-100",
                                                src: slideImage.url,
                                                alt: "First slide"
                                            })
                                        }))
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "max-width",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Naše služby"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "sluzby scroll sluzby-wrapper sluzby-second",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(sluzbyNav/* default */.Z, {
                                        title: "Tvorba webu",
                                        link: "#tvorba-webu",
                                        img: "img/web/web.svg"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(sluzbyNav/* default */.Z, {
                                        title: "Tvorba grafiky",
                                        link: "#tvorba-grafiky",
                                        img: "img/web/grafika.svg"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(sluzbyNav/* default */.Z, {
                                        title: "Fotografov\xe1n\xed",
                                        link: "#fotografovani",
                                        img: "img/web/foto.svg"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                        id: "tvorba-webu",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "article-title",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Tvorba Webov\xfdch str\xe1nek"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "title-text",
                                        children: "Navrhneme design, d\xedky kter\xe9mu v\xe1š web vynikne. Zapamatovateln\xe9 firemn\xed str\xe1nky podpoř\xed viditelnost značky a odliš\xed v\xe1s od konkurence."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Jak Prob\xedh\xe1 spolupr\xe1ce?"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "d-flex overflow-auto m-auto",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "spoluprace-section flex-shrink-0",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "number",
                                                        children: "1"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        children: "Konzultace"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "V t\xe9to f\xe1zi se s klientem setk\xe1v\xe1me a diskutujeme o jeho požadavc\xedch na webovou str\xe1nku. Můžeme se pt\xe1t na c\xedlovou skupinu, c\xedle, kter\xe9 chce webov\xe1 str\xe1nka splnit, požadavky na obsah a funkce a dalš\xed specifika. Zde je důležit\xe9, abychom si ujasnili všechny potřebn\xe9 informace a dohodli se na tom, co je potřeba pro tvorbu str\xe1nky."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "spoluprace-section flex-shrink-0",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "number",
                                                        children: "2"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        children: "N\xe1vrh"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Po konzultaci zač\xedn\xe1me s tvorbou n\xe1vrhu str\xe1nky. Můžeme využ\xedt designov\xe9ho n\xe1stroje, kter\xfd umožňuje vytv\xe1řen\xed n\xe1hledů str\xe1nky, a to jak pro mobiln\xed, tak desktopovou verzi. Během t\xe9to f\xe1ze se tak\xe9 dohodneme na barevn\xe9m sch\xe9matu, typografii, um\xedstěn\xedm prvků a celkov\xe9m vzhledu str\xe1nky."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "spoluprace-section flex-shrink-0",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "number",
                                                        children: "3"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        children: "V\xfdvoj"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Po dokončen\xed n\xe1vrhu se zač\xedn\xe1 s k\xf3dov\xe1n\xedm webov\xe9 str\xe1nky. Použ\xedv\xe1me modern\xed technologie a metody v\xfdvoje, abychom zajistili, že webov\xe1 str\xe1nka bude rychl\xe1, responzivn\xed a bezpečn\xe1. Pracujeme na tvorbě webov\xfdch str\xe1nek s použit\xedm nejnovějš\xedch n\xe1strojů a frameworků, jako jsou React, Next.js a dalš\xed."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "spoluprace-section flex-shrink-0",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "number",
                                                        children: "4"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        children: "Testov\xe1n\xed"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Po dokončen\xed v\xfdvoje prov\xe1d\xedme testov\xe1n\xed, abychom zajistili, že str\xe1nka funguje spr\xe1vně a bez probl\xe9mů. Testujeme všechny funkce str\xe1nky a ověřujeme, že všechny odkazy funguj\xed, str\xe1nky se nač\xedtaj\xed rychle a responzivita odpov\xedd\xe1 požadavkům."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "spoluprace-section flex-shrink-0",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "number",
                                                        children: "5"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        children: "Schv\xe1len\xed"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Po \xfaspěšn\xe9m dokončen\xed testů je čas na schv\xe1len\xed str\xe1nky klientem. Zde může klient d\xe1t zpětnou vazbu na webovou str\xe1nku a pokud je potřeba, provedeme nějak\xe9 \xfapravy. Pokud je klient s v\xfdsledkem spokojen\xfd, můžeme pokračovat v dalš\xed f\xe1zi."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "spoluprace-section flex-shrink-0",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "number",
                                                        children: "6"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        children: "Nasazen\xed"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Po schv\xe1len\xed webov\xe9 str\xe1nky se přistupuje k jej\xedmu nasazen\xed. Nahr\xe1v\xe1me webovou str\xe1nku na hostingovou službu a zajišťujeme, že je str\xe1nka dostupn\xe1 a spr\xe1vně se nač\xedt\xe1. Tuto f\xe1zi ukončujeme, když je webov\xe1 str\xe1nka \xfaspěšně nasazena a připravena k použit\xed."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                className: "gallery-web",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sluzba max-width",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "sluzba-text-wrapper",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                id: web.id,
                                                className: "sluzba-title",
                                                children: web.title
                                            })
                                        }),
                                        web.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: item.image,
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: item.thumbnail,
                                                    className: "gallery-img",
                                                    loading: "lazy"
                                                })
                                            }, index))
                                    ]
                                }, web.title)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                        id: "tvorba-grafiky",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "article-title",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Tvorba grafiky"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Tak\xe9 nab\xedz\xedme profesion\xe1ln\xed tvorbu reklamn\xed grafiky. Pomůžeme V\xe1m vytvořit poutav\xe9 plak\xe1ty, vizitky, loga a reklamy, kter\xe9 budou oslovovat Vaše z\xe1kazn\xedky. D\xedky našemu talentovan\xe9mu t\xfdmu grafiků, se postar\xe1me o to, aby Vaše značka byla nejen viditeln\xe1, ale i zapamatovateln\xe1. Nab\xedz\xedme konkurenceschopn\xe9 ceny a širok\xe9 spektrum služeb, takže pokud hled\xe1te způsob, jak vystoupit z davu, obraťte se na n\xe1s. Společně dos\xe1hneme skvěl\xfdch v\xfdsledků."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                className: "gallery-web",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(galleryImg/* default */.Z, {
                                            title: "Design vizitek",
                                            text: "Nezapomenuteln\xe1 prvn\xed dojem - to je to, co V\xe1m kvalitn\xed vizitka umožn\xed. Ať už se jedn\xe1 o podnikatele, profesion\xe1ly nebo studenty, kteř\xed hledaj\xed novou pr\xe1ci, kvalitn\xed vizitka je nezbytnost\xed. Proto jsme zde, abychom V\xe1m pomohli s tvorbou vizitek, kter\xe9 V\xe1s budou reprezentovat tak, jak si zaslouž\xedte. S našimi modern\xedmi designov\xfdmi prvky a kreativn\xedmi n\xe1pady, budou Vaše vizitky st\xe1t v řadě a vyniknou nad ostatn\xedmi. Zajist\xedme vše od n\xe1vrhu až po tisk.",
                                            id: "design-vizitek",
                                            render: businessCard
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(galleryImg/* default */.Z, {
                                            title: "Design loga",
                                            text: "Vaše značka potřebuje siln\xe9 logo, kter\xe9 bude snadno rozpoznateln\xe9 a reprezentovat Vaše hodnoty. S naš\xedm kreativn\xedm př\xedstupem a modern\xedmi designov\xfdmi trendy V\xe1m pomůžeme vytvořit logo, kter\xe9 bude zapamatovateln\xe9 a vynikne nad ostatn\xedmi. Kontaktujte n\xe1s a vytvořte si s n\xe1mi sv\xe9 dokonal\xe9 logo.",
                                            id: "design-loga",
                                            render: logo
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(galleryImg/* default */.Z, {
                                            title: "Design plak\xe1tů",
                                            text: "Přit\xe1hněte pozornost sv\xfdch z\xe1kazn\xedků s našimi efektivn\xedmi a kr\xe1sn\xfdmi plak\xe1ty. Naši talentovan\xed grafici V\xe1m pomohou s tvorbou kreativn\xedch n\xe1padů, kter\xe9 odpov\xeddaj\xed Vašim potřeb\xe1m a zv\xfdš\xed z\xe1jem o Vaši značku. Kontaktujte n\xe1s a nechte n\xe1s vytvořit pro V\xe1s dokonal\xfd plak\xe1t.",
                                            id: "design-vizitek",
                                            render: plakat
                                        })
                                    ]
                                })
                            })
                        ]
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
var __webpack_exports__ = __webpack_require__.X(0, [664,434,199], () => (__webpack_exec__(2026)));
module.exports = __webpack_exports__;

})();