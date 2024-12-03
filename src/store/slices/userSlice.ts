import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, Investment, Expense, Achievement } from '../../types';

const initialState: User = {
  name: 'Player',
  balance: 100,
  savings: 50,
  investments: [],
  expenses: [],
  achievements: [],
  level: 1,
  experience: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addMoney: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
    },
    addToSavings: (state, action: PayloadAction<number>) => {
      if (state.balance >= action.payload) {
        state.balance -= action.payload;
        state.savings += action.payload;
      }
    },
    addInvestment: (state, action: PayloadAction<Investment>) => {
      state.investments.push(action.payload);
    },
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload);
    },
    payExpense: (state, action: PayloadAction<string>) => {
      const expense = state.expenses.find(e => e.id === action.payload);
      if (expense && !expense.isPaid && state.balance >= expense.amount) {
        expense.isPaid = true;
        state.balance -= expense.amount;
      }
    },
    unlockAchievement: (state, action: PayloadAction<Achievement>) => {
      state.achievements.push(action.payload);
      state.experience += 50;
    },
    gainExperience: (state, action: PayloadAction<number>) => {
      state.experience += action.payload;
      if (state.experience >= state.level * 100) {
        state.level += 1;
        state.experience = 0;
      }
    },
  },
});

export const {
  addMoney,
  addToSavings,
  addInvestment,
  addExpense,
  payExpense,
  unlockAchievement,
  gainExperience,
} = userSlice.actions;

export default userSlice.reducer;