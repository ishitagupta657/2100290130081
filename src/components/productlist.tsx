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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-lg bg-white">
          <img
            src="https://via.placeholder.com/150"
            alt={product.productName}
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <div className="p-2">
            <h2 className="text-xl font-bold mb-2">{product.productName}</h2>
            <p className="text-lg font-semibold mb-1">Price: ${product.price}</p>
            <p className="text-sm text-gray-700 mb-1">Rating: {product.rating}</p>
            <p className="text-sm text-gray-700 mb-2">Discount: {product.discount}%</p>
            <p className={`font-semibold ${product.availability === 'out-of-stock' ? 'text-red-500' : 'text-green-500'}`}>
              {product.availability}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;