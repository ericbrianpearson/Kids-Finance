import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Module } from '../../types';

interface GameState {
  currentModule: string | null;
  currentStep: number;
  modules: Module[];
  miniGameScore: number;
}

const INITIAL_MODULES: Module[] = [
  {
    id: 'basics',
    title: 'Money Basics',
    description: 'Learn about earning, saving, and spending money wisely',
    isCompleted: false,
    minLevel: 1,
    rewards: { experience: 100, money: 50 },
  },
  {
    id: 'savings',
    title: 'Saving for the Future',
    description: 'Discover the power of saving and compound interest',
    isCompleted: false,
    minLevel: 2,
    rewards: { experience: 150, money: 75 },
  },
  {
    id: 'investing',
    title: 'Investment Adventure',
    description: 'Start your journey into smart investing',
    isCompleted: false,
    minLevel: 3,
    rewards: { experience: 200, money: 100 },
  },
];

const initialState: GameState = {
  currentModule: null,
  currentStep: 0,
  modules: INITIAL_MODULES,
  miniGameScore: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startModule: (state, action: PayloadAction<string>) => {
      state.currentModule = action.payload;
      state.currentStep = 0;
    },
    completeModule: (state, action: PayloadAction<string>) => {
      const module = state.modules.find(m => m.id === action.payload);
      if (module) {
        module.isCompleted = true;
      }
      state.currentModule = null;
      state.currentStep = 0;
    },
    nextStep: (state) => {
      state.currentStep += 1;
    },
    updateMiniGameScore: (state, action: PayloadAction<number>) => {
      state.miniGameScore = action.payload;
    },
  },
});

export const {
  startModule,
  completeModule,
  nextStep,
  updateMiniGameScore,
} = gameSlice.actions;

export default gameSlice.reducer;