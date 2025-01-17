import ResumeImg from '../assets/resume.jpg';

export default function Resume() {
    const config = {
        link: 'https://drive.google.com/file/d/1qCZF6ORK79ocuopg7g_KPZcVaM29hYLh/view?usp=drive_link'
    }

    return (
        <section id='resume' className='relative flex flex-col md:flex-row bg-gradient-to-r from-red-600 via-purple-700 to-orange-500 px-5 py-10 md:py-20'>
            {/* Overlay div for dark background */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
                <img 
                    className='w-[300px] md:w-[400px] border-4 shadow-lg rounded-lg' 
                    src={ResumeImg} 
                    alt="Resume" 
                />
            </div>
            <div className='md:w-1/2 flex flex-col items-center justify-center relative z-10'>
                <div className='flex flex-col gap-8 text-white text-center md:text-left'>
                    <h1 className='text-6xl md:text-5xl font-hero-font text-yellow-300 font-bold'>
                        📎 Resume
                    </h1>
                    <h3 className="text-2xl text-gray-300 font-semibold mb-4">Get my Resume here</h3>
                    <div className='mt-2'>
                        <a 
                            target='_blank' 
                            className='bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-white hover:text-black transition-colors duration-300'
                            href={config.link} 
                            download
                        >
                            Download
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
