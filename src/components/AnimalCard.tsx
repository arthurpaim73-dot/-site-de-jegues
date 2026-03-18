import React from 'react';
import { Animal } from '../types';
import { motion } from 'motion/react';
import { Clock, Zap, Fuel, Leaf, Info, CarFront as DonkeyIcon, CheckSquare, Square } from 'lucide-react';

interface AnimalCardProps {
  animal: Animal;
  isSelected?: boolean;
  onToggleCompare?: (animal: Animal) => void;
}

export const AnimalCard: React.FC<AnimalCardProps> = ({ animal, isSelected = false, onToggleCompare }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`luxury-card group relative ${isSelected ? 'ring-4 ring-brand-accent' : ''}`}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={animal.image} 
          alt={animal.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-zinc-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
            {animal.year}
          </span>
          {animal.isFeatured && (
            <span className="bg-brand-accent text-zinc-900 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
              Destaque
            </span>
          )}
        </div>
        
        {onToggleCompare && (
          <button 
            onClick={() => onToggleCompare(animal)}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-lg shadow-lg hover:bg-white transition-colors flex items-center gap-2"
          >
            {isSelected ? (
              <>
                <CheckSquare className="w-5 h-5 text-brand-accent" />
                <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest">Comparando</span>
              </>
            ) : (
              <>
                <Square className="w-5 h-5 text-zinc-400" />
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Comparar</span>
              </>
            )}
          </button>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-zinc-900">{animal.name}</h3>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{animal.breed} • {animal.size}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-extrabold text-zinc-900">R${animal.price.toLocaleString()}</p>
            <p className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">Taxa Zero Disponível</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 my-6 border-y border-zinc-100 py-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-zinc-400" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Horas de Uso</span>
              <span className="text-xs font-bold">{animal.hours}h</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-zinc-400" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Temperamento</span>
              <span className="text-xs font-bold">{animal.temperament}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="w-4 h-4 text-zinc-400" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Combustível</span>
              <span className="text-xs font-bold">{animal.fuel}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-zinc-400" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Emissões</span>
              <span className="text-xs font-bold">{animal.emissions}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <DonkeyIcon className="w-4 h-4 text-zinc-400" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Controle de Tração</span>
              <span className="text-xs font-bold">{animal.traction}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 btn-primary py-2 text-sm flex items-center justify-center gap-2">
            Ver Detalhes
          </button>
          <button className="p-2 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors">
            <Info className="w-5 h-5 text-zinc-500" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
