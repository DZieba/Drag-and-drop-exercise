/* window.onload= function () {  */

var place = 0;
var col = document.getElementsByClassName("col");
var evoker=document.getElementsByClassName("button_buy");
function addImage() {
    var shop = document.getElementById("col");
        place = place + 1;
        var num = Math.floor(Math.random() * 4);
        var img = document.createElement("img");
        img.setAttribute("class", "items");
        img.setAttribute("draggable", "true");

        img.src = "donut" + num + ".jpg";
        img.height = 100;
        img.width = 100;
        img.id = "numer" + place;
        shop.appendChild(img);
    if (shop.scrollHeight > shop.clientHeight || shop.scrollWidth > shop.clientWidth) {
        alert('you cannnot buy more donuts');

        $(".items:last-of-type").remove();
        evoker.disabled=true;}

}

$('.col').on('dragstart', '.items', function (ev) {
    ev.originalEvent.dataTransfer.setData("text", ev.target.id);
})


function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}


function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


function allowDrop(ev) {
    ev.preventDefault();
}
document.ready = function () {
    $("#trial").on("mouseover", function () {
            $(this).css("opacity", "0.6");
            $(this).css("height", "300px");
            $(this).fadeOut(800);
        }
    )


}











/*
 function allowDrop(ev) {
 ev.preventDefault();
 }

 function drag(ev) {
 console.log(ev);
 ev.dataTransfer.setData("text", ev.target.id);

 }

 function drop(ev) {
 ev.preventDefault();
 var data = ev.dataTransfer.getData("text");
 console.log(data);
 ev.target.appendChild(document.getElementById(data));
 }


 */