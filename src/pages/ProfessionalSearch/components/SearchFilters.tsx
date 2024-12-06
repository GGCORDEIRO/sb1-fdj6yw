import React from 'react';
import { Button } from '../../../components/ui/button';

const SearchFilters = () => {
  const categories = [
    'Todos',
    'Construção',
    'Elétrica',
    'Hidráulica',
    'Pintura',
    'Limpeza',
    'Jardinagem',
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
      <h3 className="font-semibold text-lg">Filtros</h3>
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Categorias</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className="w-full justify-start"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Avaliação</h4>
        <div className="space-y-2">
          {[5, 4, 3].map((rating) => (
            <Button
              key={rating}
              variant="ghost"
              className="w-full justify-start"
            >
              {rating}+ estrelas
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;