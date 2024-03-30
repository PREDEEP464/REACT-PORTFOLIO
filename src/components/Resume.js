import ResumeImg from '../assets/resume.jpg';

export default function Resume () {
    const config = {
        link: 'https://drive.google.com/file/d/1isKrf19nBSHgbkRnkSYc6KmeShr8iLN3/view?usp=drive_link'
    }

    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col gap-8 justify-center text-white pr-40'>
                <h1 className='text-5xl  mb-5 w-[280px] font-hero-font text-blue-600 font-bold'>📎Resume</h1>
                <p className='pb-5'><a target='_blank' className='btn hover:bg-violet-500' href={config.link} download> Download</a></p>
            </div>
        </div>
    </section>
}