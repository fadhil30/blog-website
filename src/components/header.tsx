"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { searchPostByTitle } from "@/utils/get-contentful-data";

export default function Header() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/search?q=${search}`);

    const postsByTitle = await searchPostByTitle(search);
    if (postsByTitle) {
      console.log("Posts by title: ", postsByTitle);
      setSearch("");
    } else {
      console.log("No posts found.");
    }
  };

  return (
    <nav className="fixed z-10 w-full bg-[#232536] px-4 py-4 md:px-12">
      <div className="flex h-12 items-center justify-between">
        {/* Logo */}
        <div className="w-[120px] font-bold text-gray-600">
          <Link href="/">
            <Image
              src="/faithco-logo.svg"
              alt="Company Logo"
              width={120}
              height={50}
              priority
            />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="text-2xl text-white md:hidden" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute left-0 top-16 w-full bg-[#232536] px-6 py-6 transition-all md:relative md:top-0 md:flex md:w-auto md:items-center md:gap-6 md:px-0 md:py-0 md:pl-0`}
        >
          <li>
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="rounded-md bg-white px-4 py-1 text-black"
              />
            </form>
          </li>
          <li className="border-b border-gray-300 pb-4 md:border-none md:pb-0">
            <Link
              href="/"
              className="text-base font-medium text-white hover:text-gray-300"
            >
              Home
            </Link>
          </li>
          <li className="border-b border-gray-300 pb-4 md:border-none md:pb-0">
            <Link
              href="/blog"
              className="text-base font-medium text-white hover:text-gray-300"
            >
              Blogs
            </Link>
          </li>
          <li className="border-b border-gray-300 pb-4 md:border-none md:pb-0">
            <Link
              href="/about"
              className="text-base font-medium text-white hover:text-gray-300"
            >
              About
            </Link>
          </li>
          <li className="border-b border-gray-300 pb-4 md:border-none md:pb-0">
            <Link
              href="/contact"
              className="text-base font-medium text-white hover:text-gray-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
