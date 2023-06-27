import React from 'react'
import succcessIcon from '../assets/images/icon-success.svg'
import Button from '@mui/material/Button';


function Thanku() {

const handleContinue = () => {

window.location.reload()

}

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '90%'}}>

        <img src={succcessIcon} alt="succcessIcon" style={{height: '3rem', width: '3rem'}} />
        <h1>Thanks For Suscribing</h1>
        <p>A confirmation email has been sent to <span style={{color: 'hsl(234, 29%, 20%)', fontWeight: '700'}}>ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription. Dismiss message
</p>
        <Button variant="contained" onClick={handleContinue}  style={{width: '20rem', height:'2rem',backgroundColor: 'hsl(234, 29%, 20%)'}}>Dismiss Message</Button>
    </div>
  )
}

export default Thanku