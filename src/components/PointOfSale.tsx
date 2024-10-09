import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const PointOfSale: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const addToCart = () => {
    if (productName && productPrice) {
      const newProduct: Product = {
        id: Date.now(),
        name: productName,
        price: parseFloat(productPrice),
        quantity: 1,
      };
      setCart([...cart, newProduct]);
      setProductName('');
      setProductPrice('');
    }
  };

  const updateQuantity = (id: number, change: number) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Point de vente</h1>
      <Link to="/dashboard" className="text-blue-500 hover:underline mb-4 block">
        Aller au Tableau de bord
      </Link>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Nom du produit"
          className="border p-2 mr-2 flex-grow"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Prix"
          className="border p-2 mr-2 w-24"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <button
          onClick={addToCart}
          className="bg-blue-500 text-white p-2 rounded"
        >
          <Plus size={20} />
        </button>
      </div>
      <div className="bg-white shadow-md rounded p-4">
        <h2 className="text-xl font-semibold mb-2">Panier</h2>
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-2">
            <span>{item.name}</span>
            <div className="flex items-center">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="bg-gray-200 p-1 rounded-l"
              >
                <Minus size={16} />
              </button>
              <span className="px-2">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="bg-gray-200 p-1 rounded-r"
              >
                <Plus size={16} />
              </button>
              <span className="ml-2">{(item.price * item.quantity).toFixed(2)} €</span>
              <button
                onClick={() => removeItem(item.id)}
                className="ml-2 text-red-500"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
        <div className="mt-4 text-xl font-bold">
          Total: {total.toFixed(2)} €
        </div>
        <button className="mt-4 bg-green-500 text-white p-2 rounded flex items-center">
          <ShoppingCart size={20} className="mr-2" />
          Finaliser la vente
        </button>
      </div>
    </div>
  );
};

export default PointOfSale;