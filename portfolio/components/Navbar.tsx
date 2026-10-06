"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathName = usePathname();

  const linkStyles = (href: string) => {
    const isActive = pathName === href;
    return `font-mono text-xs uppercase tracking-widest transition-colors duration-200 ${
      isActive 
        ? 'text-white font-bold bg-neutral-900 border border-neutral-800 px-2.5 py-1' 
        : 'text-neutral-400 hover:text-white px-2.5 py-1'
    }`;
  }

  return (
    <nav className="w-full flex justify-between items-center p-4 md:px-8 border-b border-neutral-800 bg-black text-neutral-100">
      <div>
        <Link href="/" className="flex flex-col group">
          <span className="font-mono font-bold text-base tracking-widest uppercase text-white group-hover:text-neutral-300 transition-colors">
            Domen
          </span>
        </Link>
      </div>
      <ul className="flex gap-4 list-none m-0 p-0 items-center">
        <li>
          <Link href="/" className={linkStyles('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/projects" className={linkStyles('/projects')}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className={linkStyles('/contact')}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}