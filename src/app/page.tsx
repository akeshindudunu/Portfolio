'use client';

import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home(){
    return(
        <div className="min-h-screen w-full flex items-center justify-center p-8">
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
                                I'm an experienced Full Stack Developer with a strong background in
                                building scalable, high‑performance applications. I specialize in
                                creating seamless digital experiences using modern technologies such as
                                React, Next.js, NestJS, Node.js, and MySQL.
                            </p>
                            <p className="mt-4">
                                As a developer, I focus on clean architecture, efficient solutions, and
                                user‑centric design. I love solving complex problems and turning ideas
                                into polished, production‑ready systems.
                            </p>
                            <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition mt-6 inline-block">
                              <Button className="rounded-xl px-6 py-2 text-lg">View Projects</Button>
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
                    <img
                    src="\profile.jpeg"
                    alt="Profile"
                    className="w-64 h-64 object-cover rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700"
                    />
                </motion.div>
            </div>
        </div>
    );
}