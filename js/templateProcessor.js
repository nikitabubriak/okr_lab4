class TemplateProcessor 
{
    render(view) 
    {
        const rootNode = document.getElementById('container');
        rootNode.innerHTML = view;
    }
}

export default TemplateProcessor;
