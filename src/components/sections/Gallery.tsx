import React from 'react';

const Gallery: React.FC = () => (
    <section id="gallery" className="min-h-screen bg-stone-900 p-4 sm:p-6 md:p-8 flex items-center">
    <div className="max-w-6xl mx-auto w-full">
       <h2 className="font-brand text-6xl md:text-8xl lg:text-9xl mb-16 text-center" style={{color: '#333'}}>GALLERY</h2>
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
           <div className="bg-stone-800 rounded-lg aspect-square"></div>
           <div className="bg-stone-700 rounded-lg aspect-[3/4]"></div>
           <div className="bg-stone-600 rounded-lg aspect-square"></div>
           <div className="bg-stone-800 rounded-lg aspect-[4/3]"></div>
           <div className="bg-stone-700 rounded-lg aspect-[4/3]"></div>
           <div className="bg-stone-600 rounded-lg aspect-square"></div>
           <div className="bg-stone-800 rounded-lg aspect-[3/4]"></div>
           <div className="bg-stone-700 rounded-lg aspect-square"></div>
           <div className="bg-stone-600 rounded-lg aspect-[4/3] md:col-span-2"></div>
           <div className="bg-stone-800 rounded-lg aspect-square"></div>
           <div className="bg-stone-700 rounded-lg aspect-[3/4]"></div>
       </div>
       <div className="text-center mt-16">
           <p className="text-gray-400 text-lg mb-8">Discover thousands of curated artworks from talented artists worldwide</p>
           <button className="bg-stone-800/50 hover:bg-stone-700/50 transition-colors px-8 py-3 rounded-full font-bold">
               EXPLORE MORE
           </button>
       </div>
    </div>
</section>
);
export default Gallery;