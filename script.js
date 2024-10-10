
    const placa = document.getElementById('placa');
    const botao = document.getElementById('Botao');
    const exibir = document.getElementById('exibir');
    const resultado = document.getElementById('resultado');
    const resultado2 = document.getElementById('resultado2');
    const resultadoArray = document.getElementById('resultadoArray'); // Parágrafo para exibir o array
    const tipoVeiculo = document.getElementById('tipoVeiculo');


    // Evento de clique no botão "Enviar"
    botao.addEventListener('click', () => {
        // Captura os valores
        const valorInput = placa.value;
        const veiculo = tipoVeiculo.value;

        // Exibe os valores individualmente
        resultado.textContent = `A sua placa é: ${valorInput}`;
        resultado2.textContent = `O seu veículo é: ${veiculo}`;
    });
 
    const elementos = [placa, tipoVeiculo];

    // Evento de clique no botão "Ver Array"
    exibir.addEventListener('click', () => {
        // Cria uma variável para armazenar todos os valores
        let todosOsValores = '';

        // Itera sobre o array e adiciona os valores à string
        elementos.forEach(function (elemento) {
            todosOsValores += `Valor do elemento: ${elemento.value} `;
        });

        // Exibe todos os valores concatenados no parágrafo
        resultadoArray.textContent = todosOsValores;
        
        // Também pode exibir no console, se quiser
        console.log(todosOsValores);
    });

