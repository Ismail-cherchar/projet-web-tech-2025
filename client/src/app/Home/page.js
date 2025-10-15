"use client";
import { useState } from "react";
import { Search, User } from "lucide-react";

export default function Home() {
  const [search, setSearch] = useState("");

  const posts = [
    { id: 1, title: "Voyage à Bali 🌴", size: "large" },
    { id: 2, title: "Kyoto et ses temples 🏯", size: "medium" },
    { id: 3, title: "Roadtrip en Islande ❄️", size: "large" },
    { id: 4, title: "Paris en automne 🍂", size: "medium" },
    { id: 5, title: "Safari au Kenya 🦁", size: "medium" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* HEADER */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-center w-full text-gray-800">
          Accueil
        </h1>
      </header>

      {/* LOGO + MENU */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-extrabold text-sky-500 tracking-wider">
          WONDERLAND
        </h2>
        <User className="text-sky-500 w-8 h-8" />
      </div>

      {/* NAVBAR */}
      <nav className="flex flex-wrap gap-2 mb-6">
        {["Accueil", "Publier", "Profil", "Paramètres"].map((item) => (
          <button
            key={item}
            className={`px-6 py-2 rounded-full text-sm font-semibold ${
              item === "Accueil"
                ? "bg-sky-500 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* BARRE DE RECHERCHE */}
      <div className="flex items-center bg-gray-300 rounded-full px-4 py-2 mb-8 w-full max-w-lg">
        <Search className="w-5 h-5 text-gray-700 mr-2" />
        <input
          type="text"
          placeholder="Recherche"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none w-full placeholder:text-gray-700"
        />
      </div>

      {/* POSTS GRID */}
      <main className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className={`relative border-4 border-black rounded-2xl bg-white p-4 flex flex-col justify-end ${
              post.size === "large" ? "h-80" : "h-32"
            }`}
          >
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <div className="flex justify-end items-center gap-2 mt-2 text-xl">
              <span>💬</span>
              <span>👍</span>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}