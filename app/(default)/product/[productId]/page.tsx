import React from "react";
import ProductCard from "@/components/productPage";
import { products } from "@/components/test/products2";

const page = ({ params }: { params: { productId: number } }) => {
  const product = products[params.productId - 1];
  return <ProductCard product={product} />;
};

export default page;
