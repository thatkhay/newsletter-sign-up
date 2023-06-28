import React, { useState } from 'react'
import succcessIcon from '../assets/images/icon-success.svg'
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';

function FormPageComponent({handleFormsubmit}) {

  const isSmallScreen = useMediaQuery('(max-width: 850px)');

 const [email, setEmail] = useState()
 const [errorMsg, setErrorMsg] = useState()
const [buttonClicked , setButtonClicked] = useState(false)
 const validateEmail = (email) => {
 
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);

};

const clearInputField = () =>{
  setEmail('') 
  setErrorMsg('')  
}

const handleClick = () => {

  setButtonClicked(true)
}


 
    const handleInputChange = (e) => {

        setEmail(e.target.value)
        
        setButtonClicked(false)
    }

    const handleSubmit = (e) => {

      e.preventDefault()

      if(!validateEmail(email)){
        setErrorMsg('Valid email is required')
        return
      }

      clearInputField()

      handleFormsubmit({handleFormsubmit})

    
    }




  return (

    <div style={{display: 'flex', width: '70%', flexDirection: 'column', textAlign: 'left',  marginTop: isSmallScreen ? '0' : '0'}}>

        <h1 style={{textAlign: 'left', fontWeight: '700', marginBottom: '2rem', fontSize:isSmallScreen ? '2rem' : '2.5rem'}} >Stat Updated!</h1>
        <p style={{textAlign: 'left', width: '100%', marginTop: '-1rem', fontSize: isSmallScreen ? '.8rem' : '1.2rem'}}>Join 60,000+ pruducts managers receiving monthly updates on:</p>

        <div style={{marginTop: '1rem'}}>
        <div style={{display: 'flex', alignItems: 'center', textAlign: 'left', marginBottom: '1rem', fontSize: isSmallScreen ? '.8rem' : '1rem'}}><img style={{height:isSmallScreen ? '1rem' :  '1.5rem', width:isSmallScreen ? '1rem' :  '1.5rem', marginRight: '1rem'}} src={succcessIcon} alt="" /> Product discovery and building what matters </div>
        <div style={{display: 'flex', alignItems: 'center', textAlign: 'left',  marginBottom: '1rem', fontSize: isSmallScreen ? '.8rem' : '1rem'}}><img style={{height:isSmallScreen ? '1rem' :  '1.5rem', width:isSmallScreen ? '1rem' :  '1.5rem', marginRight: '1rem' }} src={succcessIcon} alt="" />Measuring to ensure updates are a success </div>
        <div style={{display: 'flex', alignItems: 'center', textAlign: 'left', marginBottom: '1rem', fontSize: isSmallScreen ? '.8rem' : '1rem'}}><img style={{height:isSmallScreen ? '1rem' :  '1.5rem', width:isSmallScreen ? '1rem' :  '1.5rem', marginRight: '1rem' }} src={succcessIcon} alt="" />And much more!</div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', marginTop: '1rem'}}>

        <form action="submit" onSubmit={handleSubmit} >

          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',width:isSmallScreen ? '100%' : '19rem'}}>
          <label htmlFor="text" style={{marginBottom: '.5rem', fontSize: '.6rem', fontWeight: '700' }}> Email Address </label>
          {errorMsg && <p style={{color: 'red', fontSize: '.6rem', fontWeight: '700'}}>{errorMsg}</p>}
          </div>
          <input type="text"  placeholder="email@company.com" value={email} onChange={handleInputChange} style={{height: '2rem', paddingLeft:isSmallScreen ? '0.3rem' : '1rem', borderRadius: '0.5rem', width: isSmallScreen ? '87%' : '18rem', fontSize:isSmallScreen ? '.8rem' : '1.2rem'}}/>
          
          </div>

          <Button type='submit' onClick={handleClick}  variant="contained"  style={{backgroundColor:buttonClicked ? 'hsl(4, 100%, 67%)' : 'hsl(234, 29%, 20%)', height: '2rem', width: isSmallScreen ? '90%' : '20rem', marginTop: '1rem', fontSize: '.5rem'}}>Suscribe to monthly news letter</Button>

        </form>

    

        </div>

    </div>

    
  )
}

export default FormPageComponent