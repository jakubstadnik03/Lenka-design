import React from 'react'
import './blog.css'
function Component(props) {
    let myStyle ={
        backgroundImage: `url(${props.image})`
    }

  return (
    <figure className="blog-box">
                        <figcaption>
                            
                            <div className="blog-img " rel="noreferrer" style={myStyle}>
                            <a target="_blank" rel="noreferrer" rel="noreferrer"href={props.file} download><h3 className="blog-name">{props.title}</h3></a></div>
                            <div>
                                <p>{props.text}</p>
                                    <p><a target="_blank" rel="noreferrer" href={props.file} download> Stáhnout celý článek</a></p>
                            </div>
                        </figcaption>
    </figure>
  )
}

export default Component