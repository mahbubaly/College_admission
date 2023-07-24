import React, { useEffect, useState } from 'react';
import ReviewBy from './ReviewBy';
import { Helmet } from 'react-helmet-async';

const ReviewAll = () => {


    const [reviews, setReview] = useState([]);


    useEffect(() => {
        fetch('https://admission-server-mahbubaly.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {

                setReview(data);

            })

    }, [])
    return (
        <>

            <Helmet>
                <title>Read all review </title>
            </Helmet>



            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="items-end justify-between sm:flex">
                        <div className="">
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                All feedback and review from the previous years students and some teachers who left the colleges.
                            </h2>

                            <p className="mt-8 max-w-lg text-gray-500">
                                Dignissimos cum amet sequi? At ut doloribus natus tempore reiciendis? Quisquam neque nulla, provident voluptatem esse quia totam quidem iure necessitatibus, facilis aperiam temporibus?

                            </p>
                        </div>


                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">




                        {
                            reviews.map(review => <ReviewBy
                                reviewId={review._id}
                                review={review}


                            />

                            )
                        }


                    </div>
                </div>
            </section>

        </>
    );
};

export default ReviewAll;