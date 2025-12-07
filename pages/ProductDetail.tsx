import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, BRANCHES } from '../constants';
import { Check, ArrowLeft, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  
  if (!product) return <div className="p-10 text-center">Product not found.</div>;

  const branch = BRANCHES.find(b => b.id === product.branchId);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/products" className="hover:text-ezzu-blue flex items-center">
            <ArrowLeft size={16} className="mr-1" /> Back to Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">{product.name}</span>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Image Section */}
            <div className="bg-white border-r border-gray-100 p-8 flex items-center justify-center">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={product.imageUrl} 
                alt={product.name}
                className="max-w-full h-auto rounded-lg shadow-sm"
              />
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-4">
                <span className="text-ezzu-blue font-bold tracking-wide uppercase text-sm">{product.category}</span>
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                  product.stockStatus === 'In Stock' ? 'bg-white border border-green-200 text-green-800' : 'bg-white border border-yellow-200 text-yellow-800'
                }`}>
                  {product.stockStatus}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-ezzu-navy mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">{product.description}</p>

              {/* Specs Table */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4 border-b pb-2">Technical Specifications</h3>
                <div className="grid grid-cols-1 gap-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-500">{key}</span>
                      <span className="font-medium text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Branch Info */}
              {branch && (
                <div className="bg-white border border-gray-100 p-4 rounded-lg mb-8 flex items-start">
                  <Shield className="text-ezzu-blue mr-3 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Supplied by</p>
                    <Link to={`/branches/${branch.id}`} className="font-bold text-ezzu-navy hover:underline">
                      {branch.name}
                    </Link>
                  </div>
                </div>
              )}

              {/* Action */}
              <div className="flex flex-col sm:flex-row gap-4 items-center border-t pt-8">
                <div className="text-3xl font-bold text-ezzu-navy">
                  {product.price ? `$${product.price.toLocaleString()}` : 'Contact'}
                </div>
                <button className="w-full sm:w-auto flex-1 bg-ezzu-blue text-white py-3 px-8 rounded-lg font-bold hover:bg-ezzu-navy transition-colors text-center">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;