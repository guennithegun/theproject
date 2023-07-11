const express = require('express');
const router = express.Router();
const News = require('../models/news');

// get the latest news entries
router.get('/', async (req, res) => {
    try {
        const news = await News.find().sort({ createdAt: -1 }).limit(5);
        res.json(news);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

// get all news entries
router.get('/all', async (req, res) => {
    try {
        const news = await News.find().sort({ createdAt: -1 });
        res.json(news);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

// create a news entry
router.post('/', async (req, res) => {
    const { title, image, content, teaser, author } = req.body;

    const news = new News({
        title,
        image,
        content,
        teaser,
        author
    });

    try {
        const newNews = await news.save();
        res.status(201).json(newNews);
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedNews = await News.findByIdAndDelete(req.params.id);
        if (!deletedNews) {
            return res.status(404).json({ error: 'News entry not found!' });
        }
        res.json({ message: 'News entry deleted sucessfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;