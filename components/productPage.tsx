"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {products } from '@/components/test/products'


export default function ProductPage({product}: any) {


  if (!product) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="max-w-7xl mx-auto mt-20 md:mt-32">
    <div className="flex flex-col md:flex-row items-start">
      {/* Product Image */}
      <div className="w-full md:w-1/2 p-4">
        <Image src={product.image} alt={product.name} width={500} height={500} />
      </div>

      {/* Product Details */}
      <div className="w-full md:w-1/2 p-4">
        <div className="flex justify-between items-center mb-4">
          {/* Product Name */}
          <h1 className="text-xl font-bold">{product.name}</h1>
          
          {/* Product Price */}
          <p className="text-lg font-bold">${product.price}</p>
        </div>

        {/* Tabs for Description, Specifications, etc. */}
        <div className="flex justify-center md:justify-start mb-4">
          <button className="px-4 py-2 mr-4 border-b-4 border-transparent hover:border-blue-500 focus:border-blue-500">Description</button>
          <button className="px-4 py-2 mr-4 border-b-4 border-transparent hover:border-blue-500 focus:border-blue-500">Specifications</button>
          {/* Add more tabs as needed */}
        </div>

        {/* Content for each tab */}
        {/* Example: Description tab */}
        <div className="hidden md:block">
          <h2 className="text-lg font-bold">Description</h2>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  </div>
  );
}
