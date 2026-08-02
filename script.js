let produtos = [];
let clientes = [];

// 1. Carrega produtos.json quando abre o app
fetch('produtos.json')
.then(res => res.json())
.then(data => { 
    produtos = data; 
    console.log("Produtos carregados:", produtos.length);
});

// 2. FUNÇÃO DE BUSCA CORRIGIDA - usa includes
function buscarProdutos(termo) {
    if(termo.length < 2) return []; // só busca com 2 letras ou mais
    termo = termo.toLowerCase();
    
    return produtos.filter(p => 
        p.nome.toLowerCase().includes(termo) // <-- AQUI: busca em qualquer parte
    );
}

// 3. Quando digitar no campo de produto
document.addEventListener('DOMContentLoaded', function(){
    const inputProduto = document.getElementById('produto');
    const divSugestoes = document.getElementById('sugestoes');

    if(inputProduto){
        inputProduto.addEventListener('input', function(){
            const termo = this.value;
            const resultados = buscarProdutos(termo);
            
            divSugestoes.innerHTML = '';
            resultados.forEach(p => {
                divSugestoes.innerHTML += `<div class="sugestao-item" onclick="selecionarProduto('${p.nome}')">${p.nome}</div>`;
            });
        });
    }
});

// 4. Quando clicar na sugestão
function selecionarProduto(nome){
    document.getElementById('produto').value = nome;
    document.getElementById('sugestoes').innerHTML = '';
}
