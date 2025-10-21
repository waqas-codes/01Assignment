import React from 'react'
import '../App.css'

const Card = ({ name, companyName, details, imageUrl }) => {
  return (
    <div className="card-wrapper">
        <div className='card'>
            <div className='image-container'>
                <img src={imageUrl} />
            </div>
            <h2 className="user-name">{name || "NAME"}</h2>
            <h4 className="company-name">{companyName || "company name"}</h4>
            <p className="user-details">{details || "detail"}</p>
        </div>
    </div>
  )
}

export default Card