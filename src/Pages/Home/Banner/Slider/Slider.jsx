import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <div>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                loop={true}
                className='w-[500px] md:w-[768px] lg:w-[1024px] xl:w-[1280] 2xl:w-[1536px]  '>
                <SwiperSlide>
                    <div className="slide bg-cover bg-center bg-[url('https://i.ibb.co/ZMngvnM/r1.jpg')] h-[80vh] flex justify-center items-center">
                        <h2 className='text-white'>Slide 1</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide bg-cover bg-center bg-[url('https://i.ibb.co/yNN9DGh/r2.jpg')] h-[80vh] flex justify-center items-center">
                        <h2 className='text-white'>Slide 2</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide bg-cover bg-center bg-[url('https://i.ibb.co/pjZXGWJ/r3.jpg')] h-[80vh] flex justify-center items-center">
                        <h2 className='text-white'>Slide 3</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;