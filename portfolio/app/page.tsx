import Image from 'next/image';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import TechStack from '@/components/TechStack';
import FeaturedProjects from '@/components/FeaturedProjects';

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
            migrations to automated testing and even designing.
            Currently open to on-site and hybrid roles.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-8 gap-8 items-start">
        <div className="md:col-span-3 flex flex-col gap-y-6">
          <Education />
          <Experience />
        </div>

        <div className="md:col-span-5 flex flex-col gap-y-6">
          <TechStack />
          <FeaturedProjects />
        </div>
      </div>
    </div>
  );
}