import React from 'react';
import { Users, MessageSquare, Star, TrendingUp } from 'lucide-react';

const DashboardStats = () => {
  const stats = [
    {
      icon: Users,
      label: 'Profissionais Ativos',
      value: '247',
      trend: '+12%',
    },
    {
      icon: MessageSquare,
      label: 'Mensagens',
      value: '1,432',
      trend: '+8%',
    },
    {
      icon: Star,
      label: 'Avaliações',
      value: '4.8',
      trend: '+0.2',
    },
    {
      icon: TrendingUp,
      label: 'Serviços Realizados',
      value: '892',
      trend: '+15%',
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-4">
      {stats.map(({ icon: Icon, label, value, trend }) => (
        <div key={label} className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{label}</p>
              <p className="text-2xl font-semibold mt-1">{value}</p>
            </div>
            <div className="flex flex-col items-end">
              <Icon className="h-6 w-6 text-blue-600" />
              <span className="text-sm text-green-600 mt-1">{trend}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;