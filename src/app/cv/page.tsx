import Link from 'next/link';
import { Download, MapPin, Mail, Calendar, Award, Briefcase, GraduationCap, Code, ExternalLink } from 'lucide-react';
import cvData from '@/data/cv.json';

export default function CVPage() {
  return (
    <div className="al-folio-container py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold al-folio-heading mb-2">Curriculum Vitae</h1>
            <p className="text-lg al-folio-text">
              A comprehensive overview of my education, experience, and skills.
            </p>
          </div>
          <Link
            href="/Rishab_Resume.pdf"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors self-start"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Link>
        </div>
      </div>

      {/* Personal Information */}
      <div className="al-folio-card p-6 mb-8">
        <h2 className="text-2xl font-bold al-folio-heading mb-4">{cvData.personal.name}</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm al-folio-text">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${cvData.personal.email}`} className="al-folio-link">
              {cvData.personal.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{cvData.personal.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4" />
            <a href={`https://${cvData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="al-folio-link">
              {cvData.personal.linkedin}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            <a href={`https://${cvData.personal.github}`} target="_blank" rel="noopener noreferrer" className="al-folio-link">
              {cvData.personal.github}
            </a>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="al-folio-card p-6 mb-8">
        <h2 className="text-2xl font-bold al-folio-heading mb-6 flex items-center gap-2">
          <GraduationCap className="h-6 w-6" />
          Education
        </h2>
        <div className="space-y-6">
          {cvData.education.map((edu, index) => (
            <div key={index} className="border-l-2 border-blue-200 dark:border-blue-800 pl-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-lg font-semibold al-folio-heading">{edu.degree}</h3>
                <span className="text-sm al-folio-text flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>
              <p className="font-medium al-folio-text">{edu.institution}</p>
              <p className="text-sm al-folio-text">{edu.location}</p>
              {edu.gpa && (
                <p className="text-sm al-folio-text mt-1">
                  <span className="font-medium">GPA:</span> {edu.gpa}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="al-folio-card p-6 mb-8">
        <h2 className="text-2xl font-bold al-folio-heading mb-6 flex items-center gap-2">
          <Briefcase className="h-6 w-6" />
          Experience
        </h2>
        <div className="space-y-6">
          {cvData.experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-green-200 dark:border-green-800 pl-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-lg font-semibold al-folio-heading">{exp.title}</h3>
                <span className="text-sm al-folio-text flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <p className="font-medium al-folio-text">{exp.company}</p>
              <p className="text-sm al-folio-text mb-3">{exp.location}</p>
              <ul className="space-y-2">
                {exp.description.map((desc, descIndex) => (
                  <li key={descIndex} className="text-sm al-folio-text flex items-start">
                    <span className="w-1 h-1 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="al-folio-card p-6 mb-8">
        <h2 className="text-2xl font-bold al-folio-heading mb-6 flex items-center gap-2">
          <Code className="h-6 w-6" />
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold al-folio-heading mb-3">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {cvData.skills.languages.map((lang) => (
                <span key={lang} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                  {lang}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold al-folio-heading mb-3">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {cvData.skills.frameworks.map((framework) => (
                <span key={framework} className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                  {framework}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold al-folio-heading mb-3">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {cvData.skills.databases.map((db) => (
                <span key={db} className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
                  {db}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold al-folio-heading mb-3">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {cvData.skills.tools.map((tool) => (
                <span key={tool} className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold al-folio-heading mb-3">Core Competencies</h3>
          <div className="flex flex-wrap gap-2">
            {cvData.skills.concepts.map((concept) => (
              <span key={concept} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full">
                {concept}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="al-folio-card p-6">
        <h2 className="text-2xl font-bold al-folio-heading mb-6 flex items-center gap-2">
          <Award className="h-6 w-6" />
          Certifications
        </h2>
        <div className="space-y-4">
          {cvData.certifications.map((cert, index) => (
            <div key={index} className="border-l-2 border-yellow-200 dark:border-yellow-800 pl-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-lg font-semibold al-folio-heading">{cert.name}</h3>
                <span className="text-sm al-folio-text flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {cert.date}
                </span>
              </div>
              <p className="font-medium al-folio-text">{cert.issuer}</p>
              {cert.grade && (
                <p className="text-sm al-folio-text mt-1">
                  <span className="font-medium">Grade:</span> {cert.grade}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

