import React, { useState, useEffect } from 'react';
import './FAQs.css';
import Faqs from '../../components/Faqs/Faqs';
import Call from '../../components/Call/Call';
import { Collapse } from "antd";
import { items } from '../../components/Faqs/Faqs';

function FAQs() {

  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='faqspage'>
        <Faqs />
        <Call />
        <div className='faqs-container'>
            <div className="faqs-content">
              <div className="faqs-text">
                <Collapse className='faqs-collapse' accordion items={items} />
              </div>
            </div>
            <div className="faqs-content">
              <div className="faqs-text">
                <Collapse className='faqs-collapse' accordion items={items} />
              </div>
            </div>
        </div>
    </div>
  )
}

export default FAQs;