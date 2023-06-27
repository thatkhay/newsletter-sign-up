import React from 'react'
import FormPageComponent from './FormPageComponent'
import ImageComponent from './ImageComponent'
import Thanku from './Thanku'
import { useState } from 'react'

function WhitePageContainer() {

const [submitted, setSubmit] = useState(false)

const handleFormsubmit= () => {
  setSubmit(true)
}

  return (
    <div style={{backgroundColor: 'hsl(0, 0%, 100%)', height: '70%', width: '60%', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0rem 1rem 3rem'}}>

      {submitted ? (<Thanku />) : (
        <>
        <FormPageComponent handleFormsubmit={handleFormsubmit}/>
        <ImageComponent />
        </>
      )}
        
    </div>
  )
}

export default WhitePageContainer