import express from 'express';
import cors from 'cors';


export function initApp() {
  const app = express();
  app.use(cors({ origin: '*' }))

return app; 
}