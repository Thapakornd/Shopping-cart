import React from 'react'
import './card.scss'

const Card = ({item, handleClick}) => {
    return (
    <div className="card">
        <div className="box">
            <div className="img_box">
                <img src={item.img} alt="" />
            </div>
            <div className="details">
                <p>{item.title}</p>
                <p>{item.author}</p>
                <p>{item.price}</p>
                <button onClick={() => handleClick(item)}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Card