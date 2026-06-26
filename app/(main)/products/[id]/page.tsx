'use client';

import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { formatPrice } from '@/lib/utils/format';
import { useCart } from '@/lib/hooks/useCart';
import { useWishlist } from '@/lib/hooks/useWishlist';
import { Heart, ShoppingCart, Truck, Shield, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const inWishlist = isInWishlist(product?.id || '');

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center space-x-2 text-gray-600">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary">Products</Link>
          <span>/</span>
          <span className="text-dark font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {discount > 0 && (
              <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg font-bold">
                Save {discount}%
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            {/* Category */}
            <p className="text-primary font-semibold uppercase text-sm mb-2">{product.category}</p>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {'★'.repeat(Math.floor(product.rating))}
              </div>
              <span className="text-gray-600 ml-3">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline space-x-3 mb-6">
              <span className="text-3xl font-bold text-primary">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

            {/* Tags */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-600 mb-2">Tags:</p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="bg-light px-3 py-1 rounded-full text-sm text-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className={`mb-8 p-3 rounded-lg ${
              product.inStock
                ? 'bg-green-50 text-green-700'
                : 'bg-red-50 text-red-700'
            }`}>
              <p className="font-semibold">
                {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
              </p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center space-x-3 bg-light rounded-lg px-4 py-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-gray-600 hover:text-dark transition"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 text-center bg-transparent focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-gray-600 hover:text-dark transition"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition font-bold flex items-center justify-center space-x-2 disabled:bg-gray-400"
              >
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={handleWishlist}
                className={`px-6 py-3 rounded-lg border-2 transition font-bold ${
                  inWishlist
                    ? 'bg-primary text-white border-primary'
                    : 'border-primary text-primary hover:bg-light'
                }`}
              >
                <Heart size={20} fill={inWishlist ? 'currentColor' : 'none'} />
              </button>
            </div>

            {addedToCart && (
              <div className="mb-8 bg-green-100 text-green-700 px-4 py-3 rounded-lg font-medium">
                ✓ Added to cart successfully!
              </div>
            )}

            {/* Info Cards */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Truck, title: 'Free Shipping', desc: 'On orders over $50' },
                { icon: RotateCcw, title: '30 Day Return', desc: 'Money back guarantee' },
                { icon: Shield, title: 'Secure', desc: 'Trusted checkout' },
              ].map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div key={idx} className="text-center">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-sm">{info.title}</p>
                    <p className="text-xs text-gray-600">{info.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
