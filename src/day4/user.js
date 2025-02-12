import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {

const fetchusers= async ()=>{

    try {
        setLoading(true);
        const res= await fetch("https://jsonplaceholder.typicode.com/users");

        if(!res.ok){

            throw new Error(`HTTP Error! status: ${res.status}`);     
        }
        const data = await res.json();
        setUsers(data);
        
    } catch (error) {
        setError(error.message);
        
    }
    finally { setLoading(false);}
};

fetchusers();
 }, []);

 if(loading)return <h1>Loading</h1>
 if(error)return <h1>Error: {error}</h1>


return(

    <div>
        <h2> User List</h2>
        <ul> {users.map((user)=> 
        (<li key={user.id}>
            {user.name}-{user.email}</li>
            
        ))}
        </ul>

    </div>
);
}

export default UserList;