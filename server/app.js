const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const newsRoutes  =require('./routes/news');

const app = express();

app.use(express.json());
app.use(cors());

// .env file
dotenv.config({ path: 'server/.env' });

// mongoDB
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// routes
app.use('/api/news', newsRoutes);

// server | port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});