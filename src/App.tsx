import { HelmetProvider } from 'react-helmet-async'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 relative overflow-hidden">
        {/* Vibrant background patterns */}
        <div className="absolute inset-0 bg-medical-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-accent-400/20 to-healing-400/20 rounded-full filter blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-vibrant-400/15 to-primary-400/15 rounded-full filter blur-3xl animate-float"></div>
        
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/40 backdrop-blur-sm"></div>
        
        {/* Main content */}
        <div className="relative">
          <MainLayout />
        </div>
      </div>
    </HelmetProvider>
  )
}

export default App
