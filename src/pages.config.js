import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Clientes from './pages/Clientes';
import Financeiro from './pages/Financeiro';
import Agenda from './pages/Agenda';
import Servicos from './pages/Servicos';

export const pagesConfig = {
  mainPage: 'Dashboard',
  Layout: Layout,
  Pages: {
    Dashboard: Dashboard,
    Clientes: Clientes,
    Financeiro: Financeiro,
    Agenda: Agenda,
    Servicos: Servicos,
  },
  menuItems: [
    { name: 'Dashboard', path: '/', icon: 'LayoutDashboard' },
    { name: 'CRM Clientes', path: '/Clientes', icon: 'Users' },
    { name: 'Financeiro', path: '/Financeiro', icon: 'DollarSign' },
    { name: 'Agenda', path: '/Agenda', icon: 'Calendar' },
    { name: 'Serviços/Produtos', path: '/Servicos', icon: 'Package' },
  ]
};