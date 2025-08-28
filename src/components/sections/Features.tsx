import React from 'react';

const Features: React.FC = () => (
    <section id="features" className="min-h-screen bg-stone-900 p-4 sm:p-6 md:p-8 flex items-center">
                        <div className="max-w-6xl mx-auto w-full">
                        <h2 className="font-brand text-6xl md:text-8xl lg:text-9xl mb-16 text-center text-[#333]">FEATURES</h2>
                            <div className="grid md:grid-cols-3 gap-12 md:gap-16">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-stone-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f5f5f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"/><path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1"/><path d="M3 12v6c0 .552.448 1 1 1h16c.552 0 1-.448 1-1v-6"/></svg>
                                    </div>
                                    <h3 className="font-bold text-xl mb-4">AI-POWERED CURATION</h3>
                                    <p className="text-gray-400 leading-relaxed">Advanced algorithms analyze your preferences to discover art that matches your unique taste profile.</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-stone-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f5f5f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/></svg>
                                    </div>
                                    <h3 className="font-bold text-xl mb-4">HUMAN-MADE FOCUS</h3>
                                    <p className="text-gray-400 leading-relaxed">Exclusively featuring authentic human-created artwork from talented artists around the world.</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-stone-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f5f5f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                                    </div>
                                    <h3 className="font-bold text-xl mb-4">PERSONALIZED DISCOVERY</h3>
                                    <p className="text-gray-400 leading-relaxed">Every recommendation is tailored to your evolving artistic preferences and discovery journey.</p>
                                </div>
                            </div>
                        </div>
                    </section>
);
export default Features;