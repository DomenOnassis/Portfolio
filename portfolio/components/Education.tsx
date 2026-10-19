export default function Education() {
  return (
    <div className="flex flex-col gap-y-6">
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
    </div>
  );
}