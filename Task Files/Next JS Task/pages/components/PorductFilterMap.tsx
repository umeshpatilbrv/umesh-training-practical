import Link from "next/link";
import classes from "../../styles/product.module.css";
type ProductsProps = {
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
const ProductMap = (data: { data: ProductsProps }) => {
  return (
    <div key={data.data.id} className={classes.list}>
      <h1 className={classes.title}> Title={data.data.title} </h1>
      <h2>category: {data.data.category}</h2>
      <img className={classes.image} src={data.data.images[0]} />
      <div>
        <Link href={`/products/${data.data.id}`} key={data.data.id}>
          <button>
            <h1>View Product details</h1>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ProductMap;
