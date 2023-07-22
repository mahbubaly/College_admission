import React from 'react';
import img1 from '../../assets/Images/1.jpg'
import img2 from '../../assets/Images/2.jpg'
import img3 from '../../assets/Images/3.jpg'
import img4 from '../../assets/Images/4.jpg'
import img5 from '../../assets/Images/5.jpg'
import img6 from '../../assets/Images/6.jpg'

const GraduatesGroups = () => {

    return (
        <>


            <div className='max-w-screen-xl mx-auto'>

                <div className='flex my-10 justify-center mx-auto border-b-4 rounded-lg border-b-[#003F62] lg:w-[25%]'>
                    <h1 className='font-bold text-xl'>Recent Graduated Group</h1>
                </div>


                <div className="carousel w-full my-10">
                    <div id="slide1" className="carousel-item relative w-full">

                        <a className="group relative block bg-black">
                            <img src={img6} className="w-full" />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                                    Developer
                                </p>

                                <p className="text-xl font-bold text-white sm:text-2xl">Royal University</p>

                                <div className="">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-sm text-white">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                            perferendis hic asperiores quibusdam quidem voluptates doloremque
                                            reiciendis nostrum harum. Repudiandae?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">

                        <a className="group relative block bg-black">
                            <img src={img2} className="w-full" />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                                    Developer
                                </p>

                                <p className="text-xl font-bold text-white sm:text-2xl">Royal University</p>

                                <div className="">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-sm text-white">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                            perferendis hic asperiores quibusdam quidem voluptates doloremque
                                            reiciendis nostrum harum. Repudiandae?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">

                        <a className="group relative block bg-black">
                            <img src={img3} className="w-full" />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                                    Developer
                                </p>

                                <p className="text-xl font-bold text-white sm:text-2xl">Royal University</p>

                                <div className="">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-sm text-white">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                            perferendis hic asperiores quibusdam quidem voluptates doloremque
                                            reiciendis nostrum harum. Repudiandae?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">

                        <a className="group relative block bg-black">
                            <img src={img4} className="w-full justify-center flex" />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                                    Developer
                                </p>

                                <p className="text-xl font-bold text-white sm:text-2xl">Royal University</p>

                                <div className="">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-sm text-white">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                            perferendis hic asperiores quibusdam quidem voluptates doloremque
                                            reiciendis nostrum harum. Repudiandae?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default GraduatesGroups;