"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathName = usePathname();

  const linkStyles = (href: string) => {
    const isActive = pathName === href;
    return `transition-colors duration-200 ${
      isActive 
        ? 'text-blue-600 font-semibold' 
        : 'text-gray-600 hover:text-blue-600'
    }`;
  }

  return (
    /* Added w-full here to let justify-between actually separate the items */
    <nav className="w-full flex justify-between items-center p-4 md:px-8 border-b border-gray-200 bg-white">
      <div>
        <Link href="/" className="flex flex-col group">
          <span className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
            Domen
          </span>
        </Link>
      </div>
      <ul className="flex gap-6 list-none m-0 p-0">
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