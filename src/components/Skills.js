import React from 'react';

export default function Portfolio() {
    const techStackIcons = [
        { src: 'https://techstack-generator.vercel.app/react-icon.svg', alt: 'React' },
        { src: 'https://techstack-generator.vercel.app/ts-icon.svg', alt: 'TypeScript' },
        { src: 'https://techstack-generator.vercel.app/js-icon.svg', alt: 'JavaScript' },
        { src: 'https://techstack-generator.vercel.app/mysql-icon.svg', alt: 'MySQL' },
        { src: 'https://techstack-generator.vercel.app/java-icon.svg', alt: 'Java' },
        { src: 'https://techstack-generator.vercel.app/python-icon.svg', alt: 'Python' },
    ];

    const socialLinks = [
        { href: 'https://www.leetcode.com/predeep_464', src: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg', alt: 'LeetCode' },
        { href: 'https://www.hackerrank.com/predeepkumar_us1', src: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg', alt: 'HackerRank' },
        { href: 'https://www.codechef.com/users/predeep_464', src: 'https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg', alt: 'CodeChef' },
    ];

    const toolsAndLanguages = [
        { href: 'https://nodejs.org', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg', alt: 'Node.js' },,
        { href: 'https://expressjs.com', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg', alt: 'Express' },
        { href: 'https://www.mongodb.com/', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg', alt: 'MongoDB' },
        { href: 'https://www.cprogramming.com/', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg', alt: 'C' },
        { href: 'https://www.w3schools.com/css/', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg', alt: 'CSS3' },
        { href: 'https://www.w3.org/html/', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg', alt: 'HTML5' }
    ];

    return (
        <div className="bg-gradient-to-r from-red-600 via-purple-700 to-orange-500 text-white flex flex-col">
            <div className="flex-grow text-center py-4">
            <h3 className="text-3xl text-gray-300 font-semibold mb-4">My Coding Profiles</h3>
                <div className="flex justify-center gap-4 mb-8">
                    {socialLinks.map((social, index) => (
                        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                            <img
                                src={social.src}
                                alt={social.alt}
                                height="30"
                                width="40"
                            />
                        </a>
                    ))}
                </div>
                
                <h3 className="text-3xl text-gray-300 font-semibold mb-4">Well Worsed In</h3>
                <div className="flex justify-center gap-4 mb-8">
                    {techStackIcons.map((icon, index) => (
                        <img key={index} src={icon.src} alt={icon.alt} width="50" height="50" />
                    ))}
                </div>

                <h3 className="text-3xl text-gray-300 font-semibold mb-4">Languages and Tools</h3>
                <div className="flex flex-wrap justify-center grid-rows-2 gap-4 mb-8">
                    {toolsAndLanguages.map((tool, index) => (
                        <a key={index} href={tool.href} target="_blank" rel="noopener noreferrer">
                            <img
                                src={tool.src}
                                alt={tool.alt}
                                width="40"
                                height="40"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
