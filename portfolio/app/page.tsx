import Image from 'next/image';

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-8 bg-black text-neutral-100 min-h-screen">
      
      {/* Introduction */}
      <div className="bg-neutral-950 border border-neutral-800 rounded-none p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 relative rounded-none border border-neutral-700 bg-neutral-900 ring-1 ring-neutral-800">
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
            long long long long long long long long long long long long long long long long 
            long long long long long long long long long long long long long long long text
          </p>
        </div>
      </div>

      {/* Grid Start */}
      <div className="grid grid-cols-1 md:grid-cols-8 gap-8 items-start">
        
        {/* Timeline */}
        <div className="md:col-span-3 flex flex-col gap-y-6">
          <h2 className="text-sm font-mono tracking-widest uppercase text-neutral-400 px-2">
            // Educational Journey
          </h2>
          <div className="relative border-l border-neutral-800 ml-4 pl-6 flex flex-col gap-y-8">
            
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-none bg-white border border-black ring-1 ring-neutral-700" />
              <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">2025 - Present</span>
              <h3 className="text-sm font-bold text-neutral-100 mt-1">Faculty of Electrical Engineering and Computer Science, University of Maribor</h3>
              <span className="text-xs font-mono text-neutral-400 uppercase block mt-1">Master&apos;s degree</span>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-none bg-neutral-800 border border-neutral-700" />
              <span className="text-xs font-mono tracking-wider text-neutral-500 uppercase">2022 - 2025</span>
              <h3 className="text-sm font-bold text-neutral-200 mt-1">Faculty of Electrical Engineering and Computer Science, University of Maribor</h3>
              <span className="text-xs font-mono text-neutral-400 uppercase block mt-1">Bachelor&apos;s degree</span>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-none bg-neutral-800 border border-neutral-700" />
              <span className="text-xs font-mono tracking-wider text-neutral-500 uppercase">2018 - 2022</span>
              <h3 className="text-sm font-bold text-neutral-200 mt-1">Secondary School of Electrical Engineering and Computer Science Maribor</h3>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-none bg-neutral-800 border border-neutral-700" />
              <span className="text-xs font-mono tracking-wider text-neutral-500 uppercase">2003</span>
              <h3 className="text-sm font-bold text-neutral-200 mt-1">Birth</h3>
            </div>
          </div>

          <h2 className="text-sm font-mono tracking-widest uppercase text-neutral-400 px-2 mt-4">
            // Experience
          </h2>
          <div className="relative border-l border-neutral-800 ml-4 pl-6 flex flex-col gap-y-8">
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-none bg-neutral-800 border border-neutral-700" />
              <span className="text-xs font-mono tracking-wider text-neutral-400 uppercase">2024 - 2026</span>
              <h3 className="text-sm font-bold text-neutral-100 mt-1">Faculty of Electrical Engineering and Computer Science, University of Maribor</h3>
              <span className="text-xs font-mono text-neutral-400 uppercase block mt-1 mb-2">Student Software Developer</span>
              
              <ul className="text-xs text-neutral-400 space-y-1.5 list-disc list-inside font-mono">
                <li>Built TypeScript backend services and PostgreSQL databases across 3 projects.</li>
                <li>Managed database migrations and reproducible environments using Sqitch and Nix.</li>
                <li>Wrote backend testing suites to ensure reliable system code quality.</li>
                <li>Collaborated with a team utilizing a Flutter frontend architecture.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="md:col-span-5 flex flex-col gap-y-6">
          
          {/* Tech Stack */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-none p-6 md:p-8 shadow-2xl">
            <h2 className="text-sm font-mono tracking-widest uppercase text-neutral-400 mb-4">
              // Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {/* Languages */}
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-700 text-xs font-mono text-white rounded-none">TypeScript</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 rounded-none">Node.js</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 rounded-none">C / C++</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 rounded-none">C#</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 rounded-none">Java</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 rounded-none">Kotlin</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 rounded-none">Python</span>
              
              {/* Database */}
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 rounded-none">PostgreSQL</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 rounded-none">MongoDB</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 rounded-none">Sqitch</span>
              
              {/* DevOps & Tools */}
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 rounded-none">Nix</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 rounded-none">Docker</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 rounded-none">Git</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 rounded-none">Firebase</span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 rounded-none">Flutter</span>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-none p-6 md:p-8 shadow-2xl min-h-[200px]">
            <h2 className="text-sm font-mono tracking-widest uppercase text-neutral-400 mb-2">
              // Featured Projects
            </h2>
            <p className="text-neutral-500 font-mono text-xs leading-relaxed">
              This space is intentionally left empty for showcase items, featured open-source repositories, or future portfolio additions.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}