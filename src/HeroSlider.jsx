import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router';

const HeroSlider = () => {
  return (
   <div className='w-11/12 mx-auto'>
     <div className="w-full h-[250px] md:h-[350px] lg:h-[450px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co/kscX6Lvq/resta.jpg"
              className="w-full h-full object-cover"
              alt="Slide 1"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Welcome to <span className='text-blue-400'>Hero Restaurant</span> Website</h2>
                <p className="text-2xl md:text-xl">Discover amazing food that gives energy.</p>
                <Link className='btn cursor-pointer btn-accent mt-3 hover:bg-gray-400'>All Foods</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co/bj2gfDSv/turkish-pistachio-baklava-big.webp"
              className="w-full h-full object-cover"
              alt="Slide 2"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">New Taste Is Waiting For You</h2>
                <p className="text-2xl md:text-xl">Join us on a journey of taste.</p>
                 <Link className='btn cursor-pointer btn-accent mt-3 hover:bg-gray-400'>All Foods</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co/k26kpxsf/con.jpg"
              className="w-full h-full object-cover"
              alt="Slide 3"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Connect With Us</h2>
                <p className="text-2xl md:text-xl">Stay ahead with our Hero Restaurant.</p>
                 <Link to={'/allfood'} className='btn cursor-pointer btn-accent mt-3 hover:bg-gray-400'>All Foods</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
   </div>
  );
};

export default HeroSlider;