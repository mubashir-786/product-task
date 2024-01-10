'use client'
import ActionAreaCard from '@/components/Card';
import SkeletonLoader from '@/components/skeletonLoader';
import data from '@/utils/product.json';
import { useEffect, useState } from 'react';
const ProductCatalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  type Product = {
    image: string;
    title: string;
    description: string;
    price: number;
    id: number;
  }

  const fetchProductsFromAPI = async (pageNumber: number) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      return data.slice((pageNumber - 1) * 10, pageNumber * 10);
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
  const loadMoreProducts = async () => {
    setLoading(true);
    const newProducts = await fetchProductsFromAPI(page);
    setProducts([...products, ...newProducts]);
    setPage(page + 1);
    setLoading(false);
  };

  const handleScroll = () => {

    if (
      (Math.round(window.innerHeight + document.documentElement.scrollTop) + 1) === Math.round(document.documentElement.offsetHeight) ||
      Math.round(window.innerHeight + document.documentElement.scrollTop) === Math.round(document.documentElement.offsetHeight)
      && !loading
    ) {
      loadMoreProducts();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  useEffect(() => {
    loadMoreProducts();
  }, []);

  return (
    <div>
      <h1 className='text-4xl text-center my-5'>Product Catalog</h1>
      <div className="product-list mb-5 flex gap-5 justify-center flex-wrap w-11/12 m-auto">
        {products.map((product, i) => (
          <ActionAreaCard
            key={i}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
        {loading &&
          <SkeletonLoader />
        }
      </div>
    </div>
  );
};

export default ProductCatalog;

