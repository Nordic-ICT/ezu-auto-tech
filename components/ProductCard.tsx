import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ShoppingCart, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-gray-100 flex flex-col h-full">
      <div className="relative overflow-hidden h-48 bg-white border-b border-gray-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 text-xs font-bold rounded-full ${
            product.stockStatus === 'In Stock' ? 'bg-white border border-green-200 text-green-800' :
            product.stockStatus === 'Low Stock' ? 'bg-white border border-yellow-200 text-yellow-800' :
            'bg-white border border-gray-200 text-gray-800'
          }`}>
            {product.stockStatus}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="text-xs text-ezzu-blue font-semibold uppercase tracking-wider mb-1">{product.category}</div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div>
            {product.price ? (
              <span className="text-xl font-bold text-ezzu-navy">${product.price.toLocaleString()}</span>
            ) : (
              <span className="text-sm text-gray-500 italic">Call for Quote</span>
            )}
          </div>
          <Link 
            to={`/products/${product.id}`}
            className="flex items-center space-x-1 text-sm font-medium text-white bg-ezzu-blue hover:bg-ezzu-navy px-4 py-2 rounded-lg transition-colors"
          >
            <span>Details</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;