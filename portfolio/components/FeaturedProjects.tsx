export default function FeaturedProjects() {
    return(
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
    );
}