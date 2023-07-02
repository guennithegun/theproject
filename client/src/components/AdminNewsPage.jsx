import React, { useState, useEffect } from 'react';
import CreateNewsEntry from './CreateNewsEntry';
import axios from 'axios';

const AdminNewsPage = () => {

    const [adminNews, setAdminNews] = useState([]);

    // get all news entries
    useEffect(() => {
        axios.get('http://localhost:5000/api/news/all')
            .then((response) => {
                setAdminNews(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h2>All News</h2>
            {adminNews.map(entry => (
                <div key={entry._id}>
                    <h3>{entry.title}</h3>
                    <p>{entry.teaser}</p>
                    <p>{entry.createdAt.slice(0, 10)}</p>
                    <p>{entry.auhtor}</p>
                </div>
            ))}

            <CreateNewsEntry />
        </div>
    )

};

export default AdminNewsPage;