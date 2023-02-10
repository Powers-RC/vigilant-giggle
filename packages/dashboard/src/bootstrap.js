import { createApp } from 'vue';
import Dashboard from '../src/components/Dashboard.vue';
// Mount function to start up application
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};

// If development and in isolation
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_dashboard-dev-root')

    if(devRoot){
        mount(devRoot);
    }
}

// If runnin through container
// we should export he mount function
export { mount }