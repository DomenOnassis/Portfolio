import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export default function ProjectCard({
  slug,
  title,
  description,
  tags,
  image,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group bg-neutral-950 border border-neutral-800 hover:border-neutral-600 transition-colors flex flex-col overflow-hidden"
    >
      <div className="w-full h-48 relative border-b border-neutral-800 bg-neutral-900 overflow-hidden">
        <Image
          src={image}
          alt={`${title} Preview`}
          fill
          sizes="100vw"
          className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6 flex flex-col grow justify-between gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-wider uppercase text-white group-hover:text-neutral-300 transition-colors">
              {title}
            </h2>
          </div>
          <p className="text-neutral-400 text-xs leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-900">
          {tags.map((tag) => (
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
  );
}