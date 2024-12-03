import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startModule, completeModule } from '../store/slices/gameSlice';
import { gainExperience, addMoney } from '../store/slices/userSlice';
import { RootState } from '../store';
import { BudgetGame } from './games/BudgetGame';
import { SavingsGame } from './games/SavingsGame';
import { InvestmentGame } from './games/InvestmentGame';
import { ModuleLesson } from './ModuleLesson';

export function ModuleContent() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const module = useSelector((state: RootState) => 
    state.game.modules.find(m => m.id === moduleId)
  );
  const currentStep = useSelector((state: RootState) => state.game.currentStep);

  useEffect(() => {
    if (moduleId) {
      dispatch(startModule(moduleId));
    }
  }, [moduleId, dispatch]);

  const handleComplete = () => {
    if (module) {
      dispatch(completeModule(module.id));
      dispatch(gainExperience(module.rewards.experience));
      dispatch(addMoney(module.rewards.money));
      navigate('/');
    }
  };

  if (!module) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        {module.title}
      </h1>

      <ModuleLesson moduleId={module.id} />

      <div className="mt-8">
        {module.id === 'basics' && <BudgetGame />}
        {module.id === 'savings' && <SavingsGame />}
        {module.id === 'investing' && <InvestmentGame />}
      </div>

      <button
        onClick={handleComplete}
        className="mt-8 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Complete Module
      </button>
    </div>
  );
}