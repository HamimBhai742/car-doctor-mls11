import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa6';
import { IoIosArrowRoundForward } from 'react-icons/io';

const ServiceCard = ({ service }) => {
    console.log(service);
    const { title, img, price } = service
    return (
        <div className="card  w-96 border-2 rounded-xl">
            <figure className='px-5 pt-3 '><img className='rounded-xl h-[200px] w-full'  src={img} alt="Shoes" /></figure>
            <div className="card-body font-inter">
                <h2 className="card-title text-2xl font-bold text-[#444444]">{title}</h2>
                <div className="card-actions justify-between items-center">
                    <h3 className='text-[#FF3811] font-semibold text-xl'><span>Price :</span> ${price}</h3>
                    <IoIosArrowRoundForward className='text-[#FF3811] text-3xl'></IoIosArrowRoundForward>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;