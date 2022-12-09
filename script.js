let screen = document.querySelector(".screen")
let buttons = document.querySelectorAll(".btn")
let backspaceButton = document.querySelector(".backspace")
let clearButton = document.querySelector(".clear")
let equalButton = document.querySelector(".equals")

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        screen.value += value;
    })
});

equalButton.addEventListener('click', function(){
    if(screen.value === ''){
        screen.value = '';
    } else {
        let calculation = eval(screen.value);
        screen.value = calculation;
    }
});

clearButton.addEventListener('click', function(){
    screen.value = '';
});

backspaceButton.addEventListener('click', function(){
    screen.value = screen.value.substring(0, screen.value.length - 1);
});