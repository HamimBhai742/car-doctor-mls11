import React from 'react';
import { MdPermPhoneMsg } from 'react-icons/md';
import { PiMapPinFill } from 'react-icons/pi';
import { RiCalendarScheduleFill } from 'react-icons/ri';

const ServiceTime = () => {
    return (
        <div className='text-white font-inter bg-[#151515] px-5 py-10 rounded-lg flex justify-around my-5'>
            <div className='flex items-center gap-2'>
                <RiCalendarScheduleFill className='text-3xl'></RiCalendarScheduleFill>
                <div>
                    <p className='font-medium'>We are open monday-friday</p>
                    <h3 className='text-2xl font-bold'>7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <MdPermPhoneMsg className='text-3xl'></MdPermPhoneMsg>
                <div>
                    <p className='font-medium'>Have a question?</p>
                    <h3 className='text-2xl font-bold'>+2546 251 2658</h3>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <PiMapPinFill className='text-3xl'></PiMapPinFill>
                <div>
                    <p className='font-medium'>Need a repair? our address</p>
                    <h3 className='text-2xl font-bold'>Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default ServiceTime;