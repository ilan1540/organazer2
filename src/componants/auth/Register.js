import React, { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';

const Register =()=> {
  const [userName, setUserName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  
  const firebase = useFirebase()

 const onSubmit = (e) => {
    e.preventDefault();
   
    const createNewUser = { email, password, userName };
    if (email === '' || password === '' || userName === '') {
      console.log('err');
    } else {
      firebase.createUser(createNewUser);
    }
  };


    return (
      <div className="row mt-5">
        <div className="col-md-6 mx-auto">
          <h1>
            Account <span className="text-primary">Register</span>
          </h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="userName">User Name</label>
              <input
                className="form-control"
                type="text"
                name="userName"
                autoComplete="username"
                value={userName}
                onChange={(e) =>setUserName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                className="form-control"
                type="email"
                name="email"
                autoComplete="username"
                value={email}
                onChange={(e) =>setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) =>setPassword(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="register"
              className="btn btn-primary btn-block"
            />
          </form>
        </div>
      </div>
    );
  
}

export default Register;
