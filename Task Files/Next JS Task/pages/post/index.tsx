// import classes from "../../styles/post.module.css";
// import React from "react";
// import Link from "next/link";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { useState } from "react";

// export type postProps = {
//   id: string;
//   title: string;
//   body: string;
//   userId: number;
// };

// export type PostProp = {
//   post: postProps[];
// };
// const PostList: React.FC<{ post: postProps[] }> = ({ post }) => {
//   const [posts, setPosts] = useState(post.posts);
//   const [hasMore, setHasMore] = useState(true);

//   const getMorePost = async () => {
//     const res = await fetch(
//       `${process.env.POST!}?limit=10&skip=${posts.length}`
//     );
//     const newPosts = await res.json();
//     setPosts((prevPosts: any) => [...prevPosts, ...newPosts.posts]);
//     if (posts.length === 150) {
//       setHasMore(false);
//     }
//   };

//   return (
//     <>
//       <h1 className={classes.pagename}>Post Page</h1>
//       <InfiniteScroll
//         dataLength={posts.length}
//         next={getMorePost}
//         hasMore={hasMore}
//         loader={<h3> Loading...</h3>}
//         endMessage={<h4>Nothing more to show</h4>}
//       >
//         {post.posts.map((post: postProps) => {
//           return (
//             <div key={post.id}>
//               <div>
//                 <Link href={"/post/" + post.id} key={post.id}>
//                   <h1 className={classes.postid}> POST-ID:- {post.id}</h1>
//                 </Link>
//                 <h1 className={classes.title}> Title:- {post.title}</h1>
//                 {/* <h2>Uesr-Id:- {post.userId}</h2>
//                     <h2 >Body:- {post.body}</h2> */}
//               </div>
//               {/* {post.completed} */}
//             </div>
//           );
//         })}
//       </InfiniteScroll>
//     </>
//   );
// };

// export default PostList;
// export async function getStaticProps() {
//   const res = await fetch(process.env.POST!);
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: {
//       post: data,
//     },
//   };
// }


import classes from "../../styles/post.module.css";
import React from "react";
// import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import PostDisplay from "../components/PostMap";


export type postProps = {
  id: string;
  title: string;
  body: string;
  userId: number;
};

export type PostProp = {
  post: postProps[];
};
const PostList: React.FC<{ post: {posts:postProps[]} }> = ({ post }) => {
  const [posts, setPosts] = useState(post.posts);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10;

  const getMorePost = async () => {
    const res = await fetch(
      `${process.env.POST!}?limit=${limit}&skip=${posts.length}`
    );
    const newPosts = await res.json();
    setPosts((prevPosts:any) => [...prevPosts, ...newPosts.posts]);
    if (newPosts.posts.length < limit) {
      setHasMore(false);
    }
  };

  return (
    <>
      <h1 className={classes.pagename}>Post Page</h1>
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
       <PostDisplay posts={posts}/>
      </InfiniteScroll>
    </>
  );
};

export default PostList;

export async function getStaticProps() {
  const res = await fetch(process.env.POST!);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      post: data,
    },
  };
}

// ------------PostDisplay Component-------------
// {posts.map((post: postProps) => {
//   return (
//     <div key={post.id}>
//         <Link href={"/post/" + post.id} key={post.id}>
//           <h1 className={classes.postid}> POST-ID:- {post.id}</h1>
//         </Link>
//         <h1 className={classes.title}> Title:- {post.title}</h1>
//         {/* <h2>Uesr-Id:- {post.userId}</h2>
//             <h2 >Body:- {post.body}</h2> */}
//     </div>
//   );
// })}