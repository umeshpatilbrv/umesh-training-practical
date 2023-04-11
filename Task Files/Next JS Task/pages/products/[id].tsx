import React from "react";
// import classes from "../../styles/product.module.css";

export type DetailsProps = {
  id: number;
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
export type DetailProp = {
  products: DetailsProps[];
};
const DetailPage: React.FC<{ products: DetailsProps; id: string }> = ({
  products,
}) => {
  return (
   
    <>
      <div key={products.id} className="list">
        <h1> Title:- {products.title} </h1>
        <h1>Description: {products.description} </h1>
        <h2>Price:{products.price} $</h2>
        <h2>Rating:{products.rating}</h2>
        <h2>category: {products.category}</h2>
        <img src={products.images[0]} />
      </div>
    </>
  );
};
export async function getServerSideProps(context: any) {
  const { params } = context;
  const { id } = params;
  const res = await fetch(`${process.env.PRODUCT!}/${id}`);
  const data = await res.json();

  return {
    props: {
      products: data,
      id: id,
    },
  };
}
export default DetailPage;
