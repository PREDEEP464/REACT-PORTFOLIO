import PP from '../assets/ProfilePic.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-stack developer and an aspiring designer',
        social: {
            twitter: '',
            facebook: '',
            linkedin: ''
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col gap-3'>
            <h1 className=' text-white text-6xl font-hero-font hover:text-blue-600'>Hi, Im Predeep <br/>
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex flex-col gap-10 py-10'>
                <a href={config.social.twitter} className='pr-5 hover:text-blue-600 text-white'><AiOutlineTwitter size={40} /></a>
                <a href={config.social.facebook} className='pr-5 hover:text-blue-600 text-white'><AiOutlineFacebook size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-blue-600 text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={PP} />
    </section>
}
