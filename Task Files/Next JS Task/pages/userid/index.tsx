// import React from "react";

// import { useState } from "react";
// import Link from "next/link";
// import classes from "../../styles/users.module.css"

// export type User = {
//   id: number;
//   firstName: string;
//   lastName: string;
//   // image: string[];
// };

// interface Adduser {
//   firstName: string;
//   lastName: string;
// }

// const UserPage: React.FC<any> = ({ data }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [users, setUsers] = useState<User[]>([]);
//   const [addUser, setAddUser] = useState<Adduser>({ firstName: "", lastName: "" });

//   const [successMessage, setSuccessMessage] = useState("");

//   const handleAddUser = () => {
//     if (!addUser.firstName || !addUser.lastName) {
//       alert(
//      "Please fill in both fields");
//       return;
//     }
//     const newUser = { id: users.length + 1, ...addUser };
//     setUsers([newUser, ...users]);
//     alert("User added successfully");
//     setAddUser({ firstName: "", lastName: "" });
//   };

//   const filteredUsers =users.filter((user: User) => {
//     const fullName = `${user.firstName} ${user.lastName}`;
//     return fullName.toLowerCase().includes(searchQuery.toLowerCase());
//   });
//   // console.log(users[0])

//   const handleSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleAddUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;

//     setAddUser({ ...addUser, [name]: value });
//   };

//   return (
//     <div>
//       <h1 className={classes.pagename}>User Page List</h1>
//       {successMessage && (
//         <div className={classes.success}>
//           <p>{successMessage}</p>
//         </div>
//       )}
//       <div className={classes.adduser}>
//         <h2>Add User</h2>
//         <input
//           type="text"
//           name="firstName"
//           value={addUser.firstName}
//           onChange={handleAddUserChange}
//           placeholder="First Name"
//         />
//         <input
//           type="text"
//           name="lastName"
//           value={addUser.lastName}
//           onChange={handleAddUserChange}
//           placeholder="Last Name"
//         />
//         <button onClick={handleAddUser}>Add User</button>
//       </div>
//       <div className={classes.search}>
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={handleSearchQueryChange}
//           placeholder="Search user by First Name"
//         />
//       </div>
//       {filteredUsers.map((user: User) => (
//         <div key={user.id} className={classes.userlist}>
//           <h2 className={classes.name}> FirstName:- {user.firstName}</h2>
//           <h2 className={classes.name}>LastName:- {user.lastName}</h2>
//           {/* <img src={user.image} /> */}
//           {/* <div className={classes.info}>
//             <p>Age:- {user.age}</p>
//             <p>Gender:- {user.gender}</p>
//             <p>DOB:- {user.birthDate}</p>
//             <p>Email:- {user.email}</p>
//           </div> */}
//           <div>
//             <div>
//               <Link href={`/userid/${user.id}`} key={user.id}>
//                 <button>
//                   <h1>View User-details</h1>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export async function getStaticProps() {
//   const res = await fetch(process.env.USER!);
//   const data: User[] = await res.json();
//   console.log(data);

//   return {
//     props: {
//       data: data,
//     },
//   };
// }

// export default UserPage;

import React, { useEffect } from "react";
import classes from "../../styles/users.module.css";
import { useState } from "react";
import Link from "next/link";
import UserMap from "../components/UserMap";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  // image: string[];
};

interface Adduser {
  firstName: string;
  lastName: string;
}

const UserPage: React.FC<any> = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [addUser, setAddUser] = useState<Adduser>({
    firstName: "",
    lastName: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleAddUser = () => {
    if (!addUser.firstName || !addUser.lastName) {
      alert("Please fill in both fields");
      return;
    }
    const newUser = { id: users.length + 1, ...addUser };
    setUsers([newUser, ...users]);
    alert("User added successfully");
    setAddUser({ firstName: "", lastName: "" });
  };

  // useEffect(() => {
  //   const filteredUsers = data.users.filter((user: User) => {
  //     const fullName = `${user.firstName} ${user.lastName}`;
  //     return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  //   });
  //   setUsers(filteredUsers);
  // }, [data.users]);
  // console.log(users[0])

  useEffect(() => {
    const filteredUsers = data.users.filter((user: User) => {
      const fullName = `${user.firstName} ${user.lastName}`;
      return fullName.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setUsers(filteredUsers);
  }, [data.users, searchQuery]);

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleAddUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setAddUser({ ...addUser, [name]: value });
  };

  return (
    <div>
      <h1 className={classes.pagename}>User Page List</h1>
      {successMessage && (
        <div className={classes.success}>
          <p>{successMessage}</p>
        </div>
      )}
        <h2 className={classes.addusername} >Add User</h2>
      <div  className={classes.adduserdiv} >
        <input
        className={classes.adduser}
          type="text"
          name="firstName"
          value={addUser.firstName}
          onChange={handleAddUserChange}
          placeholder="First Name"
        />
        <input
        className={classes.adduser}
          type="text"
          name="lastName"
          value={addUser.lastName}
          onChange={handleAddUserChange}
          placeholder="Last Name"
        />
        <button className={classes.adduserbutton} onClick={handleAddUser}>Add User</button>
      </div>
      <div  className={classes.searchdiv} >
        <input
        className={classes.search}
          type="text"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          placeholder="Search First-Name & Last-Name"
        />
      </div>
    
      <UserMap users={users}/>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(process.env.USER!);
  const data: User[] = await res.json();
  console.log(data);

  return {
    props: {
      data: data,
    },
  };
}

export default UserPage;



///=--------------User Map--------
// {users.map((user: User) => (
//   <div key={user.id} className={classes.userlist}>
//     <h2 className={classes.name}> FirstName:- {user.firstName}</h2>
//     <h2 className={classes.name}>LastName:- {user.lastName}</h2>
//     <div>
//       <div>
//         <Link href={`/userid/${user.id}`} key={user.id}>
//           <button>
//             <h1>View User-details</h1>
//           </button>
//         </Link>
//       </div>
//     </div>
//   </div>
// ))}