import React from 'react';
import { Animal } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Minus } from 'lucide-react';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  animals: Animal[];
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({ isOpen, onClose, animals }) => {
  if (!isOpen) return null;

  const getComparisonIcon = (key: keyof Animal, value: any) => {
    if (animals.length < 2) return null;
    const allValues = animals.map(a => a[key]);
    const allSame = allValues.every(v => v === allValues[0]);
    if (allSame) return <Minus className="w-4 h-4 text-zinc-300 mx-auto" />;

    if (key === 'price' || key === 'hours') {
      const min = Math.min(...allValues.map(v => Number(v)));
      return Number(value) === min ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />;
    }
    if (key === 'year') {
      const max = Math.max(...allValues.map(v => Number(v)));
      return Number(value) === max ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />;
    }
    if (key === 'size') {
      const sizeScore: Record<string, number> = { 'Grande': 3, 'Médio': 2, 'Pequeno': 1 };
      const max = Math.max(...allValues.map(v => sizeScore[v as string] || 0));
      return (sizeScore[value as string] || 0) === max ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />;
    }
    if (key === 'emissions') {
      const score = (v: string) => v.includes('Zero Carbono') || v.includes('Eco-friendly') ? 2 : 1;
      const max = Math.max(...allValues.map(v => score(v as string)));
      return score(value as string) === max ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />;
    }
    
    // For other categorical fields that differ
    return <Check className="w-5 h-5 text-zinc-400 mx-auto" />;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          <div className="flex items-center justify-between p-6 border-b border-zinc-100">
            <div>
              <h2 className="text-2xl font-extrabold text-zinc-900">Comparativo de Modelos</h2>
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mt-1">
                Análise lado a lado
              </p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-zinc-100 transition-colors"
            >
              <X className="w-6 h-6 text-zinc-500" />
            </button>
          </div>

          <div className="overflow-x-auto flex-grow p-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b border-zinc-200 w-1/4"></th>
                  {animals.map(animal => (
                    <th key={animal.id} colSpan={2} className="p-4 border-b border-zinc-200 align-top">
                      <div className="relative h-32 w-full rounded-lg overflow-hidden mb-4">
                        <img 
                          src={animal.image} 
                          alt={animal.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-zinc-900">{animal.name}</h3>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-brand-accent font-extrabold text-xl">
                          R${animal.price.toLocaleString()}
                        </p>
                        <div className="w-10 flex justify-center">
                          {getComparisonIcon('price', animal.price)}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="p-4 border-b border-zinc-100 font-bold text-zinc-500 uppercase tracking-widest text-xs">Raça</td>
                  {animals.map(animal => (
                    <React.Fragment key={animal.id}>
                      <td className="p-4 border-b border-zinc-100 font-semibold text-zinc-900">{animal.breed}</td>
                      <td className="p-4 border-b border-zinc-100 w-10 bg-zinc-50/50">{getComparisonIcon('breed', animal.breed)}</td>
                    </React.Fragment>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-zinc-100 font-bold text-zinc-500 uppercase tracking-widest text-xs">Porte</td>
                  {animals.map(animal => (
                    <React.Fragment key={animal.id}>
                      <td className="p-4 border-b border-zinc-100 font-semibold text-zinc-900">{animal.size}</td>
                      <td className="p-4 border-b border-zinc-100 w-10 bg-zinc-50/50">{getComparisonIcon('size', animal.size)}</td>
                    </React.Fragment>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-zinc-100 font-bold text-zinc-500 uppercase tracking-widest text-xs">Ano</td>
                  {animals.map(animal => (
                    <React.Fragment key={animal.id}>
                      <td className="p-4 border-b border-zinc-100 font-semibold text-zinc-900">{animal.year}</td>
                      <td className="p-4 border-b border-zinc-100 w-10 bg-zinc-50/50">{getComparisonIcon('year', animal.year)}</td>
                    </React.Fragment>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-zinc-100 font-bold text-zinc-500 uppercase tracking-widest text-xs">Horas de Uso</td>
                  {animals.map(animal => (
                    <React.Fragment key={animal.id}>
                      <td className="p-4 border-b border-zinc-100 font-semibold text-zinc-900">{animal.hours}h</td>
                      <td className="p-4 border-b border-zinc-100 w-10 bg-zinc-50/50">{getComparisonIcon('hours', animal.hours)}</td>
                    </React.Fragment>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-zinc-100 font-bold text-zinc-500 uppercase tracking-widest text-xs">Temperamento</td>
                  {animals.map(animal => (
                    <React.Fragment key={animal.id}>
                      <td className="p-4 border-b border-zinc-100 font-semibold text-zinc-900">{animal.temperament}</td>
                      <td className="p-4 border-b border-zinc-100 w-10 bg-zinc-50/50">{getComparisonIcon('temperament', animal.temperament)}</td>
                    </React.Fragment>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-zinc-100 font-bold text-zinc-500 uppercase tracking-widest text-xs">Tração</td>
                  {animals.map(animal => (
                    <React.Fragment key={animal.id}>
                      <td className="p-4 border-b border-zinc-100 font-semibold text-zinc-900">{animal.traction}</td>
                      <td className="p-4 border-b border-zinc-100 w-10 bg-zinc-50/50">{getComparisonIcon('traction', animal.traction)}</td>
                    </React.Fragment>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-zinc-100 font-bold text-zinc-500 uppercase tracking-widest text-xs">Combustível</td>
                  {animals.map(animal => (
                    <React.Fragment key={animal.id}>
                      <td className="p-4 border-b border-zinc-100 font-semibold text-zinc-900">{animal.fuel}</td>
                      <td className="p-4 border-b border-zinc-100 w-10 bg-zinc-50/50">{getComparisonIcon('fuel', animal.fuel)}</td>
                    </React.Fragment>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-zinc-100 font-bold text-zinc-500 uppercase tracking-widest text-xs">Emissões</td>
                  {animals.map(animal => (
                    <React.Fragment key={animal.id}>
                      <td className="p-4 border-b border-zinc-100 font-semibold text-zinc-900">{animal.emissions}</td>
                      <td className="p-4 border-b border-zinc-100 w-10 bg-zinc-50/50">{getComparisonIcon('emissions', animal.emissions)}</td>
                    </React.Fragment>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-bold text-zinc-500 uppercase tracking-widest text-xs">Descrição</td>
                  {animals.map(animal => (
                    <td key={animal.id} colSpan={2} className="p-4 text-zinc-600 leading-relaxed">{animal.description}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-6 border-t border-zinc-100 bg-zinc-50 flex justify-end">
            <button 
              onClick={onClose}
              className="btn-primary"
            >
              Fechar Comparativo
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
