const scrolling = () => 
{
    let up_btn = document.getElementById("up-button");

    if (document.documentElement.scrollTop > 400) 
            up_btn.style.opacity = 0.75;
    else    up_btn.style.opacity = 0;
}

const goUp = () => 
{
    document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", scrolling);
document.getElementById("up-button").addEventListener("click", goUp);