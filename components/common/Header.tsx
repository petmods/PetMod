'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingCart, Heart, Search } from 'lucide-react';
import { useCart } from '@/lib/hooks/useCart';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              P
            </div>
            <span className="text-xl font-bold text-dark hidden sm:inline">PetMod</span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="w-full max-w-md flex items-center bg-light rounded-lg px-4 py-2">
              <Search size={20} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="ml-2 flex-1 bg-transparent focus:outline-none"
              />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            {/* Wishlist */}
            <Link href="/wishlist" className="relative group">
              <Heart size={24} className="text-dark hover:text-primary transition" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative group">
              <ShoppingCart size={24} className="text-dark hover:text-primary transition" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Admin Link */}
            <Link href="/admin" className="hidden sm:inline text-dark hover:text-primary transition font-medium">
              Admin
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-dark"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 bg-light rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <Link href="/products" className="text-dark hover:text-primary font-medium">
                Shop
              </Link>
              <Link href="/admin" className="text-dark hover:text-primary font-medium">
                Admin
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
