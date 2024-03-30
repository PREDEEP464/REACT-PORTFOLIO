import websiteImg1 from '../assets/ChatApp.png';
import websiteImg2 from '../assets/BankApp.png';
import websiteImg3 from '../assets/PwdVaultApp.png';


export default function Projects() {

    const config = {
        projects : [
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
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl  text-blue-600 font-hero-font mb-5 w-[270px] font-bold">💻Projects</h1>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}