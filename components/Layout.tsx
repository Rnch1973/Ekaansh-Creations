import React from 'react';
import { Gift, Menu, X, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      {/* Top Banner Area matching Screenshot 1 */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop")',
            opacity: 0.6
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
             <div className="flex items-end gap-2 mb-2">
                 {/* Stylized Logo Text */}
                 <div className="text-red-600 font-serif text-4xl italic font-bold" style={{ fontFamily: '"Playfair Display", serif' }}>
                     Ekaansh
                 </div>
                 <div className="text-white font-sans font-bold tracking-[0.2em] text-sm mb-1.5">
                     CREATIONS
                 </div>
             </div>
             <h2 className="text-4xl md:text-5xl font-serif text-white italic tracking-wide">
                 A Gift That Earns Forever
             </h2>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="p-2 bg-green-400 rounded-lg shadow-sm">
                <Gift className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900 leading-none">Ekaansh</span>
                <span className="text-xs font-bold text-green-500 tracking-wider uppercase">Creations</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path 
                      ? 'text-green-500' 
                      : 'text-slate-600 hover:text-green-500'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" className="bg-brand-teal text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-teal-600 transition-all transform hover:-translate-y-0.5">
                Gift a Website
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-brand-teal">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg z-50">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-teal hover:bg-slate-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="block mt-4 text-center px-3 py-3 rounded-md text-base font-bold bg-brand-teal text-white" 
                onClick={() => setIsMenuOpen(false)}
              >
                 Gift a Website
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-brand-gold" />
                <span className="text-xl font-serif font-bold text-white">Ekaansh</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Turning websites into lifetime assets. The perfect gift for financial security and passive income generation.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="hover:text-brand-gold transition"><Facebook size={18} /></a>
                <a href="#" className="hover:text-brand-gold transition"><Instagram size={18} /></a>
                <a href="#" className="hover:text-brand-gold transition"><Twitter size={18} /></a>
                <a href="#" className="hover:text-brand-gold transition"><Linkedin size={18} /></a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-brand-teal transition">About Us</Link></li>
                <li><Link to="/services" className="hover:text-brand-teal transition">Services</Link></li>
                <li><Link to="/pricing" className="hover:text-brand-teal transition">Pricing</Link></li>
                <li><Link to="/admin" className="hover:text-brand-teal transition">Admin Login</Link></li>
              </ul>
            </div>

             {/* Support */}
             <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/faq" className="hover:text-brand-teal transition">FAQ</Link></li>
                <li><Link to="/" className="hover:text-brand-teal transition">Privacy Policy</Link></li>
                <li><Link to="/" className="hover:text-brand-teal transition">Terms & Conditions</Link></li>
                <li><Link to="/contact" className="hover:text-brand-teal transition">Contact Support</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Contact Us</h3>
              <div className="bg-white p-2 w-32 h-32 rounded-lg mb-2">
                 <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/918169102296" 
                    alt="WhatsApp" 
                    className="w-full h-full"
                 />
              </div>
              <p className="text-xs text-white mt-2">WhatsApp</p>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Ekaansh Creations. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};