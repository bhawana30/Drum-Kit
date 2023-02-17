 for(var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var sound=this.innerHTML;
        makeSound(sound);
    //     activeButton.classList.add("click");
    // setTimeout(function(){
    //     activeButton.classList.remove("click");
    // },100);
     });
 }
 document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
 });
 function makeSound(key){
    if(key=="b")
            var audio = new Audio("sounds/tom-1.mp3");
        else if(key=="h")
            var audio = new Audio("sounds/tom-2.mp3");
        else if(key=="a")
            var audio = new Audio("sounds/tom-3.mp3");
        else if(key=="w")
            var audio = new Audio("sounds/tom-4.mp3");
        else if(key=="A")
            var audio = new Audio("sounds/crash.mp3");
        else if(key=="n")
            var audio = new Audio("sounds/kick-bass.mp3");
        else if(key=="@")
            var audio = new Audio("sounds/snare.mp3");
        audio.play();
 }
 function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}