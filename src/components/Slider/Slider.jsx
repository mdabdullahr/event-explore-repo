import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[200px] md:h-[400px] lg:h-[875px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co.com/MyhdfJQM/sports.jpg"
              alt="Sports Event"
              className="w-full h-full object-cover"
            />
            <div data-aos="zoom-in" className="absolute bottom-4 md:bottom-10 left-4 md:left-10 md:bg-black bg-opacity-60 text-white p-2 md:p-4 rounded max-w-[90%] md:max-w-md transition-transform duration-500 hover:scale-105">
              <h2 className="text-base md:text-2xl font-bold">City Sports Festival</h2>
              <p className="text-sm md:text-base">
                Experience thrilling local sports events and competitions.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co.com/G3Jn94nY/art.jpg"
              alt="Art Exhibition"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 md:bg-black bg-opacity-60 text-white p-2 md:p-4 rounded max-w-[90%] md:max-w-md transition-transform duration-500 hover:scale-105">
              <h2 className="text-base md:text-2xl font-bold">Modern Art Expo</h2>
              <p className="text-sm md:text-base">
                Explore local creativity through stunning art pieces.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co.com/Skvy517/workshop.jpg"
              alt="Workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 md:bg-black bg-opacity-60 text-white p-2 md:p-4 rounded max-w-[90%] md:max-w-md transition-transform duration-500 hover:scale-105">
              <h2 className="text-base md:text-2xl font-bold">Tech Skills Workshop</h2>
              <p className="text-sm md:text-base">
                Learn and upgrade your skills with expert-led sessions.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co.com/GQnYSXKP/confarence.jpg"
              alt="Conference"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 md:bg-black bg-opacity-60 text-white p-2 md:p-4 rounded max-w-[90%] md:max-w-md transition-transform duration-500 hover:scale-105">
              <h2 className="text-base md:text-2xl font-bold">Business Conference 2025</h2>
              <p className="text-sm md:text-base">
                Join top minds discussing innovation and entrepreneurship.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;