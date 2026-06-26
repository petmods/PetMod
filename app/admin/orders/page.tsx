'use client';

import { Search, Filter } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  items: number;
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Completed';
  date: string;
}

const orders: Order[] = [
  { id: '#12001', customer: 'John Doe', items: 3, total: 234.50, status: 'Completed', date: '2024-01-15' },
  { id: '#12002', customer: 'Jane Smith', items: 2, total: 189.30, status: 'Processing', date: '2024-01-15' },
  { id: '#12003', customer: 'Bob Johnson', items: 5, total: 456.00, status: 'Shipped', date: '2024-01-14' },
  { id: '#12004', customer: 'Alice Brown', items: 1, total: 123.45, status: 'Pending', date: '2024-01-14' },
];

export default function AdminOrders() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Orders Management</h1>

      {/* Filters */}
      <div className="mb-6 flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
          <Filter size={20} />
          <span>Filter</span>
        </button>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Order ID</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Customer</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Items</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Total</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50 cursor-pointer">
                <td className="py-3 px-4 font-medium">{order.id}</td>
                <td className="py-3 px-4">{order.customer}</td>
                <td className="py-3 px-4">{order.items}</td>
                <td className="py-3 px-4 font-semibold">${order.total}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.status === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : order.status === 'Processing'
                        ? 'bg-blue-100 text-blue-700'
                        : order.status === 'Shipped'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
