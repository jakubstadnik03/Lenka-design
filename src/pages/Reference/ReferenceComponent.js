import React from 'react'

function ReferenceComponent(props) {
  return (
    <figure className="reference-box">
    <figcaption><p>{props.text}</p></figcaption>
    <img loading="lazy" src={props.image} />
</figure>
  )
}

export default ReferenceComponent