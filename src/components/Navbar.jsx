import React, {useState, useEffect} from 'react';
import {FaBars, FaFacebook, FaTwitter, FaInstagram, FaGooglePlus} from 'react-icons/fa';
import {HiChartSquareBar} from 'react-icons/hi';


const Navbar = () => {

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

        <div className='sm:hidden z-10'>

            <FaBars />

        </div>



        {/* MOBILE MENU */}

        <div>

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