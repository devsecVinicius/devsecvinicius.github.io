let visor = document.querySelector('.resultado')
let n1 = 0
let n2 = 0
let operacao = ''

function ac(){
    visor.textContent = ''
    n1 = 0
    n2 = 0
}

function backspace(){
    aux = visor.innerHTML.toString()
    visor.textContent = aux.slice(0, -1)
}

function add(valor){
    visor.textContent = visor.textContent+valor
}

function somar(){
    n1 = +visor.textContent
    visor.textContent = ''
    operacao = '+'
}

function subtrair(){
    n1 = +visor.textContent
    visor.textContent = ''
    operacao = '-'
}

function multiplicar(){
    n1 = +visor.textContent
    visor.textContent = ''
    operacao = '*'
}

function dividir(){
    n1 = +visor.textContent
    visor.textContent = ''
    operacao = '/'
}

function igual(){
    n2 = +visor.textContent

    if(operacao === '+'){
        visor.textContent = n1+n2
    }
    if(operacao === '-'){
        visor.textContent = n1-n2
    }
    if(operacao === '*'){
        visor.textContent = n1*n2
    }
    if(operacao === '/'){
        visor.textContent = n1/n2
    }

    n1 = 0
    n2 = 0
    operacao = ''
}

function ponto(){
    visor.textContent = visor.textContent+'.'
}
