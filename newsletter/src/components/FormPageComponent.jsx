import React from 'react'
import succcessIcon from '../assets/images/icon-success.svg'
import Button from '@mui/material/Button';
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

        <div style={{display: 'flex', flexDirection: 'column', marginTop: '1rem'}}>

        <form action="submit">

          <div style={{display: 'flex', flexDirection: 'column'}}>
          <label htmlFor="text" style={{marginBottom: '.5rem', fontSize: '0.6rem', fontWeight: '700' }}> Email Address </label>
          <input type="text"  placeholder="email@company.com" style={{height: '2rem', paddingLeft: '1rem', borderRadius: '0.5rem', width: '18rem'}}/>
          </div>

          <Button type='submit' variant="contained" style={{backgroundColor: 'hsl(234, 29%, 20%)', height: '2rem', width: '20rem', marginTop: '1rem', fontSize: '.5rem'}}>Suscribe to monthly news letter</Button>

        </form>

        </div>

    </div>

    
  )
}

export default FormPageComponent