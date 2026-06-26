'use client';

import { useWishlist } from '@/lib/hooks/useWishlist';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  const wishlistProducts = wishlist
    .map((item) => products.find((p) => p.id === item.productId))
    .filter((p) => p !== undefined);

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-6">
            Add your favorite products to your wishlist for quick access later.
          </p>
          <Link
            href="/products"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition font-bold"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-2">My Wishlist</h1>
      <p className="text-gray-600 mb-8">You have {wishlist.length} item(s) in your wishlist</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistProducts.map((product) => {
          if (!product) return null;
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
