import React,{ useEffect, useRef } from 'react'
import lottie from 'lottie-web' 
import './CarefulHandling.css'

function CarefulHandling() {

    const card4 = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
          container:card4.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require("../../../../../assets/animatedIcon/box.json")
        })
      }
      )
  return (
    <div className="card4" ref={card4}>
      <p>Careful Handling</p>
    </div>
  )
}

export default CarefulHandling