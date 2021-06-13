import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Example1 from './component/Example1';
// import Example2 from './component/Example2';
// import Example3 from './component/Example3';
// import Example4 from './component/Example4';
// import Example5 from './component/Example5';
// import LoginForm  from './component/loginForm';
import SignInForm from './component/SignInForm';
// import Calculator from './Calculator';
// import Calculator1 from './component/Calculator1';
// import Fetch from './component/Fetch';
import Axios from './component/Axios';
// import Routes from './component/Routes';
// import Home from './component/Home';
// import DashBoard from './component/Dashboard';
// import About from './component/About';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Logo from './component/Logo';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    {/* <App />
    <Example1 />
    <Example2 />
    <Example3 /> 
     <Example4 />  */}
     {/* <Example5 />
     <LoginForm /> */}
     {/* <SignInForm /> */}
     {/* <Calculator /> */}
     {/* <Calculator1 /> */}
     {/* <Fetch /> */}
     <Axios />
    {/* <BrowserRouter>
    <Routes />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/dashboard' exact component={DashBoard} />
      <Route path='/about/:name' exact component={About} />
    </Switch>
    </BrowserRouter> */}
    {/* <Logo /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
