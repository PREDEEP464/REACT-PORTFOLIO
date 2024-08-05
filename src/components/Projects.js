import websiteImg1 from '../assets/ChatApp.png';
import websiteImg2 from '../assets/BankApp.png';
import websiteImg3 from '../assets/PwdVaultApp.png';
import websiteImg4 from '../assets/AutoChad.jpg';
import websiteImg5 from '../assets/NotesApp.jpg';

export default function Projects() {

    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'A Simple Chat App',
                link: 'https://github.com/PREDEEP464/Chat_App'
            },
            {
                image: websiteImg2,
                description: 'A Secure Bank App',
                link: 'https://github.com/PREDEEP464/BANKING_APP'
            },
            {
                image: websiteImg3,
                description: 'A Safe Password Vault App',
                link: 'https://github.com/PREDEEP464/GVM2024'
            },
            {
                image: websiteImg5,
                description: 'A Web based Notes App',
                link: 'https://github.com/PREDEEP464/NotesManager2k24'
            },
            {
                image: websiteImg4,
                description: 'A Simple Taxi App',
                link: 'https://github.com/PREDEEP464/AUTO_CHAD'
            }            
        ]
    }

    return (
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-gradient-to-r from-red-600 via-purple-700 to-orange-500 text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5 justify-center items-center">
                    <h1 className="text-5xl text-yellow-300 font-hero-font mb-5 w-[270px] font-bold">💻Projects</h1>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className='flex flex-wrap justify-center gap-5 px-10'>
                    {config.projects.map((project, index) => (
                        <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-5 group'>
                            <div className='relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105'>
                                <img
                                    className='h-[230px] w-full object-cover'
                                    src={project.image}
                                    alt={project.description}
                                />
                                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <div className='text-center p-5'>
                                        <p className='text-white font-bold mb-4'>{project.description}</p>
                                        <a 
                                            className='bg-yellow-500 text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 hover:border-white hover:border-x-2 hover:border-y-2'
                                            target='_blank' 
                                            rel='noopener noreferrer' 
                                            href={project.link}
                                        >
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
