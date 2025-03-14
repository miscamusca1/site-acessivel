document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const botaoDeacessibilidade = document.getElementById('botaoDeacessibilidade');
    const opcoesDeacessibilidade = document.getElementById('opcoesDeacessibilidade');
botaoDeacessibilidade.addEventListener('click', function(){
    botaoDeacessibilidade.classList.toggle('rotacao-botao');
    opcoesDeacessibilidade.classList.toggle('apresenta-lista');
});

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });
diminuiFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte-=0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
     });
    });