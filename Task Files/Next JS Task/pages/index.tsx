import Link from "next/link";
import classes from "../styles/index.module.css";

const Home = () => {
  return (
    <>
      <div>
        <Link href="/products">
          <h1 className={classes.pagename}>Home Page</h1>
          <button className={classes.button}>
            <h1>Go To Product-List</h1>
          </button>
        </Link>
        <div>
          <Link href="/userid">
            <button className={classes.button}>
              <h1>Go To Users-list</h1>
            </button>
          </Link>
        </div>
        <div>
          <Link href="/post">
            <button className={classes.button}>
              <h1>Go To Post-List</h1>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
