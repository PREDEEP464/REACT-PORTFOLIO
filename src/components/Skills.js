import React from 'react';

export default function Portfolio() {
    const techStackIcons = [
        { src: 'https://techstack-generator.vercel.app/react-icon.svg', alt: 'React' },
        { src: 'https://techstack-generator.vercel.app/ts-icon.svg', alt: 'TypeScript' },
        { src: 'https://techstack-generator.vercel.app/js-icon.svg', alt: 'JavaScript' },
        { src: 'https://techstack-generator.vercel.app/java-icon.svg', alt: 'Java' },
        { src: 'https://techstack-generator.vercel.app/python-icon.svg', alt: 'Python' },
        { src: 'https://techstack-generator.vercel.app/cpp-icon.svg', alt: 'C++' }
    ];

    const socialLinks = [
        { href: 'https://www.leetcode.com/predeep_464', src: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg', alt: 'LeetCode' },
        { href: 'https://www.hackerrank.com/predeepkumar_us1', src: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg', alt: 'HackerRank' },
        { href: 'https://www.codechef.com/users/predeep_464', src: 'https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg', alt: 'CodeChef' },
    ];

    const toolsAndLanguages = [
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg', alt: 'Node.js' },
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg', alt: 'Express' },
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg', alt: 'MongoDB' },
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg', alt: 'C' },
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg', alt: 'CSS3' },
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg', alt: 'HTML5' }
    ];

    return (
        <div className="relative flex flex-col bg-gradient-to-r from-red-600 via-purple-700 to-orange-500 text-white">
            {/* Overlay div for dark background */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className="flex-grow text-center py-16 relative z-10">
                <h3 className="text-4xl text-gray-300 font-semibold mb-6">My Coding Profiles</h3>
                <div className="flex justify-center gap-6 mb-12">
                    {socialLinks.map((social, index) => (
                        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                            <img
                                src={social.src}
                                alt={social.alt}
                                height="40"
                                width="50"
                                className="hover:scale-110 transform transition duration-300"
                            />
                        </a>
                    ))}
                </div>

                <h3 className="text-4xl text-gray-300 font-semibold mb-6">Well Versed In</h3>
                <div className="flex justify-center gap-6 mb-12">
                    {techStackIcons.map((icon, index) => (
                        <img key={index} src={icon.src} alt={icon.alt} width="60" height="60" className="hover:scale-110 transform transition duration-300" />
                    ))}
                </div>

                <h3 className="text-4xl text-gray-300 font-semibold mb-6">Languages and Tools</h3>
                <div className="flex flex-wrap justify-center gap-8 mb-12">
                    {toolsAndLanguages.map((tool, index) => (
                        <a key={index} href={tool.href} target="_blank" rel="noopener noreferrer">
                            <img
                                src={tool.src}
                                alt={tool.alt}
                                width="50"
                                height="50"
                                className="hover:scale-110 transform transition duration-300"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
