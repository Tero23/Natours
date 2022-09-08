require('dotenv').config();
const mongoose = require('mongoose');

process.on('uncaughtException', (err) => {
  console.log(err);
  console.log('Uncaught Exception! Shutting down...');
  process.exit(1);
});

const app = require('./app');

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then((con) => console.log('DB connection successful!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('Unhandled Rejection! Shutting down...');
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
