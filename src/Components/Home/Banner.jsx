import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] mt-5">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-lg h-[600px]" />
                <div className="absolute flex h-full items-center bg-gradient-to-r from-[#151515] to-[#15151500] rounded-lg">
                    <div className='font-inter text-white w-[450px] pl-8 space-y-8'>
                        <h1 className='text-6xl font-bold leading-[70px]'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5 '>
                            <button className='bg-[#FF3811] text-white p-3 rounded-lg text-lg font-semibold'>Discover More</button>
                            <button className='border border-white p-3 rounded-lg text-lg font-semibold'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2 right-8 bottom-5 gap-5">
                    <a href="#slide6" className="btn btn-circle border-none text-white bg-[#FFFFFF33]"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide2" className="btn btn-circle border-none text-white bg-[#FF3811]"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[600px]">
                <img src={img2} className="w-full rounded-lg h-[600px]" />
                <div className="absolute flex h-full items-center bg-gradient-to-r from-[#151515] to-[#15151500] rounded-lg">
                    <div className='font-inter text-white w-[450px] pl-8 space-y-8'>
                        <h1 className='text-6xl font-bold leading-[70px]'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5 '>
                            <button className='bg-[#FF3811] text-white p-3 rounded-lg text-lg font-semibold'>Discover More</button>
                            <button className='border border-white p-3 rounded-lg text-lg font-semibold'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2 right-8 bottom-5 gap-5">
                    <a href="#slide1" className="btn btn-circle border-none text-white bg-[#FFFFFF33]"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide3" className="btn btn-circle border-none text-white bg-[#FF3811]"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[600px]">
                <img src={img3} className="w-full rounded-lg h-[600px]" />
                <div className="absolute flex h-full items-center bg-gradient-to-r from-[#151515] to-[#15151500] rounded-lg">
                    <div className='font-inter text-white w-[450px] pl-8 space-y-8'>
                        <h1 className='text-6xl font-bold leading-[70px]'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5 '>
                            <button className='bg-[#FF3811] text-white p-3 rounded-lg text-lg font-semibold'>Discover More</button>
                            <button className='border border-white p-3 rounded-lg text-lg font-semibold'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2 right-8 bottom-5 gap-5">
                    <a href="#slide2" className="btn btn-circle border-none text-white bg-[#FFFFFF33]"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide4" className="btn btn-circle border-none text-white bg-[#FF3811]"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[600px]">
                <img src={img4} className="w-full rounded-lg h-[600px]" />
                <div className="absolute flex h-full items-center bg-gradient-to-r from-[#151515] to-[#15151500] rounded-lg">
                    <div className='font-inter text-white w-[450px] pl-8 space-y-8'>
                        <h1 className='text-6xl font-bold leading-[70px]'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5 '>
                            <button className='bg-[#FF3811] text-white p-3 rounded-lg text-lg font-semibold'>Discover More</button>
                            <button className='border border-white p-3 rounded-lg text-lg font-semibold'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2 right-8 bottom-5 gap-5">
                    <a href="#slide3" className="btn btn-circle border-none text-white bg-[#FFFFFF33]"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide5" className="btn btn-circle border-none text-white bg-[#FF3811]"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full h-[600px]">
                <img src={img5} className="w-full rounded-lg h-[600px]" />
                <div className="absolute flex h-full items-center bg-gradient-to-r from-[#151515] to-[#15151500] rounded-lg">
                    <div className='font-inter text-white w-[450px] pl-8 space-y-8'>
                        <h1 className='text-6xl font-bold leading-[70px]'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5 '>
                            <button className='bg-[#FF3811] text-white p-3 rounded-lg text-lg font-semibold'>Discover More</button>
                            <button className='border border-white p-3 rounded-lg text-lg font-semibold'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2 right-8 bottom-5 gap-5">
                    <a href="#slide4" className="btn btn-circle border-none text-white bg-[#FFFFFF33]"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide6" className="btn btn-circle border-none text-white bg-[#FF3811]"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full h-[600px]">
                <img src={img6} className="w-full rounded-lg h-[600px]" />
                <div className="absolute flex h-full items-center bg-gradient-to-r from-[#151515] to-[#15151500] rounded-lg">
                    <div className='font-inter text-white w-[450px] pl-8 space-y-8'>
                        <h1 className='text-6xl font-bold leading-[70px]'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5 '>
                            <button className='bg-[#FF3811] text-white p-3 rounded-lg text-lg font-semibold'>Discover More</button>
                            <button className='border border-white p-3 rounded-lg text-lg font-semibold'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2 right-8 bottom-5 gap-5">
                    <a href="#slide5" className="btn btn-circle border-none text-white bg-[#FFFFFF33]"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide1" className="btn btn-circle border-none text-white bg-[#FF3811]"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;