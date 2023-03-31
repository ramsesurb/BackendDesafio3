import express from 'express';
import ProductManager from '../ProductManager.js';
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const productos = new ProductManager ('../productos.json')

app.listen(PORT, () => {
console.log(`Servidor http escuchando en el puerto`+PORT)
})
app.get('/', async (req, res) => {
    res.send (`<h1 style="color:red;">Desafio 3 Express </h1>`)
})
app.get('/productos', async (req, res) => {
    const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
    const prods = await productos.getProducts(limit)
    res.send(prods)
})

app.get('/productos/:id', async (req, res) => {
   
    const id = parseFloat(req.params.id)
    const prodById = await productos.getByid(id)
    res.send(prodById)
})

