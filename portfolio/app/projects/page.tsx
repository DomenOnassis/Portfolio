'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const images = ['/ft_1.png', '/ft_2.png', '/ft_3.png', '/ft_4.png', '/ft_5.png', '/ft_6.png', '/ft_7.png'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-8 bg-black text-neutral-100 min-h-screen font-mono">
      <div className="bg-neutral-950 border border-neutral-800 rounded-none p-8 md:p-12 shadow-2xl flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs tracking-wider text-neutral-400 uppercase">
              TypeScript
            </span>
            <h1 className="text-3xl font-bold tracking-widest uppercase text-white mt-1">
              FileTransfer
            </h1>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://github.com/DomenOnassis/FileTransfer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-neutral-900 border border-neutral-700 text-xs tracking-wider text-white hover:bg-neutral-800 transition-colors uppercase"
            >
              GitHub &rarr;
            </a>
          </div>
        </div>

        <div className="w-full h-64 md:h-128 relative border border-neutral-700 bg-neutral-900 ring-1 ring-neutral-800 overflow-hidden group">
          <Image 
            src={images[currentIndex]}
            alt={`Project Preview ${currentIndex + 1}`}
            fill
            className="object-contain grayscale contrast-125 transition-all duration-300"
            priority
          />

          <button 
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black border border-neutral-700 text-white px-3 py-2 text-xs tracking-widest uppercase transition-colors"
          >
            &larr;
          </button>

          <button 
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black border border-neutral-700 text-white px-3 py-2 text-xs tracking-widest uppercase transition-colors"
          >
            &rarr;
          </button>

          <div className="absolute bottom-3 right-3 bg-black/80 border border-neutral-700 px-3 py-1 text-xs tracking-widest text-neutral-300 uppercase">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 content-center">
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed w-full md:w-1/2">
            FileTransfer is a small web application for sending files directly from one device to another. 
            There are no accounts, no uploads to a cloud and no size limits imposed by a server.
            <br/>
            One device starts a session and gets an ID and a password, the other enters them, the host approves, and the files travel straight between the two browsers over WebRTC.
            <br/>
            The server's only job is to introduce the devices to each other.
            Once the connection is established, file data never touches it.
          </p>

          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <div className="bg-neutral-950 border border-neutral-800 rounded-none p-6 md:p-8 shadow-2xl flex flex-col gap-4">
              <h2 className="text-sm tracking-widest uppercase text-neutral-400">
                // Key Features
              </h2>
              <ul className="text-xs text-neutral-400 space-y-2 list-disc list-inside">
                <li>Direct P2P file transfer via browser</li>
                <li>No database and no accounts</li>
                <li>Uses WebRTC and WebSockets for file transfer</li>
                <li>Safe, fast, direct and secure</li>
              </ul>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 rounded-none p-4 md:p-5 shadow-2xl flex flex-col gap-4">
              <h2 className="text-sm tracking-widest uppercase text-neutral-400">
                // Built With
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-700 text-xs text-white">TypeScript</span>
                <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-700 text-xs text-white">Svelte5</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}