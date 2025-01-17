export default function Contact () {
    const config = {
        email: 'predeepkumar.us2022cse@gmail.com',
        phone: '+91 8098317198'
    }

    return (
        <div id='contact' className='relative flex flex-col bg-gradient-to-r from-red-600 via-purple-700 to-orange-500 px-5 py-20 text-white'>
            {/* Overlay div for dark background */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className='flex flex-col items-center relative z-10'>
                <p className='text-6xl mb-6 font-bold font-hero-font text-yellow-300'>📱Contact</p>
                <div className="text-center">
                    <p className='py-2 font-bold'>
                        <span className='font-bold text-gray-300'>Email :</span>
                        <a href={`mailto:${config.email}`} className="text-white hover:text-yellow-300 transition-colors duration-300">{config.email}</a>
                    </p>
                    <p className='py-2 font-bold'>
                        <span className='font-bold text-gray-300'>Phone :</span>
                        <a href={`tel:${config.phone}`} className="text-white hover:text-yellow-300 transition-colors duration-300">{config.phone}</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
