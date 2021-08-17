let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let halfLifeThreeBirth = new Date(prompt("Guess, when Half-Life 3 will be announced?(write your answer this way: mm/dd/yyyy")).getTime();


setTimeout(function countdown (){
 let today = new Date().getTime();
 if(halfLifeThreeBirth-today<0){
     document.write("HAHAHAHAH, GORDON IS GOING TO SAVE OUR PLANET IN MIDDLE-AGES");
     return null
 }
 let difference = halfLifeThreeBirth - today;
 console.log(difference)
 days.textContent = Math.floor(difference / (1000 * 60 * 60 * 24));
 hours.textContent = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 minutes.textContent = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
 seconds.textContent = Math.floor((difference % (1000 * 60)) / 1000);
 
 if(hours.textContent<10){
     hours.textContent = "0" +hours.textContent;
 }
 if(minutes.textContent<10){
     minutes.textContent = "0" +minutes.textContent;
 }
 if (seconds.textContent<10){
     seconds.textContent = "0" +seconds.textContent;
 }
setTimeout(countdown, 1000);

},1000)