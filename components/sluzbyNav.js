import Link from "next/link";

export default function sluzbyNav({ link, title, img, id }) {
  return (
    <a href={`${link}`}>
      <figure key={id}>
        <figcaption className="nav-title">
          <h2>{title}</h2>
        </figcaption>
        <img src={img} alt={title} />
      </figure>
    </a>
  );
}
