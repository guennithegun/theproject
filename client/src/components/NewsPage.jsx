import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewsPage = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/news')
            .then((response) => {
                setNews(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h2>News</h2>
            {news.map(entry => (
                <div key={entry._id}>
                    <h3>{entry.title}</h3>
                    <p>{entry.teaser}</p>
                    <p>{entry.createdAt.slice(0, 10)}</p>
                    <p>{entry.auhtor}</p>
                </div>
            ))}
        </div>
    )
}

export default NewsPage;