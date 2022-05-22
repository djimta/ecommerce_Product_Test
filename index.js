var counterVal = 0;

function addClick() {
    updateDisplay(++counterVal);
}

function removeClick() {
    if(counterVal == 0 ){
        updateDisplay(counterVal);
    }else{
        updateDisplay(--counterVal);
    } 
}

function updateDisplay(val) {
    document.getElementById("count_lbl").innerHTML = val;
}

function ChoosePhoto(nombre){
    
    if(nombre == 1 ){
        document.getElementById("item_photo_select").src="images/image-product-1.jpg";
        document.getElementById("img-1").style.opacity= '0.33';
        document.getElementById("img-2").attributeStyleMap.clear();
        document.getElementById("img-3").attributeStyleMap.clear();
        document.getElementById("img-4").attributeStyleMap.clear();
        document.getElementById("img-1").style.border='solid hsl(26, 100%, 55%) ';
        document.getElementById("img-1").style.borderRadius='10%';

    }else if(nombre == 2 ){
        document.getElementById("item_photo_select").src="images/image-product-2.jpg";
        document.getElementById("img-1").style.opacity= '1';
        document.getElementById("img-2").style.opacity= '0.33';
        document.getElementById("img-3").style.opacity= '1';
        document.getElementById("img-4").style.opacity= '1';
    }else if(nombre == 3 ){
        document.getElementById("item_photo_select").src="images/image-product-3.jpg";
        document.getElementById("img-1").style.opacity= '1';
        document.getElementById("img-2").style.opacity= '1';
        document.getElementById("img-3").style.opacity= '0.33';
        document.getElementById("img-4").style.opacity= '1';
    }else if(nombre == 4 ){
        document.getElementById("item_photo_select").src="images/image-product-4.jpg";
        document.getElementById("img-1").style.opacity= '1';
        document.getElementById("img-2").style.opacity= '1';
        document.getElementById("img-3").style.opacity= '1';
        document.getElementById("img-4").style.opacity= '0.33';
        e.style.opacity= '0.33';
    }
}