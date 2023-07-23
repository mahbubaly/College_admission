import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {

    const detailsId = useLoaderData();
    console.log(detailsId);
    const { college_image, college_name, details, admission_dates, events, research_history, sports } = detailsId;
    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8 bg-gray-100">





                    <div className="items-center ">
                        <div className=" h-64 flex justify-center sm:h-80 lg:h-full">
                            <img className='rounded-md my-5' src={college_image} alt="" />
                        </div>
                        <span
                            className="   lg:bg-gray-100"
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold  sm:text-3xl">
                                {college_name}
                            </h2>

                            <p className="mt-4 text-gray-600">
                                {details}
                            </p>


                            <div>
                                <h1 className='font-semibold my-4 hover:underline'>Admission Dates: </h1>
                                <div className='grid grid-cols-3 gap-2'>
                                    <div className=''>
                                        <p>Fall: {admission_dates.fall}</p>
                                    </div>
                                    <div>
                                        <p>Spring: {admission_dates.spring}</p>
                                    </div>
                                    <div>
                                        <p>Summer: {admission_dates.summer}</p>
                                    </div>
                                </div>



                            </div>

                            <div className=''>
                                <h1 className='font-semibold my-4 hover:underline'>Events: </h1>
                                {
                                    events.map(event => <li>
                                        {event}
                                    </li>)
                                }
                            </div>

                            <div className=''>
                                <h1 className='font-semibold my-4 hover:underline'>Research history: </h1>
                                {
                                    research_history.map(research => <>
                                        <h1><span className='font-semibold '>Research Year:</span> {research.year}</h1>
                                        <h1><span className='font-semibold '>Research Event:</span>  {research.event}</h1>
                                        <h1 className='mb-5'><span className='font-semibold '>About: </span>   {research.description}</h1>
                                    </>)
                                }
                            </div>


                            <div className=''>
                                <h1 className='font-semibold my-4 hover:underline'>Sports: </h1>
                                {
                                    sports.map(sport => <li>
                                        {sport}
                                    </li>)
                                }
                            </div>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                            >
                               Apply Now
                            </a>
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
};

export default Details;