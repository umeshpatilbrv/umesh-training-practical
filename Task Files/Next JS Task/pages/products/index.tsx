import React from "react";
import classes from "../../styles/product.module.css";
import { useState } from "react";
import ProductMap from "../components/PorductFilterMap";

export type ProductsProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
export type ProductProp = {
  products: ProductsProps[];
};
const ProductPage: React.FC<{ products: {products:ProductsProps[]} }> = ({ products }) => {
  const [filter, setFilter] = useState({
    category: "",
    price: "",
    rating: "",
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.value,
    });
  };

  const filteredProducts = products.products.filter((product: any) => {
    let match = true;

    if (filter.category && product.category !== filter.category) {
      match = false;
    }

    if (filter.price && product.price > parseInt(filter.price)) {
      match = false;
    }

    if (filter.rating && product.rating < parseInt(filter.rating)) {
      match = false;
    }

    return match;
  });
  console.log(filteredProducts);
  return (
    <>
      <div className={classes.filter}>
        <div>
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skincare</option>
            <option value="groceries">Groceries</option>
            <option value="home-decoration">Home-decoration</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
          </select>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <select id="price" name="price" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="50">Less than $50</option>
            <option value="100">Less than $100</option>
            <option value="500">Less than $500</option>
          </select>
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <select id="rating" name="rating" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="3">3 stars and above</option>
            <option value="4">4 stars and above</option>
            <option value="5">5 Star</option>
          </select>
        </div>
      </div>
      {filteredProducts.map((data: ProductsProps) => (
        <ProductMap data={data} />
      ))}
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(process.env.PRODUCT!);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      products: data,
    },
  };
}
export default ProductPage;

//-----------------
// {filteredProducts.map((data: any) => (
//   <div key={data.id} className={classes.list}>
//     <h1 className={classes.title}> Title={data.title} </h1>
//     <h2>category: {data.category}</h2>
//     <img className={classes.image} src={data.images[0]}  />
//     <div>
//       <Link href={`/products/${data.id}`} key={data.id}>
//         <button>
//           <h1>View Product details</h1>
//         </button>
//       </Link>
//     </div>
//   </div>
// ))}
