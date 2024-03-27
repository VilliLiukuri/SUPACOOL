require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

// Palvele staattisia tiedostoja suoraan backend/public-kansiosta
app.use('/product/images', express.static('public/images'));
app.use('/models', express.static('public/models'));
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));


// Perusroute
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Käynnistä palvelin
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Olettaen että olet luonut 'Product' mallin
const Product = require('./models/Product');


// Lisää uusi tuote
app.post('/api/products', async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Hae kaikki tuotteet
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Esimerkki Express-reitistä ostotapahtuman käsittelyyn
app.post('/api/purchase', async (req, res) => {
    const { productId, userId } = req.body;
  
    try {
      // Tässä kohdassa voit esimerkiksi vähentää tuotteen varastomäärää
      // ja lisätä ostotapahtuman tietokantaan
  
      // Oletetaan, että sinulla on funktio handlePurchase joka hoitaa logiikan
      await handlePurchase(productId, userId);
  
      res.status(200).json({ message: "Purchase successful" });
    } catch (error) {
      res.status(500).json({ message: "Purchase failed", error: error.message });
    }
  });
  