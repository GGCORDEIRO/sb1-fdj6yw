import React from 'react';
import { Activity, Users, MessageSquare, Settings } from 'lucide-react';
import { Button } from '../../../components/ui/button';

const DashboardNav = () => {
  const navItems = [
    { icon: Activity, label: 'Visão Geral', active: true },
    { icon: Users, label: 'Profissionais' },
    { icon: MessageSquare, label: 'Mensagens' },
    { icon: Settings, label: 'Configurações' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <nav className="space-y-2">
        {navItems.map(({ icon: Icon, label, active }) => (
          <Button
            key={label}
            variant={active ? 'default' : 'ghost'}
            className="w-full justify-start"
          >
            <Icon className="h-4 w-4 mr-2" />
            {label}
          </Button>
        ))}
      </nav>
    </div>
  );
};

export default DashboardNav;