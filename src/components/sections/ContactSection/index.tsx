"use client";

import { useState } from "react";
import {
  Check,
  ChevronDown,
  Phone,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";
import { Listbox } from "@headlessui/react";
import clsx from "clsx";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const options = [
    { value: "", label: "—Please choose an option—" },
    { value: "new-church", label: "I'm looking for a new church" },
    { value: "new-christian", label: "I'm a new christian" },
    { value: "exploring", label: "I'm exploring the faith" },
    { value: "other", label: "Other" },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // TODO: Plug in endpoint later
  };

  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold text-gray-800 uppercase mb-2">
              Connect
            </h3>
            <ul className="space-y-2 text-blue-600">
              <li className="flex items-center gap-2">
                <Facebook className="w-5 h-5" />
                <a
                  href="https://facebook.com/churchintoronto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /churchintoronto
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-5 h-5" />
                <a
                  href="https://instagram.com/churchintoronto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @churchintoronto
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <Phone className="w-5 h-5" />
                (647) 963-7292
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 uppercase mb-2">
              Address
            </h3>
            <p className="text-gray-700">
              Church In Toronto
              <br />
              671 Sheppard Ave. East
              <br />
              Toronto, Ontario M2K 1B6
            </p>
            <a
              href="https://maps.app.goo.gl/5G4sJ8TNGUNng2iz8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 border rounded text-sm font-semibold hover:bg-gray-100 transition"
            >
              <MapPin className="inline w-4 h-4 mr-1" />
              Directions
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Which best describes you?
            </label>

            <Listbox
              value={form.role}
              onChange={(value) => setForm({ ...form, role: value })}
            >
              <div className="relative">
                <Listbox.Button className="w-full border rounded px-4 py-2 h-11 text-left flex justify-between items-center">
                  <span>
                    {form.role
                      ? options.find((opt) => opt.value === form.role)?.label
                      : "—Please choose an option—"}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </Listbox.Button>

                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-white shadow-md">
                  {options.map((opt) => (
                    <Listbox.Option
                      key={opt.value}
                      value={opt.value}
                      className={({ active }) =>
                        clsx(
                          "cursor-pointer px-4 py-2 text-sm",
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        )
                      }
                    >
                      {({ selected }) => (
                        <div className="flex justify-between items-center">
                          <span>{opt.label}</span>
                          {selected && (
                            <Check className="w-4 h-4 text-blue-500" />
                          )}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Tell us more (Optional)
            </label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
