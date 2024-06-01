// components/ProductList.tsx
import React from 'react';

interface Product {
  productName: string;
  price: number;
  rating: number;
  discount: number;
  availability: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <div key={index} className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold">{product.productName}</h2>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}%</p>
          <p className={`font-semibold ${product.availability === 'out-of-stock' ? 'text-red-500' : 'text-green-500'}`}>
            {product.availability}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
