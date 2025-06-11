export default function Home() {
  return (
    <div className="al-folio-container py-12">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-lg overflow-hidden al-folio-card">
            <div className="w-full h-full flex items-center justify-center al-folio-text">
              <img src = "/images/profile.jpg" alt="Rishab Chaudhary" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="mt-4 text-sm al-folio-text">
            <p>rishabchaudhary2245@gmail.com</p>
            <p>Ghaziabad, U.P., India</p>
          </div>
        </div>

        {/* Bio Content */}
        <div className="flex-grow">
          <h1 className="text-4xl lg:text-5xl font-bold al-folio-heading mb-4">
            Rishab Chaudhary
          </h1>
          
          <p className="text-lg al-folio-text mb-6">
            Frontend Developer at{" "}
            <span className="al-folio-link font-medium">Blockchain Research Lab</span>. 
            Information Technology Student. Tech Enthusiast.
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="al-folio-text leading-relaxed">
              I am a passionate full-stack developer and Information Technology student at Ajay Kumar Garg Engineering College. 
              Currently working as a Frontend Developer at Blockchain Research Lab, where I build responsive and visually 
              striking websites using modern technologies like ReactJS, Tailwind CSS, and JavaScript.
            </p>
            
            <p className="al-folio-text leading-relaxed">
              My expertise spans across multiple programming languages including JavaScript, Python, Java, and emerging 
              technologies like Solidity and Rust. I have hands-on experience with full-stack development, cloud computing, 
              DevOps practices, and blockchain technology. I&apos;m particularly interested in creating user-centric applications 
              that solve real-world problems.
            </p>

            <p className="al-folio-text leading-relaxed">
              When I&apos;m not coding, you can find me contributing to open-source projects, exploring new technologies, 
              or working on personal projects that challenge my skills and creativity. I believe in continuous learning 
              and staying updated with the latest trends in technology.
            </p>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold al-folio-heading mb-6 flex items-center">
          <span className="news-badge mr-3">
            news
          </span>
        </h2>
        
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-sm font-medium al-folio-text min-w-[100px]">Jan 15, 2025</span>
            <span className="al-folio-text">
              🎉 Portfolio website launched with Next.js and modern design!
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-sm font-medium al-folio-text min-w-[100px]">Jan 2024</span>
            <span className="al-folio-text">
              🏆 Achieved Grade A in DOEACC/NIELIT &apos;O&apos; Level Certification
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-sm font-medium al-folio-text min-w-[100px]">Oct 2023</span>
            <span className="al-folio-text">
              🚀 Successfully completed 4+ pull requests in Hacktoberfest 2023
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-sm font-medium al-folio-text min-w-[100px]">Sep 2023</span>
            <span className="al-folio-text">
              💼 Started as Frontend Developer at Blockchain Research Lab
            </span>
          </div>
        </div>
      </div>

      {/* Latest Projects */}
      <div>
        <h2 className="text-2xl font-bold al-folio-heading mb-6 flex items-center">
          <span className="projects-badge mr-3">
            latest projects
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="al-folio-card p-6">
            <h3 className="font-semibold al-folio-heading mb-2">ValoHub</h3>
            <p className="al-folio-text text-sm mb-3">
              A full-stack platform showcasing Valorant skins and accounts with admin dashboard
            </p>
            <div className="flex flex-wrap gap-1">
              {["React", "Node.js", "MongoDB"].map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="al-folio-card p-6">
            <h3 className="font-semibold al-folio-heading mb-2">Netflix-GPT</h3>
            <p className="al-folio-text text-sm mb-3">
              Intelligent movie recommendation platform using GPT-powered analysis
            </p>
            <div className="flex flex-wrap gap-1">
              {["React", "Redux", "Firebase"].map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="al-folio-card p-6">
            <h3 className="font-semibold al-folio-heading mb-2">GitFinder</h3>
            <p className="al-folio-text text-sm mb-3">
              Dynamic GitHub user details interface utilizing the GitHub API
            </p>
            <div className="flex flex-wrap gap-1">
              {["React", "JavaScript", "REST API"].map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

