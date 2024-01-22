import React, { useContext } from 'react'
import './card.scss'
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../Context/WishlistContext'
import { IoMdHeart } from "react-icons/io";

const Card = ({image,title,info,image2,author,price,id}) => {
    const {addWish}=useContext(WishlistContext)
    
  return (
    <div>
        <div className="cardArea">
            <div className="cardBox">
                <div className="cardImage">
                    <img src={image} alt="" />
                </div>
                <div className="cardText">
                    <h2>{title}</h2>
                    <p>{info}</p>
                </div>
                <div className="cardEnd">
                    <img src={image2} alt="" />
                    <p>{author}</p>
                    <div className="priceCard"><p>${price}</p></div>
                </div>
                <div className="cardDetail">
                    <div><Link to={`/${id}`}><button><i class="fa-solid fa-eye"></i></button></Link></div>
                </div>
                <div className="addWish">
                        <div onClick={()=>addWish(product)}><IoMdHeart /></div>
                    </div>
            </div>
        </div>
      
    </div>
  )
}

export default Card
