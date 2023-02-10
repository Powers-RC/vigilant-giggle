import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to start up application
const mount = (el, { onSignIn, onNavigate, defaultHistory, initalPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initalPath]
    });
    if (onNavigate){
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App onSignIn={onSignIn} history={history}/>,
        el
    );

    return {
        onParentNavigate({ pathname: nextPathname}) {
            const { pathname } = history.location;
            console.log(nextPathname);
            if (pathname !== nextPathname){
                history.push(nextPathname);
            }
        }
    }
};

// If development and in isolation
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_auth-dev-root')

    if(devRoot){
        mount(devRoot, { defaultHistory: createBrowserHistory()});
    }
}

// If runnin through container
// we should export he mount function
export { mount }