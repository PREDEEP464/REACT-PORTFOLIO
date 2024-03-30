export default function Contact () {
    const config = {
        email : 'uspp@gmail.com',
        phone: '+91 8098317198'
    }

    return (
        <div id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
            <div className='flex flex-col items-center'>
                <p className='text-6xl mb-6 font-bold text-blue-600'>Contact</p>
                <div className="text-center">
                    <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
                    <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
                </div>
            </div>
        </div>
    );
}
