// Importando as dependências
const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

// Criando uma instância do aplicativo Express
const app = express();
const port = process.env.PORT || 3000;

// Configurando a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// Estabelecendo a conexão com o banco de dados
connection.connect((error) => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados!');
  }
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
