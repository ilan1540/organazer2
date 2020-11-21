import React from 'react';

export const PicBySrc = ({src}) => {
   const style = {
    width: ' 30px',
    height: '30px',
    borderRadius: '50%',
        
  };
  return (
          <img style={style} src={src} alt="" />
      );
};
