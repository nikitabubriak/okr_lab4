class TemplateProcessor 
{
    render(view, viewName) 
    {
        const rootNode = document.getElementById('main-container');
        rootNode.innerHTML = view;

        if (viewName === 'homePage')
        {
            showSlides(slideIndex);
        }
        if (viewName === 'productPage')
        {
            document.getElementById("add-to-cart-btn").addEventListener("click", cartAddProduct);
        }
        if (viewName === 'orderPage')
        {
            document.getElementById("submit-order-btn").addEventListener("click", submitOrder);
            
            let currentHash = window.location.hash.split('#')[1];
            if (currentHash.includes('/')) 
            {
                window.location.hash = '#catalog';
            }
        }
        
    }
}

export default TemplateProcessor;
