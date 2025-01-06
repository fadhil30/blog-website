"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("subscriberEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    localStorage.setItem("subscriberEmail", email);
    console.log({ email });
    setEmail("");
  };

  return (
    <footer className="mt-32 bg-[#232536] pb-10">
      <nav className="px-6 py-4 text-white md:px-12">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div>
            <Image
              src="/faithco-logo.svg"
              alt="Company Logo"
              width={120}
              height={50}
              priority
            />
          </div>
          <ul className="mt-4 flex flex-col justify-end gap-4 md:mt-0 md:flex-row">
            <li>
              <Link
                href="/"
                className="transform text-base font-medium text-white transition duration-200 ease-in-out hover:scale-110 hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="transform text-base font-medium text-white transition duration-200 ease-in-out hover:scale-110 hover:underline"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="transform text-base font-medium text-white transition duration-200 ease-in-out hover:scale-110 hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transform text-base font-medium text-white transition duration-200 ease-in-out hover:scale-110 hover:underline"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mx-auto px-12">
        <div className="flex flex-col items-center justify-between gap-4 bg-[#2A2B39] px-8 py-4 md:flex-row">
          <div className="w-full md:w-2/4">
            <h1 className="text-center text-2xl font-bold text-white md:text-left md:text-4xl">
              Subscribe to our newsletter to get the latest updates
            </h1>
          </div>
          <div className="flex">
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-4 md:max-w-md md:flex-row md:gap-6"
            >
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-10 flex-1 rounded border border-[#2A2B39] px-5"
              />
              <button
                type="submit"
                className="h-10 w-full rounded-lg bg-[#FF5959] px-5 py-1 text-center text-lg font-bold text-white hover:scale-105 md:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-7 flex flex-col items-center justify-between md:flex-row">
          <div className="text-center text-white md:text-left">
            <h3 className="text-lg font-medium md:text-xl">+62 82299227661</h3>
            <a
              href="mailto:fgeminni0@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <h3 className="mt-2 text-lg font-medium md:text-xl">
                fgeminni0@gmail.com
              </h3>
            </a>
          </div>
          <div className="mt-4 flex flex-col gap-4 md:mt-0 md:flex-row">
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
