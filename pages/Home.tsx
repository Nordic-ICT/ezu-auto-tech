import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck, Wrench, Plus, ChevronRight } from 'lucide-react';
import { BRANCHES, PRODUCTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      {/* Hero Section - left content over full-width image (like furniture example) */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        {/* Dark-to-transparent overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/10" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-[46%] text-white space-y-6 md:space-y-8">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] md:text-xs font-semibold tracking-[0.35em] uppercase text-ezzu-blue"
            >
              Ezzu Autotech
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95]"
            >
              <span className="block">LUXURY</span>
              <span className="block">AUTOTECH</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="max-w-md text-sm md:text-base text-gray-100/85"
            >
              Premium parts, diagnostics, and workshop tools curated for showrooms, fleets, and
              performance garages across Ethiopia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link
                to="/products"
                className="px-8 md:px-10 py-3 md:py-3.5 rounded-full bg-ezzu-blue text-white font-semibold text-sm md:text-base shadow-[0_16px_40px_rgba(0,0,0,0.35)] hover:bg-ezzu-navy transition-all flex items-center gap-2"
              >
                Go to shop
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/branches"
                className="px-8 md:px-10 py-3 md:py-3.5 rounded-full bg-white/95 text-slate-900 font-semibold text-sm md:text-base shadow-[0_12px_35px_rgba(0,0,0,0.25)] hover:bg-white transition-all"
              >
                See branches
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Highlight hotspots on the right side */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="hidden md:flex items-center justify-center absolute top-1/2 right-[18%] h-12 w-12 rounded-full bg-ezzu-blue text-white shadow-[0_0_0_8px_rgba(36,168,223,0.25)]"
        >
          <Plus size={22} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="hidden md:flex items-center justify-center absolute bottom-[22%] left-1/2 h-12 w-12 rounded-full bg-ezzu-blue text-white shadow-[0_0_0_8px_rgba(36,168,223,0.25)]"
        >
          <Plus size={22} />
        </motion.button>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-white border-t border-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-ezzu-navy mb-4">Why Choose Ezzu Autotech?</h2>
            <div className="w-20 h-1 bg-ezzu-blue mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Globe, 
                title: "Global Sourcing", 
                desc: "We import directly from top-tier manufacturers in Europe, Asia, and America." 
              },
              { 
                icon: ShieldCheck, 
                title: "Genuine Quality", 
                desc: "100% authentic parts and machinery with manufacturer warranties." 
              },
              { 
                icon: Wrench, 
                title: "Expert Support", 
                desc: "Our technical team provides installation, training, and after-sales support." 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mx-auto mb-6 shadow-sm text-ezzu-blue rotate-3 hover:rotate-6 transition-transform">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products section */}
      <section className="py-20 bg-ezzu-light/40 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10 max-md:flex-col max-md:items-start max-md:gap-4">
            <div>
              <p className="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-ezzu-blue mb-3">
                Product list
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-ezzu-navy">
                Featured solutions
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-ezzu-navy text-ezzu-navy text-sm font-semibold hover:bg-ezzu-navy hover:text-white transition-colors"
            >
              View full catalog
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group cursor-pointer bg-white rounded-2xl shadow-[0_18px_45px_rgba(15,23,42,0.06)] border border-gray-100 overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)]"
              >
                <div>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full aspect-square object-cover rounded-2xl"
                  />
                </div>
                <div className="mt-5 px-2 pb-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg md:text-xl text-gray-900 transition-colors duration-300 group-hover:text-ezzu-blue line-clamp-2">
                      {product.name}
                    </h3>
                    <span className="font-semibold text-sm md:text-base text-ezzu-blue">
                      {product.price ? `$${product.price.toLocaleString()}` : 'Quote'}
                    </span>
                  </div>
                  <p className="mt-2 text-xs md:text-sm text-gray-500 line-clamp-2">
                    {product.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Preview */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -skew-x-12 opacity-50 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-ezzu-navy mb-2">Specialized Branches</h2>
              <p className="text-gray-500">Tailored solutions for every sector.</p>
            </div>
            <Link to="/branches" className="hidden md:flex items-center text-ezzu-blue hover:text-ezzu-navy font-bold tracking-wide">
              VIEW ALL <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BRANCHES.map((branch) => (
              <Link key={branch.id} to={`/branches/${branch.id}`} className="group block h-full">
                <div className="relative h-80 overflow-hidden rounded-3xl shadow-lg border border-gray-100 bg-white">
                  <img 
                    src={branch.imageUrl} 
                    alt={branch.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ezzu-navy/90 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-ezzu-blue text-xs font-bold uppercase tracking-wider mb-2">Location</p>
                    <h3 className="text-2xl font-bold mb-2">{branch.name}</h3>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100 line-clamp-2">
                      {branch.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center text-sm font-bold text-ezzu-blue opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                      Explore <ArrowRight size={14} className="ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/branches" className="inline-flex items-center justify-center px-6 py-3 border border-ezzu-navy text-ezzu-navy rounded-full font-bold">
              View All Branches
            </Link>
          </div>
        </div>
      </section>

      {/* "Get ready" Section – image left / text right like furniture reference */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Image / product side */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative max-w-md">
              <div className="absolute inset-6 rounded-[3rem] bg-ezzu-light/70 blur-2xl -z-10" />
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
                alt="Automotive technician working in a modern service bay"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Text / CTA side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-ezzu-blue mb-4">
              Search for
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-ezzu-navy leading-tight mb-4">
              Get ready
              <br />
              for a spring
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-md md:max-w-none mx-auto md:mx-0 mb-8">
              Metus ultricies curabitur sodales ipsum elit cubilia. Discover new-season diagnostics, tools,
              and parts to refresh your workshop.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-ezzu-blue text-white text-sm md:text-base font-semibold shadow-[0_18px_45px_rgba(15,23,42,0.35)] hover:bg-ezzu-navy transition-all"
            >
              Actual trends
              <ChevronRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
