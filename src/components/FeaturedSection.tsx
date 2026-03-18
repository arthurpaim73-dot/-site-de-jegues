import React from 'react';
import { motion } from 'motion/react';
import { Shield, Star, Award, Settings } from 'lucide-react';

export const FeaturedSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/luxury-donkey-detail/1200/1600" 
                alt="Luxury Donkey Detail" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-zinc-900 to-transparent">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-accent rounded-lg">
                    <Award className="w-6 h-6 text-zinc-900" />
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase tracking-widest text-xs">Award Winning</p>
                    <p className="text-zinc-300 text-sm">Best in Show - Sertão Expo 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Destaques Exclusivos</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-8 leading-tight">
              A Experiência do <span className="italic">Jegue de Luxo</span>
            </h2>
            <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
              Redefinindo a mobilidade rural. Nossa Série Luxo conta com acessórios premium e um temperamento inigualável, garantindo que você viaje pelo sertão com estilo e conforto.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-zinc-900" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 mb-1">Acessórios Premium</h4>
                  <p className="text-zinc-500 text-sm">Sela de couro feita à mão e ferraduras de liga leve personalizadas incluídas de série.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-zinc-900" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 mb-1">Temperamento Elite</h4>
                  <p className="text-zinc-500 text-sm">Treinado especialmente para uma operação suave e alta compatibilidade social.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-zinc-900" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 mb-1">Garantia Estendida</h4>
                  <p className="text-zinc-500 text-sm">5 anos de garantia de saúde e performance com suporte veterinário móvel.</p>
                </div>
              </div>
            </div>

            <button className="mt-12 btn-primary w-full md:w-auto">
              Configure seu Jegue de Luxo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
