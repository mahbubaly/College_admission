import React, { useContext, useState } from 'react';

import icon from '../../assets/Images/user.png'
import logo from '../../assets/Images/logo.jpg'

import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { AiFillHome } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { AuthContext } from '../Providers/AuthProviders/AuthProvider';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handlerLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => {
                console.error(error.message);
            })
    }
    const navbar = <>
        <Link to='/' className="flex gap-2 rounded-md  hover:shadow-sm  px-5 py-2.5 text-sm font-medium text-white shadow">

            <h1>  Home</h1>
            <AiFillHome className='w-8 h-6' />
        </Link>
        <Link to='colleges' className="flex gap-2 rounded-md  hover:shadow-sm  px-5 py-2.5 text-sm font-medium text-white shadow">

            <h1>  Colleges</h1>
            <img src={icon} alt="" />
        </Link>
        <Link to='admission' className="flex gap-2 rounded-md  hover:shadow-sm  px-5 py-2.5 text-sm font-medium text-white shadow">

            <h1>  Admission</h1>
            <img src={icon} alt="" />
        </Link>




        <div>
            {
                user ? <div className='flex gap-3'>

                    <Link to='myAdmissions' className="flex gap-2 rounded-md  hover:shadow-sm  px-5 py-2.5 text-sm font-medium text-white shadow">


                        <h1>  My College</h1>
                    </Link>
                    <Link onClick={handlerLogout} className="flex gap-1 rounded-md  hover:shadow-sm  px-5 py-2.5 text-sm font-medium text-white shadow">

                        <h1 >  Sign Out</h1>
                        <img src={icon} alt="" />
                    </Link>




                </div> : <div className='flex gap-3'>
                    <Link to='signIn' className="flex gap-2 rounded-md  hover:shadow-sm  px-5 py-2.5 text-sm font-medium text-white shadow">



                        <h1>  Sign in</h1>
                        <BiLogIn className='w-8 h-6' />

                    </Link>
                    <Link to='signUp' className="flex gap-1 rounded-md  hover:shadow-sm  px-5 py-2.5 text-sm font-medium text-white shadow">

                        <h1>  Sign Up</h1>
                        <img src={icon} alt="" />
                    </Link>
                </div>
            }
        </div>


    </>
    const [open, setOpen] = useState(false);



    return (
        <>


            <div className='bg-[#003F62] p-2'>
                <div className="mx-auto  max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 md:flex md:items-center md:gap-12">
                            <a className="block text-white italic font-bold" href="/">
                                <img src={logo} className='w-8 h-8 rounded-2xl' alt="" />
                                <h1 >National University BD </h1>


                            </a>

                        </div>

                        <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" className="hidden md:block">

                            </nav>

                            <div className="flex  items-center gap-4">
                                <div className="lg:flex hidden  sm:gap-4">

                                    {navbar}


                                </div>

                                <div className="block lg:hidden">



                                    <div className='lg:hidden nav' onClick={() => setOpen(!open)}>
                                        <span>
                                            {
                                                open === true ? <RxCross2 className="h-8 w-8 text-white swap-off fill-current" /> : <button
                                                    className="rounded duration-700 bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 duration-700"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M4 6h16M4 12h16M4 18h16"
                                                        />
                                                    </svg>
                                                </button>
                                            }
                                        </span>
                                        <div className={`${open ? 'bg-[#003F62] right-0  text-primary p-6 w-44  right-14-0 pl-3 ' : '-top-[400px] -left-9'
                                            } absolute flex flex-col duration-700 gap-3 `}>


                                            {navbar}

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>




        </>


    );
};

export default Navbar;