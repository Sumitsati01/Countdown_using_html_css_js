var countdownElement = document.getElementById('countdown');
var image = document.getElementById('image');


var intial = countdownElement.innerHTML;


// setInterval(function() {
//     intial = intial > 0 ? intial - 1 : 0;
//     countdownElement.innerHTML = intial;
//     var backImg = intial % 2 === 0 ? 'back2.jpeg' : 'back1.jpeg';
//     image.src = backImg;
// }, 1000);

var interval = setInterval(function() {
    intial = intial > 0 ? intial - 1 : 0;
    countdownElement.innerHTML = intial;
    countdownElement.style.fontSize = intial * 50 + "px";

    image.style.width = intial * 10 + "%";
    if (intial <= 0) {
        clear(interval);
    }
}, 1000);