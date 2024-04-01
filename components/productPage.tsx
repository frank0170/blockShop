"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {products } from '@/components/test/products'
import { useState } from 'react';
import SpecTable from '@/components/specsTable'
import PerformanceTable from '@/components/perfTable'


export default function ProductPage({product}: any) {

    const [selectedTab, setSelectedTab] = useState('description')


  if (!product) {
    return <div>Loading...</div>; // Handle loading state
  }

  const tabContent = () => { switch (selectedTab){
    case 'description': return <p className='flex justify-center text-center text-gray-700 mb-8'>{product.description}</p>
    case 'specifications': return <SpecTable specs={product.specs}/>
    case 'performance': return <PerformanceTable specs={product.performance}/>
    //case 'reviews': return <ReviewsTable specs={product.reviews}/>
   }
    }

  return (
    <div className="max-w-6xl mx-auto mt-20 md:mt-32">
<div className="flex flex-col md:flex-row items-start">
  {/* Product Image */}
  <div className="w-full md:w-1/2 p-4 flex justify-center"> {/* Add 'flex justify-center' class */}
    <Image src={product.image} alt={product.name} width={500} height={500} />
  </div>

  {/* Product Details */}
  <div className="w-full md:w-1/2 p-4">
    <div className="flex flex-col justify-end items-end mb-4"> {/* Product Name */}
      <h1 className="text-4xl font-bold mb-1">{product.name}</h1>
      
      {/* Product Price */}
      <p className="text-lg font-bold">${product.price}</p>
      <div>
        <button className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Cere oferta
        </button>
      </div>
    </div>

        {/* Tabs for Description, Specifications, etc. */}

      </div>
    </div>
    <div className="flex justify-center mb-4 flex-col md:flex-row mt-8">
          <button className="px-4 py-2  border-b-4 border-transparent hover:border-gray-500 focus:border-gray-500" onClick={() => setSelectedTab('description')}>Descriere</button>
          <button className="px-4 py-2  border-b-4 border-transparent hover:border-gray-500 focus:border-gray-500" onClick={() => setSelectedTab('specifications')}>Specificatii</button>
          <button className="px-4 py-2  border-b-4 border-transparent hover:border-gray-500 focus:border-gray-500" onClick={() => setSelectedTab('performance')}>Performante</button>
          <button className="px-4 py-2 border-b-4 border-transparent hover:border-gray-500 focus:border-gray-500" onClick={() => setSelectedTab('reviews')}>Review-uri</button>


          {/* Add more tabs as needed */}
        </div>

        {/* Content for each tab */}
        {/* Example: Description tab */}
        <div className="">
            {tabContent()}
        </div>
  </div>
  );
}
