var open = false;

function OpenCart(){
    if(nbCart > 0 && open == false){
        document.querySelector('.cart-conteneur').style.display='block'
        open = true;
    }else{
        document.querySelector('.cart-conteneur').style.display='none'
        open = false;
    }
}