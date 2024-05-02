import parts from '../../assets/images/about_us/parts.jpg'
import person from '../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-8 top-1/2 rounded-lg border-8 border-white " />
                </div>
                <div className='lg:w-1/2 font-inter space-y-5'>
                    <h5 className='text-xl font-bold text-[#FF3811]'>About Us</h5>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className=" text-[#737373]">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] font-semibold text-lg text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;