

const add = (num1,num2) => {
    return num1+num2
}

const subtract = (num1,num2) => {
    return num1 - num2
}

const multiply = (num1,num2) => {
    return num1 * num2
}

const divide = (num1,num2) => {
    return num1/num2
}

const OPERATORS = {
    '+': add,
    '-': subtract,
    "X": multiply,
    '/':divide
}


const reset = () => {
    num1 = '';
    num2 = '';
    operatorVar = '';
}


let num1 = '';
let num2 = '';
let result = ''
let operatorVar = '';

const setNum = (val) => {
    if (operatorVar == '') {
        num1 += val.target.textContent
        displayPainter()
    } else {
        num2 += val.target.textContent
        displayPainter()

    }
}

const setOperator = (operator) => {
    if (operator.target.textContent == '=') {
        //define result
    } else if (operatorVar == '') {
        operatorVar = operator.target.textContent
    } else {
        operatorVar = operator.target.textContent
    }
}

const display = document.querySelector('.display')
const nums = document.querySelectorAll('.num')
nums.forEach( (num) => {
    num.addEventListener('click',setNum)
})

let displayPainter = () => {
    if (operatorVar == '') {
        display.textContent = num1
    } else {
        display.textContent = num2
    }

}





const operators = document.querySelectorAll('.operator')
operators.forEach( (operator) => {
    operator.addEventListener('click',setOperator)
})