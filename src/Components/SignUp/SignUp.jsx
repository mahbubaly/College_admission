import React, { useContext, useState } from 'react';
import logo from '../../assets/Images/logo.jpg';
import { AuthContext } from '../Providers/AuthProviders/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = () => {
    const [error, setError] = useState();

    const { CreateUser } = useContext(AuthContext);
    const Navigate = useNavigate()
    const from = location.state?.form?.pathname || '/'

    const handlerSign = (event) => {
        event.preventDefault();
        const form = event.target;
        const first_name = form.name.value;
        const last_name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.password_confirmation.value;


        if (password !== confirm) {

            Swal.fire({
                title: 'Passwords do not match!!',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
            return;
        }

        if (password.length <= 6) {


            Swal.fire({
                title: 'Password must be more than 6 characters!!',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })

            return;
        }
        CreateUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Successfully created',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                Navigate(from, { replace: true });


            })
            .catch(error => {
                console.error(error.message);

                Swal.fire({
                    title: 'Already used this email address try another one!!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                return;


            })

    }
    return (
        <>
            <div className='max-w-screen-xl mx-auto p-6'>


                <section className="bg-white">
                    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                        <section
                            className="relative flex h-0 mt-6 lg:mt-0 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
                        >


                            <div className="hidden lg:relative lg:block lg:p-12">
                                <a className="block text-white" href="/">

                                    <img src={logo} className='w-10 h-10' alt="" />
                                </a>

                                <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                                    Welcome to National BD
                                </h2>

                                <p className="mt-4 leading-relaxed text-white/90">
                                    Vitae, illum. Consectetur libero ab debitis dolores quod incidunt, sequi facilis labore corporis beatae magni quam, sint dolorum aperiam voluptatem. Eaque dignissimos necessitatibus est officiis reiciendis quisquam exercitationem tempore maxime.
                                </p>
                            </div>
                        </section>

                        <div
                            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                        >
                            <div className="max-w-xl lg:max-w-3xl">
                                <div className="relative -mt-16 block lg:hidden">


                                    <h1
                                        className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                                    >
                                        Welcome to Squid
                                    </h1>

                                    <p className="mt-4 leading-relaxed text-gray-500">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
                                        nam dolorum aliquam, quibusdam aperiam voluptatum.
                                    </p>
                                </div>

                                <form onSubmit={handlerSign} className="mt-8 grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            for="FirstName"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            First Name
                                        </label>

                                        <input
                                            required
                                            type="text"
                                            id="FirstName"
                                            name="first_name"
                                            className="mt-1 w-full p-3 rounded-md border-black   bg-white text-sm text-gray-700 shadow-sm"
                                            placeholder='Enter your first name...'
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            for="LastName"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Last Name
                                        </label>

                                        <input
                                            required
                                            type="text"
                                            id="LastName"
                                            name="last_name"
                                            className="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                            placeholder='Enter your last name...'
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label for="Email" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>

                                        <input
                                            required
                                            type="email"
                                            id="Email"
                                            name="email"
                                            className="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                            placeholder='Enter your email address...'
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            for="Password"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Password
                                        </label>

                                        <input
                                            required
                                            type="password"
                                            id="Password"
                                            name="password"
                                            className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                            placeholder='Enter your password...'
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            for="PasswordConfirmation"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Password Confirmation
                                        </label>

                                        <input
                                            required
                                            type="password"
                                            id="PasswordConfirmation"
                                            name="password_confirmation"
                                            className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                            placeholder='Confirm Password...'
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
                                                I want to receive emails about events, product updates and
                                                company announcements.
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
                                            <input type="submit" value="sign up" />
                                        </button>



                                        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                            Already have an account?
                                            <Link to='/signIn'><a className="text-gray-700 underline">Log in</a> </Link>.
                                        </p>

                                    </div>


                                </form>

                                <h1 className=' mt-4 text-[red]'>{error}</h1>


                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </>
    );
};

export default SignUp;