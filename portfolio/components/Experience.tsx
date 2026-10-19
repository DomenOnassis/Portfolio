export default function Experience() {
  return (
    <div className="flex flex-col gap-y-6 mt-4">
      <h2 className="text-sm font-mono tracking-widest uppercase text-neutral-400 px-2">
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
  );
}