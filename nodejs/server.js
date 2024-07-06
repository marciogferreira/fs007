import express from 'express'
import UsuariosRoutes from './routes/UsuariosRoutes.js';

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
    return res.send('Hello World!');
});

app.use(UsuariosRoutes);


app.listen(3000, () => {
    console.log('Server running on port 3000');
})

