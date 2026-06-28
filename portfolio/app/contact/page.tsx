export default function Page() {
  return (
    <div className="min-h-screen w-full flex items-top justify-center">
      <div className="w-full max-h-min max-w-md bg-gray-50 border border-gray-200 rounded-xl p-8 md:p-12 shadow-sm flex flex-col items-center gap-6">
        <div className="flex flex-col w-full text-center">
          <span className="text-2xl font-bold text-gray-900 block mb-6">
            Come in contact with me
          </span>
          <form className="flex flex-col gap-y-4 w-full">
            <div className="flex flex-col gap-y-1.5 text-left">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your name" 
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <div className="flex flex-col gap-y-1.5 text-left">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="you@example.com" 
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <div className="flex flex-col gap-y-1.5 text-left">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows={4}
                placeholder="Your message..." 
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                required
              />
            </div>
            {/* TO DO!!! */}
            <button 
              type="submit" 
              className="w-full mt-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}