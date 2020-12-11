import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useHistory, useParams } from "react-router-dom";

const initialFValues = {
   
    name:'',
    username:'',
    email:'',
    phone:'',
    // company:''
    

}

const ViewUser = () =>{

    const [viewuser, setViewUser] = useState(initialFValues);

    const {id} = useParams();

    useEffect(() => {
        loadUser();
      
    }, [])

    const loadUser = async () =>{

        const response = await axios.get(`http://localhost:3002/users/${id}`);
         setViewUser(response.data);   
    }

return (
    <>
        <div className="container py-4 .center">
      <Link className="btn btn-primary" to="/users">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {viewuser.name}</li>
        <li className="list-group-item">user name: {viewuser.username}</li>
        <li className="list-group-item">email: {viewuser.email}</li>
        <li className="list-group-item">phone: {viewuser.phone}</li>
        {/* <li className="list-group-item">website: {user.website}</li> */}
      </ul>
    </div>           
    </>
)

}

export default ViewUser;