let plant = document.getElementById('plant');
let glaxy = document.getElementById('glaxy');
let background = document.getElementById('background');
let mountain = document.getElementById('mountain');
let text = document.getElementById('text');

window.addEventListener('scroll',function(){
    let value = window.scrollY;

    plant.style.top = 60+ value * -0.1 + "%";
   plant.style.transform = 'rotate(' + (20 + value * -0.1) + 'deg)';
   text.style.top = 20 + value * -0.2 + '%';
   glaxy.style.top = value * 0.75 + 'px';
   mountain.style.top = value * 0.75 + 'px';
   mountain.style.transform = 'scale(' + ( 1+ value * 0.0025) + ')';
   background.style.top =value * 0.75 + 'px';
})
