import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center bg-orange-700 text-lime-400 px-20 py-5'>
            <div className='flex gap-4 items-center'>
                <img className='w-12 h-12 rounded-full' src="/public/IMG_20191014_122918.jpg" alt="" />
                <h2 className='text-2xl font-bold '>My Food Shop</h2>
            </div>
            <div className=''>
                <Link className='mr-4 text-lg border border-orange-200 p-3 rounded hover:bg-gray-400' to="/home">Home</Link>
                <Link className='mr-4 text-lg border border-orange-200 p-3 rounded hover:bg-gray-400' to="/order">Orders</Link>
                <Link className='mr-4 text-lg border border-orange-200 p-3 rounded hover:bg-gray-400' to="/shop">Food</Link>
                <Link className='mr-4 text-lg border border-orange-200 p-3 rounded hover:bg-gray-400' to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;