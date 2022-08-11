import React,{useEffect,useRef} from 'react'
import lottie from 'lottie-web' 
import './24hrSupport.css'

function Support() {
    const card = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container:card.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require("../../../../../assets/animatedIcon/group.json")
    })
  }
  )
  return (
    <div className="card" ref={card}>
            <span></span>
            <p>24hr Support</p>
    </div>
  )
}

export default Support