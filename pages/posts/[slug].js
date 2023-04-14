import Link from "next/link";
import { getPostBySlug, getAllPosts } from "../lib/api";
import Head from "next/head";
import markdownToHtml from "../lib/markdownToHtml";
import CoverImage from "../../components/cover-image";
import lenka from "../../public/img/lenka.jpg";

export default function Post({ post, morePosts, preview }) {
  return (
    <>
      <div className="min-h-screen">
        <main>
          <div className="max-width">
            <article className="mb-32">
              <Head>
                <title>{post.title}</title>
              </Head>

              <div>
                <h1 className="ms-2">{post.title}</h1>
                <CoverImage title={post.title} src={post.coverImage} />
              </div>
              <div
                className="blog-data max-width"
                style={{ maxWidth: "1300px" }}
              >
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              <section
                id="o-mne"
                className="max-width max-width-small d-flex justify-content-center flex-column flex-md-row align-items-center max-width "
              >
                <img
                  src="https://lenkadesign.cz/img/lenka.jpg"
                  alt="Lenka Stádníková"
                  className="rounded-circle me-md-5 mb-2 "
                />

                <div className="o_mne_text ">
                  <h2>Lenka Stádníková – interiérová návrhářka v Liberci</h2>

                  <p>
                    Věnuji se návrhům interiérů, bytovému designu a Home
                    stagingu již přes 8let, mým cílem je, aby každý klient byl
                    spokojen. Mohu Vám nabídnout 3D vizualizaci, návrhy dispozic
                    nebo jen osobní konzultaci v interiérovém designu. Pracuji i
                    online a přes videokonference. Soustředím se na projekty a
                    návrhy interiérů v Liberci a okolí. Upřednostňuji přírodní
                    materiály či jejich imitace. Mojí největší inspirací je
                    příroda. Příroda nás vytvořila, ovlivňuje nás, a proto se v
                    její blízkosti cítíme nejlépe. Nechci Vás ale ovlivňovat mým
                    stylem, mým cílem je pochopit ten Váš a pomoci Vám
                    zrealizovat Váš sen, který máte…
                  </p>
                  <Link href="/kontakt">
                    <button type="button" className="btn btn-outline-primary ">
                      Kontaktovat
                    </button>
                  </Link>
                </div>
              </section>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
