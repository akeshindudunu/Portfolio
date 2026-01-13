'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  techStack: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Industry Day Event Management System',
    shortDescription: 'Full-stack web system for managing industry day events.',
    description:
      'A complete event management platform developed for the Student Industry Interaction Cell. Includes role-based dashboards for students, companies, admins, and room coordinators with secure authentication and real-time data handling.',
    techStack: ['Next.js', 'NestJS', 'MySQL', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Course Registration System',
    shortDescription: 'Web-based course enrollment and management system.',
    description:
      'A system that allows students to browse courses, register online, and receive confirmations. Staff members can manage courses, schedules, and student data securely.',
    techStack: ['Next.js', 'Node.js', 'MySQL'],
  },
   {
    id: 2,
    title: 'Course Registration System',
    shortDescription: 'Web-based course enrollment and management system.',
    description:
      'A system that allows students to browse courses, register online, and receive confirmations. Staff members can manage courses, schedules, and student data securely.',
    techStack: ['Next.js', 'Node.js', 'MySQL'],
  },
   {
    id: 2,
    title: 'Course Registration System',
    shortDescription: 'Web-based course enrollment and management system.',
    description:
      'A system that allows students to browse courses, register online, and receive confirmations. Staff members can manage courses, schedules, and student data securely.',
    techStack: ['Next.js', 'Node.js', 'MySQL'],
  },
   {
    id: 2,
    title: 'Course Registration System',
    shortDescription: 'Web-based course enrollment and management system.',
    description:
      'A system that allows students to browse courses, register online, and receive confirmations. Staff members can manage courses, schedules, and student data securely.',
    techStack: ['Next.js', 'Node.js', 'MySQL'],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            A selection of projects I’ve worked on recently
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card
                className="rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-lg transition"
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 dark:text-gray-300">
                  <p>{project.shortDescription}</p>
                  <Button className="mt-4 rounded-xl">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-2xl w-full"
              >
                <Card className="rounded-2xl p-6">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold">
                      {selectedProject.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>{selectedProject.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2">Tech Stack</h4>
                      <ul className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech) => (
                          <li
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      className="mt-4 rounded-xl"
                      onClick={() => setSelectedProject(null)}
                    >
                      Close
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
