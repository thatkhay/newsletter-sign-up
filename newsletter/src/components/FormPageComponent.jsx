import React from 'react'
import succcessIcon from '../assets/images/icon-success.svg'

function FormPageComponent() {

    
  return (
    <div style={{display: 'flex', width: '70%', flexDirection: 'column', textAlign: 'left'}}>

        <h1 style={{textAlign: 'left', fontWeight: '700', marginBottom: '2rem'}} >Stat Updaed!</h1>
        <p style={{textAlign: 'left', width: '100%', marginTop: '-1rem'}}>Join 60,000+ pruducts managers receiving monthly updates on:</p>
        <div style={{marginTop: '1rem'}}>
        <div style={{display: 'flex', alignItems: 'center', textAlign: 'left', marginBottom: '1rem'}}><img style={{height: '1.5rem', width: '1.5rem', marginRight: '1rem'}} src={succcessIcon} alt="" /> Product discovery and building what matters </div>
        <div style={{display: 'flex', alignItems: 'center', textAlign: 'left',  marginBottom: '1rem'}}><img style={{height: '1.5rem', width: '1.5rem', marginRight: '1rem' }} src={succcessIcon} alt="" />Measuring to ensure updates are a success </div>
        <div style={{display: 'flex', alignItems: 'center', textAlign: 'left', marginBottom: '1rem'}}><img style={{height: '1.5rem', width: '1.5rem', marginRight: '1rem' }} src={succcessIcon} alt="" />And much more!</div>
        </div>
    </div>
  )
}

export default FormPageComponent