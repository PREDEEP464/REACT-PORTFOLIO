import Abt from '../assets/about.jpg';

export default function About() {
    const config = {
        line1: 'This is Predeep here. An ambitious developer.',
        line2: 'I Have built websites with ReactJs and Tailwind CSS.',
        line3: 'Currently learning Cloud Computing.',
        line4: 'I have well versed knowledge in multiple programming languages and frameworks.'
    }

    return (
        <section className='flex flex-col md:flex-row bg-gradient-to-r from-red-600 via-purple-700 to-orange-500 px-5 py-20' id='about'>
            <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto'>
                <div className='md:w-1/2 flex justify-center mb-6 md:mb-0'>
                    <img
                        src={Abt}
                        alt='About Me'
                        className='w-72  md:w-full md:max-w-[500px] h-auto object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='md:w-1/2 flex flex-col justify-center px-5 md:px-10 text-center md:text-left'>
                    <h1 className='text-4xl font-bold text-yellow-300 mb-5'>
                        ⭐ About Me
                    </h1>
                    <p className='text-lg font-hero-font text-white mb-4'>{config.line1}</p>
                    <p className='text-lg font-hero-font text-white mb-4'>{config.line2}</p>
                    <p className='text-lg font-hero-font text-white mb-4'>{config.line3}</p>
                    <p className='text-lg font-hero-font text-white'>{config.line4}</p>
                </div>
            </div>
        </section>
    );
}
