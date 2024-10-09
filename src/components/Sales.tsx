import React from 'react';
import { FileText } from 'lucide-react';

const Sales: React.FC = () => {
  const sales = [
    { id: 1, date: '2024-03-15', total: 125.50, items: 5 },
    { id: 2, date: '2024-03-15', total: 75.20, items: 3 },
    { id: 3, date: '2024-03-14', total: 200.00, items: 8 },
    { id: 4, date: '2024-03-14', total: 50.75, items: 2 },
    { id: 5, date: '2024-03-13', total: 180.30, items: 6 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Historique des Ventes</h1>
      <table className="w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Total</th>
            <th className="p-2 text-left">Articles</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id} className="border-b">
              <td className="p-2">{sale.date}</td>
              <td className="p-2">{sale.total.toFixed(2)} €</td>
              <td className="p-2">{sale.items}</td>
              <td className="p-2">
                <button className="text-blue-500 flex items-center">
                  <FileText size={16} className="mr-1" />
                  Détails
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sales;