import React, { useState } from 'react'
import WurlTrack from './WurlTrack'
import WurlNavigation from './WurlNavigation'
import wurlData from '../wurlData'
import WurlPagination from './WurlPagination'

function Wurl () {
  // TODO:
  // 1: do not activate navigation or pagination if window width is too narrow
  // 2: setup autoPlay: 
  // - setInterval for nextSlide
  // - likely use hook useEffect to instantiate autoplay
  // - remember to tear down w/ react
  // 3: clone extra slides and tweak CSS to add 'infinite' navigation
  // 4: prefix and bullet-proof the overall CSS

  const slideWidth = () => {
    if (window.innerWidth <= 400) {
      // TODO: listen for window.resize events
      // this is hacky and directly tied to CSS
      return null
    }
    if (window.innerWidth <= 600) {
      return 400
    }
    if (window.innerWidth <= 900) {
      return 600
    }
    if (window.innerWidth <= 1200) {
      return 900
    }
    return 1200
  }
  // set and watch active slide and width of Wurl
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0
  })
  const { translate, activeSlide } = state

  // handleClick for previous
  const prevSlide = () => {
    if (activeSlide === 0) {
      return setState({
        ...state,
        activeSlide: wurlData.length - 1,
        translate: (wurlData.length - 1) * slideWidth()
      })
    }
    setState({
      ...state,
      activeSlide: activeSlide - 1,
      translate: (activeSlide - 1) * slideWidth()
    })
  }

  // handleClick for next
  const nextSlide = () => {
    if (activeSlide === wurlData.length - 1) {
      return setState({
        ...state,
        activeSlide: 0,
        translate: 0
      })
    }
    setState({
      ...state,
      activeSlide: activeSlide + 1,
      translate: (activeSlide + 1) * slideWidth()
    })
  }

  // handleClick for pagination
  const gotoSlide = (slide) => {
    setState({
      ...state,
      activeSlide: slide,
      translate: (slide) * slideWidth()
    })
  }

  return (
      <div className="wurl">
        <WurlTrack
          slidesArr={ wurlData }
          translate={ translate }
          width={ slideWidth() * wurlData.length }
        />
        <WurlNavigation direction="prev" handleClick={ prevSlide } />
        <WurlNavigation direction="next" handleClick={ nextSlide } />
        <WurlPagination slidesArr={ wurlData } active={ activeSlide } handleClick={ gotoSlide } />
      </div>
  )
}

export default Wurl
