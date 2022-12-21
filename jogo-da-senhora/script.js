var jogador = 'X'

function action(posicao){

    const botao = document.querySelector(`#posicao${posicao}`)
    
    if( jogador === "X" && botao.textContent === ''){
        botao.textContent = 'X'
        botao.classList.add('x')
        botao.classList.remove('o')
        jogador = 'O'
    }
    else if( jogador === "O" && botao.textContent === ''){
        botao.textContent = 'O'
        botao.classList.add('o')
        botao.classList.remove('x')
        jogador = 'X'
    }

    confereJogadas()
}

function confereJogadas(){

    let posicoes = []

    for(let i = 0 ; i < 9 ; i++){
        posicoes.push(document.querySelector(`#posicao${i+1}`).innerHTML)
    }

    teste.jogadorX(posicoes)
    teste.jogadorO(posicoes)

}

const teste = {
    'jogadorX': (p) =>{
        for(let i = 0, j = 0 ; i < 9 ; i = i + 3, j++){
            if( p[i] === 'X' && p[i+1] === 'X' && p[i+2] == 'X'){
                teste.vitoria('X')
            }
            if( p[j] === 'X' && p[j+3] === 'X' && p[j+6] == 'X'){
                teste.vitoria('X')
            }
        }
        if( p[0] === 'X' && p[4] === 'X' && p[8] === 'X'){
            teste.vitoria('X')
        }
        if( p[2] === 'X' && p[4] === 'X' && p[6] === 'X'){
            teste.vitoria('X')
        }
    },

    'jogadorO': (p) =>{
        for(let i = 0, j = 0 ; i < 9 ; i = i + 3, j++){
            if( p[i] === 'O' && p[i+1] === 'O' && p[i+2] == 'O'){
                teste.vitoria('O')
            }
            if( p[j] === 'O' && p[j+3] === 'O' && p[j+6] == 'O'){
                teste.vitoria('O')
            }
        }
        if( p[0] === 'O' && p[4] === 'O' && p[8] === 'O'){
            teste.vitoria('O')
        }
        if( p[2] === 'O' && p[4] === 'O' && p[6] === 'O'){
            teste.vitoria('O')
        }
    },

    'vitoria': (jogadorVencedor) => {

        for(let i = 0 ; i < 9 ; i++){
            document.querySelector(`#posicao${i+1}`).textContent = ''
        }

        let modal = document.getElementById("meuModal")
        modal.style.display = "block"

        let vencedor = document.querySelector("#vencedor")

        if(jogadorVencedor === 'X')
            vencedor.textContent = "Jogador 'X' ganhou"
        if(jogadorVencedor === 'O')
            vencedor.textContent = "Jogador 'O' ganhou"
    }
}

function esconderModal(){
    let modal = document.getElementById("meuModal")
    modal.style.display = "none"
}

function reiniciar(){
    for(let i = 0 ; i < 9 ; i++){
        document.querySelector(`#posicao${i+1}`).textContent = ''
    }
}