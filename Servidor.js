const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

// Rota para receber o ID da playlist e user
app.post('/playlist', (req, res) => {
  const { playlistId, userId } = req.body;

  if (!playlistId || !userId) {
    console.error('Parâmetros faltando:', req.body);
    return res.status(400).send('Requisição inválida, parâmetros faltando.');
  }

  console.log(`Requisição recebida: Playlist ID: ${playlistId}, User ID: ${userId}`);
  res.send({ message: 'Requisição recebida com sucesso!', playlistId, userId });
});

app.listen(port, () => {
  console.log(`Servidor HTTP rodando na porta ${port}.`);
});
