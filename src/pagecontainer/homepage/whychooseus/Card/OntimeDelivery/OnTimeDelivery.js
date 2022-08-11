import React,{ useEffect, useRef } from 'react'
import lottie from 'lottie-web' 
import './OnTimeDelivery.css'

function OnTimeDelivery() {

    const card5 = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
          container:card5.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require("../../../../../assets/animatedIcon/clock.json")
        })
      }
      )
  return (
    <div className="card5" ref={card5}>
      <p>OnTime Delivery</p>
    </div>
  )
}

export default OnTimeDelivery