import React, { useEffect, useState } from 'react'
import './product.scss'
import Card from '../Card/card'

const Product = () => {
    const [product,setProduct]=useState()
    async function getProducts() {
        const data=await fetch("http://localhost:4000")
        const res=await data.json()
        console.log(res);
        setProduct(res)
        
    }
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <section id='product'>
        <div className="productArea">
            <div className="titleProduct">
                <h1>Popular Courses</h1>
            </div>
            <div className="productCard">
                {product && product.map((item)=>(
                    <Card key={item._id} id={item._id} image={item.image} title={item.title} info={item.info} image2={item.image2} author={item.author} price={item.price} product={item}/>
                ))}
            </div>

        </div>
      
    </section>
  )
}

export default Product
