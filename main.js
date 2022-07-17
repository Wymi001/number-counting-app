const result = document.querySelector('.result');
const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');

decrease.addEventListener('click', () => {
 result.innerHTML --;
 colorChange();
});

reset.addEventListener('click', () => {
 result.innerHTML = 0;
 colorChange();
});

increase.addEventListener('click', () => {
 result.innerHTML ++;
 colorChange();
});

function colorChange() {

 if (result.innerHTML > 0) {
  result.style.color = 'green'; 
 }
 else if (result.innerHTML < 0) {
  result.style.color = 'red';
 }
 else {
  result.style.color = 'white';
 }
}