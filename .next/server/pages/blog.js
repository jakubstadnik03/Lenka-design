"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 2788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/cover-image.js
var cover_image = __webpack_require__(2129);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
;// CONCATENATED MODULE: ./components/date-formatter.js


const DateFormatter = ({ dateString  })=>{
    const date = (0,external_date_fns_namespaceObject.parseISO)(dateString);
    return /*#__PURE__*/ jsx_runtime_.jsx("time", {
        dateTime: dateString,
        children: (0,external_date_fns_namespaceObject.format)(date, "LLLL	d, yyyy")
    });
};
/* harmony default export */ const date_formatter = (DateFormatter);

;// CONCATENATED MODULE: ./components/more-stories.js




const MoreStories = ({ posts  })=>{
    const sortedPosts = posts.sort((a, b)=>new Date(b.date) - new Date(a.date));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "blogs-section max-width",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "",
                children: "Blog"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "blog-post-container",
                children: sortedPosts.map((post)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "blog-post",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cover-image",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(cover_image/* default */.Z, {
                                    slug: post.slug,
                                    title: post.title,
                                    src: post.coverImage
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "post-title",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    as: `/posts/${post.slug}`,
                                    href: "/posts/[slug]",
                                    className: "hover:underline",
                                    children: post.title
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(date_formatter, {
                                    dateString: post.date
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "",
                                children: post.excerpt
                            })
                        ]
                    }, post.title))
            })
        ]
    });
};
/* harmony default export */ const more_stories = (MoreStories);

// EXTERNAL MODULE: ./pages/lib/api.js
var api = __webpack_require__(3885);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/blog.js




function Index({ allPosts  }) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Blog | Lenka Design"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "min-h-screen",
                children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container mx-auto px-5",
                        children: morePosts.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(more_stories, {
                            posts: morePosts
                        })
                    })
                })
            })
        ]
    });
}
const getStaticProps = async ()=>{
    const allPosts = (0,api.getAllPosts)([
        "title",
        "date",
        "slug",
        "author",
        "coverImage",
        "excerpt"
    ]);
    return {
        props: {
            allPosts
        }
    };
};


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
var __webpack_exports__ = __webpack_require__.X(0, [664,636,675,454], () => (__webpack_exec__(2788)));
module.exports = __webpack_exports__;

})();