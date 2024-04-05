import React, { useEffect } from 'react';
import Call from '../../components/Call/Call';
import Faqs from '../../components/Faqs/Faqs';
import Images from '../../components/Images/Images';
import Landing from '../../components/Landing/Landing';
import News from '../../components/News/News';
import Ourservices from '../../components/Ourservices/Ourservices';
import Vision from '../../components/Vision/Vision';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Landing />
      <Call />
      <Ourservices />
      <Vision />
      <Faqs />
      <Images />
      <News />
    </>
  )
}

export default Home;