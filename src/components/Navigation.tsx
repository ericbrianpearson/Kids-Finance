import React from 'react';
import { Moon, Sun, Wallet, PiggyBank, TrendingUp, Trophy } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Navigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Wallet className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
              KidsFin
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <PiggyBank className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <TrendingUp className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <Trophy className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'light' ? (
                <Moon className="h-6 w-6 text-gray-600" />
              ) : (
                <Sun className="h-6 w-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}