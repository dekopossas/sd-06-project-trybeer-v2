const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const httpServer = require('http').createServer(app);

const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`${socket.id} connected`);
  socket.on('disconnect', () => {
    console.log(`${socket.id} disconnected`);
  });
});

const LoginController = require('./src/controllers/LoginController');
const RegisterController = require('./src/controllers/RegisterController');
const ProductsController = require('./src/controllers/ProductsController');
const ProfileController = require('./src/controllers/ProfileController');
const SalesController = require('./src/controllers/SalesController');
const MessageController = require('./src/controllers/MessageController');
require('dotenv').config();

const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(express.json());

app.use('/login', LoginController);

app.use('/register', RegisterController);

app.use('/products', ProductsController);

app.use('/profile', ProfileController);

app.use('/sales', SalesController);

app.use('/chat', MessageController);

httpServer.listen(port, () => console.log(`Running at ${port}`));
