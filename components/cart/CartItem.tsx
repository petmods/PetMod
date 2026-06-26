'use client';

import { CartItem as CartItemType } from '@/lib/types';
import { formatPrice } from '@/lib/utils/format';
import { Trash2, Plus, Minus } from 'lucide-react';
import Link from 'next/link';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export default function CartItemComponent({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex gap-4">
      {/* Image */}
      <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <Link href={`/products/${item.id}`} className="hover:text-primary transition">
          <h3 className="font-semibold text-dark">{item.name}</h3>
        </Link>
        <p className="text-sm text-gray-600">{item.category}</p>
        <p className="text-primary font-bold mt-1">{formatPrice(item.price)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-3 px-3 py-2 bg-gray-100 rounded-lg h-fit">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="text-gray-600 hover:text-dark transition"
        >
          <Minus size={18} />
        </button>
        <span className="w-8 text-center font-semibold">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="text-gray-600 hover:text-dark transition"
        >
          <Plus size={18} />
        </button>
      </div>

      {/* Total */}
      <div className="flex flex-col items-end justify-center space-y-2">
        <p className="font-bold text-lg">
          {formatPrice(item.price * item.quantity)}
        </p>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 transition"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
