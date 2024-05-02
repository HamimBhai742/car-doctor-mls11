import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/public/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <div>
            <div className='text-center font-inter space-y-3'>
                <h3 className='text-xl font-bold text-[#FF3811]'>Service</h3>
                <h1 className='text-5xl font-bold text-[#151515]'>Our Service Area</h1>
                <p className='text-[#737373] max-w-[550px] mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

            <div className='mt-5'>
                <h3 className='text-[#FF3811] text-lg font-semibold font-inter border border-[#FF3811] text-center p-3 w-44 rounded-lg mx-auto'>More Services</h3>
            </div>
        </div>
    );
};

export default Services;