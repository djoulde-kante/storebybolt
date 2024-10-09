import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, FileText, DollarSign, Settings } from 'lucide-react';
import DashboardHome from './DashboardHome';
import Products from './Products';
import Sales from './Sales';
import Reports from './Reports';
import Finances from './Finances';
import Settings from './Settings';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <nav className="mt-5">
          <Link to="/dashboard" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            <LayoutDashboard className="inline-block mr-2" size={20} />
            Tableau de bord
          </Link>
          <Link to="/dashboard/products" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            <Package className="inline-block mr-2" size={20} />
            Produits
          </Link>
          <Link to="/dashboard/sales" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            <ShoppingCart className="inline-block mr-2" size={20} />
            Ventes
          </Link>
          <Link to="/dashboard/reports" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            <FileText className="inline-block mr-2" size={20} />
            Rapports
          </Link>
          <Link to="/dashboard/finances" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            <DollarSign className="inline-block mr-2" size={20} />
            Finances
          </Link>
          <Link to="/dashboard/settings" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            <Settings className="inline-block mr-2" size={20} />
            Paramètres
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <Routes>
          <Route index element={<DashboardHome />} />
          <Route path="products" element={<Products />} />
          <Route path="sales" element={<Sales />} />
          <Route path="reports" element={<Reports />} />
          <Route path="finances" element={<Finances />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;