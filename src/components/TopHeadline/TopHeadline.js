import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {axios} from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    // useEffect(() => {
    //     fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=e39dd6a850984a609a617cee981df236")
    //     .then(res => res.json())
    //     .then(data => setArticles(data.articles))
    // }, [])
    useEffect(() =>{
        axios("https://newsapi.org/v2/top-headlines?country=us&apiKey=e39dd6a850984a609a617cee981df236")
        .then(data => setArticles(data.data.articles))
    }, [])
    return (
        <div>
            <h1>News: {articles?.length}</h1>
            {articles.map(article => <News article={article}></News>)}
        </div>
    );
};

export default TopHeadline;