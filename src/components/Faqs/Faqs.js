import React, { useState } from 'react';
import './Faqs.css';
import { Collapse } from "antd";
import Image from '../../assets/call-center-team-and-businessman-in-office-for-crm-865EA5H.jpg';


const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus element maxi  posuere. Fusce ut elementum lacus. Etiam sed molestie nibh. In fau felis eu lacus elementum, quis commodo lacus pellentesque.
`;
export const items = [
  {
    key: "1",
    label: "What is business consulting?",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "Why do businesses need consulting services?",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "How can a business consulting company help my business?",
    children: <p>{text}</p>,
  }
];


function Faqs() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className="faqs">
        <div className='faqs-container'>
            <div className="faqs-content">
              <h5>FAQs</h5>
              <h2>Frequently Asked Question</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed interd nisl sit amet tortor feu phasellus suscipit lorem ut bibendum lacinia elit velit hendrerit erat vel convalli nisi null quis nibh inte scelerisque turpis ornare felis.</p>
              <div className="faqs-text">
                <Collapse className='faqs-collapse' accordion items={items} />
              </div>
            </div>
            <div className="faqs-image">
              <img src={Image} alt='image'/>
            </div>
        </div>
    </div>
  )
}

export default Faqs;