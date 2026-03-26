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

    if (!form.name.trim()) newErrors.name = "Required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Invalid number";
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
        setMsg("Thanks! We will contact you shortly.");

        // Optional WhatsApp redirect
        // window.open(`https://wa.me/91${form.phone}`, "_blank");

        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setMsg("Something went wrong");
      }
    } catch {
      setStatus("error");
      setMsg("Network error");
    }
  };

  return (
    <section className="bg-[#0f172a] py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Get a Free Consultation
        </h2>

        <p className="text-slate-400 mb-8">
          Fill the form and our team will contact you shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl p-6 shadow-lg space-y-4 text-left"
        >
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border-b border-black py-3 outline-none"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full border-b border-black py-3 outline-none"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
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
              className="w-full border-b border-black py-3 outline-none"
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message (optional)"
            value={form.message}
            onChange={handleChange}
            rows={3}
            className="w-full border p-3 rounded-lg outline-none"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-[#56c0db] transition"
          >
            {status === "loading" ? "Sending..." : "Submit"}
          </button>

          {/* Status Message */}
          {msg && (
            <p className={`text-center text-sm font-semibold ${
              status === "success" ? "text-green-600" : "text-red-500"
            }`}>
              {msg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}