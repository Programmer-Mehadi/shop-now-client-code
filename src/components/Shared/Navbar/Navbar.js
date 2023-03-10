import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const liList = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
    </>
    return (
        <div className="navbar bg-blue-100 shadow-sm px-8">
            <div className="navbar-start">

                <Link to='/' className=" normal-case text-xl font-bold text-blue-900">ShowNow</Link>
            </div>
            <div className="navbar-end ">
                <ul className="menu menu-horizontal px-1 font-semibold  text-blue-900 hidden lg:flex">
                    {liList}
                </ul>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ml-[-200px] font-semibold  text-blue-900">
                        {liList}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;