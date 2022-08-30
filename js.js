var myCards = document.getElementById('container');  
 var resultsArray = [];  
 var counter = 0;  
 var text = document.getElementById('text');  
 var saniye = 00;   
 var salise = 00;   
 var appendTens = document.getElementById("salise");  
 var appendSeconds = document.getElementById("saniye");  
 var Interval ;  
 var images = [  
  'sass',   
  'git',   
  'js',   
  'css',   
  'samo'  
 ];  
 var clone = images.slice(0);  
 var cards = images.concat(clone);    

 function shuffle(o){  
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i],  o[i] = o[j], o[j] = x);  
  return o;  
 }  
 shuffle(cards);  
 for (var i = 0; i < cards.length; i++) {  
  card = document.createElement('div');  
  card.dataset.item = cards[i];  
  card.dataset.view = "card";  
  myCards.appendChild(card);  
 
 var check = function(className) {  
  var x = document.getElementsByClassName("flipped");  
  setTimeout(function() {  
   for(var i = (x.length - 1); i >= 0; i--) {  
    x[i].className = className;  
   }  
  },500);  
 }  

 function startTimer () {  
  salise++;   
  if(salise < 9){  
   appendTens.innerHTML = "0" + salise;  
  }  
  if (salise > 9){  
   appendTens.innerHTML = salise;  
  }   
  if (salise > 99) {  
   saniye++;  
   appendSeconds.innerHTML = "0" + saniye;  
   salise = 0;  
   appendTens.innerHTML = "0" + 0;  
  }  
  if (saniye > 9){  
   appendSeconds.innerHTML = saniye;  
  }  
 }  

 var win = function () {  
    if(counter === 5) {  
     clearInterval(Interval);  
     text.innerHTML = "Süreniz: " + saniye + ":" + salise;  
    }   
   }  

   card.onclick = function () {  
    if (this.className != 'flipped' && this.className != 'correct'){  
      this.className = 'flipped';  
      var result = this.dataset.item;  
      resultsArray.push(result);  
      clearInterval(Interval);  
      Interval = setInterval(startTimer, 10);  
    }  
    if (resultsArray.length > 1) {  
     if (resultsArray[0] === resultsArray[1]) {  
      check("correct");  
      counter ++;  
      win();  
      resultsArray = [];  
     } else {  
      check("reverse");  
      resultsArray = [];  
     }  
    }  
   }  
  }; 