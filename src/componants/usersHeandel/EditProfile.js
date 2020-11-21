import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import {  useFirestore } from 'react-redux-firebase'
import { Picture } from '../layout/Picture';
import { PageHeader } from '../shared/PageHeader';
import { UploadFile } from '../shared/UploadFile';


export const EditProfile = (props) => {
  const firestore = useFirestore();
  const [url, setUrl] = useState('https://via.placeholder.com/150');
  const [imgName, setImgName] = useState('');



 
  var user = useSelector(({firestore:{ordered}})=>ordered.users && ordered.users[0])

  const onChangeHendel = (e) => {
      user = { ...user, [e.target.name]: e.target.value };
  };

  const onSubmit  =async (e) => {
    e.preventDefault();
  const updateProfile ={
  email:user.email, displayName:user.displayName,url:url,imgName:imgName }  
  console.log(updateProfile)
  return await firestore.collection('users')
      .doc(user.id)
      .set(updateProfile)
      .then(() => props.history.push('/'));

  };
 
  
  return (
    <div>
      {user ?(
        <div className="row">
      
        <div className="col-2 mt-1">
        <div className="d-flex justify-content-center mb-2">
                <Picture
                 url={user.url || url}
                 size={"100"}
                 />
                </div>
                <p className="text-center">{user.email}</p>
                <UploadFile
                 setUrl={setUrl}
                 setImgName={setImgName}
                 />
        </div>
        <div className="col-8">
        <div className="row mt-1">
          <div className="col-md-6 mx-auto">
            <PageHeader word1="ניהול" word2="משתמש"/>      
              <form onSubmit={onSubmit}>
              <div className="form-group">
              
                <label htmlFor="userName">שם משתמש</label>
                <input
                  className="form-control"
                  type="text"
                  name="displayName"
                  autoComplete="userName"
                  defaultValue={user.displayName}
                  onChange={onChangeHendel}
                />
                
              </div>
                <input
                type="submit"
                value="Save Update"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>
        </div>
  
        </div>
        <div className="col-2"></div>
      </div>
        ):null}
    
    </div>
    
  )
}


