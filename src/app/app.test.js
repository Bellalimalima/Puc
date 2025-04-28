const request = require("supertest");
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Olá, mundo! Servidor Node.js funcionando!");
});

describe("Testando o servidor HTTP", () => {
  it("Deve retornar status 200 e a mensagem correta", async () => {
    const response = await request(server).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Olá, mundo! Servidor Node.js funcionando!");
  });
});

describe("Testando o servidor HTTP", () => {
    it("Deve retornar status 200 e a mensagem correta", async () => {
      const response = await request(server).get("/");
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe("Olá, mundo! Servidor Node.js funcionando!");
    });
  
    it("Deve retornar o cabeçalho Content-Type como text/plain", async () => {
      const response = await request(server).get("/");
      expect(response.headers["content-type"]).toBe("text/plain");
    });
  });