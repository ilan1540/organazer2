import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { rrfProps } from './componants/redux/store';
import store from './componants/redux/store';
import Routes from './componants/routes/Routes';
import './App.css';
import { Navbar } from './componants/layout/Navbar';
import { Footer } from './componants/layout/Footer';


function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
    <div id="content">
      <BrowserRouter>
      <Navbar id="header" />
      <Routes />
      <Footer id="footer" />
      </BrowserRouter>
      
    </div>
    </ReactReduxFirebaseProvider>
    </Provider>
    
  );
}

export default App;
