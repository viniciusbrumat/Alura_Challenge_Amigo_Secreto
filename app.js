let amigos = [];

function adicionarAmigo(){
    let nomeInput = document.getElementById('amigo');
    nome = nomeInput.value;

    if (nome.trim() !== ''){
        amigos.push(nome)
        nomeInput.value = '';
        console.log(amigos);
    } else{
        alert('Por favor, digite um nome válido!');
    }
}