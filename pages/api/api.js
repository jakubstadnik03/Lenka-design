// api/api.js

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postsDirectory = path.join(process.cwd(), "_posts");

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug,
    content,
    ...data,
  };
}

export function getAllPosts(fields = []) {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs
    .map((slug) => getPostBySlug(slug.replace(/\.md$/, "")))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts.map((post) => {
    const items = {};
    fields.forEach((field) => {
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
