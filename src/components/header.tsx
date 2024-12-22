"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Perbarui impor untuk useRouter
import { searchPostByTitle } from "@/utils/get-contentful-data";

export default function Header() {
  const router = useRouter(); // Inisialisasi router
  const [search, setSearch] = useState("");

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Navigasi ke halaman pencarian
    router.push(`/search?q=${search}`);

    // Panggil fungsi pencarian
    const postsByTitle = await searchPostByTitle(search);
    if (postsByTitle) {
      console.log("Posts by title: ", postsByTitle);
      setSearch(""); // Kosongkan input setelah pencarian
    } else {
      console.log("No posts found.");
    }
  };

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
          <ul className="flex flex-row items-center justify-end gap-5">
            <li>
              <form onSubmit={handleSearch} className="flex">
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="rounded-md bg-white px-2 pr-4 text-black"
                />
              </form>
            </li>
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
