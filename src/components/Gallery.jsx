import React from 'react';

const Gallery = () => {

  return (

    <div 
        id='gallery'
        className='max-w-[1140px] m-auto w-full px-4 py-16'
    >

        <h2 className='text-center text-gray-700 p-4'> Gallery </h2>

        <div className='grid md:grid-cols-5 gap-4'>

            <div className='sm:col-span-2 md:col-span-3 md:row-span-2'>

                <img 
                    src='https://images.unsplash.com/photo-1597682496035-b04f723202a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80' 
                    alt='/'
                />

            </div>

            <div>

                <img 
                    src='https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' 
                    alt='/'
                    className='h-full w-full object-cover'
                />

            </div>

            <div>

                <img 
                    src='https://images.unsplash.com/photo-1525875098832-46c7d9d0794e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' 
                    alt='/'
                    className='h-full w-full object-cover'
                />

            </div>

            <div>

                <img 
                    src='https://images.unsplash.com/photo-1491508624904-7669836a24ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80' 
                    alt='/'
                    className='h-full w-full object-cover'
                />

            </div>

            <div>

                <img 
                    src='https://images.unsplash.com/photo-1558848195-f7b24d64afed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80' 
                    alt='/'
                    className='h-full w-full object-cover'
                />

            </div>

        </div>

    </div>

  );

};

export default Gallery;