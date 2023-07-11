import React from 'react';

const CreateNewsEntry = ({
    title,
    setTitle,
    image,
    setImage,
    teaser,
    setTeaser,
    content,
    setContent,
    author,
    setAuthor,
    handleSubmit
}) => {

    return (
        <div className="mt-5">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Create News Entry</h2>
                <p className="text-sm leading-6 text-gray-600">
                    Here is an overview of created news entries and the possibility to edit them and create new entries.
                </p>
                <form onSubmit={handleSubmit} className="max-w-lg">
                    <div className="mb-5">
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                            Title
                        </label>
                        <input
                        id="title"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="imageUrl" className="block text-sm font-medium leading-6 text-gray-900">
                            Image URL
                        </label>
                        <input
                        id="imageUrl"
                        type="text"
                        placeholder="Image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="teaser" className="block text-sm font-medium leading-6 text-gray-900">
                            Teaser
                        </label>
                        <textarea
                        id="teaser"
                        placeholder="Teaser"
                        value={teaser}
                        onChange={(e) => setTeaser(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        ></textarea>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="content" className="block text-sm font-medium leading-6 text-gray-900">
                            Content
                        </label>
                        <textarea
                        id="content"
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        ></textarea>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="author" className="block text-sm font-medium leading-6 text-gray-900">
                            Author
                        </label>
                        <input
                        id="author"
                        type="text"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                </form>
        </div>
    );
}

export default CreateNewsEntry;