import React from 'react'
import WhitePageContainer from '../components/WhitePageContainer'
import { useMediaQuery } from '@mui/material';

function Mypage() {

  const isSmallScreen = useMediaQuery('(max-width: 850px)');

  return (
    <div style={{backgroundColor: 'hsl(235, 18%, 26%)', height:isSmallScreen ? '100%' : '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <WhitePageContainer />
    </div>
  )
}

export default Mypage