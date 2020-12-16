class Router 
{
    getCurrentState() 
    {
        let viewName = '';
        let endpointName = '';

        let currentHash = window.location.hash.split('#')[1];
        currentHash = currentHash.split('/');

        switch (currentHash[0]) 
        {
            case 'catalog':
                viewName = 'catalogPage';
                endpointName = 'catalog';
                break;
            
            case 'offer':
                viewName = 'offerPage';
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
