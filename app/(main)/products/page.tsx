'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductGrid from '@/components/product/ProductGrid';
import ProductFilters from '@/components/product/ProductFilters';
import { products } from '@/data/products';

function ProductsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Our Products</h1>
        <p className="text-gray-600">Browse our wide selection of pet products and accessories</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <ProductFilters selectedCategory={category || ''} />
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <ProductGrid products={products} selectedCategory={category || ''} />
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
