
function updateDisplay(val) {
    document.getElementById("count_lbl").innerHTML = val;
}

function ChoosePhoto(nombre){
    if(nombre == 1 ){
        document.getElementById("item_photo_select").src="images/image-product-1.jpg";
        document.getElementById("popup_main_img").src="images/image-product-1.jpg";
        document.getElementById("img-1").classList.add("button_selected")
        document.getElementById("img-2").classList.remove("button_selected")
        document.getElementById("img-3").classList.remove("button_selected")
        document.getElementById("img-4").classList.remove("button_selected")


    }else if(nombre == 2 ){
        document.getElementById("item_photo_select").src="images/image-product-2.jpg";
        document.getElementById("popup_main_img").src="images/image-product-2.jpg";
        document.getElementById("img-1").classList.remove("button_selected")
        document.getElementById("img-2").classList.add("button_selected")
        document.getElementById("img-3").classList.remove("button_selected")
        document.getElementById("img-4").classList.remove("button_selected")
    }else if(nombre == 3 ){
        document.getElementById("item_photo_select").src="images/image-product-3.jpg";
        document.getElementById("popup_main_img").src="images/image-product-3.jpg";
        document.getElementById("img-1").classList.remove("button_selected")
        document.getElementById("img-2").classList.remove("button_selected")
        document.getElementById("img-3").classList.add("button_selected")
        document.getElementById("img-4").classList.remove("button_selected")
    }else if(nombre == 4 ){
        document.getElementById("item_photo_select").src="images/image-product-4.jpg";
        document.getElementById("popup_main_img").src="images/image-product-4.jpg";
        document.getElementById("img-1").classList.remove("button_selected")
        document.getElementById("img-2").classList.remove("button_selected")
        document.getElementById("img-3").classList.remove("button_selected")
        document.getElementById("img-4").classList.add("button_selected");
        
    }
}