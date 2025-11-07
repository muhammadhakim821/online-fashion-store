import React from 'react'

import instagram1 from '../assets/instagram-1.jpg'
import instagram2 from '../assets/instagram-2.jpg'
import instagram3 from '../assets/instagram-3.jpg'
import instagram4 from '../assets/instagram-4.jpg'
import instagram5 from '../assets/instagram-5.jpg'
import instagram6 from '../assets/instagram-6.jpg'


const Footer = () => {
  return (
    <>
    <footer className='section__container footer__container'>
        <div className="footer__col">
            <h4>CONTACT INFO</h4>
            <p><span><i className="ri-map-pin-line"></i></span>
            123, london Bridge Street, London
            </p>
            <p><span><i className="ri-mail-line"></i></span>
            123, london Bridge Street, London
            </p><p><span><i className="ri-phone-line"></i></span>
            123, london Bridge Street, London
            </p>
        </div>
        <div className="footer__col">
            <h4>COMPANY</h4>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Work with us</a>
            <a href="/">Our Blogs</a>
            <a href="/">Trems and conditions</a>
        </div>
        <div className="footer__col">
            <h4>USEFUL LINKS</h4>
            <a href="/">Help</a>
            <a href="/">Truck your order</a>
            <a href="/">Men</a>
            <a href="/">Woman</a>
            <a href="/">Dresses</a>
        </div>
        <div className="footer__col">
            <h4>INSTAGRAM</h4>
            <div className="instagram__grid">
                <img src={instagram1} alt="" />
                <img src={instagram2} alt="" />
                <img src={instagram3} alt="" />
                <img src={instagram4} alt="" />
                <img src={instagram5} alt="" />
                <img src={instagram6} alt="" />

            </div>
        </div>

    </footer>
    <div className="footer__bar">
        Copyright © 2025 by hakim. All right reserved.

    </div>
    </>
  )
}

export default Footer