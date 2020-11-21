import React from 'react';
import {useSelector} from 'react-redux'

export const Picture = ({size}) => {
  const url = useSelector((state)=>state.firestore.ordered.users[0].url)
   const style = {
   borderRadius: '50%',
        
  };
  return (
          <img style={style} src={url} alt="" width={size}  height={size}/>
      );
};
