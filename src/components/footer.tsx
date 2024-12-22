"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.prebentDefault();
    console.log({ email });
    setEmail("");
  };

  return (
    <footer className="mt-32 bg-[#232536] pb-10">
      <nav className="px-12 py-4 text-white">
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
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center justify-between gap-2 bg-[#2A2B39] p-5">
          <div className="w-2/4">
            <h1 className="text-4xl font-bold text-white">
              Subscribe to our news letter to get latest updates and news
            </h1>
          </div>
          <div className="flex">
            <form onSubmit={handleSubmit} className="flex flex-row gap-6">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-10 w-80 rounded-lg border border-[#2A2B39] px-5"
              />
              <button
                type="submit"
                className="h-10 w-44 rounded-lg bg-[#FF5959] py-2 text-center text-xl font-bold text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-7 flex flex-row items-center justify-between">
          <div className="text-white">
            <h3 className="text-xl font-medium">+62 82299227661</h3>
            <a
              href="mailto:fgeminni0@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <h3 className="mt-2 text-xl font-medium">fgeminni0@gmail.com</h3>
            </a>
          </div>
          <div className="flex flex-row gap-7">
            <div className="relative h-[25px] w-[25px]">
              <a href="https://github.com/fadhil30">
                <Image src="/github-logo.svg" alt="GitHub Logo" fill />
              </a>
            </div>
            <div className="relative h-[25px] w-[25px]">
              <a href="https://linkedin.com">
                <Image src="/linkedin-logo.svg" alt="LinkedIn Logo" fill />
              </a>
            </div>
            <div className="relative h-[25px] w-[25px]">
              <a href="https://x.com">
                <Image src="/twitter-logo.svg" alt="Twitter Logo" fill />
              </a>
            </div>
            <div className="relative h-[25px] w-[25px]">
              <a href="https://instagram.com/_faddhil">
                <Image src="/instagram-logo.svg" alt="Instagram Logo" fill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
