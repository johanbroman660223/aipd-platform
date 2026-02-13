"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });
      setStatus("success");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      {/* Text-logotyp */}
      <h1 className="text-5xl font-bold mb-6 text-blue-500">AIPD</h1>

      {/* Rubrik */}
      <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">
        Välkommen till AIPD Platform
      </h2>

      {/* Beskrivning */}
      <p className="text-center text-gray-600 mb-8 max-w-xl">
        Skapa, hantera och interagera med AI-drivna projekt på ett smidigt och intuitivt sätt.
        Fyll i formuläret nedan för att komma igång!
      </p>

      {/* Formulär */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
      >
        <input
          type="email"
          placeholder="Din e-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Meddelande (valfritt)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Skicka
        </button>

        {status === "success" && (
          <p className="mt-4 text-green-500">Formuläret skickat!</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-500">Något gick fel. Försök igen.</p>
        )}
      </form>
    </div>
  );
}
