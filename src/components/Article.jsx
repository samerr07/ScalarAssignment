import React from 'react';
import { Bookmark, Share2, Clock, Eye, Award, ChevronDown } from 'lucide-react';

const Article = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white md:ml-0 lg:ml-64">
            {/* Header */}
            <header className="flex justify-between items-center p-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                        <Bookmark className="w-5 h-5" />
                    </button>
                    <button className="bg-teal-600 text-white px-4 py-2 rounded-md flex items-center">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                    </button>
                </div>
            </header>

            {/* Main content */}
            <main className="flex-grow flex flex-col lg:flex-row">
                {/* Article content */}
                <div className="flex-grow p-4 lg:p-8 max-w-5xl mx-auto">
                    <img src="https://skitguys.com/media/images/motion/_1200x630_crop_center-center_82_none/Black-Marble-Colors-3-Still_Shift-HD.jpg?mtime=1589994211" alt="Quantum Doom" className="w-full h-auto md:h-1/6 lg:h-1/6 mb-6 rounded-lg" />

                    <div className='flex flex-col lg:flex-row'>
                        <div className='lg:w-2/3'>
                            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Quantum Computer Doom Challenge</h1>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 md:mb-6">
                                <div className="flex items-center mb-2 sm:mb-0">
                                    <img src="https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/831bd9b7-78f7-4d06-7380-44809b816500/thumbnail" alt="Author" className="w-10 h-10 rounded-full mr-3" />
                                    <div>
                                        <p className="font-semibold">Curated by elymc</p>
                                        <p className="text-sm text-gray-500">2 min read</p>
                                    </div>
                                </div>
                                <div className="sm:ml-auto flex flex-wrap items-center space-x-4 text-gray-500 mt-2 sm:mt-0">
                                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 5 days ago</span>
                                    <span className="flex items-center"><Eye className="w-4 h-4 mr-1" /> 44,901</span>
                                    <span className="flex items-center"><Award className="w-4 h-4 mr-1" /> 2,235</span>
                                </div>
                            </div>

                            <p className="mb-6">According to PC Gamer, the quantum computer adaptation of the iconic game DOOM, known as Quandoom, faces significant technical challenges due to its requirement for 72,376 qubits and 80 million quantum gates, far exceeding the capabilities of today's most advanced quantum computers.</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                <div className="bg-gray-100 p-2 rounded-md flex items-center">
                                    <img src="/api/placeholder/20/20" alt="Source" className="w-5 h-5 rounded-full mr-2" />
                                    <span className="text-sm">gigazine · 1</span>
                                </div>
                                <div className="bg-gray-100 p-2 rounded-md flex items-center">
                                    <img src="/api/placeholder/20/20" alt="Source" className="w-5 h-5 rounded-full mr-2" />
                                    <span className="text-sm">tomshardware · 2</span>
                                </div>
                                <div className="bg-gray-100 p-2 rounded-md flex items-center">
                                    <img src="/api/placeholder/20/20" alt="Source" className="w-5 h-5 rounded-full mr-2" />
                                    <span className="text-sm">neowin · 3</span>
                                </div>
                                <button className="bg-gray-100 p-2 rounded-md text-sm">View 2 more</button>
                            </div>

                            <h2 className="text-2xl font-bold mb-4">Quandoom Technical Challenges</h2>


                            <img src="https://pplx-res.cloudinary.com/image/fetch/s--xAv5inDv--/t_thumbnail/https://media.springernature.com/m685/springer-static/image/art%253A10.1038%252Fs41566-019-0395-5/MediaObjects/41566_2019_395_Fig1_HTML.png" alt="Quantum Computer" className="w-full h-1/4 mb-6 rounded-lg" />
                            <p className="mb-6">Quandoom, the quantum computer port of DOOM, presents significant technical challenges that push the boundaries of current quantum computing capabilities. The project requires a staggering 72,376 qubits and 80 million quantum gates to run, far exceeding the capabilities of even the most advanced quantum computers available today.</p>
                           

                            <h1 className="text-3xl font-bold mb-6 text-teal-600">Operational Mechanism</h1>
                            <p className="mb-4 text-gray-700">
                                The operational mechanism of China's groundbreaking sound laser represents a
                                sophisticated blend of optical and mechanical principles. Here's a concise overview of how
                                this powerful phonon laser functions:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                                <li>Two light beams levitate a silica microbead (about 1 micrometer long) within a
                                    reflective cavity</li>
                                <li>The bead's vibrations generate phonons, which are trapped and amplified in the
                                    cavity</li>
                                <li>An electrode beneath the bead produces electromagnetic signals, enhancing the
                                    laser's performance</li>
                                <li>This setup creates a laser-like beam of sound particles (phonons) that is:
                                    <ul className="list-circle pl-6 mt-2 space-y-1">
                                        <li>10 times more powerful than previous phonon lasers</li>
                                        <li>Capable of operating continuously for over an hour</li>
                                        <li>More focused and stable due to the "locking" of sound waves</li>
                                    </ul>
                                </li>
                                <li>The device emits sound in the terahertz frequency range, opening up possibilities for
                                    various applications</li>
                            </ul>
                            <p className="text-gray-700">
                                This innovative design overcomes previous limitations in phonon laser technology,
                                significantly improving both power output and operational duration.
                            </p>


                            <h1 className="text-3xl mt-3 font-bold mb-6 text-teal-600">Potential Applications</h1>
                            <p className="mb-4 text-gray-700">
                                The phonon laser's unique properties open up a wide range of potential applications across various fields. In medical imaging, its ability to penetrate watery tissues more effectively than light-based lasers could lead to more precise and less invasive diagnostic techniques1. The technology shows promise for deep-sea exploration, potentially enhancing communication and navigation systems for underwater vehicles2. Additionally, the sound laser's capacity to emit in the terahertz frequency range could revolutionize security measures, such as improving airport scanning procedures3. Other potential applications include:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                                <li>Two light beams levitate a silica microbead (about 1 micrometer long) within a
                                    reflective cavity</li>
                                <li>The bead's vibrations generate phonons, which are trapped and amplified in the
                                    cavity</li>
                                <li>An electrode beneath the bead produces electromagnetic signals, enhancing the
                                    laser's performance</li>
                                <li>This setup creates a laser-like beam of sound particles (phonons) that is:
                                    <ul className="list-circle pl-6 mt-2 space-y-1">
                                        <li>10 times more powerful than previous phonon lasers</li>
                                        <li>Capable of operating continuously for over an hour</li>
                                        <li>More focused and stable due to the "locking" of sound waves</li>
                                    </ul>
                                </li>
                                <li>The device emits sound in the terahertz frequency range, opening up possibilities for
                                    various applications</li>
                            </ul>
                            <p className="text-gray-700">
                                This innovative design overcomes previous limitations in phonon laser technology,
                                significantly improving both power output and operational duration.
                            </p>

                            <div className="border-t border-gray-200 mt-8 pt-4">
                                <h3 className="text-xl font-bold mb-4">Related</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center justify-between">
                                        <span>What advancements are needed for quantum computers to run Quandoom smoothly</span>
                                        <ChevronDown className="w-5 h-5" />
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>How does Quandoom's performance on a simulator compare to running it on actual quantum hardware</span>
                                        <ChevronDown className="w-5 h-5" />
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>What are the potential benefits of using quantum computing for gaming</span>
                                        <ChevronDown className="w-5 h-5" />
                                    </li>
                                </ul>
                            </div>


                        </div>

                        <aside className="lg:w-64 p-4 lg:ml-16 lg:border-l border-gray-200 mt-8 lg:mt-0">
                            <h3 className="font-semibold mb-2">Table of Contents</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-blue-600">Introduction</a></li>
                                <li><a href="#" className="text-gray-600">Quandoom Technical Challenges</a></li>
                                <li><a href="#" className="text-gray-600">Simulation on Classical Computers</a></li>
                                <li><a href="#" className="text-gray-600">Unique Gameplay Features</a></li>
                                <li><a href="#" className="text-gray-600">Development Insights and Future</a></li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </main>

            {/* Chat bar */}
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4">
                <div className="bg-white rounded-full shadow-lg flex items-center p-2">
                    <input type="text" placeholder="Ask follow-up" className="flex-grow px-4 py-2 bg-transparent outline-none" />
                    <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-full ml-2">Pro</button>
                    <button className="text-gray-400 px-4 py-2 ml-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Article;