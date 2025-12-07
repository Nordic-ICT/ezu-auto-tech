import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BRANCHES, PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const BranchDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const branch = BRANCHES.find(b => b.id === id);
  const branchProducts = PRODUCTS.filter(p => p.branchId === id);

  if (!branch) {
    return <div className="p-10 text-center">Branch not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div className="relative h-80 bg-ezzu-navy">
        <img 
          src={branch.imageUrl} 
          alt={branch.name} 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ezzu-navy via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
          <div className="container mx-auto">
             <span className="bg-ezzu-blue text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">Branch Profile</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{branch.name}</h1>
            <div className="flex items-center text-gray-300">
              <MapPin size={18} className="mr-2" />
              {branch.location}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-ezzu-navy mb-4">About This Branch</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {branch.fullDescription}
              </p>
            </section>

            <section className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-ezzu-navy">Available Products</h2>
                <Link to="/products" className="text-ezzu-blue hover:underline">View All</Link>
              </div>
              
              {branchProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {branchProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center text-gray-500">
                  No products listed specifically for this branch online. Contact us for inventory.
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Info */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-ezzu-navy mb-4">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white border border-gray-100 p-2 rounded-full mr-3 text-ezzu-blue">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-900">{branch.contactPhone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white border border-gray-100 p-2 rounded-full mr-3 text-ezzu-blue">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-900">{branch.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-ezzu-navy">Our Services</h3>
              <ul className="space-y-3">
                {branch.services.map((service, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle size={18} className="text-ezzu-blue mr-3" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white border border-gray-200 rounded-xl h-64 w-full flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-white"></div>
               <span className="relative z-10 text-gray-500 font-medium flex flex-col items-center">
                 <MapPin size={32} className="mb-2 text-gray-300" />
                 Map Integration
                 <span className="text-xs text-gray-400">Lat: {branch.coordinates.lat}, Lng: {branch.coordinates.lng}</span>
               </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchDetail;