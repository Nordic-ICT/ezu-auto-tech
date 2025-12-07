import React, { useState, useMemo } from 'react';
import { PRODUCTS, BRANCHES } from '../constants';
import ProductCard from '../components/ProductCard';
import { Search, Filter } from 'lucide-react';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Extract unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(PRODUCTS.map(p => p.category)));
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBranch = selectedBranch === 'all' || product.branchId === selectedBranch;
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      
      return matchesSearch && matchesBranch && matchesCategory;
    });
  }, [searchTerm, selectedBranch, selectedCategory]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="relative h-[45vh] md:h-[55vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/product_image.jpg')",
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4 drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
            <p className="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-ezzu-blue mb-3">
              Our products
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-white">
              Explore our catalog
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">

        {/* Controls */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ezzu-blue focus:border-transparent outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative min-w-[200px]">
                <select 
                  className="w-full appearance-none bg-white border border-gray-200 px-4 py-3 pr-8 rounded-lg focus:outline-none focus:border-ezzu-blue"
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                >
                  <option value="all">All Branches</option>
                  {BRANCHES.map(b => (
                    <option key={b.id} value={b.id}>{b.name}</option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>

              <div className="relative min-w-[200px]">
                <select 
                  className="w-full appearance-none bg-white border border-gray-200 px-4 py-3 pr-8 rounded-lg focus:outline-none focus:border-ezzu-blue"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {categories.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>

          </div>
        </div>

        {/* Results */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-gray-700">No products found.</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filters or search term.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedBranch('all'); setSelectedCategory('all');}}
              className="mt-4 text-ezzu-blue hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
        </div>
      </section>
    </div>
  );
};

export default Products;