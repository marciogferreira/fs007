import express from 'express'
import rotasPrivadas from './routes/RotasPrivadas.js';
import rotasPublicas from './routes/RotasPublicas.js';
import { db } from './config/conexao.js';
import cors from 'cors';
// async function createDB() {
//     await db.sync({
//         alter: true,
//         logging: false
//     });
// }
// createDB();

const app = express()
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    return res.send('Hello World!');
});

app.use('/api', rotasPublicas);
app.use('/api', rotasPrivadas);

app.use((error, request, response, next) => {
    return response.status(500).json({
        message: error.message
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})

