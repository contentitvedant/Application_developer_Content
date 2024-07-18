import  { useState } from 'react';
import './Article.css';
import Navbar from '../Navbar/Navbar';


const Article = () => {
  const [isBrowsingContent, setIsBrowsingContent] = useState(false);

  const toggleBrowsingContent = () => {
    setIsBrowsingContent(!isBrowsingContent);
  };
  return (
    <>
<Navbar/>
    <div className='main-wrapper'>
      <div className={`hero-image ${isBrowsingContent ? 'browsing-content' : ''}`}>
        <div className='hero-content'>
          <div className='hc-label'>The Italian Dolomites</div>
          <div className='hc-desc'>
            Interview with Andy Free about his trip to the dolomites in Italy
          </div>
          <div className='hc-footer'>
            <div className='hcf-comments'>
              <span className='amount'>168</span> Comments
            </div>
            <div className='hcf-divider'></div>
            <div className='hcf-shares'>
              <span className='amount'>26.842</span> Shares
            </div>
            <div className='hcf-toggle' onClick={toggleBrowsingContent}>
              <p className='hcft-label'>More Articles</p>
              <div className='hcft-icon-holder'>
                <i className='hcft-icon  fa fa-chevron-down'></i>
                <i className='hcft-icon opened fa fa-times'></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='scroll-content'>
        {articles.map((article, index) => (
          <div className='sc-row' key={index}>
            <div className='content-article'>
              <div className='article-number'>{article.number}</div>
              <div className='article-info'>
                <div className='ai-label'>{article.label}</div>
                <div className='ai-desc'>{article.desc}</div>
                <div className='ai-footer'>
                  <div className='aif-comments'>
                    <span className='amount'>{article.comments}</span> Comments
                  </div>
                  <div className='aif-divider'></div>
                  <div className='aif-shares'>
                    <span className='amount'>{article.shares}</span> Shares
                  </div>
                </div>
              </div>
              <div className={`article-image ${article.className}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div></>
  );
};

const articles = [
  {
    number: '01',
    label: 'Visiting Vester Peak',
    desc: 'Everything you should know about hiking in the mountains',
    comments: '24',
    shares: '128',
    className: 'ca-1',
  },
  {
    number: '02',
    label: 'Trailing Together',
    desc: 'Walking among the nature in the Rocky Mountain National Park, Colorado',
    comments: '458',
    shares: '110',
    className: 'ca-2',
  },
  {
    number: '03',
    label: 'The Magic Pond',
    desc: 'The scenery is set like a Monet painting',
    comments: '1640',
    shares: '86.451',
    className: 'ca-3',
  },
  {
    number: '04',
    label: 'Beach Essentials',
    desc: 'What should you bring to the beach, and what beaches should you visit?',
    comments: '58',
    shares: '1.359',
    className: 'ca-4',
  },
  {
    number: '05',
    label: 'Romantic Camping',
    desc: 'We went to Norway to find out just how romantic it can be sleeping under the stars',
    comments: '14',
    shares: '36',
    className: 'ca-5',
  },
  {
    number: '06',
    label: 'Cave Explorers',
    desc: 'In USA there are over a thousand caves. We list every one that you should visit.',
    comments: '3590',
    shares: '129.547',
    className: 'ca-6',
  },
];

export default Article;
