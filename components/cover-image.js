import Link from "next/link";
import Image from "next/image";

const CoverImage = ({ title, src, slug }) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className="blog-image"
      width={230}
      height={130}
    />
  );
  return (
    <div className="">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
