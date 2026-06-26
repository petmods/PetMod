'use client';

import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils/format';
import { useCart } from '@/lib/hooks/useCart';
import { useWishlist } from '@/lib/hooks/useWishlist';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [showAddedNotification, setShowAddedNotification] = useState(false);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    setShowAddedNotification(true);
    setTimeout(() => setShowAddedNotification(false), 2000);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition group cursor-pointer overflow-hidden">
        {/* Image Container */}
        <div className="relative h-48 bg-gray-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
          
          {/* Badge */}
          <div className="absolute top-3 right-3 space-y-2">
            {discount > 0 && (
              <div className="bg-primary text-white px-2 py-1 rounded text-sm font-bold">
                -{discount}%
              </div>
            )}
            {!product.inStock && (
              <div className="bg-gray-600 text-white px-2 py-1 rounded text-sm font-bold">
                Out of Stock
              </div>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlist}
            className={`absolute top-3 left-3 p-2 rounded-full transition ${
              inWishlist
                ? 'bg-primary text-white'
                : 'bg-white/80 hover:bg-white text-dark'
            }`}
          >
            <Heart size={20} fill={inWishlist ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Category */}
          <p className="text-xs text-primary font-semibold uppercase mb-2">{product.category}</p>

          {/* Name */}
          <h3 className="font-semibold text-dark mb-2 line-clamp-2 group-hover:text-primary transition">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex text-yellow-400">
              {'★'.repeat(Math.floor(product.rating))}
            </div>
            <span className="text-xs text-gray-600 ml-2">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-baseline space-x-2">
              <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2 font-medium"
          >
            <ShoppingCart size={18} />
            <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
          </button>

          {/* Notification */}
          {showAddedNotification && (
            <div className="mt-2 bg-green-100 text-green-700 px-3 py-2 rounded text-sm text-center">
              Added to cart!
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
