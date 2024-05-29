import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Typewriter from 'typewriter-effect'
import img1 from '../assets/photo-1531297484001-80022131f5a1.avif';
import img2 from '../assets/photo-1519817914152-22d216bb9170.avif';
import img3 from '../assets/photo-1610632380989-680fe40816c6.avif';

function Home() {
  return (
    <div className='text-white w-full h-[89%] relative'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-full"
      >
        <SwiperSlide className="w-full h-full">
          <img src={img1} alt="" className='w-full h-full object-fill' />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <img src={img2} alt="" className='w-full h-full object-fill' />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <img src={img3} alt="" className='w-full h-full object-fill' />
        </SwiperSlide>
      </Swiper>
      <div className='text-yellow-500 font-semibold font-serif flex flex-col absolute top-[10%] left-1/2 transform -translate-x-1/2 items-center justify-center z-10 p-4 md:top-[20%]'>
        <h2 className='text-2xl md:text-4xl mb-3 text-center'>
          Hello, I'm Zaid Shaikh
        </h2>
        <div className='text-lg md:text-2xl text-center'>
          <Typewriter
            options={{
              strings: ["Full Stack Web Developer", "Tech Enthusiast", "Nature Lover"],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
