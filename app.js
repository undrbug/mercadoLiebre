import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// obtenemos el nombre del directorio actual
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory where the file is located

//instanciamos express
const app = express();

//establecemos la carpeta public como carpeta de archivos estáticos
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//establecemos el puerto de escucha
const PORT = process.env.PORT || 3000;

//establecemos las rutas
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
    // res.sendFile(path.resolve('./views/home.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})

//iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
