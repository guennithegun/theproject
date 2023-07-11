import React, { useState, useEffect } from 'react';
import CreateNewsEntry from './CreateNewsEntry';
import axios from 'axios';

const AdminNewsPage = () => {

    const [adminNews, setAdminNews] = useState([]);

    // variables for handleSubmit function
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [teaser, setTeaser] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    // useEffectfor initial adminNews Data
    useEffect(() => {
        fetchAdminNews();
    }, []);
    
    // get all news entries
    const fetchAdminNews = async () => {
        axios.get('http://localhost:5000/api/news/all')
            .then((response) => {
                setAdminNews(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    // handle the form submit and post data to DB
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
            fetchAdminNews();
            resetState();
        } catch(err) {
            console.log(err);
        }
    };

    // reset state after form submission
    const resetState = () => {
        setTitle('');
        setImage('');
        setTeaser('');
        setContent('');
        setAuthor('');
    };

    return (
        <div className="p-8">
            <h1 className="text-xl font-semibold leading-7 text-gray-900">Manage News Entries</h1>
            <div className="overflow-auto">
                <table className="table-auto w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                            <th scope="col" className="px-6 py-4">Title</th>
                            <th scope="col" className="px-6 py-4">Create Date</th>
                            <th scope="col" className="px-6 py-4">Author</th>
                            <th scope="col" className="px-6 py-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adminNews.map(entry => (
                            <tr 
                                key={entry._id}
                                className="border-b dark:border-neutral-500"
                            >
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{entry.title}</td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{entry.createdAt.slice(0, 10)}</td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{entry.author}</td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium flex flex-row justify-around items-center">
                                    <span>
                                        <svg className="w-6 h-6 text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                            <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
                                            <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
                                        </svg>
                                    </span>
                                    <span>
                                    <svg className="w-5 h-5 text-red-800 dark:text-white text-xs" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <CreateNewsEntry 
                title={title}
                setTitle={setTitle}
                image={image}
                setImage={setImage}
                teaser={teaser}
                setTeaser={setTeaser}
                content={content}
                setContent={setContent}
                author={author}
                setAuthor={setAuthor}
                handleSubmit={handleSubmit}
            />
        </div>
    )

};

export default AdminNewsPage;