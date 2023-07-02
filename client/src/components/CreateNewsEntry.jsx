import React, { useState } from 'react';
import axios from 'axios';

const CreateNewsEntry = () => {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [teaser, setTeaser] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/news', {
                title,
                image,
                teaser,
                content,
                author
            });
            console.log(response);
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h2>Create News Entry</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
                <textarea
                placeholder="Teaser"
                value={teaser}
                onChange={(e) => setTeaser(e.target.value)}
                ></textarea>
                <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateNewsEntry;