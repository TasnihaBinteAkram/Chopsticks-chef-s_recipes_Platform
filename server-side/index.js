const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');
const categories = require('./data/categories.json');
app.use(cors());

app.get('/', (req, res) => {
    res.send('running')
})

app.get('/chefs',(req, res) => {
    res.send(chefs)
})

app.get('/recipes', (req, res) => {
    res.send(recipes)
})

app.get('/categories',(req,res)=>{
    res.send(categories)
})

app.get('/chefs/:id',(req,res)=>{
    const id = req.params.id;
    const singleChef = chefs.find(chef => chef.id == id)
    res.send(singleChef)
})

app.get('/recipes/:id', (req,res) => {
    const id = req.params.id;
    const singleRecipe = recipes.find(rec => rec.id == id);
    res.send(singleRecipe)
})

app.listen(port, () => {
    console.log(`running on ${port}`);
})