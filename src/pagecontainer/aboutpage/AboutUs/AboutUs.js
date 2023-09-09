import React, {useEffect} from 'react'
import './AboutUs.scss'
import {BsFillArrowDownSquareFill} from 'react-icons/bs'
import {default as whoweare} from '../../../assets/whoweare.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';


function AboutUs() {
  useEffect(() => {
    AOS.init()
  },[])
  return (
    <div className='about-section'>
   <div className='about-values'>
     <div className='about-value-card' data-aos="zoom-out-right" data-aos-duration='500' data-aos-delay='100' >
      <h5>Trust, Communication, Excellence</h5>
      <p>Devi Courier relies on principles that matter most. Trust, open communication, and unwavering excellence form the cornerstone of our local operations. Your parcels, our promise—professionally handled with a personal touch.</p>
      </div>
      <div className='about-value-card' data-aos="zoom-out" data-aos-duration='500' data-aos-delay='0'  >
      <h5>Professionalism Without Bounds</h5>
      <p>Devi Courier's professionalism knows no bounds. We rely on professional integrity and client trust. Each parcel entrusted to us is an opportunity to embody our core values, ensuring secure and dependable deliveries.</p>
      </div>
      <div className='about-value-card' data-aos="zoom-out-left" data-aos-duration='500' data-aos-delay='100'  >
      <h5>Our Commitment to Excellence</h5>
      <p>We believe in delivering excellence beyond expectations. Every call we receive is an opportunity to showcase our dedication to secure deliveries. With professionalism as our cornerstone, we take pride in ensuring your parcels reach their destination with precision.</p>
      </div>
   </div>
    <div className='about-story'>
      <h3>Our Story</h3>
      <p>
      In a world where distances are measured in clicks, and transactions are sealed with the push of a button, the essence of a parcel can sometimes be lost in the shuffle. At Devi Courier, we recognized that behind every package we transport, there's a story, a connection, and an emotion waiting to be unveiled.
      <br/>
Our journey began with a simple premise: to redefine what it means to be a courier service. We didn't want to just move parcels from point A to point B; we aimed to bridge the gap between people, businesses, and their dreams. We understood that our role wasn't merely to transport objects; it was to transport experiences, trust, and commitment.
<br/>
In an era where tracking systems dominate the logistics landscape, we decided to take a different path. We chose the path of trust, where every interaction, every phone call, every package entrusted to us wasn't just a transaction; it was a promise made and a promise kept.
<br/>
Operating as a local company, we've built strong connections with our community over the years. Our roots run deep into the neighborhoods we serve, and our reputation is marked by trustworthiness and professionalism. We've navigated the winding streets, forged relationships with local businesses, and stood witness to the ebb and flow of life in our town.
<br/>
Our commitment to professionalism is unwavering. Each day, we wake up with the understanding that our actions impact the lives of those we serve. From delivering heartfelt gifts that bridge physical distances to ensuring that vital documents reach their destinations promptly, our dedication to precision is our badge of honor.
<br/>
But our story isn't just about the packages we handle; it's about the stories we help write. We've seen tears of joy when a long-awaited parcel arrives, shared in moments of anticipation when a surprise gift is delivered, and celebrated triumphs as our shipments reach their intended recipients. These moments, these connections, are the true rewards of our journey.
<br/>
In an ever-evolving world of logistics, our promise remains unchanged. We are more than couriers; we are your delivery allies. We're here to make every delivery a seamless experience, to connect you with what matters most, and to deliver not just parcels but also promises.
<br/>
Join us on a journey that's beyond shipping, beyond tracking, and beyond expectations. Let's craft stories, foster connections, and ensure that your deliveries are as memorable as the moments they represent. At Devi Courier, we're not just delivering packages; we're delivering trust, professionalism, and an unwavering commitment to making your delivery experience truly exceptional. Welcome to the heart of your deliveries; welcome to Devi Courier.
      </p>
    </div>
    
   </div>
  )
}

export default AboutUs