export default function Page() {
  return (
    <div className="min-h-screen w-full flex items-top justify-center py-8">
      <div className="w-full max-h-min max-w-md bg-neutral-950 border border-neutral-800 rounded-none p-8 md:p-12 shadow-2xl flex flex-col items-center gap-6">
        <div className="flex flex-col w-full text-center">
          <span className="text-xl font-mono font-bold tracking-widest uppercase text-white block mb-6">
            // Come in contact with me
          </span>
          <form className="flex flex-col gap-y-4 w-full">
            <div className="flex flex-col gap-y-1.5 text-left">
              <label htmlFor="name" className="text-xs font-mono tracking-wider uppercase text-neutral-400">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your name" 
                className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-none font-mono text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors"
                required
              />
            </div>

            <div className="flex flex-col gap-y-1.5 text-left">
              <label htmlFor="email" className="text-xs font-mono tracking-wider uppercase text-neutral-400">
                Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="you@example.com" 
                className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-none font-mono text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors"
                required
              />
            </div>

            <div className="flex flex-col gap-y-1.5 text-left">
              <label htmlFor="message" className="text-xs font-mono tracking-wider uppercase text-neutral-400">
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows={4}
                placeholder="Your message..." 
                className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-none font-mono text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors resize-none"
                required
              />
            </div>
            
            {/* TODO: actually send email */}
            <button 
              type="submit"
              className="mt-2 w-full bg-white text-black border border-white font-mono text-xs uppercase tracking-widest py-3 px-6 rounded-none font-bold hover:bg-neutral-200 transition-colors cursor-pointer" 
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}