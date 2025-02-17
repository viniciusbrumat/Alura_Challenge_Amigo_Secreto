let amigos = [];

function adicionarAmigo(){
    let nomeInput = document.getElementById('amigo');
    nome = nomeInput.value;

    if (nome.trim() !== ''){
        amigos.push(nome);
        nomeInput.value = '';
        console.log(amigos);
        atualizarLista()
    } else{
        alert('Por favor, digite um nome válido!');
    }
}

function atualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement ('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    return sorteio [indiceAleatorio];
}

alert (sortearAmigo())