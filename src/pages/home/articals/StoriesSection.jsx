import React from 'react';
import image1 from '../../../assets/image 98.png';
import image2 from '../../../assets/slider2.png';

const articles = [
  {
    image: image1,
    author: 'Sahabuddin Sagor',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
  },
  {
    image: image2,
    author: 'Nayem Khan',
    text: 'Key Takeaways from Robotics Invest 2023',
  },
  {
    image: image1,
    author: 'Sahabuddin Sagor',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
  },
  {
    image: image2,
    author: 'Nayem Khan',
    text: 'Key Takeaways from Robotics Invest 2023',
  },
  {
    image: image1,
    author: 'Sahabuddin Sagor',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
  },
  {
    image: image2,
    author: 'Nayem Khan',
    text: 'Key Takeaways from Robotics Invest 2023',
  },
  // Add more articles as needed
];

const StoriesSection = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Stories & Ideas</h2>
          <p className="mt-2 text-gray-600">The latest news and updates</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center">
                <img
                  className="w-24 h-24 object-cover rounded-sm   mr-4"
                  src={article.image}
                  alt={article.author}
                />
                <div>
                  <p className="text-sm text-blue-500">By: {article.author}</p>
                  <p className="mt-2 text-gray-600">{article.text}</p>
                </div>
              </div>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoriesSection;
