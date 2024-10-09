import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardHome: React.FC = () => {
  const salesData = {
    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    datasets: [
      {
        label: 'Ventes journalières',
        data: [1200, 1900, 1500, 2000, 2400, 2800, 1800],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Ventes de la semaine',
      },
    },
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tableau de bord</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Ventes du jour</h2>
          <p className="text-3xl font-bold">2 800 €</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Produits en stock</h2>
          <p className="text-3xl font-bold">1 250</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Commandes en attente</h2>
          <p className="text-3xl font-bold">15</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <Bar data={salesData} options={options} />
      </div>
    </div>
  );
};

export default DashboardHome;