"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Page() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Sidebar izquierda */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col justify-between p-6 transition-colors duration-300">
        <div>
          <h1 className="text-2xl font-bold text-red-600 mb-10">Netflix.</h1>

          <nav className="space-y-6">
            <div>
              <h2 className="text-gray-400 text-sm uppercase mb-2">Menu</h2>
              <ul className="space-y-3">
                <li className="text-red-600 font-semibold flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span> Browse
                </li>
                <li className="text-gray-600 dark:text-gray-300 hover:text-red-500 cursor-pointer">
                  Watchlist
                </li>
                <li className="text-gray-600 dark:text-gray-300 hover:text-red-500 cursor-pointer">
                  Coming soon
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-gray-400 text-sm uppercase mb-2">Social</h2>
              <ul className="space-y-3">
                <li className="text-gray-600 dark:text-gray-300 hover:text-red-500 cursor-pointer">
                  Friends
                </li>
                <li className="text-gray-600 dark:text-gray-300 hover:text-red-500 cursor-pointer">
                  Parties
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-gray-400 text-sm uppercase mb-2">General</h2>
              <ul className="space-y-3">
                <li className="text-gray-600 dark:text-gray-300 hover:text-red-500 cursor-pointer">
                  Settings
                </li>
                <li className="text-gray-600 dark:text-gray-300 hover:text-red-500 cursor-pointer">
                  Log out
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-10 bg-gray-50 dark:bg-gray-700 p-4 rounded-xl text-center transition-colors duration-300">
          <h3 className="font-semibold text-sm">🍿 Popcorn Addict</h3>
          <p className="text-xs text-gray-500 dark:text-gray-300 mb-2">4/6h viewing time</p>
          <button className="bg-red-500 text-white rounded-lg px-3 py-1 text-xs hover:bg-red-600">
            View challenges
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-1/3 bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-sm border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300"
          />
          <div className="flex items-center gap-4">
            {/* Botones de tema */}
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md px-2 py-1 text-sm"
            >
              <option value="light">Claro</option>
              <option value="dark">Oscuro</option>
              <option value="system">Sistema</option>
            </select>

            <button className="relative text-xl">🔔</button>
            <button className="text-xl">💬</button>
            <div className="flex items-center gap-2">
              <Image
                src="/images/avatar.jpg"
                alt="user"
                width={40}
                height={40}
                className="rounded-full border border-gray-300 dark:border-gray-600"
              />
              <div>
                <p className="font-semibold">Ramona F.</p>
                <p className="text-xs text-gray-500 dark:text-gray-300">Level 12</p>
              </div>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative rounded-2xl overflow-hidden shadow-lg mb-10">
          <Image
            src="/images/witcher.jpg"
            alt="The Witcher"
            width={1000}
            height={400}
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
            <h2 className="text-3xl text-white font-bold">The Witcher</h2>
            <p className="text-gray-300 text-sm">98% Match • 2 seasons</p>
            <div className="flex items-center gap-4 mt-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg">
                Watch
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg">
                +
              </button>
            </div>
          </div>
        </section>

        {/* Parties */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Parties</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[
              { title: "Cadaver", subtitle: "Horror marathon", img: "/images/cadaver.jpg" },
              { title: "Bladerunner 2049", subtitle: "Sci-fi binge", img: "/images/bladerunner.jpg" },
              { title: "Monsters Inc.", subtitle: "Don’t make me grow up", img: "/images/monsters.jpg" },
              { title: "Friends", subtitle: "We were on a break!", img: "/images/friends.jpg" },
            ].map((party, i) => (
              <div
                key={i}
                className="min-w-[180px] bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-md cursor-pointer transition"
              >
                <Image
                  src={party.img}
                  alt={party.title}
                  width={200}
                  height={100}
                  className="h-24 w-full object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold">{party.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-300">{party.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Continue Watching */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Continue watching</h3>
          <div className="grid grid-cols-4 gap-6">
            {[
              { title: "Haunting of Hill House", img: "/images/haunting.jpg" },
              { title: "Ratched", img: "/images/ratched.jpg" },
              { title: "El Camino", img: "/images/elcamino.jpg" },
              { title: "Stranger Things", img: "/images/stranger.jpg" },
            ].map((show, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <Image
                  src={show.img}
                  alt={show.title}
                  width={300}
                  height={160}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold">{show.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Sidebar derecha */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg p-6 hidden lg:flex flex-col transition-colors duration-300">
        <h2 className="text-gray-400 text-sm uppercase mb-4">Amigos</h2>
        <div className="flex flex-col gap-4 overflow-y-auto">
          {[
            { name: "Juan Pérez", img: "/images/amigos/amigo1.jpg" },
            { name: "María López", img: "/images/amigos/amigo2.jpg" },
            { name: "Carlos Ruiz", img: "/images/amigos/amigo3.jpg" },
            { name: "Lucía Gómez", img: "/images/amigos/amigo4.jpg" },
            { name: "Andrés Díaz", img: "/images/amigos/amigo5.jpg" },
          ].map((friend, i) => (
            <div key={i} className="flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
              <Image
                src={friend.img}
                alt={friend.name}
                width={40}
                height={40}
                className="rounded-full border border-gray-300 dark:border-gray-600"
              />
              <div className="flex flex-col">
                <span className="font-medium text-sm">{friend.name}</span>
                <span className="text-xs text-green-500 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span> En línea
                </span>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
