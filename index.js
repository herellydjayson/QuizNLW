const perguntas = [
    {
      pergunta: "O que o console.log() faz em JavaScript?",
      respostas: [
        "Imprime uma mensagem no console do navegador",
        "Inicia uma sessão de log de erros",
        "Define uma variável global"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "variável myVar;",
        "var myVar;",
        "const myVar;"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreve um comentário de linha única em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função usada para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToInt()",
        "convertToInt()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador lógico 'E' em JavaScript?",
      respostas: [
        "&",
        "&&",
        "||"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado de 2 + 2 em JavaScript?",
      respostas: [
        "22",
        "4",
        "2 + 2"
      ],
      correta: 1
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "function myFunction() {}",
        "myFunction = function() {}",
        "def myFunction() {}"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado de '10' + 5 em JavaScript?",
      respostas: [
        "'105'",
        "15",
        "'10 + 5'"
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador 'typeof' faz em JavaScript?",
      respostas: [
        "Retorna o tipo de dado de uma variável",
        "Define o tipo de uma variável",
        "Compara dois valores"
      ],
      correta: 0
    }
  ];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  

  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta

        quizItem.querySelector('dl').appendChild(dt)
    }

    //remove a resposta A
    quizItem.querySelector('dl dt').remove()

    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }