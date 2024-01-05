import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import "../components/Hero.css"

const Home = () => {
  return (
    <>
    <Navbar/>
  <Hero
  cName="hero"
  heroImg="https://c4.wallpaperflare.com/wallpaper/917/114/344/planet-earth-universe-darkness-wallpaper-preview.jpg"
  title="Engage, Explore, Evolve"
  text="News Made Easy"
  btnText="Explore"
  url='top-heading'
  btnClass="show"
  
  />
    </>
  )
}

export default Home