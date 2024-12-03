import React from 'react';
import { useSelector } from 'react-redux';
import { User, BadgeCheck, Star } from 'lucide-react';
import { RootState } from '../store';

export function Profile() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <User className="h-8 w-8 text-blue-500 mr-3" />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          My Profile
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Progress
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600 dark:text-gray-300">Level</span>
                <span className="font-medium text-gray-800 dark:text-white">
                  {user.level}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{
                    width: `${(user.experience / (user.level * 100)) * 100}%`,
                  }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Experience</span>
              <span className="font-medium text-gray-800 dark:text-white">
                {user.experience} / {user.level * 100}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Statistics
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">
                Total Balance
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                ${user.balance.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">
                Total Savings
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                ${user.savings.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">
                Investments
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                {user.investments.length}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Achievements
          </h2>
          <div className="flex items-center space-x-2">
            <BadgeCheck className="h-5 w-5 text-green-500" />
            <span className="text-gray-600 dark:text-gray-300">
              {user.achievements.length} Unlocked
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Active Goals
          </h2>
          <div className="space-y-4">
            {user.expenses
              .filter((expense) => !expense.isPaid)
              .map((expense) => (
                <div
                  key={expense.id}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-600 dark:text-gray-300">
                    {expense.name}
                  </span>
                  <span className="font-medium text-gray-800 dark:text-white">
                    ${expense.amount}
                  </span>
                </div>
              ))}
            {user.expenses.filter((e) => !e.isPaid).length === 0 && (
              <p className="text-gray-500 dark:text-gray-400">
                No active goals at the moment
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}