"use client";

import React, { useState } from "react";

const GetInTouchContent = () => {
  const [data, setData] = useState({
    name: "",
    message: "",
    email: "",
  });
  const [sending, isSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isSending(true);
    // Send data to server
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (res.ok) {
      isSending(false);
      alert("Message sent successfully!");
      setData({ name: "", email: "", message: "" });

    } else {
      alert(result.error || "Failed to send message.");
    }
  };

  return (
    <div className="flex flex-col relative z-20 w-full max-w-lg sm:max-w-xl">
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 sm:mb-10">
        Get in touch with me!
      </h1>

      {/* Subtext */}
      <p className="text-sm sm:text-md text-center text-neutral-300 mb-8">
        I&apos;d love to hear from you! Fill out the form below, and I&apos;ll do my best
        to respond.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="text-white relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] p-5 sm:p-6 w-full"
      >
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={data.name}
          placeholder="Your name"
          className="border border-neutral-400 focus:border-white transition duration-300 rounded-lg p-3 w-full mb-3 text-sm sm:text-md"
        />
        <input
          type="email"
          value={data.email}
          onChange={handleChange}
          name="email"
          placeholder="Your E-mail"
          className="border border-neutral-400 focus:border-white transition duration-300 rounded-lg p-3 w-full mb-3 text-sm sm:text-md"
        />
        <textarea
          value={data.message}
          onChange={handleChange}
          name="message"
          placeholder="Your message"
          className="border border-neutral-400 focus:border-white transition duration-300 rounded-lg p-3 w-full mb-3 text-sm sm:text-md min-h-[120px]"
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-3 px-4 rounded-lg w-full mt-4 hover:opacity-90 transition duration-300 cursor-pointer text-sm sm:text-md"
        >
          Send Message
        </button>
      </form>

      {/* Loading Overlay */}
      {sending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/30">
          <div className="flex flex-col items-center">
            {/* Spinner */}
            <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-purple-500 border-solid"></div>
            <p className="text-white text-lg mt-4">Sending...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetInTouchContent;
