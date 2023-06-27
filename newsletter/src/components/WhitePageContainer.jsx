import React from 'react'
import FormPageComponent from './FormPageComponent'
import ImageComponent from './ImageComponent'

function WhitePageContainer() {
  return (
    <div style={{backgroundColor: 'hsl(0, 0%, 100%)', height: '70%', width: '60%', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0rem 1rem 2rem'}}>
        <FormPageComponent />
        <ImageComponent />
    </div>
  )
}

export default WhitePageContainer