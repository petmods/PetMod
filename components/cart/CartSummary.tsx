'use client';

import { CartItem } from '@/lib/types';
import { formatPrice } from '@/lib/utils/format';
import {
  calculateSubtotal,
  calculateTax,
  calculateShipping,
  calculateGrandTotal,
} from '@/lib/utils/cart';
import Link from 'next/link';

interface CartSummaryProps {
  items: CartItem[];
}

export default function CartSummary({ items }: CartSummaryProps) {
  const subtotal = calculateSubtotal(items);
  const tax = calculateTax(subtotal);
  const shipping = calculateShipping(subtotal);
  const total = calculateGrandTotal(items);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-24">
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>

      <div className="space-y-3 mb-6 pb-6 border-b">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-medium">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax (10%):</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping:</span>
          <span className="font-medium">
            {shipping === 0 ? (
              <span className="text-green-600 font-semibold">FREE</span>
            ) : (
              formatPrice(shipping)
            )}
          </span>
        </div>
      </div>

      <div className="flex justify-between mb-6 text-lg font-bold">
        <span>Total:</span>
        <span className="text-primary">{formatPrice(total)}</span>
      </div>

      <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition font-bold mb-3">
        Proceed to Checkout
      </button>

      <Link href="/products" className="block text-center text-primary hover:text-primary/80 transition font-medium">
        Continue Shopping
      </Link>

      {subtotal < 50 && subtotal > 0 && (
        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700">
          Free shipping on orders over $50!
        </div>
      )}
    </div>
  );
}
