import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import bgImage from '../../../assets/Group 364 (1).png';
import image1 from "../../../assets/slider1.png";
import image2 from "../../../assets/slider2.png";
import image3 from "../../../assets/slider3.png";



const SliderSection = () => {
  return (
    <div className="bg-gray-100 py-8" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">State of USA</h2>
          <div className="mt-4 inline-flex items-start">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full">2024</button>
            <svg className="w-4 h-4 ml-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <p className="mt-2 text-gray-600">
            Click through the slides or download the report to view natively on your device.
          </p>
        </div>
        <Swiper
        spaceBetween={10}
        slidesPerView={2}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
   
      </Swiper>
       <div className='flex justify-between'>
       <div className="mt-4 flex justify-center items-center space-x-4">
          <button className="btn bg-white rounded-full">←</button>
          <span className="text-gray-600">Pages 1 and 2 of 37</span>
          <button className="btn bg-white rounded-full">→</button>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Download the 2023 Report</button>
        </div>
       </div>
      </div>
    </div>
  );
};

export default SliderSection;
