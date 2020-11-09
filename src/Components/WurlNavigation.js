import React from 'react'

// TODO: icons or nicer artwork for nav
function WurlNavigation (props) {
  return (
    <div className={`wurl__nav ${props.direction}`}>
      <button
        onClick={() => props.handleClick() }
        aria-label={ props.direction === 'next' ? 'Next Slide' : 'Previous Slide'}
      >
        <span>{ props.direction === 'next' ? '>' : '<'}</span>
      </button>
    </div>
  )
}

export default WurlNavigation
