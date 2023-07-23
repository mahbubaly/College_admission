import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewBy from './ReviewBy';


const Testimonial = () => {

    const [reviews, setReview] = useState([]);


    useEffect(() => {
        fetch('https://admission-server-mahbubaly.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                const dataSliced = data.slice(0, 3);
                setReview(dataSliced);

            })

    }, [])





    return (
        <>


            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="items-end justify-between sm:flex">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Read trusted reviews from our Students And from the teachers who left college.
                            </h2>

                            <p className="mt-8 max-w-lg text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                                praesentium natus sapiente commodi. Aliquid sunt tempore iste
                                repellendus explicabo dignissimos placeat, autem harum dolore
                                reprehenderit quis! Quo totam dignissimos earum.
                            </p>
                        </div>

                        <Link to='/reviewAll'>    <a

                            className="mt-8 inline-flex shrink-0 items-center gap-2 rounded-full border border-pink-600 px-5 py-3 font-medium text-pink-600 hover:bg-pink-600 hover:text-white sm:mt-0 lg:mt-8"
                        >
                            Read all reviews

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 rtl:rotate-180"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </a></Link>
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

export default Testimonial;