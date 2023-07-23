import React from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
    return (
        <>

            <div className='max-w-screen-xl mx-auto'>


                <div className='flex my-10 justify-center mx-auto border-b-4 rounded-lg border-b-[#003F62] lg:w-[50%]'>
                    <h1 className='font-bold text-xl'>Some university taking admission which are given blow:</h1>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 lg:my-10 my-5 gap-5'>

                    <a href="#" className="group relative block bg-black">
                        <img
                            alt="Developer"
                            src="https://www.usnews.com/object/image/00000183-f11b-d85c-a5cf-f79f3f0f0000/gettyimages-98701863.jpg?update-time=1666197493934&size=responsive640"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">

                                The royal University
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">conventry , England</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >

                                    <Link
                                        to='/applyNow'
                                        className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                    >
                                        Apply Now
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="group relative block bg-black">
                        <img
                            alt="Developer"
                            src="https://uniacco.com/blog/wp-content/uploads/2019/12/shutterstock_1062917057.jpg"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">

                                The royal University
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">conventry , England</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >

                                    <Link
                                        to='/applyNow'
                                        className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                    >
                                        Apply Now
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="group relative block bg-black">
                        <img
                            alt="Developer"
                            src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/31065490-026b-4136-bbeb-e41894358a97-worlds-most-beautiful-universities-royal-holloway.jpg"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">

                                The royal University
                            </p>

                            <p className="text-xl font-bold text-white sm:text-2xl">conventry , England</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >

                                    <Link
                                        to='/applyNow'
                                        className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                    >
                                        Apply Now
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

        </>
    );
};

export default Admission;