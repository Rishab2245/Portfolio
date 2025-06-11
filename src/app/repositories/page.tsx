import Link from 'next/link';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import repositoriesData from '@/data/repositories.json';

export default function RepositoriesPage() {
  return (
    <div className="al-folio-container py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold al-folio-heading mb-4">GitHub Repositories</h1>
        <p className="text-lg al-folio-text">
          A showcase of my open-source contributions and personal projects hosted on GitHub. 
          Feel free to explore, fork, or contribute to any of these repositories.
        </p>
      </div>

      {/* GitHub Stats Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="al-folio-card p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
          <div className="al-folio-text text-sm">Public Repositories</div>
        </div>
        <div className="al-folio-card p-6 text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">4+</div>
          <div className="al-folio-text text-sm">Hacktoberfest PRs</div>
        </div>
        <div className="al-folio-card p-6 text-center">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2+</div>
          <div className="al-folio-text text-sm">Years Active</div>
        </div>
      </div>

      {/* Featured Repositories */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold al-folio-heading mb-6">Featured Repositories</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {repositoriesData.repositories.map((repo) => (
            <div key={repo.name} className="al-folio-card p-6 hover:shadow-lg transition-all duration-300 group">
              {/* Repository Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold al-folio-heading mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link href={repo.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {repo.name}
                    </Link>
                  </h3>
                  <p className="al-folio-text text-sm leading-relaxed">
                    {repo.description}
                  </p>
                </div>
                <Link
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <ExternalLink className="h-4 w-4 al-folio-text" />
                </Link>
              </div>

              {/* Repository Stats */}
              <div className="flex items-center gap-4 text-sm al-folio-text mb-4">
                <div className="flex items-center gap-1">
                  <div className={`w-3 h-3 rounded-full ${
                    repo.language === 'JavaScript' ? 'bg-yellow-400' :
                    repo.language === 'TypeScript' ? 'bg-blue-500' :
                    repo.language === 'Python' ? 'bg-green-500' :
                    'bg-gray-400'
                  }`}></div>
                  <span>{repo.language}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  <span>{repo.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="h-3 w-3" />
                  <span>{repo.forks}</span>
                </div>
              </div>

              {/* Repository Actions */}
              <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href={repo.url}
                  className="flex items-center gap-1 text-sm al-folio-link hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Profile Link */}
      <div className="text-center">
        <div className="al-folio-card p-8">
          <h3 className="text-xl font-semibold al-folio-heading mb-4">
            Want to see more?
          </h3>
          <p className="al-folio-text mb-6">
            Check out my complete GitHub profile for more repositories, contributions, and activity.
          </p>
          <Link
            href="https://github.com/rishab2245"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Github className="h-5 w-5" />
            Visit GitHub Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

