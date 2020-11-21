import React,{useState} from 'react'
import {  useFirebase } from 'react-redux-firebase'
import './chooseFile.css';

export const UploadFile = ({setUrl,setImgName}) => {
 // const [fileName, setFileName] = useState()
  const [progress, setProgress] = useState()
  const firebase = useFirebase()
  const storageRef = firebase.storage().ref();
  const onSelectFile = async (e) =>{ 
   setImgName(e.target.files[0].name)
  //  console.log(e.target.files[0].name)
   
let path = 'img'
var uploadTask = storageRef.child(`${path}/${e.target.files[0].name}`).put(e.target.files[0])
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
 (snapshot)=>{
  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
  setProgress(progress)
  switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED: // or 'paused'
      console.log('Upload is paused');
      break;
    case firebase.storage.TaskState.RUNNING: // or 'running'
      console.log('Upload is running');
      break;
      default:
      return 
  }
 },
 function(error) {
  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

  

    case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
      break;
      default:
      return 
  }},
  function() {
    // Upload completed successfully, now we can get the download URL
    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
   //   console.log('File available at', downloadURL);
      setUrl(downloadURL)
      
      
    });
  }
  )             
  }
  const style= {
    width:progress
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
  <div className="progress-bar" style={style} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{progress}</div>

			</div>
    </div>
    
  )
}


/*
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

*/