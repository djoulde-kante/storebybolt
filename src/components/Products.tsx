import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Pommes', price: 2.5, stock: 100 },
    { id: 2, name: 'Lait', price: 1.2, stock: 50 },
    { id: 3, name: 'Pain', price: 1.0, stock: 30 },
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '' });

  const addProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.stock) {
      setProducts([
        ...products,
        {
          id: Date.now(),
          name: newProduct.name,
          price: parseFloat(newProduct.price),
          stock: parseInt(newProduct.stock),
        },
      ]);
      setNewProduct({ name: '', price: '', stock: '' });
    }
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Gestion des Produits</h1>
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Nom du produit"
          className="border p-2 mr-2"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Prix"
          className="border p-2 mr-2"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="number"
          placeholder="Stock"
          className="border p-2 mr-2"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
        />
        <button onClick={addProduct} className="bg-green-500 text-white p-2 rounded">
          <Plus size={20} />
        </button>
      </div>
      <table className="w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Nom</th>
            <th className="p-2 text-left">Prix</th>
            <th className="p-2 text-left">Stock</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="p-2">{product.name}</td>
              <td className="p-2">{product.price.toFixed(2)} €</td>
              <td className="p-2">{product.stock}</td>
              <td className="p-2">
                <button className="text-blue-500 mr-2">
                  <Edit2 size={16} />
                </button>
                <button onClick={() => deleteProduct(product.id)} className="text-red-500">
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;