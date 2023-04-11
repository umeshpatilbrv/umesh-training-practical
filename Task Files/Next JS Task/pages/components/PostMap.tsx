import Link from "next/link";
import classes from "../../styles/post.module.css"

export type postProps = {
    id: string;
    title: string;
    body: string;
    userId: number;
  };

const PostDisplay:React.FC<{posts:any[]}>=({posts})=>{
    return(
        <>
 {posts.map((post: postProps) => {
          return (
            <div key={post.id}>
                <Link href={"/post/" + post.id} key={post.id}>
                  <h1 className={classes.postid}> POST-ID:- {post.id}</h1>
                </Link>
                <h1 className={classes.title}> Title:- {post.title}</h1>
                {/* <h2>Uesr-Id:- {post.userId}</h2>
                    <h2 >Body:- {post.body}</h2> */}
            </div>
          );
        })}
        </>
    )
}
export default PostDisplay;