import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToSavings } from '../../store/slices/userSlice';
import { PiggyBank } from 'lucide-react';

export function SavingsGame() {
  const dispatch = useDispatch();
  const [target, setTarget] = useState(100);
  const [saved, setSaved] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleSave = (amount: number) => {
    setSaved(prev => prev + amount);
    dispatch(addToSavings(amount));
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <PiggyBank className="h-8 w-8 text-pink-500 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Savings Challenge</h2>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 dark:text-gray-300">Target: ${target}</p>
        <p className="text-gray-600 dark:text-gray-300">Saved: ${saved}</p>
        <p className="text-gray-600 dark:text-gray-300">Time Left: {timeLeft}s</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => handleSave(10)}
          className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Save $10
        </button>
        <button
          onClick={() => handleSave(20)}
          className="p-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Save $20
        </button>
      </div>

      <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${(saved / target) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}