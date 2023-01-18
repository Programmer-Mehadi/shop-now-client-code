import React from 'react';
import phone from '../../asset/contact.png';
import github from '../../asset/github.png';
import gmail from '../../asset/gmail.png';
import linkedin from '../../asset/linkedin.png';
import personImage from '../../asset/Md Zahirul Islam Mehadi image full hd.png';

const ProfileInfo = () => {
    return (
        <div className='py-10 px-10 flex flex-col gap-8'>

            <div className='flex flex-col gap-4 items-center'>
                <img src={personImage} alt="" className='h-[200px] w-[200px] rounded-full border-2 border-blue-800' />
                <h2 className='text-2xl font-bold'>Md Zahirul Islam Mehadi</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-white'>
                <div className='flex flex-col gap-1 text-center items-center border-2 border-blue-800 rounded-sm px-2 py-4 bg-blue-200 shadow-lg text-slate-800'>
                    <img src={gmail} alt="" className='h-16 w-16 bg-white p-2 rounded-md' />
                    <p className='font-bold text-xl'>Email</p>
                    <h2 className='text-base font-bold'>mehadi.developer@gmail.com</h2>
                </div>
                <div className='flex flex-col gap-1 text-center items-center border-2 border-blue-800 rounded-sm px-2 py-4 bg-blue-200 shadow-lg text-slate-800'>
                    <img src={phone} alt="" className='h-16 w-16 bg-white p-2 rounded-md' />
                    <p className='font-bold text-xl'>Phone Number</p>
                    <h2 className='text-base font-bold'>+8801724322401</h2>
                </div>
                <div className='flex flex-col gap-1 text-center items-center border-2 border-blue-800 rounded-sm px-2 py-4 bg-blue-200 shadow-lg text-slate-800'>
                    <img src={github} alt="" className='h-16 w-16 bg-white p-2 rounded-md' />
                    <p className='font-bold text-xl'>Github</p>
                    <a href='https://github.com/Programmer-Mehadi'  className='text-base font-bold'>https://github.com/Programmer-Mehadi</a>
                </div>
                <div className='flex flex-col gap-1 text-center items-center border-2 border-blue-800 rounded-sm px-2 py-4 bg-blue-200 shadow-lg text-slate-800'>
                    <img src={linkedin} alt="" className='h-16 w-16 bg-white p-2 rounded-md' />
                    <p className='font-bold text-xl'>Linkedin</p>
                    <a href='https://www.linkedin.com/in/muhammad-mehadi/' className='text-base font-bold'>https://www.linkedin.com/in/muhammad-mehadi/</a>
                </div>
                 
            </div>


        </div>
    );
};

export default ProfileInfo;