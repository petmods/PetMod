import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded-full"></div>
              <span>PetMod</span>
            </h3>
            <p className="text-gray-400 text-sm">Your trusted pet products and accessories store.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/products" className="hover:text-primary transition">Shop</Link></li>
              <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/faq" className="hover:text-primary transition">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-primary transition">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-primary transition">Returns</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>support@petmod.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>1-800-PET-MOD</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>123 Pet Lane, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-primary transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition">
              <Twitter size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <p>&copy; 2024 PetMod. All rights reserved. | <Link href="/terms" className="hover:text-primary">Terms of Service</Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
