import PP from '../assets/ProfilePic.png';
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
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col gap-3'>
                <h1 className='text-violet-400 text-6xl font-hero-font hover:text-blue-600'>Hi, I'm Predeep! <br />
                    <p className='text-2xl'>{config.subtitle}</p>
                </h1>
                <div className='flex flex-col gap-14 py-10'>
                    <h3 className='text-blue-300 text-2xl font-hero-font '>Connect with me✌🏻️</h3>
                    <div className='flex items-center'>
                        <a href={config.social.github} target='_blank' className='pr-5 hover:text-blue-600 text-red-200 flex items-center'>
                            <AiOutlineGithub size={40} />
                            <span className='ml-2 text-2xl font-hero-font'>GITHUB</span>
                        </a>
                    </div>
                    <div className='flex items-center'>
                        <a href={config.social.linkedin} target='_blank' className='pr-5 hover:text-blue-600 text-red-200 flex items-center'>
                            <AiOutlineLinkedin size={40} />
                            <span className='ml-2 text-2xl font-hero-font'>LINKEDIN</span>
                        </a>
                    </div>
                </div>
            </div>
            <img className='md:w-1/3' src={PP} />
        </section>
    );
}
