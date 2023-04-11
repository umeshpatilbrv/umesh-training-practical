import React from "react";
import classes from "../../styles/post.module.css";

export interface User {
  id: number;
  title: string;
  body: string;
  userid: number;
}

export interface Props {
  data: User[] | undefined;
}

const UserPage = (props: any) => {
  const { data, id } = props;
  console.log(data);
  return (
    <>
      <div>
        <div key={data.id}>
          <h1 className={classes.title2}> Title:- {data.title}</h1>
          <h2 className={classes.userid}>User-Id:- {data.userId}</h2>
          <h2>Body:- {data.body}</h2>
          <h3 className={classes.postid2}> POST-ID:- {data.id}</h3>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { params } = context;
  const { id } = params;
  const res = await fetch(`${process.env.POST!}/${id}`);
  const data = await res.json();

  return {
    props: {
      data: data,
      id: id,
    },
  };
}
export default UserPage;
