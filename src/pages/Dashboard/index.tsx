import React from 'react';
import { Activity, Users, MessageSquare, Settings } from 'lucide-react';
import DashboardStats from './components/DashboardStats';
import DashboardNav from './components/DashboardNav';

const Dashboard = () => {
  return (
    <div className="grid md:grid-cols-5 gap-6">
      <DashboardNav />
      <div className="md:col-span-4 space-y-6">
        <DashboardStats />
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Atividade Recente</h2>
          <div className="space-y-4">
            <p className="text-gray-600">Carregando atividades...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;