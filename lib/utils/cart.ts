import { CartItem } from '../types';

export const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const calculateSubtotal = (items: CartItem[]): number => {
  return calculateTotal(items);
};

export const calculateTax = (subtotal: number, taxRate: number = 0.1): number => {
  return Math.round(subtotal * taxRate * 100) / 100;
};

export const calculateShipping = (subtotal: number): number => {
  if (subtotal > 50) return 0;
  if (subtotal > 25) return 5;
  return 10;
};

export const calculateGrandTotal = (items: CartItem[]): number => {
  const subtotal = calculateSubtotal(items);
  const tax = calculateTax(subtotal);
  const shipping = calculateShipping(subtotal);
  return Math.round((subtotal + tax + shipping) * 100) / 100;
};
