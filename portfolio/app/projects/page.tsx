import Link from 'next/link';
import Image from 'next/image';

interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const PROJECTS: Project[] = [
  {
    slug: 'file-transfer',
    title: 'FileTransfer',
    description:
      'Direct P2P file transfer tool via WebRTC and WebSockets. No cloud storage, no accounts, and no file size limits.',
    tags: ['TypeScript', 'Svelte 5', 'WebRTC'],
    image: '/ft_1.png',
  },
];

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-8 bg-black text-neutral-100 min-h-screen font-mono">
      <div className="bg-neutral-950 border border-neutral-800 p-8 md:p-12 shadow-2xl flex flex-col gap-2">
        <span className="text-xs tracking-wider text-neutral-400 uppercase">
          // Portfolio
        </span>
        <h1 className="text-3xl font-bold tracking-widest uppercase text-white">
          Projects
        </h1>
        <p className="text-neutral-400 text-sm mt-2 max-w-xl">
          A collection of web applications, experiments, and open-source tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <Link
            key={project.slug}
            href={`/project/${project.slug}`}
            className="group bg-neutral-950 border border-neutral-800 hover:border-neutral-600 transition-colors flex flex-col overflow-hidden"
          >
            <div className="w-full h-48 relative border-b border-neutral-800 bg-neutral-900 overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} Preview`}
                fill
                className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6 flex flex-col grow justify-between gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold tracking-wider uppercase text-white group-hover:text-neutral-300 transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-xs text-neutral-500 group-hover:text-white transition-colors">
                    &rarr;
                  </span>
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-900">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-[10px] tracking-wider text-neutral-300 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}