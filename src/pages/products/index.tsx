import { useEffect, useState } from 'react';

import Pagination from '@/components/pagination';
// pages/products.tsx
import PriceFilter from '@/components/filters';
import ProductList from '@/components/productlist';
import { fetchToken } from '@/util';

interface Product {
  productName: string;
  price: number;
  rating: number;
  discount: number;
  availability: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(5); // Adjust as needed
  const [minPrice, setMinPrice] = useState<number>(1);
  const [maxPrice, setMaxPrice] = useState<number>(10000);

  useEffect(() => {
    const fetchProducts = async () => {
      const token = await fetchToken();
      const response = await fetch("http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000", {
        headers: {
          'Authorization': `bearer ${token}`,
        },
      });
      const data = await response.json();
      setProducts(data);
    };

    
    fetchProducts();
  }, []);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
    fetchFilteredProducts(min, max);
  };

  const fetchFilteredProducts = async (min: number, max: number) => {
    const response = await fetch(`http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=${min}&maxPrice=${max}`, {
      headers: {
        'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MjIwMzc2LCJpYXQiOjE3MTcyMjAwNzYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQ4ZGIxOWJiLTc0YzktNGJkYS05NDkyLThmYTM4YzY2OWFkZCIsInN1YiI6ImlzaGl0YS4yMTI1aXQxMDI3QGtpZXQuZWR1In0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiJkOGRiMTliYi03NGM5LTRiZGEtOTQ5Mi04ZmEzOGM2NjlhZGQiLCJjbGllbnRTZWNyZXQiOiJDWGRqZkJNcVVPc2tpcFBaIiwib3duZXJOYW1lIjoiSXNoaXRhIEd1cHRhIiwib3duZXJFbWFpbCI6ImlzaGl0YS4yMTI1aXQxMDI3QGtpZXQuZWR1Iiwicm9sbE5vIjoiMjEwMDI5MDEzMDA4MSJ9.Xiu4jI7tFWpy4u3WICh6UUNzqIhA76ju5vnwbm7B-Zw'
      }
    });
    const data = await response.json();
    setProducts(data);
  };

  return (
    <div className="container mx-auto p-4">
      <PriceFilter onFilterChange={handleFilterChange} />
      <ProductList products={currentProducts} />
      <Pagination
        currentPage={currentPage}
        totalProducts={products.length}
        productsPerPage={productsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Products;
