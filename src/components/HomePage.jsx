import React from 'react';
import { Search, Paperclip, Home, Compass, Book, LogIn, ChevronRight, HelpCircle } from 'lucide-react';

const HomePage = () => {
  return (

    <div className="flex-grow p-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8">Where knowledge begins</h1>

        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Ask anything..."
              className="w-full p-4 pr-20 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <Paperclip className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            <div className="flex items-center mt-2 text-sm text-gray-600">
              <span className="mr-4 flex items-center"><Search size={16} className="mr-1" /> Focus</span>
              <span className="flex items-center"><Paperclip size={16} className="mr-1" /> Attach</span>
              <div className="ml-auto flex items-center">
                <span className="mr-2">Pro</span>
                <div className="w-10 h-5 bg-gray-300 rounded-full flex items-center">
                  <div className="w-4 h-4 bg-white rounded-full ml-0.5 shadow"></div>
                </div>
                <ChevronRight size={16} className="ml-1 text-gray-400" />
              </div>
            </div>
          </div>
          
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center cursor-pointer p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
            <span className="mr-3"><Search className="h-5 w-5" /></span>
            <span className="text-sm font-semibold text-gray-700">How is Perplexity AI different?</span>
          </div>
          <div className="flex cursor-pointer items-center p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
            <span className="mr-3"><Search className="h-5 w-5" /></span>
            <span className="text-sm font-semibold text-gray-700">The next James Bond</span>
          </div>
          <div className="flex cursor-pointer items-center p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
            <span className="mr-3"><Search className="h-5 w-5" /></span>
            <span className="text-sm font-semibold text-gray-700">Most expensive city in 2024</span>
          </div>
          <div className="flex cursor-pointer items-center p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
            <span className="mr-3"><Search className="h-5 w-5" /></span>
            <span className="text-sm font-semibold text-gray-700">Vegetables currently in season</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};



export default HomePage;