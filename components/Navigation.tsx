import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, CarFront, Cog } from 'lucide-react';
import { BRANCHES } from '../constants';

const Navigation: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Branches', path: '/branches' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-ezzu-navy text-white sticky top-0 z-40 shadow-lg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Cog size={32} className="text-ezzu-silver animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-ezzu-blue rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight group-hover:text-ezzu-blue transition-colors">EZZU</span>
              <span className="text-[10px] tracking-widest text-ezzu-silver uppercase">Autotech Trading</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-ezzu-blue ${
                  isActive(link.path) ? 'text-ezzu-blue border-b-2 border-ezzu-blue pb-1' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-white focus:outline-none">
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileOpen && (
        <div className="md:hidden bg-ezzu-navy border-t border-gray-800">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileOpen(false)}
                className={`text-lg font-medium ${
                  isActive(link.path) ? 'text-ezzu-blue' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-700">
              <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Our Branches</h4>
              {BRANCHES.map(b => (
                 <Link 
                   key={b.id} 
                   to={`/branches/${b.id}`} 
                   onClick={() => setIsMobileOpen(false)}
                   className="block py-2 text-sm text-gray-400 hover:text-white flex items-center"
                 >
                   <ChevronRight size={14} className="mr-2" />
                   {b.name}
                 </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
