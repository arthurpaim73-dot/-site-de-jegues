import React from 'react';
import { FilterState } from '../types';
import { SlidersHorizontal } from 'lucide-react';

interface FiltersProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export const Filters: React.FC<FiltersProps> = ({ filters, setFilters }) => {
  return (
    <div className="bg-white border-b border-zinc-200 py-6 sticky top-20 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="flex items-center gap-2 text-zinc-500 min-w-fit">
            <SlidersHorizontal className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">Filtros</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Raça</label>
              <select 
                value={filters.breed}
                onChange={(e) => setFilters(prev => ({ ...prev, breed: e.target.value }))}
                className="bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
              >
                <option value="">Todas as Raças</option>
                <option value="Pêga">Pêga</option>
                <option value="Nordestino">Nordestino</option>
                <option value="Gargano Italiano">Gargano Italiano</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Porte</label>
              <select 
                value={filters.size}
                onChange={(e) => setFilters(prev => ({ ...prev, size: e.target.value }))}
                className="bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
              >
                <option value="">Todos os Portes</option>
                <option value="Compacto">Compacto</option>
                <option value="Médio">Médio</option>
                <option value="Grande">Grande</option>
                <option value="Pesado">Pesado</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Temperamento</label>
              <select 
                value={filters.temperament}
                onChange={(e) => setFilters(prev => ({ ...prev, temperament: e.target.value }))}
                className="bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
              >
                <option value="">Todos os Temperamentos</option>
                <option value="Automático">Automático (Calmo)</option>
                <option value="Manual">Manual (Padrão)</option>
                <option value="Sport">Sport (Rápido)</option>
                <option value="Off-road">Off-road (Robusto)</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Preço Máximo (R$)</label>
              <input 
                type="range" 
                min="5000" 
                max="50000" 
                step="1000"
                value={filters.maxPrice}
                onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: parseInt(e.target.value) }))}
                className="accent-brand-accent h-10"
              />
              <div className="flex justify-between text-[10px] font-bold text-zinc-500">
                <span>R$5k</span>
                <span>R${filters.maxPrice / 1000}k</span>
                <span>R$50k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
