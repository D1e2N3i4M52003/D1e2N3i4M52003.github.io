
$(".nav-toggle").on("click", function(){
    $("body").toggleClass("nav-open");
});

$(".nav__link").on("click", function(){
    $("body").removeClass("nav-open");
});

$("#IT").on("click",function() {
    $("#ITModal").show();
});

$(".close").on("click",function() {
    $("#ITModal").css("display","none")
});

$("#ConFusion").on("click",function() {
    $("#ConFusionModal").show();
});

$(".close").on("click",function() {
    $("#ConFusionModal").css("display","none")
});

$("#Calc").on("click",function() {
    $("#CalcModal").show();
});

$(".close").on("click",function() {
    $("#CalcModal").css("display","none")
});


$("#ES").on("click",function() {
    $("#ESModal").show();
});

$(".close").on("click",function() {
    $("#ESModal").css("display","none")
});

$("#BR").on("click",function() {
    $("#BRModal").show();
});

$(".close").on("click",function() {
    $("#BRModal").css("display","none")
});

 /*           // Get the modal
var modal = document.getElementById("ITModal");

// Get the button that opens the modal
var btn = document.getElementById("IT");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}


$("IT")*/