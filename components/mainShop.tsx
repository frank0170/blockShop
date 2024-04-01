import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/productCard';
import {products } from '@/components/test/products'

export default function Shop() {
  return (
    <div className="flex  justify-center max-w-7xl mx-auto mt-20 md:mt-32">
      {/* Categories and filters */}
      <aside className="w-1/4 p-4 hidden md:block">
        <div className="mb-4">
          <label htmlFor="category" className="block font-semibold">Categorie:</label>
          <select id="category" className="mt-1 p-2 border border-gray-300 rounded-md w-full">
            <option value="">All</option>
            <option value="laptops">Laptops</option>
            <option value="desktops">Desktops</option>
            <option value="tablets">Tablets</option>
            {/* Add more categories as needed */}
          </select>
          <label htmlFor="category" className="block font-semibold">Configuratie:</label>
          <select id="category" className="mt-1 p-2 border border-gray-300 rounded-md w-full">
            <option value="">All</option>
            <option value="laptops">Gaming</option>
            <option value="desktops">Workstation</option>
            <option value="tablets">Proiectare</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="price" className="block font-semibold">Price Range:</label>
          <input type="range" id="price" className="mt-1 w-full" />
        </div>
      </aside>

      {/* List of computers */}
      <main className="w-3/4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{products.map((item) => {
    return ( <ProductCard product={item}/>)
})}
        </div>
      </main>
    </div>
  );
}
