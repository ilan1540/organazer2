import React from 'react'
import {  useFirebase } from 'react-redux-firebase'
import './chooseFile.css';

export const ChooseFile = ({setUrl}) => {
  const firebase = useFirebase()
  const storageRef = firebase.storage().ref();
  const onSelectFile = async (e) =>{ 
   
    console.log(e.target.files[0].size)
let path = 'img'
const fileRef = storageRef.child(`${path}/${e.target.files[0].name}`);

return await fileRef
      .put(e.target.files[0])
      .then((snap) => {
      console.log(snap.ref.service)
        if(snap.state === 'success'){
          console.log(snap.state)
          fileRef.getDownloadURL().then(url => setUrl(url))
       }
      })
      .catch((err) => console.error('error uploading file', err))



  }
  return (
    <div>
       
    <div className="choose_file">
		<label htmlFor="choose_file">
			<input type="file" id="choose_file" 
      onChange={onSelectFile}
      />
			<span>בחר קובץ</span>
		</label>
	</div>
  <div className="progress">
			<div className="inner_progress" style={{width: "25%"}}></div>
			</div>
    </div>
    
  )
}


