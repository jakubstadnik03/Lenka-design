import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function ImageGallery(props) {
  return (
    <div className="sluzba max-width" key={props.title}>
      <div className="sluzba-text-wrapper">
        <h2 id={props.id} className="sluzba-title">
          {props.title}
        </h2>
        <p>{props.text}</p>
      </div>
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
        {props.render?.map((item, index) => (
          <a href={item.image} key={index}>
            <img src={item.thumbnail} className="gallery-img" loading="lazy" />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
