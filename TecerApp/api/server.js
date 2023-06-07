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

// Rota de autenticação de login
app.post('/login', (req, res) => {
    const { cpf, senha } = req.body;
  
    // Verifique as credenciais do cliente no banco de dados
    const query = 'SELECT * FROM cliente WHERE cpf = ? AND senha = ?';
    connection.query(query, [cpf, senha], (error, results) => {
      if (error) {
        console.error('Erro ao verificar as credenciais:', error);
        res.status(500).json({ message: 'Erro ao verificar as credenciais' });
      } else {
        if (results.length > 0) {
          // Login bem-sucedido
          res.status(200).json({ message: 'Login bem-sucedido' });
        } else {
          // Login inválido
          res.status(401).json({ message: 'CPF ou senha inválidos' });
        }
      }
    });
  });  

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
