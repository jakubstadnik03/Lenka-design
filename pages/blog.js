import MoreStories from "../components/more-stories";
import { getAllPosts } from "./api/api";
import Head from "next/head";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  console.log(allPosts);
  return (
    <>
      <Head>
        <title>Blog | Lenka Design</title>
      </Head>
      <div className="min-h-screen">
        <main>
          <div className="container mx-auto px-5">
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
        </main>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = JSON.parse(
    JSON.stringify(
      await getAllPosts([
        "title",
        "date",
        "slug",
        "author",
        "coverImage",
        "excerpt",
      ])
    )
  );

  return {
    props: { allPosts },
  };
};
