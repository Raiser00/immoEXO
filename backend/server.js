const cors = require('cors');

const express = require('express');
const app = express();
const PORT = process.env.PORT||5050;

app.use(express.json());
app.use(cors());

app.use('/assets/imageImmo', express.static('assets/imageImmo'));


const immo = {
    Nom : "Tipie de Manitob1",
    Prix: 12000,
    Description: "Tipie par lequel Manitob1 a débuter son aventure."
}

app.get('/api/immo', (req,res)=>{
    res.json(immo);
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});