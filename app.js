let numeroDeCliqueEmAdd = 0;
let listaDeAmigos = [];
let listaAmigos = [];

function adicionarAmigo(){
    let valor = document.getElementById("amigo").value;
    if (valor == ''){
        alert("Digite um Nome")
    }else{
        listaAmigos.push(document.getElementById("amigo").value);
        console.log(listaAmigos);
        document.getElementById("amigo").value = "";
        atualizaLista();

    }
}

function sortearAmigo(){
    listaDeAmigos.innerHTML = "";
    let amigoSorteado = parseInt(Math.random() * numeroDeCliqueEmAdd);
    console.log(listaAmigos[amigoSorteado]);
    nomeSorteado = document.querySelector('ul');
    nomeSorteado.innerHTML = "O Seu amigo Secreto é "+ listaAmigos[amigoSorteado];
    console.log();
}

function atualizaLista(){
    listaDeAmigos = document.querySelector('ul');
    listaDeAmigos.innerHTML = "";
    for(let i = 0; i < listaAmigos.length; i++){
       let li = document.createElement('li'); 
       li.textContent = listaAmigos[i]; 
       listaDeAmigos.appendChild(li); 
   }
}