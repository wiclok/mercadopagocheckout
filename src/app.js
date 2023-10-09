import express from 'express';
import morgan from 'morgan';
import paymentsRoutes from './routes/payments.routes.js';
import { PORT } from './config/config.js';
import path from 'path';
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(paymentsRoutes)

app.use(express.json());
app.use(express.static(path.resolve('src/public')));

app.listen(PORT, () => {
    console.log('Server on port', PORT);
})