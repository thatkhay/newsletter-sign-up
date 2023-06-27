import React from 'react'
import desktopIllustration from '../assets/images/illustration-sign-up-desktop.svg'
function ImageComponent() {
  return (
    <div style={{height: '100%', width: '100%', marginRight: '-6rem'}}>
      <img src={desktopIllustration} alt=""  style={{ height: '100%', width: '100%'}}/>
    </div>
  )
}

export default ImageComponent