import React from 'react'
import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Trending from '../../components/trendingSection/Trending'

export default function Home() {
  return (
    <div className='app'>
      <Navbar/>
      <Trending/>
      <Footer/>
    </div>
  )
}
