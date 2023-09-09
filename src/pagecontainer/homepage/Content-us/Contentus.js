import React, {useEffect} from 'react'
import './Contentus.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contentus = () => {
  useEffect(() => {
    AOS.init()
  },[])
  return (
   <div className='about-us-section'>
   <div className='about-us-values'>
     <div className='about-us-value-card' data-aos="fade-right" data-aos-duration='500' data-aos-delay='0' >
      <h5>Trust, Communication, Excellence</h5>
      <p>Devi Courier relies on principles that matter most. Trust, open communication, and unwavering excellence form the cornerstone of our local operations. Your parcels, our promise—professionally handled with a personal touch.</p>
      </div>
      <div className='about-us-value-card' data-aos="fade-right" data-aos-duration='500' data-aos-delay='25' >
      <h5>Professionalism Without Bounds</h5>
      <p>Devi Courier's professionalism knows no bounds. We rely on professional integrity and client trust. Each parcel entrusted to us is an opportunity to embody our core values, ensuring secure and dependable deliveries.</p>
      </div>
      <div className='about-us-value-card' data-aos="fade-right" data-aos-duration='500' data-aos-delay='50' >
      <h5>Our Commitment to Excellence</h5>
      <p>We believe in delivering excellence beyond expectations. Every call we receive is an opportunity to showcase our dedication to secure deliveries. With professionalism as our cornerstone, we take pride in ensuring your parcels reach their destination with precision.</p>
      </div>
   </div>
    <div className='about-us-story' data-aos="fade-left" data-aos-duration='500' data-aos-delay='0' >
      <h3>Molding Your Exceptional Delivery Moments</h3>
      <p>In the heart of every package we carry, there's a story waiting to be told. At our core, we're more than couriers; we're the bridge between connections, the messenger of promises, and the guardian of your precious deliveries.
      <br />Our journey isn't just about parcels and boxes; it's about building trust, one delivery at a time. We understand that behind every item we transport, there's an emotion—joy, hope, comfort. And we carry these emotions with the utmost care.
      <br />From the bustling streets to the quiet corners of our town, we navigate journeys with a purpose. We're the link that unites loved ones, the partner that supports businesses, and the ally that understands the significance of each delivery.
      <br />But it's not just the destinations we reach that matter; it's the stories we help write. We've stood witness to tears of joy, shared in moments of anticipation, and celebrated triumphs as our deliveries arrive.
      <br />Our journey isn't just about parcels and boxes; it's about building trust, one delivery at a time. We understand that behind every item we transport, there's an emotion—joy, hope, comfort. And we carry these emotions with the utmost care.
      <br />From the bustling streets to the quiet corners of our town, we navigate journeys with a purpose. We're the link that unites loved ones, the partner that supports businesses, and the ally that understands the significance of each delivery.
      <br />But it's not just the destinations we reach that matter; it's the stories we help write. We've stood witness to tears of joy, shared in moments of anticipation, and celebrated triumphs as our deliveries arrive.
      </p>
    </div>
    
   </div>
  )
}

export default Contentus