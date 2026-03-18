import React from 'react';
import { Animal } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ShieldCheck, MapPin, Calendar, Clock, Zap, Fuel, Leaf, CarFront as DonkeyIcon, Phone } from 'lucide-react';

interface AnimalDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  animal: Animal | null;
}

export const AnimalDetailsModal: React.FC<AnimalDetailsModalProps> = ({ isOpen, onClose, animal }) => {
  if (!isOpen || !animal) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur-md rounded-full hover:bg-white transition-colors shadow-sm"
          >
            <X className="w-6 h-6 text-zinc-900" />
          </button>

          <div className="flex flex-col md:flex-row h-full overflow-y-auto">
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative h-64 md:h-auto min-h-[300px]">
              <img 
                src={animal.image} 
                alt={animal.name} 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {animal.isFeatured && (
                  <span className="bg-brand-accent text-zinc-900 text-xs font-bold px-3 py-1.5 rounded uppercase tracking-widest w-max shadow-lg">
                    Destaque
                  </span>
                )}
                <span className="bg-zinc-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-widest w-max shadow-lg">
                  Ano {animal.year}
                </span>
              </div>
            </div>

            {/* Details Section */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{animal.breed}</span>
                  <span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{animal.size}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-2">{animal.name}</h2>
                <p className="text-3xl font-extrabold text-brand-accent">R${animal.price.toLocaleString()}</p>
              </div>

              <div className="prose prose-zinc mb-8">
                <p className="text-zinc-600 leading-relaxed">{animal.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-zinc-400" />
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Horas de Uso</span>
                  </div>
                  <p className="font-bold text-zinc-900">{animal.hours}h</p>
                </div>
                
                <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-zinc-400" />
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Temperamento</span>
                  </div>
                  <p className="font-bold text-zinc-900">{animal.temperament}</p>
                </div>

                <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                  <div className="flex items-center gap-2 mb-1">
                    <DonkeyIcon className="w-4 h-4 text-zinc-400" />
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Tração</span>
                  </div>
                  <p className="font-bold text-zinc-900">{animal.traction}</p>
                </div>

                <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                  <div className="flex items-center gap-2 mb-1">
                    <Fuel className="w-4 h-4 text-zinc-400" />
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Combustível</span>
                  </div>
                  <p className="font-bold text-zinc-900">{animal.fuel}</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-zinc-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>Vacinado e vermifugado recentemente</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-600">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  <span>Garantia de 90 dias (motor e caixa)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-600">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                  <span>Disponível para test-drive no Sertão</span>
                </div>
              </div>

              <div className="mt-auto flex gap-4">
                <button className="flex-1 btn-primary py-4 text-lg flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Falar com Vendedor
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
