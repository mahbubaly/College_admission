import React, { useEffect, useState } from 'react';
import LatestColleges from './LatestColleges';

const Colleges = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('Colleges.json')
            .then(res => res.json())
            .then(data => {


                setColleges(data);
            });

    }, [])
    return (
        <>

            <div className='max-w-screen-xl mx-auto'>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 p-4 my-8'>

                    {

                        colleges.map(College => <LatestColleges
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