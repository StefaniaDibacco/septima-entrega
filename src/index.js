import express from 'express';
import path from 'path';

const puerto = 8080;

const app = express();

const server = app.listen(puerto, () =>
  console.log('Servidor HTTP escuchando en puerto', puerto)
);

server.on('error', (err) => {
  console.log('ERROR =>', err);
});

// ENVIO DE UN HTML BASICO USANDO EXPRESS
app.get('/mihtml', (request, response) => {
  const myfilePath = path.resolve(__dirname, './views/vista1.html');
  response.sendFile(myfilePath);
});

app.get('/', (request, response) => {
    console.log(request.query);
    response.json({
        msg: 'Hola Mundo desde el main',
    });
});

app.get('/visitas', (request, response) => {
    visitas++;
    response.json({
      msg: `Esta es la visita numero ${visitas}`,
    });
  });