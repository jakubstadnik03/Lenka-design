(() => {
var exports = {};
exports.id = 802;
exports.ids = [802];
exports.modules = {

/***/ 3885:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-swc-loader.js):\nError: \n  \u001b[38;2;255;30;30m×\u001b[0m the name `getAllPosts` is defined multiple times\n    ╭─[\u001b[38;2;92;157;255;1;4m/Users/jakubstadnik/Documents/GitHub/Lenka-design/pages/lib/api.js\u001b[0m:1:1]\n \u001b[2m 1\u001b[0m │ import fs from \"fs\";\n \u001b[2m 2\u001b[0m │ import { join } from \"path\";\n \u001b[2m 3\u001b[0m │ import matter from \"gray-matter\";\n \u001b[2m 4\u001b[0m │ import { getAllPosts } from \"./lib/api\";\n    · \u001b[38;2;246;87;248m         ─────┬─────\u001b[0m\n    ·               \u001b[38;2;246;87;248m╰── \u001b[38;2;246;87;248mprevious definition of `getAllPosts` here\u001b[0m\u001b[0m\n \u001b[2m 5\u001b[0m │ \n \u001b[2m 6\u001b[0m │ export default async function handler(req, res) {\n \u001b[2m 7\u001b[0m │   const posts = await getAllPosts([\"slug\", \"title\", \"date\", \"excerpt\"]);\n \u001b[2m 8\u001b[0m │ \n \u001b[2m 9\u001b[0m │   res.status(200).json({ posts });\n \u001b[2m10\u001b[0m │ }\n \u001b[2m11\u001b[0m │ \n \u001b[2m12\u001b[0m │ const postsDirectory = join(process.cwd(), \"_posts\");\n \u001b[2m13\u001b[0m │ \n \u001b[2m14\u001b[0m │ export function getPostSlugs() {\n \u001b[2m15\u001b[0m │   return fs.readdirSync(postsDirectory);\n \u001b[2m16\u001b[0m │ }\n \u001b[2m17\u001b[0m │ \n \u001b[2m18\u001b[0m │ export function getPostBySlug(slug, fields) {\n \u001b[2m19\u001b[0m │   const realSlug = slug.replace(/\\.md$/, \"\");\n \u001b[2m20\u001b[0m │   const fullPath = join(postsDirectory, `${realSlug}.md`);\n \u001b[2m21\u001b[0m │   const fileContents = fs.readFileSync(fullPath, \"utf8\");\n \u001b[2m22\u001b[0m │   const { data, content } = matter(fileContents);\n \u001b[2m23\u001b[0m │ \n \u001b[2m24\u001b[0m │   const items = {};\n \u001b[2m25\u001b[0m │ \n \u001b[2m26\u001b[0m │   // Ensure only the minimal needed data is exposed\n \u001b[2m27\u001b[0m │   fields.forEach((field) => {\n \u001b[2m28\u001b[0m │     if (field === \"slug\") {\n \u001b[2m29\u001b[0m │       items[field] = realSlug;\n \u001b[2m30\u001b[0m │     }\n \u001b[2m31\u001b[0m │     if (field === \"content\") {\n \u001b[2m32\u001b[0m │       items[field] = content;\n \u001b[2m33\u001b[0m │     }\n \u001b[2m34\u001b[0m │ \n \u001b[2m35\u001b[0m │     if (typeof data[field] !== \"undefined\") {\n \u001b[2m36\u001b[0m │       items[field] = data[field];\n \u001b[2m37\u001b[0m │     }\n \u001b[2m38\u001b[0m │   });\n \u001b[2m39\u001b[0m │ \n \u001b[2m40\u001b[0m │   return items;\n \u001b[2m41\u001b[0m │ }\n \u001b[2m42\u001b[0m │ \n \u001b[2m43\u001b[0m │ export function getAllPosts(fields) {\n    · \u001b[38;2;30;201;212m                ─────┬─────\u001b[0m\n    ·                      \u001b[38;2;30;201;212m╰── \u001b[38;2;30;201;212m`getAllPosts` redefined here\u001b[0m\u001b[0m\n \u001b[2m44\u001b[0m │   const slugs = getPostSlugs();\n \u001b[2m45\u001b[0m │   const posts = slugs.map((slug) => getPostBySlug(slug, fields));\n \u001b[2m46\u001b[0m │   // sort posts by date in descending order\n    ╰────\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3885));
module.exports = __webpack_exports__;

})();