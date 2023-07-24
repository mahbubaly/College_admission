import React from 'react';
import { Helmet } from 'react-helmet-async';

const Apply = () => {

    const InfoSubmit = (event) => {
        event.preventDefault();

    }
    return (
        <>
            <Helmet>
                <title>Apply now</title>
            </Helmet>



            <section class="bg-white max-w-screen-xl mx-auto">

                <div className='flex my-10 justify-center mx-auto border-b-4 rounded-lg border-b-[#003F62] lg:w-[50%]'>
                    <h1 className='font-bold text-xl'>Fill Up this from and Submit for Application! </h1>
                </div>



                <form onSubmit={InfoSubmit} className="mt-8 grid grid-cols-6 gap-6 lg:w-1/2  border-2 p-5 my-10 rounded mx-auto">
                    <div className="col-span-6 sm:col-span-6">
                        <label
                            for="FirstName"
                            className="block text-sm lg:text-xl font-medium text-gray-700"
                        >
                            Candidate Name
                        </label>

                        <input
                            required
                            type="text"
                            id="FirstName"
                            name="first_name"
                            className="mt-1 w-full p-3 rounded-md border-black   bg-white text-sm text-gray-700 shadow-sm"
                            placeholder='Enter your Name...'
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label
                            for="LastName"
                            className="block text-sm lg:text-xl font-medium text-gray-700"
                        >
                            Candidate Email
                        </label>

                        <input
                            required
                            type="email"

                            name="email"
                            className="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            placeholder='Enter Email...'
                        />
                    </div>

                    <div className="col-span-3">
                        <label for="Email" className="block lg:text-xl text-sm font-medium text-gray-700">
                            Candidate Phone
                        </label>

                        <input
                            required
                            type="digits"
                            id="phone"
                            name="phone"
                            className="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            placeholder='Enter your Phone Number...'
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                        <label
                            for="Password"
                            className="block text-sm lg:text-xl font-medium text-gray-700"
                        >
                            Address
                        </label>

                        <textarea
                            required
                            type="password"
                            id="Password"
                            name="password"
                            className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            placeholder='Enter your Address...'
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label
                            for="Password"
                            className="block text-sm lg:text-xl font-medium text-gray-700"
                        >
                            Birthday
                        </label>

                        <input
                            required
                            type="date"
                            id="Password"
                            name="password"
                            className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            placeholder='Enter your birthday...'
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label
                            for="Password"
                            className="block text-sm lg:text-xl font-medium text-gray-700"
                        >
                            Photo Url
                        </label>

                        <input
                            required
                            type="url"
                            id="Password"
                            name="password"
                            className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            placeholder='Photo url'
                        />
                    </div>



                    <div className="col-span-6">
                        <label for="MarketingAccept" className="flex gap-4">
                            <input
                                required
                                type="checkbox"
                                id="MarketingAccept"
                                name="marketing_accept"
                                className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                            />

                            <span className="text-sm text-gray-700">
                                As I am Candidate,  I obey the rule and team and condition .
                            </span>
                        </label>
                    </div>

                    <div className="col-span-6">
                        <p className="text-sm text-gray-500">
                            By creating an account, you agree to our
                            <a href="#" className="text-gray-700 underline">
                                terms and conditions
                            </a>
                            and
                            <a href="#" className="text-gray-700 underline">privacy policy</a>.
                        </p>
                    </div>

                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <button
                            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                        >
                            <input type="submit" value="Submit" />
                        </button>





                    </div>


                </form>

            </section>
        </>
    );
};

export default Apply;