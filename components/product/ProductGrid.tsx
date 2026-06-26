'use client';

import { Product } from '@/lib/types';
import ProductCard from './ProductCard';
import { useState } from 'react';

interface ProductGridProps {
  products: Product[];
  selectedCategory?: string;
}

export default function ProductGrid({ products, selectedCategory }: ProductGridProps) {
  const [sortBy, setSortBy] = useState('featured');

  let sortedProducts = [...products];

  if (selectedCategory && selectedCategory !== 'all') {
    sortedProducts = sortedProducts.filter(
      (p) => p.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
    );
  }

  // Sorting
  if (sortBy === 'price-low') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'newest') {
    sortedProducts.reverse();
  }

  return (
    <div>
      {/* Sort Options */}
      <div className="mb-6 flex justify-end">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Product Grid */}
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
