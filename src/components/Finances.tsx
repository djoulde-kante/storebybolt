import React from 'react';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

const Finances: React.FC = () => {
  const financialData = {
    revenue: 125000,
    expenses: 95000,
    profit: 30000,
    topProducts: [
      { name: 'Pommes', revenue: 5000 },
      { name: 'Lait', revenue: 4500 },
      { name: 'Pain', revenue: 4000 },
    ],
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Finances</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <DollarSign className="mr-2" />
            Chiffre d'affaires
          </h2>
          <p className="text-3xl font-bold">{financialData.revenue.toLocaleString()} €</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <TrendingDown className="mr-2" />
            Dépenses
          </h2>
          <p className="text-3xl font-bold">{financialData.expenses.toLocaleString()} €</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <TrendingUp className="mr-2" />
            Bénéfice
          </h2>
          <p className="text-3xl font-bold">{financialData.profit.toLocaleString()} €</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Produits les plus rentables</h2>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Produit</th>
              <th className="p-2 text-left">Chiffre d'affaires</th>
            </tr>
          </thead>
          <tbody>
            {financialData.topProducts.map((product, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{product.name}</td>
                <td className="p-2">{product.revenue.toLocaleString()} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Finances;