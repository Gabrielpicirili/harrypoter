# API de Registro de Bruxos e Varinhas de Harry Potter

Esta é uma API simples desenvolvida em Node.js usando Express e PostgreSQL para armazenar informações sobre bruxos e varinhas inspiradas no universo de Harry Potter.

## Rotas

- **GET /bruxos**: Retorna todos os bruxos cadastrados.
- **GET /varinha**: Retorna todas as varinhas cadastradas.
- **GET /bruxos/:id**: Retorna um bruxo específico com base no ID fornecido.
- **GET /varinha/:id**: Retorna uma varinha específica com base no ID fornecido.
- **POST /bruxos**: Cria um novo registro de bruxo.
- **POST /varinha**: Cria um novo registro de varinha.
- **PUT /bruxos/:id**: Atualiza as informações de um bruxo existente com base no ID fornecido.
- **PUT /varinha/:id**: Atualiza as informações de uma varinha existente com base no ID fornecido.
- **DELETE /bruxos/:id**: Deleta um bruxo com base no ID fornecido.
- **DELETE /varinha/:id**: Deleta uma varinha com base no ID fornecido.

## Configuração do Banco de Dados

Esta API utiliza um banco de dados PostgreSQL. Certifique-se de criar um banco de dados chamado `harrypotter` antes de executar a aplicação. 

## Como executar

1. Instale as dependências:

   ```
   npm install
   ```

2. Execute o servidor:

   ```
   node app.js
   ```

3. O servidor estará disponível em `http://localhost:4000`.

## Exemplo de Requisições

- **GET /bruxos**:

  Retorna todos os bruxos cadastrados.

  ```http
  GET /bruxos
  ```

- **POST /bruxos**:

  Cria um novo bruxo.

  ```http
  POST /bruxos
  Content-Type: application/json

  {
      "nome": "Harry Potter",
      "idade": 17,
      "casa_hogwarts": "Gryffindor",
      "patrono": "Corça",
      "habilidade": "Falar Parceltongue",
      "status_sangue": "Mestiço",
      "id_varinha": 1
  }
  ```

- **PUT /bruxos/:id**:

  Atualiza as informações de um bruxo existente com base no ID fornecido.

  ```http
  PUT /bruxos/1
  Content-Type: application/json

  {
      "nome": "Harry James Potter",
      "idade": 18,
      "casa_hogwarts": "Gryffindor",
      "patrono": "Corça",
      "habilidade": "Falar Parceltongue",
      "status_sangue": "Mestiço",
      "id_varinha": 1
  }
  ```

- **DELETE /bruxos/:id**:

  Deleta um bruxo com base no ID fornecido.

  ```http
  DELETE /bruxos/1
  ```

## Notas

- Certifique-se de configurar corretamente as variáveis de ambiente ou os detalhes de conexão do banco de dados no código.
- Esta API é apenas um exemplo e pode ser estendida e personalizada conforme necessário.

Aproveite e explore a magia do mundo de Harry Potter enquanto brinca com esta API! 🧙‍♂️🔮
