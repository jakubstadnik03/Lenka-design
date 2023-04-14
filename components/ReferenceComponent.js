function ReferenceComponent(props) {
  return (
    <figure className="reference-box">
      <figcaption>
        <p>{props.text}</p>
      </figcaption>
      <img loading="lazy" src={props.image} alt="Reference od klientů" />
    </figure>
  );
}

export default ReferenceComponent;
