import Link from 'next/link';
import { ExternalLink, Github, Code } from 'lucide-react';
import projectsData from '@/data/projects.json';

export default function ProjectsPage() {
  return (
    <div className="al-folio-container py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold al-folio-heading mb-4">Projects</h1>
        <p className="text-lg al-folio-text">
          A collection of projects I&apos;ve worked on, showcasing my skills in full-stack development, 
          UI/UX design, and modern web technologies.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.projects.map((project) => (
          <div key={project.id} className="al-folio-card p-6 hover:shadow-lg transition-all duration-300 group">
            {/* Project Image Placeholder */}
            <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg mb-4 flex items-center justify-center">
              <Code className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-semibold al-folio-heading mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="al-folio-text text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Features */}
            <div className="mb-4">
              <h4 className="text-sm font-medium al-folio-heading mb-2">Key Features:</h4>
              <ul className="text-xs al-folio-text space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              {project.github && (
                <Link
                  href={project.github}
                  className="flex items-center gap-1 text-sm al-folio-link hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  Code
                </Link>
              )}
              {project.demo && (
                <Link
                  href={project.demo}
                  className="flex items-center gap-1 text-sm al-folio-link hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="al-folio-card p-8">
          <h3 className="text-xl font-semibold al-folio-heading mb-4">
            Interested in collaborating?
          </h3>
          <p className="al-folio-text mb-6">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Get in touch
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

