import React from 'react';
import { Link } from 'react-router-dom';
import { BadgeDollarSign, Globe, Medal, Star, TvMinimal } from 'lucide-react';
import { data } from './data';

const Discover = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:ml-64'>
            <div className="flex-1 p-4 lg:p-8 lg:px-28">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-2xl lg:text-3xl flex items-center p-2 mb-4 border-b-2">
                        <Globe className='mr-3' />
                        Discover
                    </h1>
                    <div className="flex flex-wrap gap-2 mb-6">
                        <button className="bg-blue-100 flex items-center text-blue-600 px-4 py-1 rounded-lg text-xs font-medium"><Star className='mr-3' />Top</button>
                        <button className="text-gray-600 px-4 py-1 flex items-center rounded-lg text-xs font-medium hover:bg-gray-100">Tech & Science</button>
                        <button className="text-gray-600 px-4 py-1 flex items-center rounded-lg text-xs font-medium hover:bg-gray-100"><BadgeDollarSign className='mr-3' />Finance</button>
                        <button className="text-gray-600 px-4 py-1 flex items-center rounded-lg text-xs font-medium hover:bg-gray-100">Arts & Culture</button>
                        <button className="text-gray-600 px-4 py-1 flex items-center rounded-lg text-xs font-medium hover:bg-gray-100"><Medal className='mr-3' />Sports</button>
                        <button className="text-gray-600 px-4 py-1 flex items-center rounded-lg text-xs font-medium hover:bg-gray-100"><TvMinimal className='mr-3' />Entertainment</button>
                    </div>

                    {/* Main card */}
                    {
                        data.map((e) => (
                            <>
                                <Link to={"/discover/page"}>
                                    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                                        <img src={e.titleImg} alt="David Lynch" className="w-full h-48 md:h-64 object-cover" />
                                        <div className="p-4 md:p-6 bg-gray-100">
                                            <h2 className="text-lg md:text-xl font-bold mb-2">{e.title}</h2>
                                            <p className="text-gray-600 mb-4">{e.artDesc}</p>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <img src={e.thumbnail} alt="Author" className="w-6 h-6 rounded-full mr-2" />
                                                <span>{e.userName}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                {/* Smaller cards */}
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
                                    
                                    <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                                        <img src={e.cardImg1} alt="Broadcom" className="w-full h-32 object-cover" />
                                        <div className="p-4">
                                            <h3 className="font-bold mb-2">{e.cardTitle1}</h3>
                                            <p className="text-gray-600 mb-4">{e.cardDesc1}</p>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <img src={e.thumbnail} alt="Author" className="w-6 h-6 rounded-full mr-2" />
                                                <span>{e.userName}</span>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                                        <img src={e.cardImg2} alt="Pink Floyd" className="w-full h-32 object-cover" />
                                        <div className="p-4">
                                            <h3 className="font-bold mb-2">{e.cardTitle2}</h3>
                                            <p className="text-gray-600 mb-4">{e.cardDesc2}</p>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <img src={e.thumbnail} alt="Author" className="w-6 h-6 rounded-full mr-2" />
                                                <span>{e.userName}</span>
                                            </div>
                                        </div>
                                    </div>

                                   
                                    <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                                        <img src={e.cardImg3} alt="Biblical Tree" className="w-full h-32 object-cover" />
                                        <div className="p-4">
                                            <h3 className="font-bold mb-2">{e.cardTitle3}</h3>
                                            <p className="text-gray-600 mb-4">{e.cardDesc3}</p>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <img src={e.thumbnail} alt="Author" className="w-6 h-6 rounded-full mr-2" />
                                                <span>{e.userName}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>

            
            <div className="w-full lg:h-2/5 lg:w-80 bg-gray-100 p-4 mt-6 lg:mt-32 rounded-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-semibold text-gray-700">Make it yours</h2>
                </div>
                <p className="text-sm text-gray-600 mb-4">Select topics and interests to customize your Discover experience</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    <button className="bg-blue-200 flex items-center text-blue-600 px-3 py-1 rounded-md text-sm font-medium">
                        Tech & Science
                    </button>
                    <button className="bg-blue-200 flex items-center text-blue-600 px-3 py-1 rounded-md text-sm font-medium"><BadgeDollarSign className='mr-3' />
                       Finance
                    </button>
                    <button className="bg-blue-200 flex items-center text-blue-600 px-3 py-1 rounded-md text-sm font-medium">
                    Arts & Culture
                        </button>
                    <button className="bg-blue-200 flex items-center text-blue-600 px-3 py-1 rounded-md text-sm font-medium"><Medal className='mr-3' />Sports</button>
                    <button className="bg-blue-200 flex items-center text-blue-600 px-3 py-1 rounded-md text-sm font-medium"><TvMinimal className='mr-3' />Entertainment</button>
                </div>
                <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-md text-sm font-medium">
                    Save Interests
                </button>
            </div>
        </div>
    );
};

export default Discover;