import React from 'react';

interface HeaderProps {
    onMenuOpen: () => void;
    menuButtonRef: React.RefObject<HTMLDivElement | null>;
}

const Header: React.FC<HeaderProps> = ({ onMenuOpen, menuButtonRef }) => (
    <header className="w-full flex justify-between items-center z-10">
        <div className="w-10 h-10">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.59L7.41 13 9 11.41l2 2 4-4L16.59 11 11 16.59z" fill="#f5f5f4" />
            </svg>
        </div>
        <div ref={menuButtonRef} onClick={onMenuOpen} className="w-10 h-10 bg-stone-800/50 rounded-full flex items-center justify-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5f5f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </div>
    </header>
);

export default Header;