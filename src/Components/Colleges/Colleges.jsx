import React, { useEffect, useState } from 'react';
import LatestColleges from './LatestColleges';
import { Helmet } from 'react-helmet-async';

const Colleges = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('https://admission-server-mahbubaly.vercel.app/colleges')
            .then(res => res.json())
            .then(data => {


                setColleges(data);
            });

    }, [])

    const [Search, setSearch] = useState('');
    console.log(Search);
    return (
        <>

            <Helmet>
                <title>Colleges</title>
            </Helmet>


            <div className='max-w-screen-xl mx-auto'>

                <div className='  flex justify-center my-7'>

                    <input
                        onChange={(e) => setSearch(e.target.value)}

                        type="search"
                        placeholder="Search by college name..."
                        className=" mt-1 md:w-1/2 md:py-5  border-red-300 md:px-3 px-2 py-2 border-b-4 border-b-teal-900 rounded-md  bg-white text-sm text-gray-700 font-semibold shadow-sm"
                    />

                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 p-4 my-8'>

                    {

                        colleges.filter((item) => {
                            return Search.toLowerCase() === 'Not Available' ? item : item.college_name.toLowerCase().includes(Search);
                        }).map(College => <LatestColleges
                            key={College._id}
                            College={College}


                        />


                        )


                    }





                </div>
            </div>


        </>
    );
};

export default Colleges;