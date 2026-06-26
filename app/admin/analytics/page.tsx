'use client';

import { BarChart3, LineChart, TrendingUp } from 'lucide-react';

export default function AdminAnalytics() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Analytics & Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Sales Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold mb-4 flex items-center space-x-2">
            <LineChart size={20} className="text-primary" />
            <span>Sales Trend</span>
          </h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-500">
            [Sales Chart Placeholder]
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold mb-4 flex items-center space-x-2">
            <BarChart3 size={20} className="text-primary" />
            <span>Revenue by Category</span>
          </h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-500">
            [Revenue Chart Placeholder]
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-bold mb-6 flex items-center space-x-2">
          <TrendingUp size={20} className="text-primary" />
          <span>Key Metrics</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: 'Avg. Order Value', value: '$156.80' },
            { label: 'Conversion Rate', value: '3.24%' },
            { label: 'Customer Lifetime Value', value: '$542.30' },
            { label: 'Return Rate', value: '2.1%' },
          ].map((metric, idx) => (
            <div key={idx} className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
              <p className="text-gray-600 text-sm mb-2">{metric.label}</p>
              <p className="text-2xl font-bold text-primary">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
