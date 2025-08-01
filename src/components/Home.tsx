import { useTheme } from '../contexts/ThemeContext'
import { useProducts } from '../hooks/useProducts'

export default function Home() {
  const { currentTheme } = useTheme()
  const { products, loading, error } = useProducts()

  if (currentTheme.layout === 'sidebar') {
    return (
      <div className="flex">
        <aside className={`w-64 ${currentTheme.colors.card} p-6 min-h-screen`}>
          <h3 className={`text-lg ${currentTheme.fonts.heading} mb-4`}>Navigation</h3>
          <ul className="space-y-2">
            <li><a href="#" className={currentTheme.colors.accent}>Dashboard</a></li>
            <li><a href="#" className={currentTheme.colors.text}>Products</a></li>
            <li><a href="#" className={currentTheme.colors.text}>Settings</a></li>
          </ul>
        </aside>
        <main className="flex-1 p-8">
          <h1 className={`text-4xl ${currentTheme.fonts.heading} mb-6`}>Welcome to Our Store</h1>
          <p className={`text-lg mb-8 ${currentTheme.colors.text}`}>Discover amazing products with our dark theme experience.</p>
          <button className={`px-6 py-3 rounded-lg ${currentTheme.colors.button} transition-all duration-200`}>
            Explore Products
          </button>
          {loading ? (
            <div className="mt-8">Loading products...</div>
          ) : error ? (
            <div className="mt-8 text-red-500">Error: {error}</div>
          ) : (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.slice(0, 4).map((product) => (
                <div key={product.id} className={`${currentTheme.colors.card} p-6 rounded-lg shadow-lg`}>
                  <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded mb-4" />
                  <h3 className={`font-bold mb-2 ${currentTheme.colors.text}`}>{product.title.slice(0, 50)}...</h3>
                  <p className={`${currentTheme.colors.accent} font-bold`}>${product.price}</p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    )
  }

  if (currentTheme.layout === 'grid') {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h1 className={`text-5xl ${currentTheme.fonts.heading} mb-4 ${currentTheme.colors.accent}`}>🎨 Creative Store</h1>
          <p className={`text-xl ${currentTheme.colors.text}`}>Where creativity meets commerce!</p>
        </div>
        
        <div className={`${currentTheme.colors.card} p-8 rounded-2xl shadow-xl`}>
          <h2 className={`text-2xl ${currentTheme.fonts.heading} mb-4`}>Featured Content</h2>
          <p className={`mb-6 ${currentTheme.colors.text}`}>Experience our playful and colorful design with amazing products.</p>
          <button className={`px-8 py-4 rounded-full ${currentTheme.colors.button} transition-all duration-300 transform hover:scale-105`}>
            🚀 Get Started
          </button>
        </div>

        {loading ? (
          <div className="text-center">Loading products...</div>
        ) : error ? (
          <div className="text-center text-red-500">Error: {error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className={`${currentTheme.colors.card} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                <h3 className={`${currentTheme.fonts.heading} text-lg mb-2 ${currentTheme.colors.text}`}>{product.title.slice(0, 40)}...</h3>
                <p className={`${currentTheme.colors.accent} text-xl font-bold`}>${product.price}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400">⭐</span>
                  <span className={`ml-1 text-sm ${currentTheme.colors.text}`}>{product.rating.rate}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className={`text-4xl ${currentTheme.fonts.heading} mb-4`}>Welcome to Our Store</h1>
        <p className={`text-lg ${currentTheme.colors.text} mb-6`}>A clean and minimalist shopping experience.</p>
        <button className={`px-6 py-3 rounded-md ${currentTheme.colors.button} transition-all duration-200`}>
          Shop Now
        </button>
      </div>

      <div className={`${currentTheme.colors.card} p-6 rounded-lg shadow-md`}>
        <h2 className={`text-2xl ${currentTheme.fonts.heading} mb-4`}>About Our Products</h2>
        <p className={`${currentTheme.colors.text} mb-4`}>We offer high-quality products with excellent customer service.</p>
        <ul className={`list-disc list-inside space-y-2 ${currentTheme.colors.text}`}>
          <li>Premium quality items</li>
          <li>Fast shipping worldwide</li>
          <li>24/7 customer support</li>
          <li>30-day return policy</li>
        </ul>
      </div>

      {loading ? (
        <div>Loading products...</div>
      ) : error ? (
        <div className="text-red-500">Error: {error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className={`${currentTheme.colors.card} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className={`font-semibold mb-2 ${currentTheme.colors.text}`}>{product.title.slice(0, 50)}...</h3>
              <p className={`${currentTheme.colors.accent} font-bold text-lg`}>${product.price}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">★</span>
                <span className={`ml-1 ${currentTheme.colors.text}`}>{product.rating.rate}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}