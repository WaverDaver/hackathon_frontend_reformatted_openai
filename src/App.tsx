// src/App.tsx
import React, { useState, useEffect, useRef } from 'react';
import type { ArtResult } from './types';
import NavBar from './components/ui/NavBar';
import LandingPage from './components/pages/LandingPage';
import InputPage from './components/pages/InputPage';

const App: React.FC = () => {
    // State management
    const [page, setPage] = useState<'landing' | 'input'>('landing');
    const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [results, setResults] = useState<ArtResult[]>([]);
    const [currentTime, setCurrentTime] = useState<string>('');
    
    // Refs
    const searchInputRef = useRef<HTMLInputElement>(null);
    const menuButtonRef = useRef<HTMLDivElement>(null);
    const navBarRef = useRef<HTMLDivElement>(null);

    // --- EFFECTS ---

    // Effect for the real-time clock
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            setCurrentTime(timeString);
        };
        updateClock();
        const timerId = setInterval(updateClock, 60000); // Update every minute
        return () => clearInterval(timerId);
    }, []);

    // Effect for keyboard input on the landing page
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (page === 'landing' && !isMenuOpen && event.key.length === 1 && !event.ctrlKey && !event.altKey && !event.metaKey) {
                event.preventDefault();
                goToInputPage(event.key);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [page, isMenuOpen]);

    // Effect to handle clicks outside the mobile menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isMenuOpen &&
                navBarRef.current && !navBarRef.current.contains(event.target as Node) &&
                menuButtonRef.current && !menuButtonRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    // --- HANDLERS AND FUNCTIONS ---

    const goToInputPage = (startingChar: string = '') => {
        setIsFadingOut(true);
        setTimeout(() => {
            setPage('input');
            setInputValue(startingChar);
            setIsFadingOut(false);
            setTimeout(() => searchInputRef.current?.focus(), 0);
        }, 500);
    };

    const goBackToLanding = () => {
        setIsFadingOut(true);
        setTimeout(() => {
            setPage('landing');
            setInputValue('');
            setResults([]);
            setIsLoading(false);
            setIsFadingOut(false);
        }, 500);
    };
    
    const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
            event.preventDefault();
            fetchResults();
        }
    };

    const fetchResults = () => {
        setResults([]);
        setIsLoading(true);
        setTimeout(() => {
            const dummyData: ArtResult[] = [
                 { title: 'Neon Dreams', artist: 'J. Harrison', match: 94 },
                { title: 'Solitude in Blue', artist: 'Maria Petrova', match: 91 },
                // ... more data
            ];
            setResults(dummyData);
            setIsLoading(false);
        }, 2000);
    };

    // --- RENDER ---
    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }} className="bg-[#111] text-[#f5f5f4] overflow-x-hidden">
            <style>{`
                /* Keep global styles here or move to index.css */
                .font-brand { font-family: 'Archivo Black', sans-serif; }
                .main-container { min-height: 100vh; width: 100vw; }
                .prompt-container::after { content: '_'; opacity: 1; animation: blink 1s infinite; }
                @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
                .mobile-menu { transform: translateX(100%); transition: transform 0.3s ease-in-out; }
                .mobile-menu.open { transform: translateX(0); }
                html { scroll-behavior: smooth; }
                .art-card .overlay { opacity: 0; transition: opacity 0.3s ease-in-out; }
                .art-card:hover .overlay { opacity: 1; }
            `}</style>
            
            <div className="select-none">
                <NavBar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} menuRef={navBarRef} />

                {page === 'landing' ? (
                    <LandingPage
                        currentTime={currentTime}
                        onMenuOpen={() => setIsMenuOpen(true)}
                        menuButtonRef={menuButtonRef}
                        isFadingOut={isFadingOut}
                    />
                ) : (
                    <InputPage
                        inputValue={inputValue}
                        onInputChange={(e) => setInputValue(e.target.value)}
                        onSearch={handleSearch}
                        onGoBack={goBackToLanding}
                        isLoading={isLoading}
                        results={results}
                        currentTime={currentTime}
                        searchInputRef={searchInputRef}
                        isFadingOut={isFadingOut}
                    />
                )}
            </div>
        </div>
    );
};

export default App;