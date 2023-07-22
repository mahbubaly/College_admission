import { list } from 'postcss';
import React from 'react';
import { Link } from 'react-router-dom';

const LatestColleges = ({ College }) => {
    console.log(College);
    const { college_image, college_name, admission_dates, events, research_history, sports } = College;
    return (
        <>
            <a  className="block bg_shawdow  rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                    alt="Home"
                    src={college_image}
                    className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">



                    <div>
                        <dt className="sr-only">Address</dt>

                        <dd className="font-medium hover:underline">{college_name}</dd>
                    </div>

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

                    <div className='flex justify-end'>
                        <Link to='/details'><button className='btn btn-primary my-5 '>Details </button></Link>
                    </div>

                </div>
            </a>
        </>
    );
};

export default LatestColleges;