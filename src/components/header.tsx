import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed z-10 m-0 w-full bg-[#232536] text-white">
      <nav className="px-12 py-4">
        <div className="flex items-center justify-between">
          <div>
            <Image
              src="/faithco-logo.svg"
              alt="Company Logo"
              width={120}
              height={50}
              priority
            />
          </div>

          <ul className="flex flex-row justify-end gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blogs</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
