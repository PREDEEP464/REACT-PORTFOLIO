export default function Footer() {
    return (
        <div className="relative py-4 bg-gradient-to-r from-red-600 via-purple-700 to-orange-500 text-center font-bold text-gray-300">
            {/* Overlay div for dark background */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className="relative z-10">
                &copy; Predeep 2024
            </div>
        </div>
    );
}
