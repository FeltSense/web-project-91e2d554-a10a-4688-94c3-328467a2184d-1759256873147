'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo and Brand */}
      <div className="flex items-center">
        <div className="flex-shrink-0 flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
            <span className="text-white font-bold text-lg">AL</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-gray-900">Aflojale a la Toti</h1>
            <p className="text-sm text-gray-600">Leonel Lombardo</p>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-8">
          <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Inicio
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Servicios
          </a>
          <a href="#campaigns" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Campañas
          </a>
          <a href="#analytics" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Analytics
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Portfolio
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Nosotros
          </a>
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
            Contacto
          </a>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          type="button"
          className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
          }}
        >
          <span className="sr-only">Abrir menú principal</span>
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Navigation Menu */}
  <div className="md:hidden hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t">
      <a href="#home" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
        Inicio
      </a>
      <a href="#services" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
        Servicios
      </a>
      <a href="#campaigns" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
        Campañas
      </a>
      <a href="#analytics" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
        Analytics
      </a>
      <a href="#portfolio" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
        Portfolio
      </a>
      <a href="#about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
        Nosotros
      </a>
      <a href="#contact" className="bg-blue-600 text-white block px-3 py-2 text-base font-medium rounded-md mx-3 mt-4 text-center hover:bg-blue-700">
        Contacto
      </a>
    </div>
  </div>
</nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-coral-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
  </div>

  {/* Grid Pattern Overlay */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

  <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
    <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
      
      {/* Content Side */}
      <div className="space-y-8">
        {/* Brand Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-coral-500/20 border border-orange-500/30 rounded-full backdrop-blur-sm">
          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
          <span className="text-orange-300 text-sm font-medium tracking-wide">TRANSFORMACIÓN GARANTIZADA</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
            <span className="block">AFLÓJALE</span>
            <span className="block bg-gradient-to-r from-orange-400 via-coral-400 to-orange-500 bg-clip-text text-transparent">
              A LA TOTI
            </span>
          </h1>
          <div className="text-xl lg:text-2xl text-gray-300 font-light">
            con <span className="text-orange-400 font-semibold">Leonel Lombardo</span>
          </div>
        </div>

        {/* Value Proposition */}
        <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
          Transforma tu cuerpo y mente con el método que ya cambió la vida de 
          <span className="text-orange-400 font-semibold"> +2,000 personas</span>. 
          Coaching personalizado, resultados reales, sin excusas.
        </p>

        {/* Social Proof Stats */}
        <div className="flex flex-wrap gap-8 py-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400">2,000+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Transformaciones</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-coral-400">95%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Éxito Comprobado</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400">24/7</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Soporte Total</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-coral-500 text-white font-bold text-lg rounded-xl hover:from-orange-600 hover:to-coral-600 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-orange-500/25">
            <span className="relative z-10">COMENZAR MI TRANSFORMACIÓN</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-coral-400 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </button>
          
          <button className="px-8 py-4 border-2 border-orange-500/50 text-orange-400 font-semibold text-lg rounded-xl hover:bg-orange-500/10 hover:border-orange-400 transition-all duration-300 backdrop-blur-sm">
            VER CASOS DE ÉXITO
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center gap-6 pt-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Garantía 30 días</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Coach Certificado</span>
          </div>
        </div>
      </div>

      {/* Visual Side */}
      <div className="relative">
        {/* Main Image Container */}
        <div className="relative z-10">
          <div className="w-full h-96 lg:h-[600px] bg-gradient-to-br from-orange-500/20 to-coral-500/20 rounded-3xl backdrop-blur-sm border border-orange-500/20 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-coral-500 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-black text-white">TL</span>
              </div>
              <div className="text-white font-semibold text-xl">Leonel Lombardo</div>
              <div className="text-orange-300">Coach de Transformación</div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl rotate-12 opacity-80 animate-bounce delay-300"></div>
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-coral-400 to-orange-500 rounded-full opacity-60 animate-pulse"></div>
        
        {/* Success Metrics Floating Cards */}
        <div className="absolute top-20 -left-8 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
          <div className="text-2xl font-bold text-orange-400">-15kg</div>
          <div className="text-xs text-gray-300">Promedio pérdida</div>
        </div>
        
        <div className="absolute bottom-32 -right-8 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
          <div className="text-2xl font-bold text-teal-400">90 días</div>
          <div className="text-xs text-gray-300">Transformación total</div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Wave */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="url(#wave-gradient)"/>
      <defs>
        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6B47" stopOpacity="0.1"/>
          <stop offset="50%" stopColor="#FF8A50" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#3B7EA1" stopOpacity="0.1"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
</section>
      
      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Servicios de <span className="text-orange-600">Aflojale a la Toti - Leonel Lombardo</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Transformamos profesionales del marketing con métodos probados y apoyo personalizado las 24/7
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Personalized Workout Plans */}
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500">
        <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 mx-auto">
          <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Planes de Entrenamiento Personalizados</h3>
        <p className="text-gray-600 text-center">
          Aflojale a la Toti - Leonel Lombardo diseña rutinas específicas para profesionales del marketing que buscan optimizar su rendimiento físico y mental.
        </p>
      </div>

      {/* Nutrition Guidance */}
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Guía Nutricional Especializada</h3>
        <p className="text-gray-600 text-center">
          Planes alimenticios adaptados al estilo de vida acelerado de los marketers, con Aflojale a la Toti - Leonel Lombardo como tu guía experto.
        </p>
      </div>

      {/* 24/7 Coach Support */}
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Soporte 24/7 de Coach</h3>
        <p className="text-gray-600 text-center">
          Acceso directo a Aflojale a la Toti - Leonel Lombardo en cualquier momento, perfecto para profesionales con horarios demandantes en marketing.
        </p>
      </div>

      {/* Proven Transformation Method */}
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-500">
        <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 mx-auto">
          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Método de Transformación Probado</h3>
        <p className="text-gray-600 text-center">
          Sistema validado por Aflojale a la Toti - Leonel Lombardo con resultados comprobados en ejecutivos y profesionales del sector marketing.
        </p>
      </div>
    </div>

    <div className="text-center mt-12">
      <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
        Comenzar con Aflojale a la Toti - Leonel Lombardo
      </button>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Lo que dicen nuestros clientes
      </h2>
      <p className="text-lg text-gray-600">
        Testimonios reales de empresas que han transformado su marketing
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" 
            alt="Carlos Mendoza" 
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">Carlos Mendoza</h4>
            <p className="text-sm text-gray-600">Director de Marketing, TechSolutions</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">
          "Leonel Lombardo y su enfoque 'Aflojale a la Toti' revolucionó completamente nuestra estrategia digital. Aumentamos nuestro ROI en un 340% en solo 6 meses. Su metodología disruptiva es exactamente lo que necesitábamos."
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <img 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face" 
            alt="María Elena Vásquez" 
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">María Elena Vásquez</h4>
            <p className="text-sm text-gray-600">CEO, Innovate Marketing Agency</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">
          "El programa 'Aflojale a la Toti - Leonel Lombardo' cambió nuestra perspectiva sobre el marketing moderno. Nuestros clientes ahora nos ven como verdaderos innovadores. Los resultados hablan por sí solos: +250% en conversiones."
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" 
            alt="Roberto Silva" 
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">Roberto Silva</h4>
            <p className="text-sm text-gray-600">VP Marketing, RetailMax</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">
          "Implementar las estrategias de 'Aflojale a la Toti - Leonel Lombardo' fue la mejor decisión que tomamos este año. Nuestro engagement creció 400% y finalmente conectamos con nuestra audiencia de manera auténtica."
        </p>
      </div>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Company Info */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-yellow-400">Aflojale a la Toti - Leonel Lombardo</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          Estrategias de marketing innovadoras que impulsan tu negocio hacia el éxito. 
          Conectamos marcas con audiencias de manera auténtica y efectiva.
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-yellow-400">Contacto</h4>
        <div className="space-y-2 text-gray-300 text-sm">
          <p className="flex items-center">
            <span className="mr-2">📧</span>
            leonel@aflojalelatoti.com
          </p>
          <p className="flex items-center">
            <span className="mr-2">📱</span>
            +54 11 1234-5678
          </p>
          <p className="flex items-center">
            <span className="mr-2">📍</span>
            Buenos Aires, Argentina
          </p>
        </div>
      </div>

      {/* Social Media */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-yellow-400">Síguenos</h4>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Aflojale a la Toti - Leonel Lombardo. Todos los derechos reservados.
      </p>
    </div>
  </div>
</footer>
    </main>
  )
}