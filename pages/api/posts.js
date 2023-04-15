export default function handler(req, res) {
  const { slug } = req.query;

  if (req.method === "GET") {
    if (slug) {
      const post = getPostBySlug(slug);
      console.log("post:", post);
      res.status(200).json(post);
    } else {
      const posts = getAllPosts();
      res.status(200).json(posts);
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
