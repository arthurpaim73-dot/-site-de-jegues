import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Coins } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] flex items-center overflow-hidden bg-zinc-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/sertao/1920/1080?blur=2" 
          alt="Backlands" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-3 py-1 bg-brand-accent text-zinc-900 text-xs font-bold uppercase tracking-widest rounded mb-6">
            Novidade: Série Luxo 2024
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            O que importa para o <span className="text-brand-accent italic">sertão.</span>
          </h1>
          <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
            Financiamento em até 48 parcelas sem juros. Animais de tração de alta performance com pedigree certificado e suporte técnico completo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary bg-brand-accent text-zinc-900 hover:bg-yellow-500 flex items-center justify-center gap-2">
              Explorar Estoque <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-zinc-900">
              Simular Financiamento
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-brand-accent" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Pedigree<br/>Certificado</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-brand-accent" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Tração<br/>Instantânea</span>
            </div>
            <div className="flex items-center gap-3">
              <Coins className="w-6 h-6 text-brand-accent" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Taxa Zero<br/>Financiamento</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
