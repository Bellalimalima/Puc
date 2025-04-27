// Importando o módulo http do Node.js
const http = require('http');

// Criando o servidor
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // Cabeçalho da resposta
  res.end('Olá, mundo! Servidor Node.js funcionando!'); // Resposta
});

const PORT = 3000;

// Iniciando o servidor
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

