import ProjectCard from '@/components/ProjectCard';

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
        <ProjectCard
          slug="file-transfer"
          title="FileTransfer"
          description="Direct P2P file transfer tool via WebRTC and WebSockets. No cloud storage, no accounts, and no file size limits."
          tags={['TypeScript', 'Svelte 5', 'WebRTC']}
          image="/ft_1.png"
        />
      </div>
    </div>
  );
}