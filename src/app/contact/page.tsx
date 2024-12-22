"use client";

import Footer from "@/components/footer";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, phone, email, message });

    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <section>
      <div className="flex items-center bg-[url('/contact-bg.webp')] bg-cover bg-center py-12 text-white">
        <div className="mt-16 flex w-full flex-col justify-start px-12">
          <h1 className="w-1/2 text-7xl font-bold text-white">Contact Us</h1>
          <p className="mt-5 w-1/2 text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi
            elementum vel euismod aliquam. Amet ultrices neque augue consectetur
            purus phasellus. Ullamcorper lorem montes varius amet vestibulum
            tellus facilisis consequat pretium. Et faucibus laoreet molestie
            diam semper fames diam eget.
          </p>
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center justify-center px-12">
        <h2 className="text-4xl font-semibold">Get in touch</h2>
        <p className="mt-3">
          Let`s get this conversation started. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-col px-40">
        <form onSubmit={handleSubmit}>
          <div className="mt-14 flex flex-row justify-between gap-2">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-80 rounded border border-[#2A2B39] px-3 py-1"
            />
            <input
              type="tel"
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-80 rounded border border-[#2A2B39] px-3 py-1"
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-80 rounded border border-[#2A2B39] px-3 py-1"
            />
          </div>
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-10 h-28 w-full rounded border border-[#2A2B39] px-3 py-1"
          ></textarea>
          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-[#FF5959] py-2 text-sm font-bold text-white"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </section>
  );
}
