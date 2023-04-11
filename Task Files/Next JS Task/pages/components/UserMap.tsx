import Link from "next/link";
import classes from "../../styles/users.module.css"

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  // image: string[];
};

const UserMap:React.FC<{users:any[]}>=({users})=>{
    return(
        <>
 {users.map((user: User) => (
        <div key={user.id} className={classes.userlist}>
          <h2 className={classes.name}> FirstName:- {user.firstName}</h2>
          <h2 className={classes.name}>LastName:- {user.lastName}</h2>
          <div>
            <div>
              <Link href={`/userid/${user.id}`} key={user.id}>
                <button>
                  <h1>View User-details</h1>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
        </>
    )
}
export default UserMap;