import React, { useEffect } from 'react';
import './Services.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from '../../assets/people-discussing-business-plan-ZCZ3NHQ-1536x864.jpg';
import Img from '../../assets/crm-black-people-or-manager-in-call-center-coachin-GP7J4CQ.jpg';

function Services() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='services'>
      <div className='services-container'>
        <div className='services-recent'>
          <h3>Recent Service</h3>
          <hr />
          <ul>
            <li>
              <FaLongArrowAltRight className='services-arrow-icon' />
              <h3>Business Strategy</h3>
            </li>
            <li>
              <FaLongArrowAltRight className='services-arrow-icon' />
              <h3>Financial Consulting</h3>
            </li>
            <li>
              <FaLongArrowAltRight className='services-arrow-icon' />
              <h3>Marketing & Branding</h3>
            </li>
            <li>
              <FaLongArrowAltRight className='services-arrow-icon' />
              <h3>Information Technology</h3>
            </li>
            <li>
              <FaLongArrowAltRight className='services-arrow-icon' />
              <h3>Operations & Supply Chain</h3>
            </li>
            <li>
              <FaLongArrowAltRight className='services-arrow-icon' />
              <h3>Sales & Development</h3>
            </li>
          </ul>
        </div>
        <div className='services-det'>
          <img src={Image} alt='image' />
          <h2>Financial planning and analysis.</h2>
          <p className='ser-par'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus diam diam, pharetra sollicitudin felis scelerisque eu. Mauris dictum faucibus tellus, sed finibus dui dictum et. Duis elementum et lorem dignissim posuere. Aliquam at purus vel nisi lobortis molestie. Pellentesque iaculis, enim ac suscipit convallis, ligula tellus ornare leo, et ornare ex nulla a augue. Sed nibh nisl, aliquam sit amet faucibus et, varius sit amet eros. Mauris sed ornare urna. Integer at sapien diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis venenatis laoreet fringilla. In in odio non nibh pretium pretium. Duis elit justo, gravida nec dui ornare, finibus interdum purus. Nunc vel massa velit. Integer pellentesque, turpis sed condimentum commodo, nibh turpis dapibus lectus, aliquet suscipit lectus dolor quis nisi. Donec viverra sapien dui, sed accumsan tellus placerat quis. Vivamus fermentum magna id mauris elementum congue.</p>
          <div className='services-det-row'>
           <ul>
            <li>
              <FaLongArrowAltRight className='services-arrow-icon' />
              <p>Duis elementum et lorem dignissim posuere.</p>
            </li>
            <li>
              <FaLongArrowAltRight className='services-arrow-icon' />
              <p>libero in dapibus ullamcorper nibh lacus.</p>
            </li>
            <li>
              <FaLongArrowAltRight className='services-arrow-icon' />
              <p>Suspendisse efficitur gravida elementum nullam.</p>
            </li>
            <li>
              <FaLongArrowAltRight className='services-arrow-icon' />
              <p>Mauris aliquet mi lorem vulputate vehicula suspendi.</p>
            </li>
            <li>
              <FaLongArrowAltRight className='services-arrow-icon' />
              <p>Donec blandit enim vel vulputate facilisis lorem.</p>
            </li>
            <li>
              <FaLongArrowAltRight className='services-arrow-icon' />
              <p>Quisque sit amet felis ac velit pharetra ultricies.</p>
            </li>
            <li>
              <FaLongArrowAltRight className='services-arrow-icon' />
              <p>Cras a libero vitae felis vestibulum blandit a vitae.</p>
            </li>
           </ul>
           <div className='services-det-image'>
             <img src={Img} alt='image'/>
           </div>
          </div>
          <p className='ser-par'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus diam diam, pharetra sollicitudin felis scelerisque eu. Mauris dictum faucibus tellus, sed finibus dui dictum et. Duis elementum et lorem dignissim posuere. Aliquam at purus vel nisi lobortis molestie. Pellentesque iaculis, enim ac suscipit convallis, ligula tellus ornare leo, et ornare ex nulla a augue. Sed nibh nisl, aliquam sit amet faucibus et, varius sit amet eros. Mauris sed ornare urna. Integer at sapien diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis venenatis laoreet fringilla. In in odio non nibh pretium pretium. Duis elit justo, gravida nec dui ornare, finibus interdum purus. Nunc vel massa velit. Integer pellentesque.</p>
        </div>
      </div>
    </div>
  )
}

export default Services;