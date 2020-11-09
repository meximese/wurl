import React from 'react'

// TODO: check for contrast ratio in pagination
function WurlPagination (props) {
  const slidesArr = props.slidesArr
  const slides = slidesArr.map((slide, index) =>
    <button
      onClick={() => props.handleClick(index) }
      key={ index }
      data-slide={ index + 1 }
      className={ props.active === index ? 'active' : ''}
      aria-label={`Jump to slide ${(index + 1)}`}
    >
      <span className="visually-hidden">Jump to slide { index + 1 }</span>
    </button>
  )
  return (
    <div
      className="wurl__pag"
    >
      { slides }
    </div>
  )
}

export default WurlPagination
