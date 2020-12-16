class Router 
{
    getCurrentState() 
    {
        let viewName = '';
        let endpointName = '';

        switch (window.location.hash.split('#')[1]) 
        {
            case 'catalog':
                viewName = 'catalogPage';
                endpointName = 'catalog';
                break;
            
            default:
                viewName = 'homePage';
                endpointName = 'db';
                window.location.hash = '#';
                break;
        }

        return {
            viewName,
            endpointName
        };
    }
}

export default Router;
