const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

// Define routes
app.use('/api/customers', require('./routes/api/customers'));
app.use('/api/orders', require('./routes/api/orders'));
app.use('/api/menu-items', require('./routes/api/menuItems'));
app.use('/api/restaurants', require('./routes/api/restaurants'));
app.use('/api/item-ratings', require('./routes/api/itemRatings'));
app.use('/api/order-ratings', require('./routes/api/orderRatings'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
