import React from 'react'
import desktopIllustration from '../assets/images/illustration-sign-up-desktop.svg'
function ImageComponent() {
  return (
    <div style={{height: '90%'}}>
      <img src={desktopIllustration} alt=""  style={{ height: '100%'}}/>
    </div>
  )
}

export default ImageComponent