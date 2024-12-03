import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMoney, addExpense } from '../../store/slices/userSlice';

export function BudgetGame() {
  const dispatch = useDispatch();
  const [budget, setBudget] = useState(100);
  const [expenses, setExpenses] = useState<Array<{ name: string; amount: number }>>([]);

  const handleAddExpense = (name: string, amount: number) => {
    if (budget - amount >= 0) {
      setBudget(prev => prev - amount);
      setExpenses(prev => [...prev, { name, amount }]);
      dispatch(addExpense({
        id: Date.now().toString(),
        name,
        amount,
        category: amount <= 50 ? 'needs' : 'wants',
        isPaid: false,
        dueDate: new Date().toISOString(), // Serialize the date to ISO string
      }));
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Budget Challenge</h2>
      <div className="mb-4">
        <p className="text-gray-600 dark:text-gray-300">Remaining Budget: ${budget}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <button
          onClick={() => handleAddExpense('Food', 20)}
          className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Buy Food ($20)
        </button>
        <button
          onClick={() => handleAddExpense('Toys', 30)}
          className="p-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          Buy Toys ($30)
        </button>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Expenses:</h3>
        <ul className="space-y-2">
          {expenses.map((expense, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-300">
              {expense.name}: ${expense.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}