import React, { useEffect, useState } from 'react';
import axios from 'axios'
import User from "../Components/user.jsx"
import { Link } from 'react-router-dom';

function Home() {
    const [users, setUsers] = useState([])
   
        async function fetchUsers() {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(data);
            console.log(data)
    }
        useEffect(() => {
            setTimeout(() => {
        fetchUsers();
    }, 1600);
    },[]);
    
        function renderUsers() {
            return  users.map((user) => (
                <Link to={`/users/${user.id}`} key={user.id} >
                     <User  
                     id={user.id} 
                     name={user.name} 
                     email={user.email} 
                     username={user.username
                     />
                    </Link>
                     ))
        }

        function renderSkeletonLoadingState() {
            return <h1>Loading...</h1>
        }

return (
        <div>
         {users.length ? renderUsers() : renderSkeletonLoadingState()}
        </div>
       );
}

export default Home;