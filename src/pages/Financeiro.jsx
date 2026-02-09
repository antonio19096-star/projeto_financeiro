import React from 'react';
import { DollarSign, ArrowUpCircle, ArrowDownCircle, PieChart } from 'lucide-react';

export default function Financeiro() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">Gestão Financeira (DRE)</h1>
        <p className="text-slate-400 text-sm">Fluxo de caixa e análise de margem.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-400 text-xs uppercase">Receita Bruta</p>
              <h2 className="text-2xl font-bold text-emerald-400">R$ 15.200,00</h2>
            </div>
            <ArrowUpCircle className="text-emerald-500" />
          </div>
        </div>
        
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-400 text-xs uppercase">Despesas Fixas</p>
              <h2 className="text-2xl font-bold text-rose-400">R$ 4.800,00</h2>
            </div>
            <ArrowDownCircle className="text-rose-500" />
          </div>
        </div>

        <div className="bg-blue-600 p-6 rounded-xl shadow-lg shadow-blue-900/20">
          <p className="text-blue-100 text-xs uppercase font-bold">Lucro Líquido (EBITDA)</p>
          <h2 className="text-2xl font-bold text-white">R$ 10.400,00</h2>
          <p className="text-blue-200 text-xs mt-2">Margem: 68.4%</p>
        </div>
      </div>

      <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <PieChart size={20} className="text-blue-500" /> Detalhamento de Custos
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm border-b border-slate-800 pb-2">
            <span className="text-slate-400">Marketing & Anúncios</span>
            <span className="text-white">R$ 1.200,00</span>
          </div>
          <div className="flex justify-between text-sm border-b border-slate-800 pb-2">
            <span className="text-slate-400">Software & Ferramentas</span>
            <span className="text-white">R$ 450,00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Impostos & Taxas</span>
            <span className="text-white">R$ 912,00</span>
          </div>
        </div>
      </div>
    </div>
  );
}