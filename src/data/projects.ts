// src/data/projects.ts
export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string; 
  tech: string[];
  live?: string; 
  repo?: string; 
};

export const PROJECTS: Project[] = [
  {
    slug: "smartcalc",
    title: "SmartCalc — Hub de Calculadoras",
    description:
      "Coleção de calculadoras e conversores (Next.js + TypeScript + Tailwind). Juros, financiamento, IMC, unidades, polinômios com canvas, feriados e muito mais. Testes unitários com Vitest.",
    image: "../assets/images/smartcalc-cover.png",
    tech: ["Next.js", "TypeScript", "Tailwind", "Recharts", "Vitest"],
    live: "https://smartcalc.com.br",
    repo: "https://github.com/Jpedro900/SmartCalc",
  },
];
