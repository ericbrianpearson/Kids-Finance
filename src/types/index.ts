export interface User {
  name: string;
  balance: number;
  savings: number;
  investments: Investment[];
  expenses: Expense[];
  achievements: Achievement[];
  level: number;
  experience: number;
}

export interface Investment {
  id: string;
  name: string;
  amount: number;
  returnRate: number;
  duration: number;
}

export interface Expense {
  id: string;
  name: string;
  amount: number;
  category: 'needs' | 'wants';
  isPaid: boolean;
  dueDate: string; // Changed from Date to string for serialization
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  isCompleted: boolean;
  reward: number;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  minLevel: number;
  rewards: {
    experience: number;
    money: number;
  };
}