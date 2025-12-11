'use client';

import Link from "next/link"
import {Avatar,AvatarImage,AvatarFallback} from "@/components/ui/avatar"
import { Great_Vibes } from 'next/font/google'

const signature = Great_Vibes({ subsets: ['latin'], weight: '400' })

export default function Header(){
    return(
        <nav className="w-full shadow-md bg-white dark:bg-gray-950 sticky top-0 z-50">
            <div className="mx-auto max-w-7xl flex justify-between items-center px-6 py-4">
                {/*logo*/}
                <Link href="/" className="font-bold text-2xl hover:text-blue-600 transition">
                    <span className={signature.className}>Akesh Indudunu</span>
                </Link>
                
                {/*navigation*/}
                <div className="flex items-center space-x-8">
                    <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
                        Home
                    </Link>
                    <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
                        Projects
                    </Link>
                    <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}