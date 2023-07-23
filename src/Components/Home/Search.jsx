import React, { useEffect, useState } from 'react';
import '../../Components/style.css'
import LatestColleges from '../Colleges/LatestColleges';

const Search = () => {

    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('https://admission-server-mahbubaly.vercel.app/colleges')
            .then(res => res.json())
            .then(data => {
                const sliceData = data.slice(0, 3);

                setColleges(sliceData);
            });

    }, [])


    const [Search, setSearch] = useState('');
    console.log(Search);

    return (
        <>

            <div className='mx-auto  max-w-screen-xl'>
                <div className='  flex justify-center my-7'>

                    <input
                        onChange={(e) => setSearch(e.target.value)}

                        type="search"
                        placeholder="Search by college name..."
                        className=" mt-1 md:w-1/2 md:py-5  border-red-300 md:px-3 px-2 py-2 border-b-4 border-b-teal-900 rounded-md  bg-white text-sm text-gray-700 font-semibold shadow-sm"
                    />

                </div>


                <div>

                    <div className='flex my-10 justify-center mx-auto border-b-4 rounded-lg border-b-[#003F62] w-[25%]'>
                        <h1 className='font-bold text-xl'>Latest Colleges</h1>
                    </div>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 p-4 my-8'>

                        {

                            colleges.filter((item) => {
                                return Search.toLowerCase() === '' ? item : item.college_name.toLowerCase().includes(Search);
                            }).map(College => <LatestColleges
                                key={College._id}
                                College={College}


                            />


                            )


                        }





                    </div>
                </div>
            </div>

        </>
    );
};

export default Search;