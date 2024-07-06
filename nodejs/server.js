import express from 'express'
import rotasPrivadas from './routes/RotasPrivadas.js';
import rotasPublicas from './routes/RotasPublicas.js';

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
    return res.send('Hello World!');
});

app.use(rotasPublicas);
app.use('/api', rotasPrivadas);

app.listen(3000, () => {
    console.log('Server running on port 3000');
})

