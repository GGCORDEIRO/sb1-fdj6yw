import React from 'react';
import { Search } from 'lucide-react';
import SearchFilters from './components/SearchFilters';
import ProfessionalList from './components/ProfessionalList';
import { Button } from '../../components/ui/button';

const ProfessionalSearch = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-2">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar profissionais ou serviços..."
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <Button>Buscar</Button>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-4 gap-6">
        <SearchFilters />
        <div className="md:col-span-3">
          <ProfessionalList />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSearch;