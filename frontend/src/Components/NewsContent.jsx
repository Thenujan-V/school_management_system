import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const NewsContent = () => {
    const [news, setNews] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Academic News', 'Sport News', 'Announcement'];

    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
  
    const filteredNews = selectedCategory === 'All'
      ? news
      : news.filter(item => item.category === selectedCategory);


    const newses = [
        {
            id: 1,
            title: "Children's Day A/L Section",
            description: "International Children's Day was celebrated today in our school with great fanfare. Among the high-class activities were...",
            image: 'https://media.npr.org/assets/img/2016/10/24/gettyimages-492378344-189a27a578d77ae118bb5f9c3e8e38111afe5971.jpg',
            date: '22 May 2024',
            category: 'Academic News'
          },
          {
            id: 2,
            title: "Children's Day Celebration 10 to 11 Section",
            description: "International Children's Day was celebrated today in our school with great fanfare. It includes Class 10/11 Division...",
            image: 'https://media.npr.org/assets/img/2016/10/24/gettyimages-492378344-189a27a578d77ae118bb5f9c3e8e38111afe5971.jpg',
            date: '22 May 2024',
            category: 'Academic News'
          },
          {
            id: 3,
            title: "National Milad Day Celebration",
            description: "National Miladun Nabi Festival 2023 today based on the circular of the Ministry of Education, the principal of our...",
            image: 'https://media.npr.org/assets/img/2016/10/24/gettyimages-492378344-189a27a578d77ae118bb5f9c3e8e38111afe5971.jpg',
            date: '22 May 2024',
            category: 'Announcement'
          },
          {
            id: 4,
            title: "National Level 1st Place in Maths Quiz",
            description: "Our school achieved the first place in the national level math quiz competition. This event showcased...",
            image: 'https://media.npr.org/assets/img/2016/10/24/gettyimages-492378344-189a27a578d77ae118bb5f9c3e8e38111afe5971.jpg',
            date: '22 May 2024',
            category: 'Sport News'
          },
      ];

  useEffect(() => {
    setNews(newses)
    // axios.get('/api/news')
    //   .then(response => setNews(response.data))
    //   .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
     <div className="container news-page">
      <div className="row">
        <div className="col-md-9">
          <h2 className="news-header">NEWS</h2>
          {filteredNews.map((item) => (
            <div className="news-item card mb-3" key={item.id}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={item.image} className="card-img" alt={item.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
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
                <li className="list-group-item" key={item.id}>
                  <a href={`/news/${item.id}`}>
                    <img src={item.image} alt={item.title} className="img-thumbnail" />
                    <span>{item.title}</span>
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
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
