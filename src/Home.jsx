import React from 'react'
import Hero from './components/home/Hero'
import Collections from './components/home/Collections'
import Features from './components/home/Features'
import Howitworks from './components/home/Howitworks'

const Home = () => {
  return (
    <div>
      <Hero />
      <Collections />
      <Features />
      <Howitworks />
    </div>
  )
}

export default Home