import Image from 'next/image'
import Link from 'next/link'
import CPU from '@/public/images/cpu2.jpeg'

const ProductCard = ({product }: any) => {

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/product/${product.id}`}>
       
          <div className="relative w-full h-40">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="mt-2 font-bold text-gray-800">${product.price}</p>
          </div>
        
      </Link>
    </div>
  )
}

export default ProductCard
