import React from 'react';
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai';
import {BsChatSquareDots} from 'react-icons/bs';

const Header = () => {

  return (

    <div className='flex justify-between'>

        <div> 

            <BsChatSquareDots />

            <h1> WEEKAWAY </h1>

        </div>

        <div> 

            <div>

                <AiOutlineClockCircle />

                <p> 09AM - 05PM </p>

            </div>

            <div>

                <AiFillPhone />

                <p> 1-800-777-1234 </p>

            </div>

            <button> Get A Free Quote </button>

        </div>

    </div>

  );

};

export default Header;