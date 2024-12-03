import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addInvestment } from '../../store/slices/userSlice';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function InvestmentGame() {
  const dispatch = useDispatch();
  const [stockPrice, setStockPrice] = useState(100);
  const [shares, setShares] = useState(0);
  const [history, setHistory] = useState<number[]>([100]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStockPrice(prev => {
        const change = Math.random() > 0.5 ? 5 : -5;
        const newPrice = Math.max(prev + change, 10);
        setHistory(prev => [...prev, newPrice].slice(-10));
        return newPrice;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleBuy = () => {
    dispatch(addInvestment({
      id: Date.now().toString(),
      name: 'KidsCorp Stock',
      amount: stockPrice,
      returnRate: 0.1,
      duration: 30,
    }));
    setShares(prev => prev + 1);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Stock Market Game</h2>
      
      <div className="flex items-center mb-4">
        <span className="text-xl font-bold text-gray-700 dark:text-gray-200">
          Stock Price: ${stockPrice}
        </span>
        {stockPrice > history[history.length - 2] ? (
          <TrendingUp className="ml-2 text-green-500" />
        ) : (
          <TrendingDown className="ml-2 text-red-500" />
        )}
      </div>

      <div className="mb-4">
        <p className="text-gray-600 dark:text-gray-300">Your Shares: {shares}</p>
        <p className="text-gray-600 dark:text-gray-300">
          Portfolio Value: ${(shares * stockPrice).toFixed(2)}
        </p>
      </div>

      <button
        onClick={handleBuy}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Buy Share
      </button>

      <div className="mt-4">
        <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Price History</h3>
        <div className="h-20 flex items-end space-x-2">
          {history.map((price, index) => (
            <div
              key={index}
              style={{ height: `${price}%` }}
              className="w-4 bg-blue-500 rounded-t"
            />
          ))}
        </div>
      </div>
    </div>
  );
}