

const add = (num1,num2) => {
    return Math.round( (parseFloat(num1) + parseFloat(num2)) *100)/100
}

const subtract = (num1,num2) => {
    return Math.round( (parseFloat(num1) - parseFloat(num2)) *100)/100
}

const multiply = (num1,num2) => {
    return Math.round( (parseFloat(num1) * parseFloat(num2)) *100)/100
}

const divide = (num1,num2) => {
    if (num2 == 0) {
        return "NNNOOOOOO!!!"
    }
    return Math.round( (parseFloat(num1) / parseFloat(num2)) *100)/100
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
    display.textContent = ''
    operators.forEach(ele => ele.classList.remove('highlighted'))

}


let num1 = '';
let num2 = '';
let result = ''
let operatorVar = '';

const setNum = (val) => {
    if (operatorVar == '') {
        if (result != '') {
            num1 = ''
            result = ''
        }
        if (num1.length <= 9) {
            num1 += val.target.textContent
            displayPainter()
        }

    } else {
        if (num2.length <= 9) {
            num2 += val.target.textContent
            operators.forEach(ele => ele.classList.remove('highlighted'))
            
            displayPainter()
        }


    }
}




const negator = () => {
    if (operatorVar == '') {
        num1*=-1
    } else {
        num2*=-1
    }
    displayPainter()
}


const plusminus = document.querySelector('.plusminus')
plusminus.addEventListener('click',negator)

const clear = document.querySelector('.clear')
clear.addEventListener('click',reset)



const setOperator = (operator) => {
    if (num1 == '') {
        return
    }
    if (operator.target.textContent == '=') {
        //define result
    } else if (operatorVar == '') {

        operatorVar = operator.target.textContent
        operators.forEach(ele => ele.classList.remove('highlighted'))
        operator.target.classList.add('highlighted')
    } else {
        operatorVar = operator.target.textContent
        operators.forEach(ele => ele.classList.remove('highlighted'))
        operator.target.classList.add('highlighted')
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

const computeResult = () => {
    result = OPERATORS[operatorVar](num1,num2)
    operatorVar = ''
    num2 = ''
        if (String(result).length >= 9) {
        result = "NUM Too BIG ERROR!"
        
        reset()
        display.textContent = result
        return
    }
    num1 = result
    display.textContent = result
    operators.forEach(ele => ele.classList.remove('highlighted'))

} 






const operators = document.querySelectorAll('.operator')
operators.forEach( (operator) => {
    operator.addEventListener('click',setOperator)
})


const percenter = () => {
    if (operatorVar == '') {
        num1/=100
    } else {
        num2/= 100
    }
    displayPainter()
}


const percentage = document.querySelector('.percentage')
percentage.addEventListener('click',percenter)


const decimalInserter = () => {
    if (operatorVar == '') {
        if (!num1.includes('.')) {
            num1 += '.'
        }
    } else {
        if (!num2.includes('.')) {
            num2 += '.'
        }
    }
    displayPainter()
}

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click',decimalInserter)


const equals = document.querySelector('.equals')
equals.addEventListener('click',computeResult)