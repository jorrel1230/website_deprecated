import { useState, useEffect } from 'react';
import DownloadButton from './downloadbutton.tsx';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [disableHide, setDisableHide] = useState(false); // Flag to disable hide during anchor navigation

    // Scroll event handler
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (!disableHide) {
            if (currentScrollY > lastScrollY) {
                // Scrolling down: hide navbar
                setShowNavbar(false);
            } else {
                // Scrolling up: show navbar
                setShowNavbar(true);
            }
        }

        // Update last scroll position
        setLastScrollY(currentScrollY);
    };

    // Function to handle clicks on anchor links
    const handleAnchorClick = () => {
        setDisableHide(true); // Disable hiding on anchor link click
        setTimeout(() => setDisableHide(false), 500); // Re-enable hiding after a short delay
    };

    // Add scroll listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('popstate', handleAnchorClick); // Detect anchor navigation

        // Cleanup listeners when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('popstate', handleAnchorClick);
        };
    }, [lastScrollY, disableHide]);

    return (
        <div
            className={`h-[12.5vh] w-full bg-theme-green p-5 flex items-center fixed top-0 left-0 transition-transform duration-300 ${
                showNavbar ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="group relative ml-5">
                <a href="/">
                    <h1 className="font-playfair-display text-3xl text-theme-white pb-1">Jorrel Rajan</h1>
                </a>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-theme-white transition-all duration-300 group-hover:w-full"></span>
            </div>

            <div className="flex ml-auto items-center">
                <a className="ml-5 font-playfair-display text-xl text-theme-white group relative" href="/#about">
                    <p>About Me</p>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-theme-white transition-all duration-300 group-hover:w-full"></span>
                </a>

                <a className="ml-5 font-playfair-display text-xl text-theme-white group relative" href="/#experience">
                    <p>Experience</p>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-theme-white transition-all duration-300 group-hover:w-full"></span>
                </a>

                <a className="ml-5 font-playfair-display text-xl text-theme-white group relative" href="/#projects">
                    <p>Projects</p>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-theme-white transition-all duration-300 group-hover:w-full"></span>
                </a>

                <a className="ml-5 font-playfair-display text-xl text-theme-white group relative" href="/#contact">
                    <p>Contact Me</p>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-theme-white transition-all duration-300 group-hover:w-full"></span>
                </a>

                <div className="ml-7">
                    <DownloadButton />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
