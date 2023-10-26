/**here we will mount the dom according to the env */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el)=>{
  ReactDOM.render(<App/>, el);
}


if(process.env.NODE_ENV === "development"){
  let root = document.querySelector("#marketing_dev-root");
  if(root){
    mount(root);
  }
}


export { mount }