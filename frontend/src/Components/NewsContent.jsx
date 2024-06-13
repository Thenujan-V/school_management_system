import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getEvents } from '../Services/StudentsServices';

export const NewsContent = () => {
    const [news, setNews] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'academic', 'sports', 'achievements', 'festival', 'celebrations', 'sportsmeet'];

    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
  
    const filteredNews = selectedCategory === 'All'
      ? news
      : news.filter(item => item.category === selectedCategory);

  useEffect(() => {
    const fetchEvents = async() => {
      try{
        const response = await getEvents()
        setNews(response.data)
      }
      catch(error){
        console.log('error :', error)
      }
    }
    fetchEvents()
  }, []);
console.log('data :', news)
  return (
     <div className="container news-page">
      <div className="row">
        <div className="col-md-9">
          <h2 className="news-header">NEWS</h2>
          {filteredNews.map((item) => (
            <div className="news-item card mb-3" key={item.event_id}>
              <div className="row no-gutters">
                <div className="col-md-4">
                <img src={item.photo_url} className="card-img" alt={item.event_name} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.event_name}</h5>
                    <h5 className="card-title">{item.event_date}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-3">
          <div className="latest-news-widget mb-3">
            <h3>Latest News</h3>
            <ul className="list-group">
              {news.slice(0, 5).map((item) => (
                <li className="list-group-item" key={item.event_id}>
                  <a href={`/news/${item.id}`}>
                  <img src={item.photo_url} className="card-img" alt={item.event_name} />
                    <span>{item.event_name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="categories-widget">
            <h3>News Categories</h3>
            <ul className="list-group">
              {categories.map(category => (
                <li 
                  key={category} 
                  className={`list-group-item ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                  style={{ cursor: 'pointer' }}
                >
                  {category.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
