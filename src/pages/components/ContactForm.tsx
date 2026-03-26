"use client";
import { useState } from "react";

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
}

export default function HomeContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors: Errors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg("");

    if (!validate()) return;

    setStatus("loading");

    const formData = new FormData();
    formData.append("name", form.name.trim());
    formData.append("email", form.email.trim());
    formData.append("phone", form.phone.trim());
    formData.append("message", form.message.trim());
    formData.append("subject", "New Home Page Lead");
    formData.append("access_key", "a0fbedaf-6df2-4551-b7eb-ec7f7dc6b018");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMsg("✅ Thanks! We will contact you shortly.");
        setForm({ name: "", email: "", phone: "", message: "" });

        // Optional WhatsApp redirect
        // window.open(`https://wa.me/91${form.phone}`, "_blank");

      } else {
        setStatus("error");
        setMsg("❌ Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMsg("❌ Network error. Please try again.");
    }
  };

  return (
    <section className="relative bg-[#0b1120] py-20 px-4">

      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-[500px] h-[300px] bg-[#56c0db] blur-[120px] rounded-full mx-auto mt-10" />
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Let’s Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56c0db] to-slate-400">
              Amazing Together
            </span>
          </h2>

          <p className="text-slate-400 mt-4 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
            Fill out the form and our team will contact you within 24 hours.
          </p>

          <div className="mt-6 space-y-2 text-slate-300 text-sm">
            <p>✔ Fast Response</p>
            <p>✔ Expert Consultation</p>
            <p>✔ No Hidden Charges</p>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#56c0db] outline-none"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#56c0db] outline-none"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                maxLength={10}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#56c0db] outline-none"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#56c0db] outline-none resize-none"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-gradient-to-r from-[#56c0db] to-slate-900 text-white py-3 rounded-lg font-semibold text-sm tracking-wide hover:opacity-90 transition disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Get Free Consultation"}
            </button>

            {/* Status Message */}
            {msg && (
              <p className={`text-center text-sm font-medium ${
                status === "success" ? "text-green-600" : "text-red-500"
              }`}>
                {msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}