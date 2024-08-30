import PP from '../assets/Profile Pic.jpg';
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle: 'A Full-stack developer and an aspiring designer',
        social: {
            github: 'https://github.com/PREDEEP464',
            linkedin: 'https://www.linkedin.com/in/predeepkumar-u-s-4b012325a/'
        }
    }

    return (
        <section className='flex flex-col md:flex-row px-5 py-24 bg-gradient-to-r from-red-600 via-purple-700 to-orange-500 justify-center items-center'>
            <div className='md:w-1/2 flex flex-col gap-3'>
                <h1 className='text-white text-6xl font-hero-font mb-4'>
                    Hi, I'm Predeep! <br />
                    <p className='text-2xl'>{config.subtitle}</p>
                </h1>
                <div className='flex flex-col gap-6 py-6'>
                    <h3 className='text-yellow-300 text-2xl font-hero-font mb-4'>Connect with me</h3>
                    <div className='flex items-center mb-4'>
                        <a href={config.social.github} target='_blank' className='pr-5 text-white flex items-center transition-transform duration-300 hover:scale-105 hover:text-blue-700'>
                            <AiOutlineGithub size={40} />
                            <span className='ml-2 text-2xl font-hero-font'>GITHUB</span>
                        </a>
                    </div>
                    <div className='flex items-center'>
                        <a href={config.social.linkedin} target='_blank' className='pr-5 text-white flex items-center transition-transform duration-300 hover:scale-105 hover:text-blue-700'>
                            <AiOutlineLinkedin size={40} />
                            <span className='ml-2 text-2xl font-hero-font'>LINKEDIN</span>
                        </a>
                    </div>
                </div>
            </div>
            <img
                className='w-72 h-72 md:w-1/3 md:h-auto mt-6 md:mt-0 object-cover'
                src={PP}
                alt="Profile"
            />
        </section>
    );
}
