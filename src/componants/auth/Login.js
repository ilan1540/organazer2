import React, { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { PageHeader } from '../shared/PageHeader';


const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const firebase = useFirebase();

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      console.log('err');
    } else {
      firebase
        .login({
          email,
          password,
        }
        ).then(() => props.history.push('/'))
        .catch((err) => console.log('Please fill in all fields'));
    }
  };

  // onChange = (e) => {
  //   this.setState({ [e.target.name]: e.//target.value });
  // };

  // const { email, password } = this.state;
  return (
    <div className="row mt-5 ">
      <div className="col-md-6 mx-auto ">
        <PageHeader word1="Account" word2="Login" />
        
        <form onSubmit={onSubmit}>
          <div className="form-group text-left">
            <label htmlFor="email" >Email Address</label>
            <input
              className="form-control text-left"
              type="email"
              name="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="password">Password</label>
            <input
              className="form-control text-left"
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-primary btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
