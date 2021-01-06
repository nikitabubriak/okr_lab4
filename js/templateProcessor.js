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
        }
        
    }
}

export default TemplateProcessor;
