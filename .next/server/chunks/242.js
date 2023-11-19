"use strict";
exports.id = 242;
exports.ids = [242];
exports.modules = {

/***/ 2129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const CoverImage = ({ title , src , slug  })=>{
    const image = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: src,
        alt: `Cover Image for ${title}`,
        className: "blog-image",
        width: 230,
        height: 130
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "",
        children: slug ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            as: `/posts/${slug}`,
            href: "/posts/[slug]",
            "aria-label": title,
            children: image
        }) : image
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoverImage);


/***/ }),

/***/ 9602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ getAllPosts),
/* harmony export */   "z": () => (/* binding */ getPostBySlug)
/* harmony export */ });
// api/api.js
const fs = __webpack_require__(7147);
const path = __webpack_require__(1017);
const matter = __webpack_require__(8076);
const postsDirectory = path.join(process.cwd(), "_posts");
function getPostBySlug(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data , content  } = matter(fileContents);
    return {
        slug,
        content,
        ...data
    };
}
function getAllPosts(fields = []) {
    const slugs = fs.readdirSync(postsDirectory);
    const posts = slugs.map((slug)=>getPostBySlug(slug.replace(/\.md$/, ""))).sort((post1, post2)=>post1.date > post2.date ? -1 : 1);
    return posts.map((post)=>{
        const items = {};
        fields.forEach((field)=>{
            if (field === "slug") {
                items[field] = post.slug;
            }
            if (post[field]) {
                items[field] = post[field];
            }
        });
        return items;
    });
}


/***/ })

};
;