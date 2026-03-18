import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Filters } from './components/Filters';
import { AnimalCard } from './components/AnimalCard';
import { FeaturedSection } from './components/FeaturedSection';
import { ComparisonModal } from './components/ComparisonModal';
import { AnimalDetailsModal } from './components/AnimalDetailsModal';
import { INVENTORY } from './constants';
import { FilterState, Animal } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Facebook, Instagram, Twitter, Youtube, Scale } from 'lucide-react';

export default function App() {
  const [filters, setFilters] = useState<FilterState>({
    breed: '',
    size: '',
    temperament: '',
    maxPrice: 50000,
  });

  const [selectedForComparison, setSelectedForComparison] = useState<Animal[]>([]);
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);
  const [selectedAnimalForDetails, setSelectedAnimalForDetails] = useState<Animal | null>(null);

  const toggleComparison = (animal: Animal) => {
    setSelectedForComparison(prev => {
      const isSelected = prev.some(a => a.id === animal.id);
      if (isSelected) {
        return prev.filter(a => a.id !== animal.id);
      } else {
        if (prev.length >= 3) {
          alert('Você pode comparar no máximo 3 modelos por vez.');
          return prev;
        }
        return [...prev, animal];
      }
    });
  };

  const filteredInventory = useMemo(() => {
    return INVENTORY.filter(animal => {
      const matchBreed = !filters.breed || animal.breed === filters.breed;
      const matchSize = !filters.size || animal.size === filters.size;
      const matchTemp = !filters.temperament || animal.temperament === filters.temperament;
      const matchPrice = animal.price <= filters.maxPrice;
      return matchBreed && matchSize && matchTemp && matchPrice;
    });
  }, [filters]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <Filters filters={filters} setFilters={setFilters} />

        <section className="py-20 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs mb-2 block">Estoque Atual</span>
                <h2 className="text-4xl font-extrabold text-zinc-900">Unidades Disponíveis</h2>
              </div>
              <p className="text-zinc-500 font-semibold text-sm">Mostrando {filteredInventory.length} resultados</p>
            </div>

            {filteredInventory.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {filteredInventory.map((animal) => (
                    <AnimalCard 
                      key={animal.id} 
                      animal={animal} 
                      isSelected={selectedForComparison.some(a => a.id === animal.id)}
                      onToggleCompare={toggleComparison}
                      onViewDetails={(animal) => setSelectedAnimalForDetails(animal)}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-xl font-bold text-zinc-400">Nenhuma unidade corresponde às suas especificações atuais.</p>
                <button 
                  onClick={() => setFilters({ breed: '', size: '', temperament: '', maxPrice: 50000 })}
                  className="mt-4 text-brand-accent font-bold uppercase tracking-widest text-sm hover:underline"
                >
                  Resetar Filtros
                </button>
              </div>
            )}
          </div>
        </section>

        <FeaturedSection />

        {/* Newsletter / CTA */}
        <section className="py-24 bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Pronto para elevar sua <span className="text-brand-accent">mobilidade rural?</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
              Junte-se a mais de 5.000 proprietários satisfeitos no sertão. Receba ofertas exclusivas e atualizações de estoque diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Digite seu e-mail" 
                className="flex-grow bg-white/10 border border-white/20 rounded-lg px-6 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent"
              />
              <button className="btn-primary bg-brand-accent text-zinc-900 hover:bg-yellow-500">
                Inscrever-se
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-200 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl font-extrabold uppercase tracking-tighter text-zinc-900">
                  Jegue <span className="text-brand-accent">Motors</span>
                </span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                O marketplace líder em animais de tração de alta performance no Sertão. Qualidade, confiabilidade e tradição desde 1985.
              </p>
              <div className="flex gap-4">
                <Facebook className="w-5 h-5 text-zinc-400 hover:text-zinc-900 cursor-pointer" />
                <Instagram className="w-5 h-5 text-zinc-400 hover:text-zinc-900 cursor-pointer" />
                <Twitter className="w-5 h-5 text-zinc-400 hover:text-zinc-900 cursor-pointer" />
                <Youtube className="w-5 h-5 text-zinc-400 hover:text-zinc-900 cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Estoque</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li className="hover:text-zinc-900 cursor-pointer">Série Luxo</li>
                <li className="hover:text-zinc-900 cursor-pointer">Série Trabalho</li>
                <li className="hover:text-zinc-900 cursor-pointer">Série Compacta</li>
                <li className="hover:text-zinc-900 cursor-pointer">Edições Especiais</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Serviços</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li className="hover:text-zinc-900 cursor-pointer">Financiamento</li>
                <li className="hover:text-zinc-900 cursor-pointer">Suporte Veterinário</li>
                <li className="hover:text-zinc-900 cursor-pointer">Manutenção</li>
                <li className="hover:text-zinc-900 cursor-pointer">Programa de Troca</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Empresa</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li className="hover:text-zinc-900 cursor-pointer">Sobre Nós</li>
                <li className="hover:text-zinc-900 cursor-pointer">Contato</li>
                <li className="hover:text-zinc-900 cursor-pointer">Carreiras</li>
                <li className="hover:text-zinc-900 cursor-pointer">Política de Privacidade</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-zinc-400">© 2026 Jegue Motors & Carraça Solutions. Todos os direitos reservados.</p>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span>Feito com</span>
              <span className="text-red-500">❤️</span>
              <span>para o Sertão</span>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedForComparison.length > 0 && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 p-4 z-40 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-brand-accent/20 p-3 rounded-full">
                  <Scale className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-white font-bold">{selectedForComparison.length} {selectedForComparison.length === 1 ? 'modelo selecionado' : 'modelos selecionados'}</h3>
                  <p className="text-zinc-400 text-sm">Selecione até 3 para comparar</p>
                </div>
              </div>
              <div className="flex gap-4 w-full sm:w-auto">
                <button 
                  onClick={() => setSelectedForComparison([])}
                  className="px-6 py-3 text-sm font-bold text-zinc-300 hover:text-white uppercase tracking-widest transition-colors flex-1 sm:flex-none"
                >
                  Limpar
                </button>
                <button 
                  onClick={() => setIsComparisonModalOpen(true)}
                  disabled={selectedForComparison.length < 2}
                  className={`btn-primary flex-1 sm:flex-none ${selectedForComparison.length < 2 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Comparar Modelos
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ComparisonModal 
        isOpen={isComparisonModalOpen} 
        onClose={() => setIsComparisonModalOpen(false)} 
        animals={selectedForComparison} 
      />

      <AnimalDetailsModal
        isOpen={!!selectedAnimalForDetails}
        onClose={() => setSelectedAnimalForDetails(null)}
        animal={selectedAnimalForDetails}
      />
    </div>
  );
}

