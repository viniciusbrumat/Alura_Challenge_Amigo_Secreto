let amigos = [];

function adicionarAmigo(){
    let digitarNome = document.getElementById('amigo');
    let nome = digitarNome.value;

    if (nome.trim() !== ''){
        amigos.push(nome)
        digitarNome.value = '';
        atualizarLista();
    } else{
        alert('Por favor, insira um nome');
    }
}

function atualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){
        let listaDeNomes = document.createElement('li');
        listaDeNomes.textContent = amigos[i];
        lista.appendChild(listaDeNomes); 
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert('Insira nomes na lista para continuar.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceAleatorio];

    let resultadoSorteio = document.getElementById('resultado');
    resultadoSorteio.innerHTML = `O nome sorteado é: ${nomeSorteado}.`
}