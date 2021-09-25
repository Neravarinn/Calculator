//global parameters
const button = document.querySelector('.ctrlBlock')
const inputB = document.querySelector('.inputBlock')
const hisBlock = document.querySelector('.hisBlock')
const invCheckBox = document.querySelector('#Inv')
var invCos = button.querySelector('.cos')
var invSin = button.querySelector('.sin')
var invTan = button.querySelector('.tan')
const RadCheck = document.querySelector('#Rad')
const DegCheck = document.querySelector('#Deg')
var mainInput = ''
//main control buttons module, triggers following actions, calculation etc. Solving core supports instant functions such as sin, cos, tan and sqrt to return result from solved expression
button.addEventListener('mouseover', () => {
    button.childNodes.forEach((el, index) => {
        if (button.children[index] !== undefined) {
            button.children[index].onmouseover = () =>
                (button.children[index].style.color = 'red')
            if (button.children[index].innerText == '=') {
                mainInput = inputB.children[0].value
                button.children[index].onclick = () => {
                    mainInput = inputB.children[0].value
                    engine(inputB.children[0].value)
                    addLI(mainInput, inputB.children[0].value)
                }
            } else if (button.children[index].className == 'inv') {
                button.children[index].onclick = () => {
                    if (invCheckBox.checked) {
                        invCos.innerText = 'invCos'
                        invSin.innerText = 'invSin'
                        invTan.innerText = 'invTan'
                    } else {
                        invCos.innerText = 'Cos'
                        invSin.innerText = 'Sin'
                        invTan.innerText = 'Tan'
                    }
                }
            } else if (button.children[index].innerText == 'Rad Deg') {
            } else if (button.children[index].innerText == 'Cos') {
                if (DegCheck.checked)
                    button.children[index].onclick = () => {
                        mainInput = inputB.children[0].value
                        inputB.children[0].value = Math.cos(
                            (engine(inputB.children[0].value) * Math.PI) / 180
                        )
                        if (inputB.children[0].value == 'NaN')
                            inputB.children[0].value = 'Wrong input!'
                        addLI(
                            'cos(' + mainInput + ')',
                            inputB.children[0].value
                        )
                    }
                else
                    button.children[index].onclick = () => {
                        mainInput = inputB.children[0].value
                        inputB.children[0].value = Math.cos(
                            engine(inputB.children[0].value)
                        )
                        if (inputB.children[0].value == 'NaN')
                            inputB.children[0].value = 'Wrong input!'
                        addLI(
                            'cos(' + mainInput + ')',
                            inputB.children[0].value
                        )
                    }
            } else if (button.children[index].innerText == 'invCos') {
                if (DegCheck.checked)
                    button.children[index].onclick = () => {
                        mainInput = inputB.children[0].value
                        inputB.children[0].value =
                            (Math.acos(engine(inputB.children[0].value)) /
                                Math.PI) *
                            180
                        if (inputB.children[0].value == 'NaN')
                            inputB.children[0].value = 'Wrong input!'
                        addLI(
                            'arccos(' + mainInput + ')',
                            inputB.children[0].value
                        )
                    }
                else
                    button.children[index].onclick = () => {
                        mainInput = inputB.children[0].value
                        inputB.children[0].value = Math.acos(
                            engine(inputB.children[0].value)
                        )
                        if (inputB.children[0].value == 'NaN')
                            inputB.children[0].value = 'Wrong input!'
                        addLI(
                            'arccos(' + mainInput + ')',
                            inputB.children[0].value
                        )
                    }
            } else if (button.children[index].innerText == 'Sin') {
                if (DegCheck.checked)
                    button.children[index].onclick = () => {
                        mainInput = inputB.children[0].value
                        inputB.children[0].value = Math.sin(
                            (engine(inputB.children[0].value) * Math.PI) / 180
                        )
                        if (inputB.children[0].value == 'NaN')
                            inputB.children[0].value = 'Wrong input!'
                        addLI(
                            'sin(' + mainInput + ')',
                            inputB.children[0].value
                        )
                    }
                else
                    button.children[index].onclick = () => {
                        mainInput = inputB.children[0].value
                        inputB.children[0].value = Math.sin(
                            engine(inputB.children[0].value)
                        )
                        if (inputB.children[0].value == 'NaN')
                            inputB.children[0].value = 'Wrong input!'
                        addLI(
                            'sin(' + mainInput + ')',
                            inputB.children[0].value
                        )
                    }
            } else if (button.children[index].innerText == 'invSin') {
                if (DegCheck.checked)
                    button.children[index].onclick = () => {
                        mainInput = inputB.children[0].value
                        inputB.children[0].value =
                            (Math.asin(engine(inputB.children[0].value)) /
                                Math.PI) *
                            180
                        if (inputB.children[0].value == 'NaN')
                            inputB.children[0].value = 'Wrong input!'
                        addLI(
                            'arcsin(' + mainInput + ')',
                            inputB.children[0].value
                        )
                    }
                else
                    button.children[index].onclick = () => {
                        mainInput = inputB.children[0].value
                        inputB.children[0].value = Math.asin(
                            engine(inputB.children[0].value)
                        )
                        if (inputB.children[0].value == 'NaN')
                            inputB.children[0].value = 'Wrong input!'
                        addLI(
                            'arcsin(' + mainInput + ')',
                            inputB.children[0].value
                        )
                    }
            } else if (button.children[index].innerText == 'Tan') {
                if (DegCheck.checked)
                    button.children[index].onclick = () => {
                        mainInput = inputB.children[0].value
                        inputB.children[0].value = Math.tan(
                            (engine(inputB.children[0].value) * Math.PI) / 180
                        )
                        if (inputB.children[0].value == 'NaN')
                            inputB.children[0].value = 'Wrong input!'
                        addLI(
                            'tan(' + mainInput + ')',
                            inputB.children[0].value
                        )
                    }
                else
                    button.children[index].onclick = () => {
                        mainInput = inputB.children[0].value
                        inputB.children[0].value = Math.tan(
                            engine(inputB.children[0].value)
                        )
                        if (inputB.children[0].value == 'NaN')
                            inputB.children[0].value = 'Wrong input!'
                        addLI(
                            'tan(' + mainInput + ')',
                            inputB.children[0].value
                        )
                    }
            } else if (button.children[index].innerText == 'invTan') {
                if (DegCheck.checked)
                    button.children[index].onclick = () => {
                        mainInput = inputB.children[0].value
                        inputB.children[0].value =
                            (Math.atan(engine(inputB.children[0].value)) /
                                Math.PI) *
                            180
                        if (inputB.children[0].value == 'NaN')
                            inputB.children[0].value = 'Wrong input!'
                        addLI(
                            'arctan(' + mainInput + ')',
                            inputB.children[0].value
                        )
                    }
                else
                    button.children[index].onclick = () => {
                        mainInput = inputB.children[0].value
                        inputB.children[0].value = Math.atan(
                            engine(inputB.children[0].value)
                        )
                        if (inputB.children[0].value == 'NaN')
                            inputB.children[0].value = 'Wrong input!'
                        addLI(
                            'arctan(' + mainInput + ')',
                            inputB.children[0].value
                        )
                    }
            } else if (button.children[index].innerText == 'Pi') {
                button.children[index].onclick = () =>
                    (inputB.children[0].value =
                        inputB.children[0].value + Math.PI)
            } else if (button.children[index].innerText == 'sqrt') {
                button.children[index].onclick = () => {
                    mainInput = inputB.children[0].value
                    inputB.children[0].value = Math.sqrt(
                        engine(inputB.children[0].value)
                    )
                    if (inputB.children[0].value == 'NaN')
                        inputB.children[0].value = 'Wrong input!'
                    addLI('sqrt(' + mainInput + ')', inputB.children[0].value)
                }
            } else if (button.children[index].innerText == 'CH') {
                button.children[index].onclick = () =>
                    (hisBlock.children[0].innerHTML = '')
            } else if (button.children[index].innerText == 'C') {
                button.children[index].onclick = () =>
                    (inputB.children[0].value = '')
            } else {
                button.children[index].onclick = () =>
                    (inputB.children[0].value +=
                        button.children[index].innerText)
            }

            if (button.children[index].style.color === 'red') {
                button.children[index].onmouseout = () =>
                    (button.children[index].style.color = 'white')
            }
        }
    })
})
//returns equation from history list to input
hisBlock.children[0].addEventListener('mouseover', () => {
    hisBlock.children[0].childNodes.forEach((el, index) => {
        if (hisBlock.children[0].children[index] !== undefined) {
            hisBlock.children[0].children[index].ondblclick = () => {
                //hisBlock.children[0].children[index].style.color = 'red'

                //var part =hisBlock.children[0].children[index].outerText.split('=')

                var part =
                    hisBlock.children[0].children[index].textContent.split('=')
                var out1 = part[0].split('')
                out1.pop()
                part = out1.join('')
                console.dir(hisBlock.children[0].children[index])
                //console.log(part)
                inputB.children[0].value = part
            }
        }
    })
})
//adds LI to history list
function addLI(input, output) {
    if (output !== '') {
        var li = document.createElement('li')
        li.appendChild(document.createTextNode(input + ' = ' + output))
        hisBlock.children[0].appendChild(li)
    }
}
// keyboard enter button or numpad enter button trigger solving
document.addEventListener('keydown', function (event) {
    inputB.children[0].focus()
    console.log(event.code)
    if (event.code == 'Enter' || event.code === 'NumpadEnter') {
        mainInput = inputB.children[0].value
        engine(inputB.children[0].value)
        addLI(mainInput, inputB.children[0].value)
    }
})
// solving core deconstructs input string to numbers and tokens and solves expression using stack method
function engine(inputString) {
    var stringMod = inputString
        .split('')
        .filter((elem) => elem !== ' ' && elem !== ',' && elem !== '_')
        .map((elem) => (elem == '–' ? (elem = '-') : elem))
        .join('')
    stringMod = stringMod.toLowerCase()
    var errorIndicator = false
    var minusIndecator = false
    var numbers = new Array()
    var tokens = new Array()
    let token = ''

    next: for (var i = 0; i <= stringMod.length - 1; i++) {
        var bit = stringMod[i].toString()
        if (Number.isInteger(+stringMod[i]) == true && minusIndecator == true) {
            for (var j = i + 1; j <= stringMod.length - 1; j++) {
                i = j
                if (
                    Number.isInteger(+stringMod[j]) === false &&
                    stringMod[j] !== '.'
                ) {
                    i = j - 1
                    break
                }
                bit += stringMod[j]
            }
            numbers.push(-parseFloat(bit))
            minusIndecator = false
            if (i + 1 !== stringMod.length) {
                continue next
            }
        } else if (
            stringMod[i] == '.' &&
            Number.isInteger(+stringMod[i + 1]) == true &&
            minusIndecator == true
        ) {
            for (var j = i + 1; j <= stringMod.length - 1; j++) {
                i = j
                if (
                    Number.isInteger(+stringMod[j]) === false &&
                    stringMod[j] !== '.'
                ) {
                    i = j - 1
                    break
                }
                bit += stringMod[j]
            }
            numbers.push(-parseFloat(bit))
            minusIndecator = false
            if (i + 1 !== stringMod.length) {
                continue next
            }
        } else if (Number.isInteger(+stringMod[i]) == true) {
            for (var j = i + 1; j <= stringMod.length - 1; j++) {
                i = j
                if (
                    Number.isInteger(+stringMod[j]) === false &&
                    stringMod[j] !== '.'
                ) {
                    i = j - 1
                    break
                }
                bit += stringMod[j]
            }
            numbers.push(parseFloat(bit))
            if (i + 1 !== stringMod.length) {
                continue next
            }
        } else if (
            stringMod[i] == '.' &&
            Number.isInteger(+stringMod[i + 1]) == true
        ) {
            for (var j = i + 1; j <= stringMod.length - 1; j++) {
                i = j
                if (
                    Number.isInteger(+stringMod[j]) === false &&
                    stringMod[j] !== '.'
                ) {
                    i = j - 1
                    break
                }
                bit += stringMod[j]
            }
            numbers.push(parseFloat(bit))

            if (i + 1 !== stringMod.length) {
                continue next
            }
        } else if (stringMod[i] == 'c') {
            if (i + 1 >= stringMod.length) {
                errorIndicator = true
                break next
            } else if (stringMod[i + 1] !== 'o') {
                errorIndicator = true
                break next
            } else if (stringMod[i + 2] !== 's') {
                errorIndicator = true
                break next
            } else {
                i += 2
                token = 'cos3'
            }
        } else if (stringMod[i] == 'a') {
            if (i + 1 >= stringMod.length) {
                errorIndicator = true
                break next
            } else if (stringMod[i + 1] == 'r') {
                if (stringMod[i + 2] !== 'c') {
                    errorIndicator = true
                    break next
                } else if (stringMod[i + 3] == 'c') {
                    if (stringMod[i + 4] == 'o') {
                        if (i + 4 >= stringMod.length) {
                            errorIndicator = true
                            break next
                        } else if (stringMod[i + 5] !== 's') {
                            errorIndicator = true
                            break next
                        } else {
                            i += 5
                            token = 'arccos3'
                        }
                    }
                } else if (stringMod[i + 3] == 's') {
                    if (stringMod[i + 4] == 'i') {
                        if (i + 4 >= stringMod.length) {
                            errorIndicator = true
                            break next
                        } else if (stringMod[i + 5] !== 'n') {
                            errorIndicator = true
                            break next
                        } else {
                            i += 5
                            token = 'arcsin3'
                        }
                    }
                } else if (stringMod[i + 3] == 't') {
                    if (stringMod[i + 4] == 'a') {
                        if (i + 4 >= stringMod.length) {
                            errorIndicator = true
                            break next
                        } else if (stringMod[i + 5] !== 'n') {
                            errorIndicator = true
                            break next
                        } else {
                            i += 5
                            token = 'arctan3'
                        }
                    }
                } else {
                    errorIndicator = true
                    break next
                }
            } else {
                errorIndicator = true
                break next
            }
        } else if (stringMod[i] == 's') {
            if (i + 1 >= stringMod.length) {
                errorIndicator = true
                break next
            } else if (stringMod[i + 1] == 'q') {
                if (stringMod[i + 2] !== 'r') {
                    errorIndicator = true
                    break next
                } else if (stringMod[i + 3] !== 't') {
                    errorIndicator = true
                    break next
                } else {
                    i += 3
                    token = 'sqrt3'
                }
            } else if (stringMod[i + 1] == 'i') {
                if (i + 1 >= stringMod.length) {
                    errorIndicator = true
                    break next
                } else if (stringMod[i + 2] !== 'n') {
                    errorIndicator = true
                    break next
                } else {
                    i += 2
                    token = 'sin3'
                }
            } else {
                errorIndicator = true
                break next
            }
        } else if (stringMod[i] == 't') {
            if (i + 1 >= stringMod.length) {
                errorIndicator = true
                break next
            } else if (stringMod[i + 1] !== 'a') {
                errorIndicator = true
                break next
            } else if (stringMod[i + 2] !== 'n') {
                errorIndicator = true
                break next
            } else {
                i += 2
                token = 'tan3'
            }
        } else if (stringMod[i] == 'e') {
            token = 'e3'
        } else if (stringMod[i] == '(') {
            tokens.push('(')
            continue next
        } else if (stringMod[i] == ')') {
            token = ')'
        } else if (stringMod[i] == '^') {
            token = '^3'
        } else if (stringMod[i] == '/') {
            token = '/2'
        } else if (stringMod[i] == '*') {
            token = '*2'
        } else if (stringMod[i] == '-') {
            if (tokens.length == 0) token = '-1'
            else if (Number.isInteger(+stringMod[i - 1]) == true) token = '-1'
            else if (Number.isInteger(+stringMod[i + 1]) !== true) token = '-1'
            else if (stringMod[i - 1] == ')') {
                minusIndecator = true
                token = '+1'
            } else {
                minusIndecator = true
                continue next
            }
        } else if (stringMod[i] == '+') {
            token = '+1'

            var t2 = token
        } else {
            errorIndicator = true
            break next
        }

        var k = numbers.length - 1
        var number = 0

        if (tokens.length == 0) {
            tokens.push(token)
            continue next
        } else if (tokens.length !== 0) {
            if (token == ')') {
                d1: do {
                    if (tokens[tokens.length - 1].startsWith('+') == true) {
                        number = numbers[k] + numbers[k - 1]
                        numbers.splice(k - 1, 2)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d1
                    } else if (
                        tokens[tokens.length - 1].startsWith('-') == true
                    ) {
                        if (k === 0) {
                            number = -numbers[k]
                            numbers.splice(k, 1)
                            numbers.push(number)
                            tokens.splice(tokens.length - 1, 1)
                        } else {
                            number = numbers[k - 1] - numbers[k]
                            numbers.splice(k - 1, 2)
                            numbers.push(number)
                            tokens.splice(tokens.length - 1, 1)
                        }
                        if (tokens.length == 0) break d1
                    } else if (
                        tokens[tokens.length - 1].startsWith('*') == true
                    ) {
                        number = numbers[k - 1] * numbers[k]
                        numbers.splice(k - 1, 2)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d1
                    } else if (
                        tokens[tokens.length - 1].startsWith('/') == true
                    ) {
                        number = numbers[k - 1] / numbers[k]
                        numbers.splice(k - 1, 2)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d1
                    } else if (
                        tokens[tokens.length - 1].startsWith('sqrt') == true
                    ) {
                        number = Math.sqrt(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d1
                    } else if (
                        tokens[tokens.length - 1].startsWith('^') == true
                    ) {
                        number = Math.pow(numbers[k - 1], numbers[k])
                        numbers.splice(k - 1, 2)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d1
                    } else if (
                        tokens[tokens.length - 1].startsWith('sin') == true
                    ) {
                        if (DegCheck.checked)
                            number = Math.sin((numbers[k] * Math.PI) / 180)
                        else number = Math.sin(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d1
                    } else if (
                        tokens[tokens.length - 1].startsWith('cos') == true
                    ) {
                        if (DegCheck.checked)
                            number = Math.cos((numbers[k] * Math.PI) / 180)
                        else number = Math.cos(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d1
                    } else if (
                        tokens[tokens.length - 1].startsWith('tan') == true
                    ) {
                        if (DegCheck.checked)
                            number = Math.tan((numbers[k] * Math.PI) / 180)
                        else number = Math.tan(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d1
                    } else if (
                        tokens[tokens.length - 1].startsWith('e') == true
                    ) {
                        number = numbers[k - 1] * Math.pow(10, numbers[k])
                        numbers.splice(k - 1, 2)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d1
                    } else if (
                        tokens[tokens.length - 1].startsWith('arctan') == true
                    ) {
                        if (DegCheck.checked)
                            number = (Math.atan(numbers[k]) / Math.PI) * 180
                        else number = Math.atan(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d1
                    } else if (
                        tokens[tokens.length - 1].startsWith('arccos') == true
                    ) {
                        if (DegCheck.checked)
                            number = (Math.acos(numbers[k]) / Math.PI) * 180
                        else number = Math.acos(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d1
                    } else if (
                        tokens[tokens.length - 1].startsWith('arcsin') == true
                    ) {
                        if (DegCheck.checked)
                            number = (Math.asin(numbers[k]) / Math.PI) * 180
                        else number = Math.asin(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d1
                    }
                } while (tokens[tokens.length - 1] !== '(')
                tokens.splice(tokens.length - 1, 1)
                if (tokens.length == 0) continue next
                else {
                    d2: do {
                        k = numbers.length - 1
                        if (tokens[tokens.length - 1].startsWith('+') == true) {
                            number = numbers[k] + numbers[k - 1]
                            numbers.splice(k - 1, 2)
                            numbers.push(number)
                            tokens.splice(tokens.length - 1, 1)
                            if (tokens.length == 0) break d2
                        } else if (
                            tokens[tokens.length - 1].startsWith('-') == true
                        ) {
                            if (k === 0) {
                                number = -numbers[k]
                                numbers.splice(k, 1)
                                numbers.push(number)
                                tokens.splice(tokens.length - 1, 1)
                            } else {
                                number = numbers[k - 1] - numbers[k]
                                numbers.splice(k - 1, 2)
                                numbers.push(number)
                                tokens.splice(tokens.length - 1, 1)
                            }
                            if (tokens.length == 0) break d2
                        } else if (
                            tokens[tokens.length - 1].startsWith('*') == true
                        ) {
                            number = numbers[k - 1] * numbers[k]
                            numbers.splice(k - 1, 2)
                            numbers.push(number)
                            tokens.splice(tokens.length - 1, 1)
                            if (tokens.length == 0) break d2
                        } else if (
                            tokens[tokens.length - 1].startsWith('/') == true
                        ) {
                            number = numbers[k - 1] / numbers[k]
                            numbers.splice(k - 1, 2)
                            numbers.push(number)
                            tokens.splice(tokens.length - 1, 1)
                            if (tokens.length == 0) break d2
                        } else if (
                            tokens[tokens.length - 1].startsWith('sqrt') == true
                        ) {
                            number = Math.sqrt(numbers[k])
                            numbers.splice(k, 1)
                            numbers.push(number)
                            tokens.splice(tokens.length - 1, 1)
                            if (tokens.length == 0) break d2
                        } else if (
                            tokens[tokens.length - 1].startsWith('^') == true
                        ) {
                            number = Math.pow(numbers[k - 1], numbers[k])
                            numbers.splice(k - 1, 2)
                            numbers.push(number)
                            tokens.splice(tokens.length - 1, 1)
                            if (tokens.length == 0) break d2
                        } else if (
                            tokens[tokens.length - 1].startsWith('sin') == true
                        ) {
                            if (DegCheck.checked)
                                number = Math.sin((numbers[k] * Math.PI) / 180)
                            else number = Math.sin(numbers[k])
                            numbers.splice(k, 1)
                            numbers.push(number)
                            tokens.splice(tokens.length - 1, 1)
                            if (tokens.length == 0) break d2
                        } else if (
                            tokens[tokens.length - 1].startsWith('cos') == true
                        ) {
                            if (DegCheck.checked)
                                number = Math.cos((numbers[k] * Math.PI) / 180)
                            else number = Math.cos(numbers[k])
                            numbers.splice(k, 1)
                            numbers.push(number)
                            tokens.splice(tokens.length - 1, 1)
                            if (tokens.length == 0) break d2
                        } else if (
                            tokens[tokens.length - 1].startsWith('tan') == true
                        ) {
                            if (DegCheck.checked)
                                number = Math.tan((numbers[k] * Math.PI) / 180)
                            else number = Math.tan(numbers[k])
                            numbers.splice(k, 1)
                            numbers.push(number)
                            tokens.splice(tokens.length - 1, 1)
                            if (tokens.length == 0) break d2
                        } else if (
                            tokens[tokens.length - 1].startsWith('e') == true
                        ) {
                            number = numbers[k - 1] * Math.pow(10, numbers[k])
                            numbers.splice(k - 1, 2)
                            numbers.push(number)
                            tokens.splice(tokens.length - 1, 1)
                            if (tokens.length == 0) break d2
                        } else if (
                            tokens[tokens.length - 1].startsWith('arctan') ==
                            true
                        ) {
                            if (DegCheck.checked)
                                number = (Math.atan(numbers[k]) / Math.PI) * 180
                            else number = Math.atan(numbers[k])
                            numbers.splice(k, 1)
                            numbers.push(number)
                            tokens.splice(tokens.length - 1, 1)
                            if (tokens.length == 0) break d2
                        } else if (
                            tokens[tokens.length - 1].startsWith('arccos') ==
                            true
                        ) {
                            if (DegCheck.checked)
                                number = (Math.acos(numbers[k]) / Math.PI) * 180
                            else number = Math.acos(numbers[k])
                            numbers.splice(k, 1)
                            numbers.push(number)
                            tokens.splice(tokens.length - 1, 1)
                            if (tokens.length == 0) break d2
                        } else if (
                            tokens[tokens.length - 1].startsWith('arcsin') ==
                            true
                        ) {
                            if (DegCheck.checked)
                                number = (Math.asin(numbers[k]) / Math.PI) * 180
                            else number = Math.asin(numbers[k])
                            numbers.splice(k, 1)
                            numbers.push(number)
                            tokens.splice(tokens.length - 1, 1)
                            if (tokens.length == 0) break d2
                        }
                    } while (tokens.length - 1 !== 0)
                }
            } else if (i + 1 == stringMod.length && tokens.length !== 0) {
                d3: do {
                    k = numbers.length - 1
                    if (tokens[tokens.length - 1].startsWith('+') == true) {
                        number = numbers[k] + numbers[k - 1]
                        numbers.splice(k - 1, 2)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d3
                    } else if (
                        tokens[tokens.length - 1].startsWith('-') == true
                    ) {
                        if (k === 0) {
                            number = -numbers[k]
                            numbers.splice(k, 1)
                            numbers.push(number)
                            tokens.splice(tokens.length - 1, 1)
                        } else {
                            number = numbers[k - 1] - numbers[k]
                            numbers.splice(k - 1, 2)
                            numbers.push(number)
                            tokens.splice(tokens.length - 1, 1)
                        }
                        if (tokens.length == 0) break d3
                    } else if (
                        tokens[tokens.length - 1].startsWith('*') == true
                    ) {
                        number = numbers[k - 1] * numbers[k]
                        numbers.splice(k - 1, 2)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d3
                    } else if (
                        tokens[tokens.length - 1].startsWith('/') == true
                    ) {
                        number = numbers[k - 1] / numbers[k]
                        numbers.splice(k - 1, 2)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d3
                    } else if (
                        tokens[tokens.length - 1].startsWith('sqrt') == true
                    ) {
                        number = Math.sqrt(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d3
                    } else if (
                        tokens[tokens.length - 1].startsWith('^') == true
                    ) {
                        number = Math.pow(numbers[k - 1], numbers[k])
                        numbers.splice(k - 1, 2)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d3
                    } else if (
                        tokens[tokens.length - 1].startsWith('sin') == true
                    ) {
                        if (DegCheck.checked)
                            number = Math.sin((numbers[k] * Math.PI) / 180)
                        else number = Math.sin(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d3
                    } else if (
                        tokens[tokens.length - 1].startsWith('cos') == true
                    ) {
                        if (DegCheck.checked)
                            number = Math.cos((numbers[k] * Math.PI) / 180)
                        else number = Math.cos(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d3
                    } else if (
                        tokens[tokens.length - 1].startsWith('tan') == true
                    ) {
                        if (DegCheck.checked)
                            number = Math.tan((numbers[k] * Math.PI) / 180)
                        else number = Math.tan(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d3
                    } else if (
                        tokens[tokens.length - 1].startsWith('e') == true
                    ) {
                        number = numbers[k - 1] * Math.pow(10, numbers[k])
                        numbers.splice(k - 1, 2)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d3
                    } else if (
                        tokens[tokens.length - 1].startsWith('arctan') == true
                    ) {
                        if (DegCheck.checked)
                            number = (Math.atan(numbers[k]) / Math.PI) * 180
                        else number = Math.atan(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d3
                    } else if (
                        tokens[tokens.length - 1].startsWith('arccos') == true
                    ) {
                        if (DegCheck.checked)
                            number = (Math.acos(numbers[k]) / Math.PI) * 180
                        else number = Math.acos(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d3
                    } else if (
                        tokens[tokens.length - 1].startsWith('arcsin') == true
                    ) {
                        if (DegCheck.checked)
                            number = (Math.asin(numbers[k]) / Math.PI) * 180
                        else number = Math.asin(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d3
                    }
                } while (tokens.length !== 0)
            } else if (tokens[tokens.length - 1] == '(') {
                tokens.push(token)
                continue next
            } else if (
                parseInt(token[token.length - 1]) >
                parseInt(
                    tokens[tokens.length - 1][
                        tokens[tokens.length - 1].length - 1
                    ]
                )
            ) {
                tokens.push(token)
                continue next
            } else if (
                parseInt(token[token.length - 1]) <=
                parseInt(
                    tokens[tokens.length - 1][
                        tokens[tokens.length - 1].length - 1
                    ]
                )
            ) {
                d4: do {
                    k = numbers.length - 1
                    var n = tokens.length - 1
                    if (tokens[tokens.length - 1].startsWith('+') == true) {
                        number = numbers[k] + numbers[k - 1]
                        numbers.splice(k - 1, 2)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d4
                    } else if (
                        tokens[tokens.length - 1].startsWith('-') == true
                    ) {
                        if (k === 0) {
                            number = -numbers[k]
                            numbers.splice(k, 1)
                            numbers.push(number)
                            tokens.splice(tokens.length - 1, 1)
                        } else {
                            number = numbers[k - 1] - numbers[k]
                            numbers.splice(k - 1, 2)
                            numbers.push(number)
                            tokens.splice(tokens.length - 1, 1)
                        }
                        if (tokens.length == 0) break d4
                    } else if (
                        tokens[tokens.length - 1].startsWith('*') == true
                    ) {
                        number = numbers[k - 1] * numbers[k]
                        numbers.splice(k - 1, 2)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d4
                    } else if (
                        tokens[tokens.length - 1].startsWith('/') == true
                    ) {
                        number = numbers[k - 1] / numbers[k]
                        numbers.splice(k - 1, 2)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d4
                    } else if (
                        tokens[tokens.length - 1].startsWith('sqrt') == true
                    ) {
                        number = Math.sqrt(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d4
                    } else if (
                        tokens[tokens.length - 1].startsWith('^') == true
                    ) {
                        number = Math.pow(numbers[k - 1], numbers[k])
                        numbers.splice(k - 1, 2)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d4
                    } else if (
                        tokens[tokens.length - 1].startsWith('sin') == true
                    ) {
                        if (DegCheck.checked)
                            number = Math.sin((numbers[k] * Math.PI) / 180)
                        else number = Math.sin(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d4
                    } else if (
                        tokens[tokens.length - 1].startsWith('cos') == true
                    ) {
                        if (DegCheck.checked)
                            number = Math.cos((numbers[k] * Math.PI) / 180)
                        else number = Math.cos(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d4
                    } else if (
                        tokens[tokens.length - 1].startsWith('tan') == true
                    ) {
                        if (DegCheck.checked)
                            number = Math.tan((numbers[k] * Math.PI) / 180)
                        else number = Math.tan(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d4
                    } else if (
                        tokens[tokens.length - 1].startsWith('e') == true
                    ) {
                        number = numbers[k - 1] * Math.pow(10, numbers[k])
                        numbers.splice(k - 1, 2)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d4
                    } else if (
                        tokens[tokens.length - 1].startsWith('arctan') == true
                    ) {
                        if (DegCheck.checked)
                            number = (Math.atan(numbers[k]) / Math.PI) * 180
                        else number = Math.atan(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d4
                    } else if (
                        tokens[tokens.length - 1].startsWith('arccos') == true
                    ) {
                        if (DegCheck.checked)
                            number = (Math.acos(numbers[k]) / Math.PI) * 180
                        else number = Math.acos(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d4
                    } else if (
                        tokens[tokens.length - 1].startsWith('arcsin') == true
                    ) {
                        if (DegCheck.checked)
                            number = (Math.asin(numbers[k]) / Math.PI) * 180
                        else number = Math.asin(numbers[k])
                        numbers.splice(k, 1)
                        numbers.push(number)
                        tokens.splice(tokens.length - 1, 1)
                        if (tokens.length == 0) break d4
                    }
                } while (
                    parseInt(token[token.length - 1]) <=
                        parseInt(
                            tokens[tokens.length - 1][
                                tokens[tokens.length - 1].length - 1
                            ]
                        ) &&
                    tokens[tokens.length - 1] !== '('
                )
                tokens.push(token)
            }
        }
        if (tokens.length == 0 && i + 1 == stringMod.length - 1) break next
    }
    if (errorIndicator === true || inputB.children[0].value == NaN)
        inputB.children[0].value = 'Wrong input!'
    else {
        if (numbers.length == 0) inputB.children[0].value = ''
        else inputB.children[0].value = numbers[numbers.length - 1]
        return numbers[numbers.length - 1]
    }
}
