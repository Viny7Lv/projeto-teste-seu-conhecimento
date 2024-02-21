const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      resposta: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um sistema operacional",
      ],
      correta: 1
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      resposta: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Como se refere a um bloco de código que realiza uma tarefa específica em JavaScript?",
      resposta: [
        "Módulo",
        "Função",
        "Classe",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      resposta: [
        "Comparação estrita",
        "Atribuição",
        "OU lógico",
      ],
      correta: 0
    },
    {
      pergunta: "Como se chama a estrutura de controle que permite executar um bloco de código repetidamente enquanto uma condição for verdadeira?",
      resposta: [
        "Switch",
        "For",
        "While",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      resposta: [
        "push()",
        "concat()",
        "add()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      resposta: [
        "Uma linguagem de estilo",
        "Um modelo de objeto",
        "Uma linguagem de banco de dados",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do JSON em JavaScript?",
      resposta: [
        "Criar animações",
        "Manipular dados em formato de objeto",
        "Definir estilos de página",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      resposta: [
        "Não há diferença",
        "Undefined é atribuído explicitamente, enquanto null é atribuído pelo sistema",
        "Null é utilizado para strings vazias, undefined para valores não atribuídos",
      ],
      correta: 1
    },
    {
      pergunta: "Como se chama o processo de encontrar e corrigir erros no código JavaScript?",
      resposta: [
        "Compilação",
        "Debugging",
        "Execução",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.resposta) {
      // clona a estrutura
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
  
      // pegar as respostas
      dt.querySelector('span').textContent = resposta
  
      // mudar o nome do atributo name
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  
      // mudar o valor dele
      dt.querySelector('input').value = item.resposta.indexOf(resposta)
  
      // verificar se é realmente essa a resposta certa
      dt.querySelector('input').onchange = (event) => {
        const estCorreta = event.target.value == item.correta
        // guardar o número de respostas corretas
        corretas.delete(item)
        if(estCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      // colocar dentro do span as respostas
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    // remove a "Resposta A"
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  