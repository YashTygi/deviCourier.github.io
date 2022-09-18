import React from 'react'
import './AboutUs.scss'
import {BsFillArrowDownSquareFill} from 'react-icons/bs'
import {default as whoweare} from '../../../assets/whoweare.jpeg'


function AboutUs() {
  return (
    <div className='about-us'>
      <div className='about-us-header'>
        <h1>We are Devi Courier</h1>
        <button className='bounce-bottom'><BsFillArrowDownSquareFill  color='#fff' size={35} /></button>
        </div>
      <div className='about-us-article'>
       <img alt='Who-we-are' src={whoweare} />
       <div className='who-we-are'>
         <h1>Who we are ?</h1>
         <p>Anim commodo laborum elit aliquip consectetur voluptate in nisi ea. Velit magna cillum ipsum incididunt enim ullamco commodo laboris exercitation. Consectetur mollit sint aute nostrud veniam. Mollit quis elit deserunt fugiat ea ullamco. Nostrud id veniam deserunt id elit ea eiusmod aliquip excepteur aliquip. Enim incididunt ut laboris officia commodo veniam.

Exercitation sit magna incididunt eiusmod excepteur minim irure. Magna ad dolor amet dolore. Sit irure fugiat nulla ea magna consectetur adipisicing laborum irure enim. Mollit dolor laborum ipsum Lorem.</p>
       </div>
      </div>
    </div>
  )
}

export default AboutUs