import Router from './router.js';
import Client from './client.js';
import TemplateProcessor from './templateProcessor.js';
// import ...

// let loader = document.getElementById("loader");
// loader.classList.toggle("hidden");

const render = () =>
{
    const router = new Router();
    const templateProcessor = new TemplateProcessor();
    const client = new Client();

    const { viewName, endpointName } = router.getCurrentState();

    let view;

    import(`./views/${viewName}.js`)
        .then((viewModule) =>  
        {
            view = viewModule.default;
            return client.getData(endpointName);
        })
        
        .then((data) => 
        {
            templateProcessor.render(view(data));
        });
}

render();
window.addEventListener('hashchange', render);
window.onhashchange = render();


// if ("onhashchange" in window) {  
//     alert("The browser supports the hashchange event!");  
//   }  