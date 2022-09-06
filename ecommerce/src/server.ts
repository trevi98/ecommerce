import express, { Request, Response } from 'express';
import http from 'http2';

const app = express();

const server = http.createSecureServer({}, (req, res) => {
  app(req as unknown as Request, res as unknown as Response);
});
