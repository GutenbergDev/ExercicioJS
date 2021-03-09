function leitorFilmeDuracao() {
    // criar referências dos campos da páginas
    let inTitulo = document.querySelector('#inTitulo');
    let inDuracao = document.querySelector('#inDuracao');
    let outTitulo = document.querySelector('#outTitulo');
    let outTempo = document.querySelector('#outTempo');

    // obtém os conteúdos de campo de entrada
    let titulo = inTitulo.value;
    let duracao = Number(inDuracao.value); 
    
    // Verifica se nenhum dos campos foi digitado e retorna para o título
    if (titulo == "" || duracao == "") {
        alert('Digite o Filme e Duração nos campos selecionados.');
        inTitulo.focus();
        return;
    }

    // Verificar se o número digitado é válido 
    if (duracao == 0 || isNaN(duracao)) {
        alert('Digite uma duração válida.');
        inDuracao.focus();
        return;
    }

    // calcular o tempo
    let hora = Math.floor(duracao / 60);
    let minuto = duracao % 60;

    // mudar o campo da página
    outTitulo.textContent = `${titulo}`;
    outTempo.textContent = `${hora} Hora(s) e ${minuto} Minuto(s)`;
}
// criar referência ao botão
let btConverter = document.querySelector('#btConverter');
btConverter.addEventListener("click", leitorFilmeDuracao);