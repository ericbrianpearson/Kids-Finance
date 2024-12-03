import React from 'react';
import { useSelector } from 'react-redux';
import { Trophy } from 'lucide-react';
import { RootState } from '../store';

export function Achievements() {
  const achievements = useSelector((state: RootState) => state.user.achievements);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Achievements
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {achievement.name}
              </h3>
              <span className="text-green-500 font-medium">
                +${achievement.reward}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {achievement.description}
            </p>
          </div>
        ))}

        {achievements.length === 0 && (
          <div className="col-span-2 text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              Complete modules and challenges to earn achievements!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}