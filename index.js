const jsBody = document.querySelector('body');
const jsDrum = document.querySelectorAll('.drum');
const jsDrumSet = document.querySelector('.set');
const jsButton = document.querySelectorAll('button');
const jsButtonLen = document.querySelectorAll('button').length;


jsBody.addEventListener('keydown',(e)=>{
    let pressedKey = e.key;
            playSound(pressedKey);
            animate(pressedKey);
});

for(let i = 0; i < jsButtonLen;i++){
    jsButton[i].addEventListener('click',()=>{
        let clickedKey = jsButton[i].innerHTML;
        playSound(clickedKey);
        animate(clickedKey);
    })
}

function animate(animatex){
    let selectedClass = document.querySelector("." + animatex);
    selectedClass.style.transform = "scale(1.1,1.1)";
    selectedClass.style.transition = "all .1s ease-out";
    setTimeout(function() {
        selectedClass.style.transform = null;
    }, 100);
}


function playSound(soundkeys){
    switch(soundkeys){
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;
        default:
            console.log('no sound');
    }
}






// jsButton.forEach((pressedKey) => {
//     console.log(pressedKey);
// });

// jsDrum.forEach((jsDrum)=>{
//     jsDrum.addEventListener('keydown',function(e){
//         let pressed = this.e;
//         console.log(pressed);
//     })
// })

// for(let i = 0;i<jsButtonLen;i++){
// }

















// for(let i = 0; i < jsDrum.length ; i++){
//     jsDrum[i].addEventListener("click",function(){//*** arrow function doesnt work so i have to resort to function(){}
//         let clickedChar = this.innerHTML;//
//         console.log(clickedChar); //**good
//         // return clickedChar;
//     })
// }
// for(let i = 0; i < jsDrum.length ; i++){
//     // jsDrum[i].addEventListener('keydown',function(){
//         // let pressedKey = this.innerHTML;
//     //     console.log(pressedKey); //**good
//     //     // return pressedKey;
//     //     // makeSound();
//     //     // if (pressedKey = e){
//     //     //     var audio = new Audio('sounds/crash.mp3');
//     //     //     audio.play();
//     //     // }
//     // })
   
// }

// jsBody.addEventListener("keydown",function(e){//*** arrow function doesnt work so i have to resort to function(){}
//     let pressedKey = e.key;//
//     // console.log(pressedKey); //**good
    
//     for(let i = 0; i < jsDrum.length ; i++){
//         if (pressedKey == jsDrum[i]){
//             var audio = new Audio('sounds/crash.mp3');
//          audio.play();
//         }
    
//     }
// })


// let keySound = keyFromFunction;
// function makeSound(){

// }