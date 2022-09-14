import express, { Request, Response } from 'express';
import http from 'http2';
import fs from 'fs';
import path from 'path';
import router from './router';

const app = express();
app.use(router);

http
  .createSecureServer(
    {
      key: fs.readFileSync(path.resolve(__dirname, '../keys/key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, '../keys/cert.pem')),
    },
    (req, res) => {
      app(req as unknown as Request, res as unknown as Response);
    },
  )
  .listen(process.env.PORT || 5000, () => {
    console.log('started');
  });
