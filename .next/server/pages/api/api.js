"use strict";
(() => {
var exports = {};
exports.id = 802;
exports.ids = [802];
exports.modules = {

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllPosts": () => (/* binding */ getAllPosts),
/* harmony export */   "getPostBySlug": () => (/* binding */ getPostBySlug)
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

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(931));
module.exports = __webpack_exports__;

})();