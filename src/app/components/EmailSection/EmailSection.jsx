"use client";
import React, { useState } from "react";
import GithubIcon from "../../../../public/icons/github-icon.svg";
import LinkedinIcon from "../../../../public/icons/linkedin-icon.svg";
import InstagramIcon from "../../../../public/icons/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
 const [emailSubmitted, setEmailSubmitted] = useState(false);

 const handleSubmit = async (e) => {
   e.preventDefault();
   const data = {
     email: e.target.email.value,
     subject: e.target.subject.value,
     message: e.target.message.value,
   };
   const JSONdata = JSON.stringify(data);
   const endpoint = "/api/send";

   // Form the request for sending data to the server.
   const options = {
     // The method is POST because we are sending data.
     method: "POST",
     // Tell the server we're sending JSON.
     headers: {
       "Content-Type": "application/json",
     },
     // Body of the request is the JSON data we created above.
     body: JSONdata,
   };

   const response = await fetch(endpoint, options);
   const resData = await response.json();

   if (response.status === 200) {
     console.log("Message sent.");
     setEmailSubmitted(true);
   }
 }; 
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link target="_blank" href="https://github.com/thespikeone/">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          {/* <Link target="_blank" href="linkedin.com/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link> */}
          <Link
            target="_blank"
            href="https://www.instagram.com/developing_off/"
          >
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-1 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              className="bg-[#1D1E25] border border-[#ADB7BE] w-full rounded-md px-4 py-2 text-white"
              type="email"
              id="email"
              name="email"
              required
              placeholder="example@dev.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-1  text-sm font-medium"
            >
              Your Subject
            </label>
            <input
              className="bg-[#1D1E25] border border-[#ADB7BE] w-full rounded-md px-4 py-2 text-white"
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Just saying Hello 👋"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-1  text-sm font-medium"
            >
              Your Message
            </label>
            <textarea
              className="bg-[#1D1E25] border border-[#ADB7BE] w-full rounded-md px-4 py-2 text-white"
              type="text"
              id="message"
              name="message"
              required
              placeholder="Hi, I saw your portfolio and I was wondering..."
            />
          </div>
          <button
            className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-md"
            type="submit"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-400 text-sm mt-2">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
