# PetMod - E-Commerce Platform

A modern, fast, and user-friendly e-commerce platform for pet products and accessories built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🛍️ Product catalog with categories
- 🛒 Shopping cart with localStorage persistence
- ❤️ Wishlist functionality
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Server-side rendering with Next.js 15
- 📦 Admin dashboard (structure ready)
- 🔍 Product search and filtering
- 💳 Product details page
- 🚀 Production-ready code

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build & Production

```bash
npm run build
npm start
```

## Project Structure

```
PetMod/
├── app/                    # Next.js app directory
│   ├── (main)/
│   │   ├── page.tsx       # Homepage
│   │   ├── layout.tsx     # Main layout
│   │   ├── products/      # Product pages
│   │   ├── cart/          # Cart page
│   │   └── wishlist/      # Wishlist page
│   ├── admin/             # Admin dashboard
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── common/            # Common components
│   ├── product/           # Product components
│   ├── cart/              # Cart components
│   └── admin/             # Admin components
├── lib/                   # Utility functions
│   ├── hooks/             # React hooks
│   ├── utils/             # Utility functions
│   └── types.ts           # TypeScript types
├── data/                  # Seeded data
│   └── products.ts        # Product data
└── public/                # Static assets
```

## Technology Stack

- **Frontend**: React 19, Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: localStorage
- **Icons**: Lucide React

## Features Overview

### Homepage
- Hero section with featured products
- Category showcase
- Best sellers section
- Call-to-action buttons

### Product Catalog
- Grid layout with responsive cards
- Product filters and categories
- Quick add to cart
- Add to wishlist

### Shopping Cart
- Persistent storage using localStorage
- Quantity adjustment
- Remove items
- Total calculation

### Wishlist
- Save favorite products
- Move to cart
- Remove from wishlist

### Admin Dashboard
- Dashboard overview structure
- Products management interface
- Orders management
- Analytics section

## Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface
- Optimized for all devices

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT
