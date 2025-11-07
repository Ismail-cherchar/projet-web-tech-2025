export default function SearchBar() {
  return (
    <div className="flex items-center bg-gray-800 rounded-full px-4 py-3 shadow-inner">
      <input
        type="text"
        placeholder="Rechercher un pays, un utilisateur..."
        className="bg-transparent w-full outline-none text-gray-200 placeholder-gray-400"
      />
    </div>
  );
}
