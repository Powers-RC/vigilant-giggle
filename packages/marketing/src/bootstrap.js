import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log("Hi There Marketing");
// Mount function to start up application
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    );
};

// If development and in isolation
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root')

    if(devRoot){
        mount(devRoot);
    }
}

// If runnin through container
// we should export he mount function
export { mount }