import React from 'react'
import './index.css'

function Card({title,desc,img}) {
  return (
    <div className='card'>
    <h1>{title}</h1>
    <p>{desc}</p>
    <img src={img}></img>
</div>
  )
}

export default Card