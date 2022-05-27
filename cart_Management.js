var price = 0;
var nbCart = 0;
var nbToAdd = 0;

if(nbCart == 0 ){
    document.querySelector('.nums-article').style.display='none'
}
    else{
    document.querySelector('.nums-article').style.display='block'
}


function addClick() {
    updateDisplay(++nbToAdd);
}

function removeClick() {
    if(nbToAdd == 0 ){
        updateDisplay(nbToAdd);
    }else{
        updateDisplay(--nbToAdd);
    } 
}


function addCart(){
    nbCart += nbToAdd;
    price = 250 * nbCart;
    document.getElementById("count_lbl").innerHTML = 0;
    document.getElementById("nums-article").innerHTML = nbCart;
    document.getElementById("price").innerHTML = "$250 x "+nbCart +"&nbsp &nbsp $"+ price; 
    nbToAdd = 0;
    
}

