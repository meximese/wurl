import React, { useState } from 'react'
import WurlSlide from './WurlSlide'

function WurlTrack (props) {
  // could probably refactor slidesArr here and in WurlPagination
  // to be more DRY
  const slidesArr = props.slidesArr
  const slides = slidesArr.map((slide, index) =>
    <WurlSlide key={ index } slide={ slide } />
  )
  return (
    <ul
      className="wurl__track"
      style={
        { width: `${props.width}px`, transform: `translateX(-${props.translate}px)` }
      }
    >
      { slides }
    </ul>
  )
}

export default WurlTrack
