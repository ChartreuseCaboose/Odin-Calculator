//Variables. Using strings for the concatenation utility. Global variables are cringe, fix later.
let buffer = '', first = '', second = '', result = '', operation = '';

//calculator functions. 
function add(){
    result = parseInt(first) + parseInt(second);
    return
}
function subtract(){
    result = parseInt(first) - parseInt(second);
    return
}
function multiply(){
    result = parseInt(first) * parseInt(second);
    return
}
function divide(){
    result = parseInt(first) / parseInt(second);
    return
}

//Controller functions to call the appropriate operating function with the right inputs
function calculate(){
    switch (operation){
        case '+': add();
        break;
        case '-': subtract();
        break;
        case '*': multiply();
        break;
        case '/': divide();
        break;
        default: console.log('ERROR'); 
    }
}
function pushBuffer(){
    if (first == '') {
        first = buffer;
        console.log('I pushed ', buffer);
        buffer = '';
    }
    else if (second == ''){
        second = buffer;
        console.log('I pushed ', buffer);
        buffer = '';
    }
    else console.log('ERROR');
    return
}
function execute(){
    if (second == ''){
        pushBuffer();
    }
    calculate();
    first = '';
    second = '';
    buffer = '';
    console.log(result);
    return
}
function addToBuffer(input){
    buffer = buffer + input.toString();
}
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
//end controller functions

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
/*
addToBuffer(6);
pushBuffer();
addToBuffer(9);
pushBuffer();
operate('+');
execute();*/