import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { getLessonContent } from '../utils/lessonContent';

interface ModuleLessonProps {
  moduleId: string;
}

export function ModuleLesson({ moduleId }: ModuleLessonProps) {
  const currentStep = useSelector((state: RootState) => state.game.currentStep);
  const content = getLessonContent(moduleId);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="prose dark:prose-invert max-w-none">
        {content.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{section.content}</p>
            {section.example && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-sm font-medium">Example:</p>
                <p className="text-gray-600 dark:text-gray-300">{section.example}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}