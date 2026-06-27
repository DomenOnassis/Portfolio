import Image from 'next/image';

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 flex flex-col gap-8">
      
      {/* Introduction */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 relative rounded-full overflow-hidden border-2 border-gray-200 bg-white shadow-sm">
          <Image 
            src="/globe.svg"
            alt="Domen Onassis"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col w-full text-center md:text-left">
          <span className="text-2xl font-bold text-gray-900">
            Domen Onassis
          </span>
          <span className="text-sm font-medium text-gray-500">
            Computer Engineer
          </span>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            long long long long long long long long long long long long long long long long 
            long long long long long long long long long long long long long long long text
          </p>
        </div>
      </div>

      {/* Grid Start*/}
      <div className="grid grid-cols-1 md:grid-cols-8 gap-8 items-start">
        
        {/* Timeline */}
        <div className="md:col-span-3 flex flex-col gap-y-6">
          <h2 className="text-xl font-bold text-gray-900 px-2">My Educational Journey</h2>
          <div className="relative border-l-2 border-gray-200 ml-4 pl-6 flex flex-col gap-y-8">
            
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-white ring-4 ring-blue-50" />
              <span className="text-xs font-semibold tracking-wide text-blue-600 uppercase">2025 - Present</span>
              <h3 className="text-base font-bold text-gray-900 mt-1">Faculty of Electrical Engineering and Computer Science, University of Maribor </h3>
              <span className="text-m text-gray-700 mt-2">Master&apos;s degree</span>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-gray-300 border-2 border-white" />
              <span className="text-xs font-semibold tracking-wide text-gray-400 uppercase">2022 - 2025</span>
              <h3 className="text-base font-bold text-gray-900 mt-1">Faculty of Electrical Engineering and Computer Science, University of Maribor </h3>
              <span className="text-m text-gray-700 mt-2">Bachelor&apos;s degree</span>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-gray-300 border-2 border-white" />
              <span className="text-xs font-semibold tracking-wide text-gray-400 uppercase">2018 - 2022</span>
              <h3 className="text-base font-bold text-gray-900 mt-1">Secondary School of Electrical Engineering and Computer Science Maribor </h3>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-gray-300 border-2 border-white" />
              <span className="text-xs font-semibold tracking-wide text-gray-400 uppercase">2003</span>
              <h3 className="text-base font-bold text-gray-900 mt-1">Birth</h3>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 px-2 mt-4">My Experience</h2>
          <div className="relative border-l-2 border-gray-200 ml-4 pl-6 flex flex-col gap-y-8">
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-gray-300 border-2 border-white" />
              <span className="text-xs font-semibold tracking-wide text-gray-400 uppercase">2024 - 2026</span>
              <h3 className="text-base font-bold text-gray-900 mt-1">Faculty of Electrical Engineering and Computer Science, University of Maribor</h3>
              <span className="text-m text-gray-700 mt-2">Student Software Developer</span>
              <p className="text-sm text-gray-500 mt-2">Built TypeScript backend services and PostgreSQL databases across 3 projects.</p>
              <p className="text-sm text-gray-500 mt-2">Managed database migrations and reproducible environments using Sqitch and Nix.</p>
              <p className="text-sm text-gray-500 mt-2">Wrote backend testing suites to ensure reliable system code quality.</p>
              <p className="text-sm text-gray-500 mt-2">Collaborated with a team utilizing a Flutter frontend architecture.</p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="md:col-span-5 flex flex-col gap-y-6">
          
          {/* Tech Stack */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">

              <span className="px-3 py-1 bg-green border-2 border-green-300 text-sm font-medium rounded-md text-gray-700 shadow-sm">TypeScript</span>
              <span className="px-3 py-1 bg-white border-2 border-green-300 text-sm font-medium rounded-md text-gray-700 shadow-sm">Node.js</span>
              <span className="px-3 py-1 bg-white border-2 border-green-300 text-sm font-medium rounded-md text-gray-700 shadow-sm">C / C++</span>
              <span className="px-3 py-1 bg-white border-2 border-green-300 text-sm font-medium rounded-md text-gray-700 shadow-sm">C#</span>
              <span className="px-3 py-1 bg-white border-2 border-green-300 text-sm font-medium rounded-md text-gray-700 shadow-sm">Java</span>
              <span className="px-3 py-1 bg-white border-2 border-green-300 text-sm font-medium rounded-md text-gray-700 shadow-sm">Kotlin</span>
              <span className="px-3 py-1 bg-white border-2 border-green-300 text-sm font-medium rounded-md text-gray-700 shadow-sm">Python</span>
              
              <span className="px-3 py-1 bg-white border-2 border-red-300 text-sm font-medium rounded-md text-gray-700 shadow-sm">PostgreSQL</span>
              <span className="px-3 py-1 bg-white border-2 border-red-300 text-sm font-medium rounded-md text-gray-700 shadow-sm">MongoDB</span>
              <span className="px-3 py-1 bg-white border-2 border-red-300 text-sm font-medium rounded-md text-gray-700 shadow-sm">Sqitch</span>
              
              <span className="px-3 py-1 bg-white border-2 border-blue-300 text-sm font-medium rounded-md text-gray-700 shadow-sm">Nix Ecosystem</span>
              <span className="px-3 py-1 bg-white border-2 border-blue-300 text-sm font-medium rounded-md text-gray-700 shadow-sm">Docker</span>
              <span className="px-3 py-1 bg-white border-2 border-blue-300 text-sm font-medium rounded-md text-gray-700 shadow-sm">Git</span>
              <span className="px-3 py-1 bg-white border-2 border-blue-300 text-sm font-medium rounded-md text-gray-700 shadow-sm">Firebase</span>
              <span className="px-3 py-1 bg-white border-2 border-blue-300 text-sm font-medium rounded-md text-gray-700 shadow-sm">Flutter</span>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm min-h-[200px]">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Featured Projects</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              This space is intentionally left empty for showcase items, featured open-source repositories, or future portfolio additions.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}