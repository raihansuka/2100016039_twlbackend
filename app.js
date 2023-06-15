const express = require('express');
const app = express();
const port = 3000; // Ganti dengan port yang Anda inginkan
const ProductRouter = require('./routes/product');
const bodyParser = require('body-parser');
const Longgger = require('./middlewares/longger');

// Menggunakan middleware bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//implementasi custom middlewares 
app.use(Longgger);

// Mengarahkan rute ke file produk
app.use('/products', ProductRouter);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
