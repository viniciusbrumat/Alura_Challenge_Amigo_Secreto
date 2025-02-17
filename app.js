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
    if (amigos.length < 2){
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    resultadoSorteio = document.getElementById('resultado');
    resultadoSorteio.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
    console.log(amigoSorteado);
    console.log(indiceAleatorio);
}