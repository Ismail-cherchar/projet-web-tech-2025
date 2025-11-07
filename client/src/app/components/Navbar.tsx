export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900/70 backdrop-blur-md rounded-full py-3 px-8 mt-4 flex justify-center shadow-lg">
      <div className="flex gap-10 text-gray-300">
        {["Home", "Publier", "Profil", "Paramètres"].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
            className="hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
