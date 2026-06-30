const numerosenha = document.querySelector('.parametro-senha__texto');
let tamnhoSenha = 12;
numerosenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = diminuiTamanho;

function diminuiTamanho(){
   if (tamnhoSenha > 1){
       tamnhoSenha--;
   }
     numerosenha.textContent = tamanhoSenha;
}
function diminuiTamanho(){
    if (tamnhoSenha >20){
       tamnhoSenha++; 
    }
    numerosenha.textContent = tamanhoSenha;
}