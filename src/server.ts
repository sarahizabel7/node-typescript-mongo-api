require("dotenv").config();
import app from './config/app';
import db from './config/database';
import environment from './config/environment';

db.on('error', console.error);
db.once('open', () => {
  console.log('Connected at MongoDB.');
  const port = environment.server.port;

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});