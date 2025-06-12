"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="px-6 py-10 md:px-20">
      <h2 className="text-4xl font-bold mb-3">Contact Us</h2>
      <p className="text-gray-600 mb-6">
        We would love to hear from you. Feel free to complete the contact form or use the details below:
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <div>
            <p className="text-gray-500">Email</p>
            <p className="text-red-500 font-medium">pizzaburg@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-500">Phone</p>
            <p className="text-red-500 font-medium">+91 8072482601</p>
          </div>
          <div>
            <p className="text-gray-500">Location</p>
            <p className="text-gray-700 font-medium">18, Race course area, Coimbatore </p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full p-3 border rounded-md"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full p-3 border rounded-md"
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            required
            className="w-full p-3 border rounded-md"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-red-500 text-white font-medium py-3 rounded-md hover:bg-red-600 transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 w-full">
  {["/temporary/p3.png", "/temporary/p7.png", "/temporary/p9.png", "/temporary/p11.png"].map((src, index) => (
    <div key={index} className="relative w-full aspect-square overflow-hidden group rounded-md">
      <img
        src={src}
        alt={`food-${index}`}
        className="absolute inset-0 w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  ))}
</div>


    </div>
  );
};

export default ContactPage;
