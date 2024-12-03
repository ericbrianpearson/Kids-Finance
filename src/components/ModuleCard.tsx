import React from 'react';
import { Lock, CheckCircle } from 'lucide-react';
import { Module } from '../types';

interface ModuleCardProps {
  module: Module;
  userLevel: number;
  onStart: (moduleId: string) => void;
}

export function ModuleCard({ module, userLevel, onStart }: ModuleCardProps) {
  const isLocked = userLevel < module.minLevel;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {module.title}
        </h3>
        {module.isCompleted ? (
          <CheckCircle className="h-6 w-6 text-green-500" />
        ) : isLocked ? (
          <Lock className="h-6 w-6 text-gray-400" />
        ) : null}
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {module.description}
      </p>
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Rewards: ${module.rewards.money}
        </div>
        <button
          onClick={() => !isLocked && onStart(module.id)}
          disabled={isLocked}
          className={`px-4 py-2 rounded-md ${
            isLocked
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700'
          } text-white`}
        >
          {isLocked ? `Unlock at Level ${module.minLevel}` : 'Start'}
        </button>
      </div>
    </div>
  );
}