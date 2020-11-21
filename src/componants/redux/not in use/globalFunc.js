import React from 'react'
import firebase from 'firebase/app'



export const getUrlHosting = (path , fileName)=>{
   let storageRef= firebase.storage().ref()
   
    storageRef.child(`${path}/${fileName}`).getDownloadURL().then((url)=>{
      console.log(url)
      return url
    })

}