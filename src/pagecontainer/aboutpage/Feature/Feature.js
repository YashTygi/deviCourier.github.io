import React from 'react'
import './Feature.scss'
import featureData from '../../../Data/featureData.json'

function Feature() {
  return (
    <div className='feature-tab'>
    <h1>Our Features</h1>
    <div className='feature-container'>
     {
      featureData.FeatureInfo.map((fdata) => {
        return(
        <div className='feature-card' key={fdata.id}>
          <img alt='feature' />
         <div>
          <h2>{fdata.name}</h2>
          <p>{fdata.context}</p>
         </div>
        </div>
        )
      })
     }
    </div>
    </div>
  )
}

export default Feature