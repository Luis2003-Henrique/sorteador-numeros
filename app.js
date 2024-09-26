function sortear(){

    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroMinimo = parseInt(document.getElementById('de').value);
    let numeroMaximo = parseInt(document.getElementById('ate').value);

    let listaDeSorteados = [];
    let numeroSorteado;
    let limite = (numeroMaximo - numeroMinimo + 1);

    let resultado = document.getElementById('resultado');

    for (let i = 0; i < quantidadeDeNumeros; i++ ){
    numeroSorteado = sortearNumeroAleatorio(numeroMinimo, numeroMaximo);
    
    while (listaDeSorteados.includes(numeroSorteado)){
    numeroSorteado = sortearNumeroAleatorio(numeroMinimo, numeroMaximo);
    }
    
    listaDeSorteados.push(numeroSorteado);
   
    if (listaDeSorteados.length == quantidadeDeNumeros){
      alterarStatusDoBotao();
    } 
    if (numeroMinimo >= numeroMaximo){
      limparCampo()
      alert('O número inicial deve ser menor que o número máximo.');
      resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora </label>;`
      return;
    } if (limite < quantidadeDeNumeros){
      limparCampo();
      alert('A operação não será possível. O intervalo entre os valores é menor que a quantidade de valores.');
      resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora </label>;`
      return;
    }
}
    
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaDeSorteados} </label>;`
    
 }
 


function alterarStatusDoBotao(){
   let botaoReiniciar = document.getElementById('btn-reiniciar');
   let desabilitado = botaoReiniciar.classList.contains('container__botao-desabilitado');
   if (desabilitado){
   botaoReiniciar.classList.remove('container__botao-desabilitado');
   botaoReiniciar.classList.add('container__botao');
   } else {
   botaoReiniciar.classList.remove('container__botao');
   botaoReiniciar.classList.add('container__botao-desabilitado');
   }
 }

function limparCampo(){
   document.getElementById('quantidade').value = '';
   document.getElementById('de').value = '';
   document.getElementById('ate').value = '';
}

function reiniciar(){
   alterarStatusDoBotao();
   limparCampo();
   resultado = document.getElementById('resultado');
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora </label>;`
   
  

}


function sortearNumeroAleatorio(minimo, maximo){
   return Math.floor(Math.random()* (maximo - minimo + 1) + minimo);
}