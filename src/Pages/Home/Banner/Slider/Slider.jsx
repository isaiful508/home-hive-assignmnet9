import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';


const Slider = () => {
    return (


        // <div>
        //     <Swiper
        //         navigation={true}
        //         modules={[Navigation]}
        //         loop={true}
        //         className='w-[500px] md:w-[768px] lg:w-[1024px] xl:w-[1280] 2xl:w-[1536px]  '>

        //         <SwiperSlide>
        //             <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
        //                 <div className="hero-overlay bg-opacity-60"></div>
        //                 <div className="hero-content text-center text-neutral-content">
        //                     <div className="max-w-md">
        //                         <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        //                         <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //                         <button className="btn btn-primary">Get Started</button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </SwiperSlide>

        //         <SwiperSlide>
        //             <div className="relative h-[80vh]">
        //                 <div className="absolute inset-0 bg-cover bg-center bg-[url('https://i.ibb.co/yNN9DGh/r2.jpg')]">
        //                 </div>
        //                 <div className="absolute inset-0 flex justify-center items-center">
        //                     <div className='p-2 text-center text-white'>
        //                         <h2 className='text-5xl  poppins-semibold'>Luxury Residence here</h2>
        //                         <p className='poppins-medium mt-6'>Whether you are looking to sell or let your home or want to buy or rent a home, <br /> we are really are the people for you to come to.</p>
        //                         <div className='text-center'>
        //                             <button className='mt-6 poppins-regular btn text-white bg-[#FD650B] outline-none'>Explore More</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </SwiperSlide>

        //         <SwiperSlide>
        //             <div className="relative h-[80vh]">
        //                 <div className="absolute inset-0 bg-cover bg-center bg-[url('https://i.ibb.co/pjZXGWJ/r3.jpg')]">
        //                 </div>
        //                 <div className="absolute inset-0 flex justify-center items-center">
        //                     <div className='p-2 text-center text-white'>
        //                         <h2 className='text-5xl  poppins-semibold'>Luxury Residence here</h2>
        //                         <p className='poppins-medium mt-6'>Whether you are looking to sell or let your home or want to buy or rent a home, <br /> we are really are the people for you to come to.</p>
        //                         <div className='text-center'>
        //                             <button className='mt-6 poppins-regular btn text-white bg-[#FD650B] outline-none'>Explore More</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </SwiperSlide>

        //     </Swiper>
        // </div>

















        <div>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                loop={true}
                className='w-[500px] md:w-[768px] lg:w-[1024px] xl:w-[1280] 2xl:w-[1536px]  '>
                <SwiperSlide>

                    <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/4SX3wXs/banner1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl poppins-semibold">Luxury Residence here</h1>
                                <p className="mb-5 poppins-medium">Whether you are looking to sell or let your home or want to buy  or rent a home, we are really are the people for you to come to.</p>
                                <button className="btn poppins-regular text-white bg-gradient-to-r from-[#FD650B] to-[#FFB400]">Explore More</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/XJjMbf7/banner2.jpg)' }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl poppins-semibold">Luxury Residence here</h1>
                                <p className="mb-5 poppins-medium">Whether you are looking to sell or let your home or want to buy  or rent a home, we are really are the people for you to come to.</p>
                                <button className="btn poppins-regular text-white bg-gradient-to-r from-[#FD650B] to-[#FFB400]">Explore More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/fvNqW9w/banner3.jpg)' }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl poppins-semibold">Luxury Residence here</h1>
                                <p className="mb-5 poppins-medium">Whether you are looking to sell or let your home or want to buy  or rent a home, we are really are the people for you to come to.</p>
                                <button className="btn poppins-regular text-white bg-gradient-to-r from-[#FD650B] to-[#FFB400]">Explore More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;