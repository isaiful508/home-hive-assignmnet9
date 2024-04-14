

const ClientReviews = () => {
    return (
        <div className='container mx-auto'>
            <section className="my-24 flex flex-col lg:flex-row gap-12 rounded-xl bg-gradient-to-r from-[#FD650B] to-[#FFB400] px-16 py-24">

                <div className="flex items-center lg:pr-28">
                    <div className="space-y-5">
                        <h2 className="text-5xl text-white poppins-semibold">
                            Meet Our Super <br /> Clients
                        </h2>
                        <p className="text-white poppins-regular">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                        <button className="btn text-white bg-gradient-to-r from-[#FD650B] to-[#FFB400]">Show All</button>
                    </div>
                </div>

                {/* review container */}
                <div className="relative">
                    {/* next review */}
                    <div className="relative z-10 mb-16 opacity-40 p-10 rounded-lg bg-white">
                        <img className="absolute -left-5 -top-4 border-4 border-white rounded-full bg-white" src={"https://i.ibb.co/ZWy6gKH/client.png"} alt="" />
                        <p className="poppins-regular">We are providing the best and suitable home insurance services for the people who are interested to treatment</p>
                        <h4 className="mt-5 font-bold">Ilham Yuda</h4>
                        <p className="font-medium">Businessman</p>
                        <div className="flex justify-end">
                            <img src={"https://i.ibb.co/dc5jDqN/circles.png"} alt="" />
                        </div>
                    </div>

                    {/* current review */}
                    <div className="absolute z-20 top-40 lg:-left-28 lg:w-[430px] p-10 rounded-lg bg-white">
                        <img className="absolute -left-5 -top-4 border-4 border-white rounded-full bg-white" src={"https://i.ibb.co/ZWy6gKH/client.png"} alt="" />
                        <p className="poppins-regular">We are providing the best and suitable home insurance services for the people who are interested to treatment</p>
                        <h4 className="mt-5 font-bold">Ilham Yuda</h4>
                        <p className="font-medium">Businessman</p>
                        <div className="flex justify-end">
                            <img src={"https://i.ibb.co/dc5jDqN/circles.png"} alt="" />
                        </div>
                    </div>

                    {/* previous review */}
                    <div className="relative z-10 opacity-40 p-10 rounded-lg bg-white">
                        <img className="absolute -left-5 -top-4 border-4 border-white rounded-full bg-white" src={"https://i.ibb.co/ZWy6gKH/client.png"} alt="" />
                        <p className="poppins-regular">We are providing the best and suitable home insurance services for the people who are interested to treatment</p>
                        <h4 className="mt-5 font-bold">Ilham Yuda</h4>
                        <p className="font-medium">Businessman</p>
                        <div className="flex justify-end">
                            <img src={"https://i.ibb.co/dc5jDqN/circles.png"} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default ClientReviews;