import React from 'react';

const LoaderIcon: React.FC = () => (
    <div className="text-center mt-16">
        <div className="w-16 h-16 border-2 border-gray-600 rounded-full animate-spin border-t-white mx-auto"></div>
        <p className="mt-6 text-lg text-gray-400">Curating your results...</p>
    </div>
);

export default LoaderIcon;