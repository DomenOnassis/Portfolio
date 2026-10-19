import Image from 'next/image';

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-8 bg-black text-neutral-100 min-h-screen">
      <div className="bg-neutral-950 border border-neutral-800 rounded-none p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 relative rounded-none border border-neutral-700 bg-neutral-900 ring-1 ring-neutral-800">
          <Image 
            src="/globe.svg"
            alt="Domen Onassis"
            fill
            className="object-cover grayscale contrast-125"
            priority
          />
        </div>
        <div className="flex flex-col w-full text-center md:text-left">
          <span className="text-3xl font-mono font-bold tracking-widest uppercase text-white">
            Domen Onassis
          </span>
          <span className="text-xs font-mono tracking-wider text-neutral-400 uppercase mt-1">
            Computer Engineer
          </span>
          <p className="mt-4 text-neutral-300 text-sm md:text-base leading-relaxed font-mono">
            Master's student in Computer Engineering at the University of Maribor with nearly two
            years of hands-on experience building backend services in TypeScript and PostgreSQL.
            Comfortable across the stack, from reproducible environments and database
            migrations to automated testing and even designing . Currently
            open to on-site and hybrid roles.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-8 gap-8 items-start">
        <div className="md:col-span-3 flex flex-col gap-y-6">
          <h2 className="text-sm font-mono tracking-widest uppercase text-neutral-400 px-2">
            // Educational Journey
          </h2>
          <div className="relative border-l border-neutral-800 ml-4 pl-6 flex flex-col gap-y-8">
            
            <div className="relative">
              <div className="absolute -left-7.75 top-1.5 w-2.5 h-2.5 rounded-none bg-white border border-black ring-1 ring-neutral-700" />
              <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">2025 - Present</span>
              <h3 className="text-sm font-bold text-neutral-100 mt-1">Faculty of Electrical Engineering and Computer Science, University of Maribor</h3>
              <span className="text-xs font-mono text-neutral-400 uppercase block mt-1">Master&apos;s degree</span>
            </div>

            <div className="relative">
              <div className="absolute -left-7.75 top-1.5 w-2.5 h-2.5 rounded-none bg-neutral-800 border border-neutral-700" />
              <span className="text-xs font-mono tracking-wider text-neutral-500 uppercase">2022 - 2025</span>
              <h3 className="text-sm font-bold text-neutral-200 mt-1">Faculty of Electrical Engineering and Computer Science, University of Maribor</h3>
              <span className="text-xs font-mono text-neutral-400 uppercase block mt-1">Bachelor&apos;s degree</span>
            </div>

            <div className="relative">
              <div className="absolute -left-7.75 top-1.5 w-2.5 h-2.5 rounded-none bg-neutral-800 border border-neutral-700" />
              <span className="text-xs font-mono tracking-wider text-neutral-500 uppercase">2018 - 2022</span>
              <h3 className="text-sm font-bold text-neutral-200 mt-1">Secondary School of Electrical Engineering and Computer Science Maribor</h3>
            </div>

            <div className="relative">
              <div className="absolute -left-7.75 top-1.5 w-2.5 h-2.5 rounded-none bg-neutral-800 border border-neutral-700" />
              <span className="text-xs font-mono tracking-wider text-neutral-500 uppercase">2003</span>
              <h3 className="text-sm font-bold text-neutral-200 mt-1">Birth</h3>
            </div>
          </div>

          <h2 className="text-sm font-mono tracking-widest uppercase text-neutral-400 px-2 mt-4">
            // Experience
          </h2>

          <div className="relative border-l border-neutral-800 ml-4 pl-6 flex flex-col gap-y-8">
            <div className="relative">
              <div className="absolute -left-7.75 top-1.5 w-2.5 h-2.5 rounded-none bg-white border border-black ring-1 ring-neutral-700" />
              <span className="text-xs font-mono tracking-wider text-neutral-400 uppercase">2026 - Present</span>
              <h3 className="text-sm font-bold text-neutral-100 mt-1">Faculty of Electrical Engineering and Computer Science, University of Maribor</h3>
              <span className="text-xs font-mono text-neutral-400 uppercase block mt-1 mb-2">Demonstrator</span>

              <ul className="text-xs text-neutral-400 space-y-1.5 list-disc list-inside font-mono">
                <li>Assisted course assistants and professors with conducting practical laboratory sessions.</li>
                <li>Guided students through debugging code, solving technical problems, and completing course assignments.</li>
                <li>Provided hands-on technical support and feedback during programming and development labs.</li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -left-7.75 top-1.5 w-2.5 h-2.5 rounded-none bg-neutral-800 border border-neutral-700" />
              <span className="text-xs font-mono tracking-wider text-neutral-400 uppercase">2024 - 2026</span>
              <h3 className="text-sm font-bold text-neutral-100 mt-1">Faculty of Electrical Engineering and Computer Science, University of Maribor</h3>
              <span className="text-xs font-mono text-neutral-400 uppercase block mt-1 mb-2">Student Software Developer</span>
              
              <ul className="text-xs text-neutral-400 space-y-1.5 list-disc list-inside font-mono">
                <li>Built TypeScript backend services and PostgreSQL databases across 3 projects.</li>
                <li>Managed database migrations and reproducible environments using Sqitch and Nix.</li>
                <li>Wrote backend testing suites to ensure reliable system code quality.</li>
                <li>Collaborated with a team utilizing a Flutter frontend architecture.</li>
                <li>Designed interactable projects using Figma</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col gap-y-6">
          <div className="bg-neutral-950 border border-neutral-800 rounded-none p-6 md:p-8 shadow-2xl">
            <h2 className="text-sm font-mono tracking-widest uppercase text-neutral-400 mb-4">
              // Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-700 text-xs font-mono text-white rounded-none">TypeScript</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-700 text-xs font-mono text-neutral-300 rounded-none">Node.js</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-700 text-xs font-mono text-neutral-300 rounded-none">C / C++</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-700 text-xs font-mono text-neutral-300 rounded-none">C#</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-700 text-xs font-mono text-neutral-300 rounded-none">Kotlin</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-700 text-xs font-mono text-neutral-300 rounded-none">Python</span>
              
              {/* Database */}
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 rounded-none">PostgreSQL</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 rounded-none">MongoDB</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 rounded-none">Sqitch</span>
              
              {/* DevOps & Tools */}
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-600 text-xs font-mono text-neutral-300 rounded-none">Nix</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-600 text-xs font-mono text-neutral-300 rounded-none">Docker</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-600 text-xs font-mono text-neutral-300 rounded-none">Git</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-600 text-xs font-mono text-neutral-300 rounded-none">Firebase</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-600 text-xs font-mono text-neutral-300 rounded-none">Flutter</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-600 text-xs font-mono text-neutral-300 rounded-none">Svelte</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-600 text-xs font-mono text-neutral-300 rounded-none">Figma</span>
            </div>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 rounded-none p-6 md:p-8 shadow-2xl min-h-50">
            <h2 className="text-sm font-mono tracking-widest uppercase text-neutral-400 mb-2">
              // Featured Projects
            </h2>
            <p className="text-neutral-500 font-mono text-xs leading-relaxed">
              Currently working on:{' '}
              <a 
                href="https://github.com/DomenOnassis/FileTransfer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white underline transition-colors"
              >
                https://github.com/DomenOnassis/FileTransfer
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}