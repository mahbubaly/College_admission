import React from 'react';
import Search from './Search';
import GraduatesGroups from './GraduatesGroups';
import ResearchPaper from './ResearchPaper';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <>

            <Search />
            <GraduatesGroups />
            <ResearchPaper />
            <Testimonial />

        </>
    );
};

export default Home;