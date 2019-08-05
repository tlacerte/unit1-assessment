var mainNum = document.querySelector('h1');
var inputNum = document.querySelector('input');

var total;

//event listeners
document.getElementById('add').addEventListener('click',function(){
    total += parseFloat(inputNum.value);
    render();
})

document.getElementById('subtract').addEventListener('click', function(){
    total -= parseFloat(inputNum.value);
    render();
})

//functions
function init() {
    total = 0;
    inputNum.value = 1;
    render();
}

function render(){
    mainNum.textContent = (total > 0 ? '+' : '') + total;
    if (total < 0) {
        mainNum.style.color = 'red';
    } else {
        mainNum.style.color = 'black';
    }
}

init();