'use client';

import { useState, useEffect, useCallback } from 'react';
import { WishlistItem } from '../types';

const WISHLIST_STORAGE_KEY = 'petmod_wishlist';

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const storedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (storedWishlist) {
      try {
        setWishlist(JSON.parse(storedWishlist));
      } catch (error) {
        console.error('Failed to load wishlist:', error);
      }
    }
    setIsLoading(false);
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    }
  }, [wishlist, isLoading]);

  const addToWishlist = useCallback((productId: string) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.find((item) => item.productId === productId);
      if (exists) return prevWishlist;
      return [
        ...prevWishlist,
        {
          id: `${productId}-${Date.now()}`,
          productId,
          addedAt: new Date().toISOString(),
        },
      ];
    });
  }, []);

  const removeFromWishlist = useCallback((productId: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.productId !== productId));
  }, []);

  const isInWishlist = useCallback(
    (productId: string) => {
      return wishlist.some((item) => item.productId === productId);
    },
    [wishlist]
  );

  const clearWishlist = useCallback(() => {
    setWishlist([]);
  }, []);

  return {
    wishlist,
    isLoading,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
  };
};
