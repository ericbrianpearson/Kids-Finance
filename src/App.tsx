import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { Dashboard } from './components/Dashboard';
import { ModuleCard } from './components/ModuleCard';
import { RootState } from './store';

function App() {
  const navigate = useNavigate();
  const { level, balance, savings, investments } = useSelector((state: RootState) => state.user);
  const modules = useSelector((state: RootState) => state.game.modules);

  const handleStartModule = (moduleId: string) => {
    navigate(`/module/${moduleId}`);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Navigation />
        
        <main className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
            Welcome to KidsFin!
          </h1>
          
          <Dashboard
            balance={balance}
            savings={savings}
            investments={investments.reduce((total, inv) => total + inv.amount, 0)}
          />
          
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Learning Modules
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <ModuleCard
                key={module.id}
                module={module}
                userLevel={level}
                onStart={handleStartModule}
              />
            ))}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;