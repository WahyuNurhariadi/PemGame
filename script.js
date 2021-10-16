var character = 
document.getElementById("char");
var obs = document.getElementById("obs");
function jump(){
    if(character.classList !="animate"){
    character.classList.add("animate");}
    setTimeout(function(){
        character.classList.remove("animate")
    },500);
}

var checkdead = setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(character)
    .getPropertyValue("top"));
    var obsLeft = 
    parseInt(window.getComputedStyle(obs)
    .getPropertyValue("left"));
    if(obsLeft<20 && obsLeft>0 && characterTop>=130){
        obs.style.animation="none";
        obs.style.display="none";
        alert("Game Over")
    }
},10)