/* L'opérateur (ternaire) conditionnel */ 

var randomNumber1 = Math.floor(Math.random()*6)+1; //1-6
var randomNumber2 = Math.floor(Math.random()*6)+1; //1-6

document.querySelector(".dice>.img1").setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelector(".dice>.img2").setAttribute("src", "images/dice"+randomNumber2+".png");

randomNumber1>randomNumber2?document.querySelector("h1").innerHTML = "Play 1 Wins!"
:randomNumber1<randomNumber2?document.querySelector("h1").innerHTML = "Play 2 Wins !"
:document.querySelector("h1").innerHTML = "No One Win";



// if(randomNumber1>randomNumber2){
//     document.querySelector("h1").innerHTML = "Play 1 Wins !";
// }
// else if(randomNumber1<randomNumber2){
//     document.querySelector("h1").innerHTML = "Play 2 Wins !";
// }
// else {
//     document.querySelector("h1").innerHTML = "No One Win";
// }
 
