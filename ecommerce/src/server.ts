import express, { Request, Response } from 'express';
import http from 'http2';
import fs from 'fs';
import path from 'path';
import initDatabase from './database';
import router from './router';
require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env.production',
});
const app = express();
app.use(express.json());
app.use(router);
async function init() {
  await initDatabase();
  http
    .createSecureServer(
      {
        key: fs.readFileSync(path.resolve(__dirname, '../keys/key.pem')),
        cert: fs.readFileSync(path.resolve(__dirname, '../keys/cert.pem')),
        allowHTTP1: true,
      },
      (req, res) => {
        app(req as unknown as Request, res as unknown as Response);
      },
    )
    .listen(process.env['PORT'] || 5000, () => {
      console.log('started');
    });
}
init();
