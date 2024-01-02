// var myCards = document.getElementById('container');
// var resultsArray = [];
// var counter = 0;
// var text = document.getElementById('text');
// var seconds = 0;
// var tens = 0;
// var appendTens = document.getElementById("tens");
// var appendSeconds = document.getElementById("seconds");
// var Interval ;
// var images = [
// 'img1',
// 'img4',
// 'img2',
// 'img5',
// 'img3'
// ];
// var clone = images.slice(0); 
// var cards = images.concat(clone); 
// function shuffle(o){
// for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
// return o;
// }
// shuffle(cards);
// for (var i = 0; i < cards.length; i++) {
// card = document.createElement('div');
// card.dataset.item = cards[i];
// card.dataset.view = "card";
// myCards.appendChild(card);
// card.onclick = function () {
// if (this.className != 'flipped' && this.className != 'correct'){
// this.className = 'flipped';
// var result = this.dataset.item;
// resultsArray.push(result);
// clearInterval(Interval);
// Interval = setInterval(startTimer, 10);
// }
// if (resultsArray.length > 1) {
// if (resultsArray[0] === resultsArray[1]) {
// check("correct");
// counter ++;
// win();
// resultsArray = [];
// } else {
// check("reverse");
// resultsArray = [];
// }
// }
// }
// };
// var check = function(className) {
// var x = document.getElementsByClassName("flipped");
// setTimeout(function() {
// for(var i = (x.length - 1); i >= 0; i--) {
// x[i].className = className;
// }
// },500);
// }
// var win = function () {
// if(counter === 5) {
// clearInterval(Interval);
// text.innerHTML = "Your time was " + seconds + ":" + tens;
// }
// }
// function startTimer () {
// tens++;
// if(tens < 9){
// appendTens.innerHTML = "0" + tens;
// }
// if (tens > 9){
// appendTens.innerHTML = tens;
// }
// if (tens > 99) {
// seconds++;
// appendSeconds.innerHTML = "0" + seconds;
// tens = 0;
// appendTens.innerHTML = "0" + 0;
// }
// if (seconds > 9){
// appendSeconds.innerHTML = seconds;
// }
// }



var myCards = document.getElementById('container');
var resultsArray = [];
var counter = 0;
var text = document.getElementById('text');
var matchedText = document.getElementById('matchedText');
var seconds = 0;
var tens = 0;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var Interval;
var images = [
  'img1',
  'img4',
  'img2',
  'img5',
  'img3'
];
var clone = images.slice(0);
var cards = images.concat(clone);

function shuffle(o) {
  for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}
shuffle(cards);

for (var i = 0; i < cards.length; i++) {
  var card = document.createElement('div');
  card.dataset.item = cards[i];
  card.dataset.view = "card";
  card.classList.add('card');
  myCards.appendChild(card);
  card.onclick = function () {
    if (this.className != 'flipped' && this.className != 'correct') {
      this.className = 'flipped';
      var result = this.dataset.item;
      resultsArray.push(result);
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    }
    if (resultsArray.length > 1) {
      if (resultsArray[0] === resultsArray[1]) {
        check("correct");
        counter++;
        win();
        resultsArray = [];
        matchedText.innerText = "Matched!";
      } else {
        check("reverse");
        resultsArray = [];
        matchedText.innerText = "Not Matched!";
      }
    }
  };
}

var check = function (className) {
  var x = document.getElementsByClassName("flipped");
  setTimeout(function () {
    for (var i = (x.length - 1); i >= 0; i--) {
      x[i].className = className;
    }
  }, 500);
};

var win = function () {
  if (counter === 5) {
    clearInterval(Interval);
    text.innerHTML = "Your time was " + seconds + ":" + tens;
  }
};
function startTimer() {
  tens++;
  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}
