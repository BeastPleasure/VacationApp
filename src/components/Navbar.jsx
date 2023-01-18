import React, {useState, useEffect} from 'react';
import {FaBars, FaFacebook, FaTwitter, FaInstagram, FaGooglePlus} from 'react-icons/fa';
import {HiChartSquareBar} from 'react-icons/hi';


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNavbar = () => {
        setNav(!nav);
    };

  return (

    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>

        <ul className='hidden sm:flex px-4'>

            <li>

                <a href='/'> Home </a>

            </li>

            <li>

                <a href='#gallery'> Gallery </a>

            </li>

            <li>

                <a href='#deals'> Deals </a>

            </li>

            <li>

                <a href='#contact'> Contact </a>

            </li>

        </ul>

        <div className='flex justify-between'>

            <FaFacebook className='mx-4' />

            <FaGooglePlus className='mx-4'/>

            <FaInstagram className='mx-4' />

            <FaTwitter className='mx-4' />

        </div>


        {/* HAMBURGER MENU */}

        <div className='z-10 sm:z-10 sm:relative sm:right-90'>

            <FaBars size={20} className='mr-4 cursor-pointer'/>

        </div>



        {/* MOBILE MENU */}

        <div className={'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col'}>

            <ul>

                <li>

                    <a href='/'> Home </a>

                </li>

                <li>

                    <a href='#gallery'> Gallery </a>

                </li>

                <li>

                    <a href='#deals'> Deals </a>

                </li>

                <li>

                    <a href='#contact'> Contact </a>

                </li>

            </ul>

        </div>

    </div>

  );

};

export default Navbar;