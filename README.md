# Calculadora em JavaScript

Este projeto é uma simples calculadora feita em HTML, CSS e JavaScript puro. Além disso, inclui testes automatizados usando Jest.

## Como rodar a aplicação

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/calculadora-js.git

2. Instale as dependências com:
   ```sh
   npm install

3. Rode o comando:
   ```sh 
   make
Para iniciar o servidor local e rodar os testes das operações do arquivo ```operations.js```

4. Para resultado dos testes mais detalhados:
   ```sh 
   npm test -- --coverage

4. Para visualizar a calculadora entre no ```http://localhost:8080/calculator.html```

## Explicação 

A aplicação é uma calculadora simples com as funcionalidades de somar, subtrair, multiplicar e dividir dois números. A interface foi construída com HTML e CSS, enquanto a lógica das operações matemáticas foi implementada em JavaScript.

## Testes Unitários

Existem testes unitários para garantir o funcionamento correto das operações. Os testes estão localizados no arquivo ```operations.test.js``` e foram escritos usando o framework Jest. Eles verificam se cada operação (soma, subtração, multiplicação e divisão) está retornando o resultado esperado para diferentes entradas.

Os testes são executados automaticamente ao rodar o comando make, e você pode verificar o resultado dos testes diretamente no terminal.