
var li = document.querySelectorAll(".drum");

for (var idx = 0; idx < li.length; idx++)
    li[idx].addEventListener("click", clicked);


function clicked()
{
    console.log(this);

    this.style.color = "white"; 
    var audio = new Audio("sounds/tom-1.mp3");1
    audio.play();
    //alert("i got clicked");
}