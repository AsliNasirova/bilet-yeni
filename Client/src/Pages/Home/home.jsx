import React from 'react'
import { Helmet } from 'react-helmet-async'
import Product from '../../Components/ProductSection/product'
import Header from '../../Components/Header/header'
import Ourser from '../../Components/OurServices/ourser'

const Home = () => {
  return (
    <>
    <Helmet>
        <title>
            Home Page
        </title>
    </Helmet>
    <div>
      <Header/>
        <Product/>
        <Ourser/>
    </div>
      
    </>
  )
}

export default Home
