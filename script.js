// Scroll Up
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(currentScroll > 0){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;

    if(scroll > 200){
        document.getElementById("button-up").style.transform = "scale(1)";
    }else if(scroll < 200){
        document.getElementById("button-up").style.transform = "scale(0)";
    }
}