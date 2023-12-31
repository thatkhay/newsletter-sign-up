import React from 'react'
import FormPageComponent from './FormPageComponent'
import ImageComponent from './ImageComponent'
import Thanku from './Thanku'
import { useState } from 'react'
import { useMediaQuery } from '@mui/material';


function WhitePageContainer() {

  const isSmallScreen = useMediaQuery('(max-width: 850px)');


const [submitted, setSubmit] = useState(false)

const handleFormsubmit= () => {
  setSubmit(true)
}

  return (
    <div style={{backgroundColor: 'hsl(0, 0%, 100%)', height:isSmallScreen ? '100%':  '70%', width:isSmallScreen ? '100%' : '70%', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent:isSmallScreen ? 'center' :  'space-between', padding:isSmallScreen ? '0 0 2rem 0' : '1rem 0rem 1rem 3rem', flexDirection:isSmallScreen ? 'column-reverse' : 'row'}}>

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