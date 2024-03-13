import Abt from '../assets/about.jpg';

export default function About () {
    const config  = {
        line1: 'This is Predeep here. An ambitious developer',
        line2: 'Have built Websites with React.js, Tailwind CSS',
        line3: 'Currently learning Astro and Svelte'
    }

    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
            <div className='py-5 md:w-1/2'>
                <img src={Abt} width="500" height="350" />
            </div>
            <div className='md:w-1/2 flex justify-center pr-40'> 
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl mb-5 w-[170px] font-bold text-blue-600'>About Me</h1>
                    <p className='pb-5'>{config.line1}</p>
                    <p className='pb-5'>{config.line2}</p>
                    <p className='pb-5'>{config.line3}</p>
                </div>
            </div>
        </section>
    );
}
