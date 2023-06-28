import React from 'react';
import desktopIllustration from '../assets/images/illustration-sign-up-desktop.svg';
import mobileIllustration from '../assets/images/illustration-sign-up-mobile.svg';
import { useMediaQuery } from '@mui/material';

function ImageComponent() {
  const isSmallScreen = useMediaQuery('(max-width: 850px)');

  return (
    <div style={{ height: '100%', width: '100%', marginRight: isSmallScreen ? '0' : '-6rem' }}>
      <img src={isSmallScreen ? mobileIllustration : desktopIllustration} alt="" style={{ height: '100%', width: '100%' }} />
    </div>
  );
}

export default ImageComponent;
