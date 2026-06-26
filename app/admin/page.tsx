'use client';

import { BarChart3, Package, ShoppingBag, DollarSign, TrendingUp, Users } from 'lucide-react';

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  change: string;
}

function StatCard({ icon: Icon, label, value, change }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{label}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
          <p className="text-green-600 text-sm mt-2">{change}</p>
        </div>
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard
          icon={DollarSign}
          label="Total Revenue"
          value="$24,500"
          change="+12.5% from last month"
        />
        <StatCard
          icon={ShoppingBag}
          label="Total Orders"
          value="1,248"
          change="+8.2% from last month"
        />
        <StatCard
          icon={Package}
          label="Total Products"
          value="342"
          change="12 new products added"
        />
        <StatCard
          icon={Users}
          label="Total Customers"
          value="3,542"
          change="+15.3% from last month"
        />
        <StatCard
          icon={TrendingUp}
          label="Avg Order Value"
          value="$156.80"
          change="+3.5% from last month"
        />
        <StatCard
          icon={BarChart3}
          label="Conversion Rate"
          value="3.24%"
          change="+0.45% from last month"
        />
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Order ID</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Customer</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: '#12001', customer: 'John Doe', amount: '$234.50', status: 'Completed', date: '2024-01-15' },
                { id: '#12002', customer: 'Jane Smith', amount: '$189.30', status: 'Processing', date: '2024-01-15' },
                { id: '#12003', customer: 'Bob Johnson', amount: '$456.00', status: 'Shipped', date: '2024-01-14' },
                { id: '#12004', customer: 'Alice Brown', amount: '$123.45', status: 'Pending', date: '2024-01-14' },
              ].map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{order.id}</td>
                  <td className="py-3 px-4">{order.customer}</td>
                  <td className="py-3 px-4 font-semibold">{order.amount}</td>
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
      </div>
    </>
  );
}
