import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
//import AboutPage from './components/AboutPage';
//import WhatWeDoPage from './components/WhatWeDoPage';
//import ContactPage from './components/ContactPage';
import NewsPage from './components/NewsPage';
//import NewsDetailPage from './components/NewsDetailPage';
//import NewsListPage from './components/NewsListPage';
import AdminNewsPage from './components/AdminNewsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/*<Route path="/about" component={AboutPage} />
        <Route path="/what-we-do" component={WhatWeDoPage} />
  <Route path="/contact" component={ContactPage} />*/}
        <Route exact path="/news" element={<NewsPage />} />
        {/*<Route path="/news/all" component={NewsListPage} />
        <Route path="/news/:id" component={NewsDetailPage} />*/}
        <Route path="/admin/news" element={<AdminNewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;