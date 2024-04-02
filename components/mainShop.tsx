"use client";

import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/productCard";
import { products } from "@/components/test/products";
import { useEffect, useState } from "react";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState<any>(0);

  let filteredProducts;

  useEffect(() => {
    filteredProducts = products;
  }, []);

  if (selectedCategory === "all") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(
      (item) => item.category === selectedCategory
    );
  }

  if (priceRange > 0) {
    filteredProducts = products.filter((item) => item.price >= priceRange);
  }

  console.log(selectedCategory);
  return (
    <div className="flex  justify-center max-w-7xl mx-auto mt-20 md:mt-32">
      {/* Categories and filters */}
      <aside className="w-1/4 p-4 hidden md:block">
        <div className="mb-4">
          {/* <label htmlFor="configuratie" className="block font-semibold">
            Configuratie:
          </label>
          <select
            id="configuratie"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="all">All</option>
            <option value="laptops">Laptops</option>
            <option value="desktops">Desktops</option>
            <option value="tablets">Tablets</option>
          </select> */}
          <label htmlFor="category" className="block font-semibold">
            Categorie:
          </label>
          <select
            id="category"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="gaming">Gaming</option>
            <option value="workstation">Workstation</option>
            <option value="proiectare">Proiectare</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="price" className="block font-semibold">
            Price Range:
          </label>
          <input
            type="range"
            id="price"
            min={0}
            max={2000}
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="mt-1 w-full"
          />
        </div>
      </aside>

      {/* List of computers */}
      <main className="w-3/4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((item) => {
            return <ProductCard product={item} />;
          })}
        </div>
      </main>
    </div>
  );
}
