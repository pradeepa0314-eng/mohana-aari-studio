function openImage(src){
    document.getElementById("imagePopup").style.display = "flex";
    document.getElementById("popupImage").src = src;
}

function closeImage(){
    document.getElementById("imagePopup").style.display = "none";
}