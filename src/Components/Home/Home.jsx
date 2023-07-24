import React from 'react';
import Search from './Search';
import GraduatesGroups from './GraduatesGroups';
import ResearchPaper from './ResearchPaper';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                    <title>Home</title>
            </Helmet>

            <Search />
            <GraduatesGroups />
            <ResearchPaper />
            <Testimonial />

        </>
    );
};

export default Home;