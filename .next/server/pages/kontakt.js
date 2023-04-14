"use strict";
(() => {
var exports = {};
exports.id = 510;
exports.ids = [510];
exports.modules = {

/***/ 2292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ kontakt)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@emailjs/browser"
const browser_namespaceObject = require("@emailjs/browser");
var browser_default = /*#__PURE__*/__webpack_require__.n(browser_namespaceObject);
;// CONCATENATED MODULE: ./components/form.js



function ContactForm() {
    const form = (0,external_react_.useRef)();
    const sendEmail = (e)=>{
        e.preventDefault();
        browser_default().sendForm("service_47m0lpw", "template_m58cjss", form.current, "na8xge_55u88BuNEA").then((result)=>{
            alert("Vaš dotaz byl \xfaspěšně odesl\xe1n!");
            document.location.href = "/";
            console.log(result.text);
        }, (error)=>{
            console.log(error.text);
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "layout",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "contact-form",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    ref: form,
                    onSubmit: sendEmail,
                    id: "contact-form",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "name",
                                    className: "newline",
                                    children: "Vaše jm\xe9no:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    placeholder: "Jm\xe9no a př\xedjimen\xed",
                                    className: "form-control",
                                    name: "user_name",
                                    required: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "email",
                                    className: "newline",
                                    children: "V\xe1š email:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "email",
                                    placeholder: "example@example.cz",
                                    className: "form-control",
                                    name: "user_email",
                                    required: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "tel",
                                    className: "newline",
                                    children: "V\xe1š Telefon:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "tel",
                                    placeholder: "775 116 555 333",
                                    id: "tel",
                                    className: "form-control",
                                    name: "user_phone",
                                    required: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "message",
                                    className: "newline",
                                    children: "Zpr\xe1va:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                    placeholder: "Zde se mě můžete zeptat na cokoliv a napsat, o jakou službu by jste měli z\xe1jem",
                                    className: "form-control",
                                    rows: "4",
                                    name: "message",
                                    id: "message",
                                    required: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "mybutton",
                                type: "submit",
                                value: "send",
                                children: "Odeslat"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "contact-info",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "Kontakt"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: " MgA. Lenka St\xe1dn\xedkov\xe1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Interi\xe9rov\xe1 design\xe9rka"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                children: "Adresa"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                                children: "Durychova 950/6, Liberec, Česk\xe1 republika"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "IČO:"
                                    }),
                                    " 03911446",
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "DIČ:"
                                    }),
                                    " CZ7555242563"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "Jsem pl\xe1tcem DPH."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "color",
                                    href: "tel:+420-723-838-086",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "Telefon:"
                                        }),
                                        " +420 723 838 086"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "color",
                                    href: "mailto:stadnikovi@gamil.com",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: " E-mail:"
                                        }),
                                        " stadnikovalenka@gmail.com"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "gdpr",
                children: "Vaše osobn\xed \xfadaje (e-mail, jm\xe9no a telefon) budu zpracov\xe1vat jen za \xfačelem V\xe1mi dan\xfdm, ke kontaktov\xe1n\xed V\xe1s z oblasti interi\xe9rov\xe9ho designu v souladu s platnou legislativou a z\xe1sadami ochrany osobn\xedch \xfadajů. Svůj souhlas se zas\xedl\xe1n\xedm a zpracov\xe1n\xedm osobn\xedch \xfadajů můžete kdykoliv odvolat prostřednictv\xedm odhlašovac\xedho odkazu v každ\xe9m emailu ode mě."
            })
        ]
    });
}

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/kontakt.js



function Kontakt() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Kontakt | Lenka Design"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "max-width",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Kontakt"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                            children: "Pište nebo volejte, r\xe1da V\xe1m pomohu a odpov\xedm na Vaše ot\xe1zky…."
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ContactForm, {})
                ]
            })
        ]
    });
}
/* harmony default export */ const kontakt = (Kontakt);


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
var __webpack_exports__ = (__webpack_exec__(2292));
module.exports = __webpack_exports__;

})();