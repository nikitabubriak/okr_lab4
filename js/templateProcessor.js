class TemplateProcessor 
{
    render(view, viewName) 
    {
        const rootNode = document.getElementById('main-container');
        rootNode.innerHTML = view;

        if (viewName === 'productPage')
        {
            document.getElementById("add-to-cart-btn").addEventListener("click", cartAddProduct);
        }
        if (viewName === 'homePage')
        {
            showSlides(slideIndex);
        }
    }
}

export default TemplateProcessor;
