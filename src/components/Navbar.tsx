import React from 'react';
import { Search, ShoppingCart, User, Menu, CarFront as DonkeyIcon } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <DonkeyIcon className="w-8 h-8 text-zinc-900" />
            <span className="text-xl font-extrabold uppercase tracking-tighter text-zinc-900">
              Jegue <span className="text-brand-accent">Motors</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-semibold uppercase tracking-wider hover:text-brand-accent transition-colors">Estoque</a>
            <a href="#" className="text-sm font-semibold uppercase tracking-wider hover:text-brand-accent transition-colors">Financiamento</a>
            <a href="#" className="text-sm font-semibold uppercase tracking-wider hover:text-brand-accent transition-colors">Soluções</a>
            <a href="#" className="text-sm font-semibold uppercase tracking-wider hover:text-brand-accent transition-colors">Sobre</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 right-0 bg-brand-accent text-[10px] font-bold px-1 rounded-full">0</span>
            </button>
            <button className="md:hidden p-2 hover:bg-zinc-100 rounded-full transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
