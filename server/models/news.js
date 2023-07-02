const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    teaser: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('News', newsSchema, 'articles');