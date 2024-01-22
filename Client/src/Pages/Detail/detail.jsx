import React, { useEffect, useState } from 'react'
import './detail.scss'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '../../Components/Card/card'

const Detail = () => {
    const [detail,setDetail]=useState()
    const {id} =useParams()
    const fetchDetails=async ()=>{
        const res =await axios(`http://localhost:4000/${id}`)
        setDetail(res.data)
    }
    useEffect(()=>{
        fetchDetails()
    },[])
  return (
    <div>
    <Helmet>
        <title>Detail Page</title>

    </Helmet>
    <h1>Detail</h1>
    {detail ? <>
    <div className="detailCard">
        <Card id={detail._id} image={detail.image} title={detail.title} info={detail.info} image2={detail.image2} author={detail.author} price={detail.price} product={detail}/>
    </div>
    </>:''}
  
      
    </div>
  )
}

export default Detail
