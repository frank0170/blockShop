import Link from 'next/link'
import Image from 'next/image'
import ProductCard from '@/components/productCard'

export default function Shop() {
  return (
    <div className="flex">
      {/* Categorie și filtre */}
      <aside className="w-1/6 p-4 hidden md:block">
        {/* Aici puteți adăuga componente pentru categorii și filtre */}
      </aside>

      {/* Listă de calculatoare */}
      <main className="w-5/6 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Aici puteți map-a lista de produse și să afișați fiecare card */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          {/* Adăugați mai multe componente ProductCard după cum este necesar */}
        </div>
      </main>
    </div>
  )
}
