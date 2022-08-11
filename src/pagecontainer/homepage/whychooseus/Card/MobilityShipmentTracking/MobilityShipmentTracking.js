import React,{ useEffect, useRef } from 'react'
import lottie from 'lottie-web' 
import './MobilityShipmentTracking.css'

function MobilityShipmentTracking() {

    const card3 = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
          container:card3.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require("../../../../../assets/animatedIcon/target.json")
        })
      }
      )
  return (
    <div className="card3" ref={card3}>
      <p>Mobility Shipment Tracking</p>
    </div>
  )
}

export default MobilityShipmentTracking