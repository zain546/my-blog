"use client";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    // Simulate form submission
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setStatus("Message sent successfully!");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div
        className="w-full max-w-lg rounded-lg shadow-lg p-8"
        style={{
          backgroundColor: "hsl(var(--card))",
          color: "hsl(var(--card-foreground))",
        }}
      >
        <h1 className="text-2xl font-bold text-center mb-6">Contact Me</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none"
              style={{
                backgroundColor: "hsl(var(--input))",
                borderColor: "hsl(var(--border))",
                color: "hsl(var(--foreground))",
              }}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none"
              style={{
                backgroundColor: "hsl(var(--input))",
                borderColor: "hsl(var(--border))",
                color: "hsl(var(--foreground))",
              }}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none h-32"
              style={{
                backgroundColor: "hsl(var(--input))",
                borderColor: "hsl(var(--border))",
                color: "hsl(var(--foreground))",
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold transition"
            style={{
              backgroundColor: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
            }}
          >
            Send Message
          </button>
        </form>
        {status && (
          <p
            className="mt-4 text-center text-sm"
            style={{ color: "hsl(var(--foreground))" }}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
