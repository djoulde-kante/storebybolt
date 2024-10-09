import React, { useState } from 'react';
import { Save } from 'lucide-react';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    storeName: 'Ma Supérette',
    address: '123 Rue du Commerce, 75001 Paris',
    phone: '01 23 45 67 89',
    email: 'contact@masuperette.com',
    taxRate: 20,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour sauvegarder les paramètres
    console.log('Paramètres sauvegardés:', settings);
    alert('Paramètres sauvegardés avec succès!');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Paramètres</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
        <div className="mb-4">
          <label htmlFor="storeName" className="block text-sm font-medium text-gray-700">
            Nom du magasin
          </label>
          <input
            type="text"
            id="storeName"
            name="storeName"
            value={settings.storeName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Adresse
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={settings.address}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={settings.phone}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="taxRate" className="block text-sm font-medium text-gray-700">
            Taux de TVA (%)
          </label>
          <input
            type="number"
            id="taxRate"
            name="taxRate"
            value={settings.taxRate}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
        >
          <Save size={20} className="mr-2" />
          Sauvegarder les paramètres
        </button>
      </form>
    </div>
  );
};

export default Settings;