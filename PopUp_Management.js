
function openPopUp(){
    document.querySelector('.popup-img').style.display='block'
}

function closePopUp(){
    document.querySelector('.popup-img').style.display='none'
}

function choosePhotoPopUp(nombre){
    if(nombre == 1 ){

        document.getElementById("item_photo_select").src="images/image-product-1.jpg";
        document.getElementById("popup_main_img").src="images/image-product-1.jpg";
        document.getElementById("pup-img-1").style.opacity= '0.33';
        document.getElementById("pup-img-1").style.backgroundColor = 'white;'
        document.getElementById("pup-img-2").attributeStyleMap.clear();
        document.getElementById("pup-img-3").attributeStyleMap.clear();
        document.getElementById("pup-img-4").attributeStyleMap.clear();


    }else if(nombre == 2 ){

        document.getElementById("item_photo_select").src="images/image-product-2.jpg";
        document.getElementById("popup_main_img").src="images/image-product-2.jpg";
        document.getElementById("pup-img-1").attributeStyleMap.clear();
        document.getElementById("pup-img-2").style.opacity= '0.33';
        document.getElementById("pup-img-3").attributeStyleMap.clear();
        document.getElementById("pup-img-4").attributeStyleMap.clear();;
    }else if(nombre == 3 ){

        document.getElementById("item_photo_select").src="images/image-product-3.jpg";
        document.getElementById("popup_main_img").src="images/image-product-3.jpg";
        document.getElementById("pup-img-1").attributeStyleMap.clear();
        document.getElementById("pup-img-2").attributeStyleMap.clear();
        document.getElementById("pup-img-3").style.opacity= '0.33';
        document.getElementById("pup-img-4").attributeStyleMap.clear();
    }else if(nombre == 4 ){

        document.getElementById("item_photo_select").src="images/image-product-4.jpg";
        document.getElementById("popup_main_img").src="images/image-product-4.jpg";
        document.getElementById("pup-img-1").attributeStyleMap.clear();
        document.getElementById("pup-img-2").attributeStyleMap.clear();
        document.getElementById("pup-img-3").attributeStyleMap.clear();
        document.getElementById("pup-img-4").style.opacity= '0.33';
      
    }
}