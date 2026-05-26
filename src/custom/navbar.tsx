'use client';

import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Great_Vibes } from 'next/font/google'
import { useEffect, useState, useRef } from "react"; // 1. Added useRef
import { Menu, X } from "lucide-react";

const signature = Great_Vibes({ subsets: ['latin'], weight: '400' })

export default function Navbar(){
    const [theme, setTheme] = useState<'light'|'dark'>(() => {
        if (typeof window === 'undefined') return 'light'
        return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    })
    const [isOpen, setIsOpen] = useState(false);
    
    // 2. Created a reference to the entire navbar element
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [theme])

    // 3. Close the menu if a click/touch happens outside of the navbar
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
            if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        // Listen for both regular mouse clicks and mobile screen touches
        document.addEventListener("mousedown", handleOutsideClick);
        document.addEventListener("touchstart", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("touchstart", handleOutsideClick);
        };
    }, [isOpen]);

    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    const toggleMenu = () => setIsOpen(prev => !prev);

    return(
        // 4. Added the ref={navRef} right here
        <nav ref={navRef} className="w-full shadow-md bg-white dark:bg-gray-950 sticky top-0 z-50">
            <div className="mx-auto max-w-7xl flex justify-between items-center px-6 py-4">
                {/*logo*/}
                <Link href="/" className="font-bold text-2xl hover:text-blue-600 transition">
                    <span className={signature.className}>Akesh Indudunu</span>
                </Link>
                
                {/* Desktop navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
                        Home
                    </Link>
                    <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
                        Projects
                    </Link>
                    <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
                        Contact
                    </Link>
                    
                    {/* theme toggle */}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label="Toggle dark mode"
                        className="ml-2 p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    >
                        {theme === 'dark' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M6.343 6.343L4.929 4.93M12 7a5 5 0 100 10 5 5 0 000-10z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Right Actions */}
                <div className="flex items-center space-x-4 md:hidden">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label="Toggle dark mode"
                        className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    >
                        {theme === 'dark' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M6.343 6.343L4.929 4.93M12 7a5 5 0 100 10 5 5 0 000-10z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-6 py-4 space-y-4 flex flex-col">
                    <Link 
                        href="/" 
                        onClick={() => setIsOpen(false)}
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium text-lg"
                    >
                        Home
                    </Link>
                    <Link 
                        href="/projects" 
                        onClick={() => setIsOpen(false)}
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium text-lg"
                    >
                        Projects
                    </Link>
                    <Link 
                        href="/contact" 
                        onClick={() => setIsOpen(false)}
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium text-lg"
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    )
}