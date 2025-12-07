import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { BRANCHES } from '../constants';
import { motion } from 'framer-motion';

const Branches: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="relative h-[45vh] md:h-[55vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4 drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
            <p className="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-ezzu-blue mb-3">
              Our locations
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-white">
              Contact our branches
            </h1>
          </div>
        </div>
      </section>

      {/* Branch cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ezzu-navy mb-4">Our Network</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ezzu Autotech operates through specialized branches strategically located to serve diverse industrial and automotive needs.
            </p>
          </div>

        <div className="grid gap-10">
          {BRANCHES.map((branch, index) => (
            <motion.div 
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 h-64 md:h-auto relative">
                <img 
                  src={branch.imageUrl} 
                  alt={branch.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-ezzu-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Open Now
                </div>
              </div>
              
              <div className="p-8 md:w-3/5 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-ezzu-navy mb-2">{branch.name}</h2>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin size={16} className="mr-2 text-ezzu-blue" />
                    <span>{branch.location}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{branch.fullDescription}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                     <div className="flex items-center text-sm text-gray-600">
                       <Phone size={16} className="mr-2 text-ezzu-blue" />
                       {branch.contactPhone}
                     </div>
                     <div className="flex items-center text-sm text-gray-600">
                       <Mail size={16} className="mr-2 text-ezzu-blue" />
                       {branch.email}
                     </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {branch.services.map((service, idx) => (
                      <span key={idx} className="bg-white text-gray-600 text-xs px-3 py-1 rounded-full border border-gray-200">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-start">
                  <Link 
                    to={`/branches/${branch.id}`}
                    className="flex items-center bg-ezzu-navy text-white px-6 py-3 rounded-lg hover:bg-ezzu-blue transition-colors font-medium"
                  >
                    Visit Branch Page <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </section>
    </div>
  );
};

export default Branches;