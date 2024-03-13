export default function Contact () {
    const config = {
        email : 'uspp@gmail.com',
        phone: '+91 8098317198'
    }

    return (
        <div id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
            <div className='flex flex-col items-center'>
                <h1 className='text-5xl mb-5 w-[140px] font-bold text-blue-600'>Contact</h1>
                <p className='pb-5 font-bold text-2xl'>Feel free to contact me</p>
                <div className="text-center">
                    <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
                    <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
                </div>
            </div>
        </div>
    );
}
