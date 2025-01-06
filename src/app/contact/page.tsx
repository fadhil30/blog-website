"use client";

import { useEffect, useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedData = sessionStorage.getItem("contactData");
    if (storedData) {
      const { name, phone, email, message } = JSON.parse(storedData);
      setName(name);
      setPhone(phone);
      setEmail(email);
      setMessage(message);
    }
  }, []);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const contactData = { name, phone, email, message };
    sessionStorage.setItem("contactData", JSON.stringify(contactData));
    console.log({ name, phone, email, message });
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="min-h-screen">
      <div className="flex items-center bg-[url('/contact-bg.webp')] bg-cover bg-center py-12 text-white">
        <div className="mt-16 flex w-full flex-col justify-start px-6 md:px-12">
          <h1 className="text-4xl font-bold md:text-7xl">Contact Us</h1>
          <p className="mt-5 text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi
            elementum vel euismod aliquam. Amet ultrices neque augue consectetur
            purus phasellus.
          </p>
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center justify-center px-6 md:px-12">
        <h2 className="text-4xl font-semibold">Get in touch</h2>
        <p className="mt-3 text-center">
          Let’s get this conversation started. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-col px-6 md:px-12">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-2">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-4 flex-1 rounded border border-[#2A2B39] px-3 py-2"
            />
            <input
              type="tel"
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-4 flex-1 rounded border border-[#2A2B39] px-3 py-2"
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-4 flex-1 rounded border border-[#2A2B39] px-3 py-2"
            />
          </div>
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-4 h-28 w-full rounded border border-[#2A2B39] px-3 py-2"
          ></textarea>
          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-[#FF5959] py-2 text-sm font-bold text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
