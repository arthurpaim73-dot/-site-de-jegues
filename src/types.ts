export interface Animal {
  id: string;
  name: string;
  breed: string;
  size: 'Compacto' | 'Médio' | 'Grande' | 'Pesado';
  year: number;
  price: number;
  hours: number; // Horas de uso
  temperament: 'Automático' | 'Manual' | 'Sport' | 'Off-road'; // Estilo de transmissão
  traction: string; // ex: "4x4 (Quatro Patas)"
  fuel: string; // ex: "Capim & Água"
  emissions: string; // ex: "Orgânica"
  image: string;
  isFeatured?: boolean;
  description: string;
}

export type FilterState = {
  breed: string;
  size: string;
  temperament: string;
  maxPrice: number;
};
