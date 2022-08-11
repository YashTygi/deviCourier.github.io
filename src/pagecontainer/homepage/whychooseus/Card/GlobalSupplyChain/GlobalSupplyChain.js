import React,{ useEffect, useRef } from 'react'
import lottie from 'lottie-web' 
import './GlobalSupplyChain.css'

function GlobalSupplyChain() {

    const card2 = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
          container:card2.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require("../../../../../assets/animatedIcon/globe.json")
        })
      }
      )
  return (
    <div className="card2" ref={card2}>
      <p>Global Supply Chain</p>
    </div>
  )
}

export default GlobalSupplyChain