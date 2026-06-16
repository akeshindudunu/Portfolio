'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home(){
    return(
        <div className="h-full w-full flex items-center justify-center p-8">
            <div className="overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text Section */}
                <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                >
                    <Card className="rounded-2xl shadow-md p-6">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold">About Me</CardTitle>
                        </CardHeader>
                        <CardContent className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                            <p>
                                I am a passionate undergraduate with a strong interest in Data Analytics,
                                Artificial Intelligence, and Machine Learning.
                                have hands-on experience working with data-driven applications,
                                along with a solid background in web development using
                                Next.js, UI/UX design with Figma, and version control using Git and GitHub.
                                I enjoy transforming data into meaningful insights and continuously seek to expand
                                my analytical and technical skills.
                            </p>
                            
                            <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition mt-6 inline-block">
                              <Button className="rounded-xl px-6 py-2 text-lg">View Projects</Button>
                            </Link>
                            <Link href="/Resume_Akesh.pdf" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition mt-6 inline-block ml-4">
                                <Button className="rounded-xl px-6 py-2 text-lg">Download Resume</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </motion.div>


                {/* Profile Image */}
                <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
                >
                     <Image
                    src="/Portfolio/profile.jpeg"
                    alt="Profile"
                    width={256}
                    height={256}
                    className="object-cover rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700"
                    />
                </motion.div>
            </div>
        </div>
    );
}