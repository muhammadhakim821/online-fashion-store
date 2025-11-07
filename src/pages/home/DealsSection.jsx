import React from 'react'
import dealsImg from '../../assets/deals.png'

const DealsSection = () => {
  return (
    <section className='section__container deals__container'>
        <div className='deals__image'>
        <img src={dealsImg} alt="deals image" />
        </div>
        <div className='deals__content'>
            <h5>Get up to 20% Discount</h5>
            <h4>Deals of this month</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, molestiae, id culpa ipsam sunt fuga quo ducimus earum asperiores quam, corrupti porro aperiam vel magnam veritatis deleniti officiis quia veniam.</p>
            <div className='deals__countdown flex-wrap'>
                <div className="deals__countdown__card">
                    <h4>14</h4>
                    <p>days</p>
                </div>
                <div className="deals__countdown__card">
                    <h4>20</h4>
                    <p>Hours</p>
                </div><div className="deals__countdown__card">
                    <h4>14</h4>
                    <p>Minutes</p>
                </div><div className="deals__countdown__card">
                    <h4>14</h4>
                    <p>Seconds</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default DealsSection