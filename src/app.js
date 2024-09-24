import express from 'express';
import 'dotenv/config';
const app = express();
const api_port = process.env.API_PORT;

import movie_route from './routes/movie-route.js';
import director_route from './routes/director-route.js';
import producer_route from './routes/producer-router.js';
import user_route from './routes/user-route.js';

app.use(express.json());

app.use('/filme', movie_route);
app.use('/diretor', director_route);
app.use('/produtora', producer_route);
app.use('/usuario', user_route);

app.listen(api_port, () => {
    console.log("Server running at port", api_port);
});