'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact(){
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Send form data to backend API or email service
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
    };

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
                            <CardTitle className="text-3xl font-bold">Get In Touch</CardTitle>
                        </CardHeader>
                        <CardContent className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                            <p>
                                I&apos;d love to hear from you! Whether you have a project in mind, want to collaborate, or just want to chat about technology and development, feel free to reach out.
                            </p>
                            <p className="mt-4">
                                I&apos;m always open to discussing new ideas, creative projects, or opportunities to contribute my expertise.
                            </p>
                            <div className="mt-6 space-y-3">
                                <p><strong>Email:</strong> <a href="mailto:patikiri.ai@gmail.com" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">patikiri.ai@gmail.com</a></p>
                                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/akesh-indudunu-9a9b12254/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">linkedin.com/in/akesh-indudunu</a></p>
                                <p><strong>GitHub:</strong> <a href="https://github.com/akeshindudunu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">github.com/akeshindudunu</a></p>
                                <p><strong>Phone:</strong> <a target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">+94716306892</a></p>
                            </div>
                            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition mt-6 inline-block">
                              <Button className="rounded-xl px-6 py-2 text-lg">Back Home</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                >
                    <Card className="rounded-2xl shadow-md p-6">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {submitted && (
                                <div className="mb-4 p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg">
                                    Thank you! Your message has been sent.
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Your name"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Your message..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button type="submit" className="w-full rounded-xl px-6 py-2 text-lg mt-2">
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}