import React from 'react';
import pdf1 from '../../assets/Images/ResearchPaper/r1.pdf'
import pdf2 from '../../assets/Images/ResearchPaper/R1.pdf'
import pdf3 from '../../assets/Images/ResearchPaper/r3.pdf'
const ResearchPaper = () => {
    return (
        <>
            <div className='max-w-screen-xl mx-auto'>

                <div className='flex my-10 justify-center mx-auto border-b-4 rounded-lg border-b-[#003F62] lg:w-[30%] '>
                    <h1 className='font-bold text-xl '> Researched by the college students</h1>
                </div>

                <div className='p-4'>
                    <h1 className='text-xl font-bold'>Some Researched Link is given Below: </h1>
                    <li className='my-3'> The Aims and Process of the Research Paper <a className='font-bold hover:underline' href={pdf1}>Download </a> .</li>
                    <li className='my-3'> Journal of English for Academic Purposes <a className='font-bold hover:underline' href={pdf2}>Download </a> .</li>
                    <li className='my-3'> Bundles to beat the band in high-stakes tests <a className='font-bold hover:underline' href={pdf3}>Download </a> .</li>
                </div>

            </div>
        </>
    );
};

export default ResearchPaper;