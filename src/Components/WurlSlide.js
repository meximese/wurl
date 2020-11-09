import React from 'react'

function WurlSlide (props) {
  function handleClick(e) {
    // TODO:
    // track click event
    window.open(e.target.parentElement.href)
    e.preventDefault()
  }

  return (
    <li className="wurl__slide">
      <a href={ props.slide.link } title={ props.slide.link }>
        <img src={ props.slide.src } alt={ props.slide.alt } onClick={handleClick} />
      </a>
    </li>
  )
}

export default WurlSlide
