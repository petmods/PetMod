'use client';

import Link from 'next/link';
import { categories } from '@/data/products';

interface ProductFiltersProps {
  selectedCategory?: string;
}

export default function ProductFilters({ selectedCategory }: ProductFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-fit">
      <h3 className="text-lg font-bold mb-4 text-dark">Categories</h3>
      <div className="space-y-3">
        <Link
          href="/products"
          className={`block px-4 py-2 rounded-lg transition ${
            !selectedCategory || selectedCategory === 'all'
              ? 'bg-primary text-white'
              : 'text-dark hover:bg-light'
          }`}
        >
          All Products
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/products?category=${cat.id}`}
            className={`block px-4 py-2 rounded-lg transition ${
              selectedCategory === cat.id
                ? 'bg-primary text-white'
                : 'text-dark hover:bg-light'
            }`}
          >
            {cat.name} <span className="text-xs">({cat.count})</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
