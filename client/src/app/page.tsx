// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          {/* Titre multicolore */}
          <h1 className="text-6xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              WONDERLAND
            </span>
          </h1>
          
          {/* Menu navigation */}
          <nav className="flex justify-center space-x-8 mb-6">
            {['Home', 'Publier', 'Profil', 'Paramètres'].map((item) => (
              <button 
                key={item}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </nav>
          
          {/* Barre de recherche */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher des destinations, conseils..."
                className="w-full bg-gray-900 border border-gray-700 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                🔍
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section des posts */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 max-w-4xl mx-auto">
          {/* Post exemple 1 */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:border-gray-600 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <div>
                  <p className="font-semibold">@MarieVoyage</p>
                  <p className="text-sm text-gray-400">Japon • Mars 2024</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">Il y a 2 jours</span>
            </div>
            
            <h3 className="text-xl font-bold mb-3">Tokyo sous la neige ❄️</h3>
            <p className="text-gray-300 mb-4">
              Découverte magique de Tokyo pendant la saison des neiges. Les temples de Nikko étaient absolument féeriques. 
              Conseils : prévoir un bon manteau et des chaussures imperméables !
            </p>
            
            {/* Actions */}
            <div className="flex items-center space-x-6 pt-4 border-t border-gray-800">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                <span>❤️</span>
                <span>127</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                <span>💬</span>
                <span>23</span>
              </button>
            </div>
          </div>

          {/* Post exemple 2 */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:border-gray-600 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
                <div>
                  <p className="font-semibold">@PierreExplorer</p>
                  <p className="text-sm text-gray-400">Islande • Février 2024</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">Il y a 5 jours</span>
            </div>
            
            <h3 className="text-xl font-bold mb-3">Aurores boréales inoubliables 🌌</h3>
            <p className="text-gray-300 mb-4">
              Une semaine en Islande à chasser les aurores boréales. Conseil : prévoyez des vêtements très chauds et 
              téléchargez l'application Aurora Forecast pour ne rien manquer !
            </p>
            
            <div className="flex items-center space-x-6 pt-4 border-t border-gray-800">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                <span>❤️</span>
                <span>89</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                <span>💬</span>
                <span>15</span>
              </button>
            </div>
          </div>

          {/* Post exemple 3 */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:border-gray-600 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"></div>
                <div>
                  <p className="font-semibold">@SarahNomade</p>
                  <p className="text-sm text-gray-400">Thaïlande • Janvier 2024</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">Il y a 1 semaine</span>
            </div>
            
            <h3 className="text-xl font-bold mb-3">Les îles paradisiaques de Koh Phi Phi 🏝️</h3>
            <p className="text-gray-300 mb-4">
              Découverte des plages de sable blanc et des eaux turquoises. Maya Bay est magnifique mais très fréquentée, 
              mieux vaut y aller tôt le matin pour éviter la foule.
            </p>
            
            <div className="flex items-center space-x-6 pt-4 border-t border-gray-800">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                <span>❤️</span>
                <span>204</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                <span>💬</span>
                <span>42</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}