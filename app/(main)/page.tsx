'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Truck, Shield, Award } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 8);
  const bestSellers = products.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="animate-slideUp">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to PetMod</h1>
              <p className="text-lg text-gray-100 mb-8">
                Discover premium pet products and accessories designed to make your furry friends happy and healthy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center space-x-2"
                >
                  <span>Shop Now</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="#"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="hidden md:block animate-fadeIn">
              <img
                src="https://images.unsplash.com/photo-1587300411107-ec9553cd987b?w=600&h=400&fit=crop"
                alt="Happy pets"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Fast Shipping', desc: 'Quick delivery to your doorstep' },
              { icon: Shield, title: 'Safe & Secure', desc: 'Trusted payment & security' },
              { icon: Award, title: 'Best Quality', desc: 'Premium products guaranteed' },
              { icon: Truck, title: 'Free Returns', desc: '30-day money back guarantee' },
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-light p-6 rounded-lg text-center hover:shadow-md transition">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Handpicked products for your beloved pets</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Best Sellers</h2>
            <p className="text-gray-600 text-lg">Most loved by our customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
            Get exclusive offers, pet care tips, and new product announcements delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-dark focus:outline-none"
            />
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
