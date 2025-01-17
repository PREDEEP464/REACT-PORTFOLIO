import Abt from '../assets/about.jpg';

export default function About() {
    const config = {
        line1: 'This is Predeep here, an ambitious developer.',
        line2: 'I have built websites using ReactJs and Tailwind CSS.',
        line3: 'Currently diving deep into Cloud Computing.',
        line4: 'I possess solid knowledge in various programming languages and frameworks.'
    }

    return (
        <section className='relative flex flex-col md:flex-row bg-gradient-to-r from-red-600 via-purple-700 to-orange-500 px-5 py-20' id='about'>
            {/* Overlay div for dark background */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto relative z-10'>
                <div className='md:w-1/2 flex justify-center mb-8 md:mb-0'>
                    <img
                        src={Abt}
                        alt='About Me'
                        className='w-72 md:w-full md:max-w-[500px] h-auto object-cover rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105'
                    />
                </div>
                <div className='md:w-1/2 flex flex-col justify-center px-6 md:px-12 text-center md:text-left'>
                    <h1 className='text-4xl md:text-5xl font-bold text-yellow-300 mb-6'>
                        ⭐ About Me
                    </h1>
                    <p className='text-lg md:text-xl font-medium text-white mb-6 leading-relaxed'>{config.line1}</p>
                    <p className='text-lg md:text-xl font-medium text-white mb-6 leading-relaxed'>{config.line2}</p>
                    <p className='text-lg md:text-xl font-medium text-white mb-6 leading-relaxed'>{config.line3}</p>
                    <p className='text-lg md:text-xl font-medium text-white leading-relaxed'>{config.line4}</p>
                </div>
            </div>
        </section>
    );
}
