import React from 'react'
import { Link } from 'react-router-dom'
import bannerImage from '../../assets/header.png'
const Banner = () => {
  return (
    <div className='section__container header__container'>
        <div className='header__content z-20'> 
            <h4 className='uppercase'>up to 20% discount on</h4>
            <h1>GIRL'S FASHIONS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat, ratione culpa rem tempora odio accusantium, inventore deleniti asperiores architecto eaque ea quod id dolorum neque optio non sed sint?</p>
            <button className='btn'><Link to='/shop' >Explore NOW</Link></button>
                    </div>
                    <div className='header__image'>
                        <img src={bannerImage} alt="banner image" />
                    </div>

    </div>
  )
}

export default Banner