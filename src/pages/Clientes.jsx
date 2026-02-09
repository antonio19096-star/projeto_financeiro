import React from 'react';
import { Users, Star, AlertTriangle, TrendingDown, Search } from 'lucide-react';

export default function Clientes() {
  // Simulação de dados que virão da sua API Python
  const clientes = [
    { id: 1, nome: "Clínica Alfa", status: "Estratégico", lucro: 5000, recorrencia: "Alta" },
    { id: 2, nome: "João Silva", status: "Inativo", lucro: 0, recorrencia: "Nenhuma" },
    { id: 3, nome: "Studio VIP", status: "Oportunidade", lucro: 1200, recorrencia: "Média" },
    { id: 4, nome: "Empresa Beta", status: "Baixo Retorno", lucro: 150, recorrencia: "Baixa" },
  ];

  const getBadgeColor = (status) => {
    switch (status) {
      case 'Estratégico': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50';
      case 'Oportunidade': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'Inativo': return 'bg-rose-500/20 text-rose-400 border-rose-500/50';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/50';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Users className="text-blue-500" /> CRM Inteligente
        </h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Buscar cliente estratégico..." 
            className="bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500 w-full md:w-64"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-800/50 text-slate-400 text-xs uppercase">
              <th className="p-4">Cliente</th>
              <th className="p-4">Classificação (IA)</th>
              <th className="p-4">Lucro Gerado</th>
              <th className="p-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {clientes.map((c) => (
              <tr key={c.id} className="hover:bg-slate-800/30 transition">
                <td className="p-4 font-medium">{c.nome}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold border ${getBadgeColor(c.status)}`}>
                    {c.status.toUpperCase()}
                  </span>
                </td>
                <td className="p-4 text-slate-300">R$ {c.lucro.toLocaleString('pt-BR')}</td>
                <td className="p-4 text-right">
                  <button className="text-blue-400 hover:underline text-sm">Ver Detalhes</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}