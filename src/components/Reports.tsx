import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const Reports: React.FC = () => {
  const salesData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        label: 'Ventes mensuelles',
        data: [12000, 19000, 15000, 20000, 22000, 25000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const categoryData = {
    labels: ['Fruits', 'Légumes', 'Produits laitiers', 'Boulangerie', 'Boissons'],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Rapports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Ventes mensuelles</h2>
          <Bar
            data={salesData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top' as const,
                },
                title: {
                  display: true,
                  text: 'Ventes des 6 derniers mois',
                },
              },
            }}
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Répartition des ventes par catégorie</h2>
          <Pie
            data={categoryData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'bottom' as const,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Reports;