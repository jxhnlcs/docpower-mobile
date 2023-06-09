// Importando as dependências
const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

// Criando uma instância do aplicativo Express
const app = express();
const port = process.env.PORT || 3000;

// Configurando a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'database.ctk3skro8xoh.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'admin123',
  database: 'database'
});

// Estabelecendo a conexão com o banco de dados
connection.connect((error) => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados!');
  }
});

// Middleware para analisar o corpo da requisição como JSON
app.use(express.json());

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

//   // Rota de autenticação de login
// app.post('/login', (req, res) => {
//   const { cpf, senha } = req.body;

//   // Verifique as credenciais do cliente no banco de dados
//   const query = 'SELECT * FROM cliente WHERE cpf = ? AND senha = ?';
//   connection.query(query, [cpf, senha], (error, results) => {
//     if (error) {
//       console.error('Erro ao verificar as credenciais:', error);
//       res.status(500).json({ message: 'Erro ao verificar as credenciais' });
//     } else {
//       if (results.length > 0) {
//         // Login bem-sucedido
//         const clienteId = results[0].id;

//         // Consulta para obter os documentos associados ao cliente e suas categorias
//         const documentosQuery = `
//           SELECT d.id, c.nome AS nome_cliente, cat.nome AS nome_categoria, d.nome AS nome_documento
//           FROM documentos d
//           JOIN cliente c ON d.cliente_id = c.id
//           JOIN categorias cat ON d.categoria_id = cat.id
//           WHERE d.cliente_id = ?
//         `;
//         connection.query(documentosQuery, [clienteId], (error, documentoResults) => {
//           if (error) {
//             console.error('Erro ao consultar os documentos:', error);
//             res.status(500).json({ message: 'Erro ao consultar os documentos' });
//           } else {
//             // Documentos encontrados
//             res.status(200).json({ documentos: documentoResults });
//           }
//         });
//       } else {
//         // Login inválido
//         res.status(401).json({ message: 'CPF ou senha inválidos' });
//       }
//     }
//   });
// }); 

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
