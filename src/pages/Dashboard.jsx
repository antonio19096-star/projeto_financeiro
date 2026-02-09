import React from 'react';
import { TrendingUp, Users, Target, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white">Visão Estratégica</h1>
          <p className="text-slate-400">Análise de performance em tempo real.</p>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/20 p-2 rounded text-blue-400 text-xs font-mono">
          STATUS: OTIMIZADO (Vercel + Python)
        </div>
      </div>

      {/* KPIs Principais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Faturamento Total" value="R$ 45.200" trend="+12%" up />
        <StatCard title="Margem de Lucro" value="32%" trend="+5%" up />
        <StatCard title="Novas Oportunidades" value="18" trend="-2%" />
        <StatCard title="Churn (Perda)" value="1.2%" trend="-0.5%" up />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lógica de Pareto 80/20 */}
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Target className="text-purple-500" /> Análise de Pareto (80/20)
          </h3>
          <div className="space-y-4">
            <p className="text-sm text-slate-400">Estes 20% de serviços geram 80% do seu lucro:</p>
            <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500" style={{ width: '80%' }}></div>
            </div>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between"><span>Serviço Premium A</span> <span className="font-bold text-purple-400">R$ 22k</span></li>
              <li className="flex justify-between"><span>Consultoria Especializada</span> <span className="font-bold text-purple-400">R$ 14k</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex items-center justify-center text-slate-500 italic">
          Gráfico de Tendências (Integração Python Matplotlib/Plotly em breve)
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, up }) {
  return (
    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors">
      <p className="text-slate-400 text-sm mb-1">{title}</p>
      <h4 className="text-2xl font-bold text-white mb-2">{value}</h4>
      <span className={`text-xs flex items-center gap-1 ${up ? 'text-emerald-400' : 'text-rose-400'}`}>
        {up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />} {trend} vs mês ant.
      </span>
    </div>
  );
}