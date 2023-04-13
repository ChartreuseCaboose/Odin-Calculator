//Variables. Using strings for the concatenation utility.
let buffer = '', first = '', second = '', result = '', operation = '';
let display = document.getElementById("display");
//Buffer management functions
function addToBuffer(input){
    buffer = buffer + input.toString();
    display.textContent = buffer;
}
function pushBuffer(){
    if (first == '') {
        first = buffer;
        console.log('I pushed ', buffer);
        buffer = '';
        display.textContent = first;
    }
    else if (second == ''){
        second = buffer;
        console.log('I pushed ', buffer);
        buffer = '';
        display.textContent = second;
    }
    else console.log('ERROR');
}
//calculate calls the appropriate math function for readability's sake.
function calculate(a, b, symbol){
    let c;
    switch (symbol){
        case '+': c = add(a, b);
        break;
        case '-': c = subtract(a, b);
        break;
        case '*': c = multiply(a, b);
        break;
        case '/': c = divide(a, b);
        break;
        default: console.log('ERROR'); 
    }
    return c
}
function add(a, b){
    let c = parseInt(a) + parseInt(b);
    return c
}
function subtract(a, b){
    let c = parseInt(a) - parseInt(b);
    return c
}
function multiply(a, b){
    let c = parseInt(a) * parseInt(b);
    return c
}
function divide(a, b){
    if (b == 0){
        return 'ERROR'
    }
    let c = parseInt(a) / parseInt(b);
    return c
}
//execute() and operate() are the workhorses. execute() is the simple case, called by the '=' key or when moving on to a second operation with both storage variables (first, second) full. After completion it clears all storage variables.
function execute(){
    if (second == ''){
        pushBuffer();
    }
    result = calculate(first, second, operation);
    first = '';
    second = '';
    operation = '';
    buffer = '';
    console.log(result);
    display.textContent = result;
    return
}
//operate() is called whenever an operator key is pressed. It checks the storage variables to determine if execute() must be called to put the result of the existing equation into the first storage variable and the buffer into the second, or simply the buffer into the first. Either way, it saves the operator.
function operate(input){
    if (buffer != '') pushBuffer();
    if (first != '' && second != ''){
        execute();
        first = result;
        console.log('I solved the equation!')
    }
    else if (first == '' && result != ''){
        first = result;
    }
    operation = input;
    return
}
const nums = document.querySelectorAll('.num');
nums.forEach(function(currentBtn){
    currentBtn.addEventListener('click', function(){
        addToBuffer(currentBtn.value);
    })
});
const ops = document.querySelectorAll('.op');
ops.forEach(function(currentBtn){
    currentBtn.addEventListener('click', function(){
        operate(currentBtn.value);
    })
});
const equals = document.querySelector('.equals');
equals.addEventListener('click', function(){
    execute();
    second = '';
});