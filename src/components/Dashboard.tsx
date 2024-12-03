import React from 'react';
import { PiggyBank, TrendingUp, DollarSign } from 'lucide-react';

interface DashboardProps {
  balance: number;
  savings: number;
  investments: number;
}

export function Dashboard({ balance, savings, investments }: DashboardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <DollarSign className="h-8 w-8 text-green-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">Balance</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              ${balance.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <PiggyBank className="h-8 w-8 text-blue-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">Savings</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              ${savings.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <TrendingUp className="h-8 w-8 text-purple-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">Investments</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              ${investments.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}