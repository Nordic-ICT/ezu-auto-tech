import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Branches from './pages/Branches';
import BranchDetail from './pages/BranchDetail';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import AIChatBot from './components/AIChatBot';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Footer = () => (
  <footer className="bg-ezzu-navy text-white py-12 border-t border-gray-800">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Ezzu Autotech</h3>
          <p className="text-gray-400 text-sm">
            Driving innovation and empowering industries across Ethiopia with premium imports and technical solutions.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-ezzu-blue">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#/" className="hover:text-white">Home</a></li>
            <li><a href="#/branches" className="hover:text-white">Branches</a></li>
            <li><a href="#/products" className="hover:text-white">Products</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-ezzu-blue">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Import & Export</li>
            <li>Automotive Diagnostics</li>
            <li>Industrial Machinery</li>
            <li>Technical Training</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-ezzu-blue">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Ezzu Autotech Trading PLC. All rights reserved.
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <Navigation />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/branches/:id" element={<BranchDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <AIChatBot />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
