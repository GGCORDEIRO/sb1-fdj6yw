import React from 'react';
import { Star, MessageSquare, MapPin } from 'lucide-react';
import { Button } from '../../../components/ui/button';

const professionals = [
  {
    id: 1,
    name: 'João Silva',
    profession: 'Eletricista',
    rating: 4.8,
    reviews: 127,
    location: 'Centro, Cabo de Santo Agostinho',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Maria Santos',
    profession: 'Pintora',
    rating: 4.9,
    reviews: 89,
    location: 'Pontezinha, Cabo de Santo Agostinho',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
];

const ProfessionalList = () => {
  return (
    <div className="space-y-4">
      {professionals.map((professional) => (
        <div key={professional.id} className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex gap-4">
            <img
              src={professional.image}
              alt={professional.name}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{professional.name}</h3>
                  <p className="text-gray-600">{professional.profession}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{professional.rating}</span>
                  <span className="text-gray-500">({professional.reviews})</span>
                </div>
              </div>
              
              <div className="mt-2 flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                {professional.location}
              </div>

              <div className="mt-4 flex gap-2">
                <Button>Ver Perfil</Button>
                <Button variant="outline">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Mensagem
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalList;