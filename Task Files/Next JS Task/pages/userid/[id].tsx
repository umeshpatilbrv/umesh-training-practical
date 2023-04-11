import React from "react";
import classes from "../../styles/users.module.css"

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  image: string[];
  birthDate: number;
  email: string;
}

export interface Props {
  data: User[] | undefined;
}

const UserPage = (props: any) => {
  const { data, id } = props;
  console.log(data);
  return (
    <>
      <div className={classes.contentview}>
        <div key={data.id}>
        <h2 className={classes.name}> FirstName:- {data.firstName}</h2>
          <h2 className={classes.name}>LastName:- {data.lastName}</h2>
          <img src={data.image} />
          <div>
            <p>Age:- {data.age}</p>
            <p>Gender:- {data.gender}</p>
            <p>DOB:- {data.birthDate}</p>
            <p>Email:- {data.email}</p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { params } = context;
  const { id } = params;
  const res = await fetch(`${process.env.USER!}/${id}`);
  const data = await res.json();

  return {
    props: {
      data: data,
      id: id,
    },
  };
}
export default UserPage;
