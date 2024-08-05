export default function Contact () {
    const config = {
        email : 'predeepkumar.us2022cse@gmail.com',
        phone: '+91 8098317198'
    }

    return (
        <div id='contact' className='flex flex-col bg-gradient-to-r from-red-600 via-purple-700 to-orange-500 px-5 py-20 text-white'>
            <div className='flex flex-col items-center'>
                <p className='text-6xl mb-6 font-bold font-hero-font text-yellow-300'>📱Contact</p>
                <div className="text-center">
                    <p className='py-2 font-bold'><span className='font-bold text-gray-300'>Email :</span> {config.email}</p>
                    <p className='py-2 font-bold'><span className='font-bold text-gray-300'>Phone :</span> {config.phone}</p>
                </div>
            </div>
        </div>
    );
}
