import React from 'react';
import { Search, Star, Shield, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/button';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Encontre os melhores profissionais em
          <span className="text-blue-600"> Cabo de Santo Agostinho</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Conectamos você aos melhores profissionais da região. Serviços de qualidade, seguros e com preços justos.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Encontrar Profissionais
          </Button>
          <Button size="lg" variant="outline">
            Cadastrar como Profissional
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="text-center space-y-4">
          <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Search className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold">Busca Simplificada</h3>
          <p className="text-gray-600">Encontre profissionais qualificados em poucos cliques</p>
        </div>
        <div className="text-center space-y-4">
          <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Shield className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold">Segurança Garantida</h3>
          <p className="text-gray-600">Profissionais verificados e avaliados pela comunidade</p>
        </div>
        <div className="text-center space-y-4">
          <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <MessageSquare className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold">Chat Integrado</h3>
          <p className="text-gray-600">Comunicação direta com os profissionais</p>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Serviços Populares</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {['Eletricista', 'Encanador', 'Pintor', 'Pedreiro'].map((service) => (
            <div key={service} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <Star className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;