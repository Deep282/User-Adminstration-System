import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import View from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from 'react-router-dom';

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();

    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3002/users")
        // setUsers(result.data);
        setUsers(result.data.reverse())

    }

    const deleteUser = async id =>{
        await axios.delete(`http://localhost:3002/users/${id}`);
        loadUsers();
    }


    return (
        <>
            <div className='container'>
                <div className='py-4'>
                    <table className="table table-striped border shadow">
                        <thead>
                            <tr>
                                <th scope="col">#Id</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th scope='col'>Phone number</th>
                                {/* <th scope='col'>Company Name</th> */}
                                <th scope='col'>Action</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index ) =>(
                                    <tr>
                                        <th scope= "row">{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        {/* <td>{user.company.name}</td> */}
                                        <td>
                                            <Link className = 'mr-3' to = {`/users/${user.id}`}><View/></Link>
                                            <Link className = 'mr-3' to={`/users/edit/${user.id}`}><EditIcon/></Link>
                                            <Link onClick = {() => {deleteUser(user.id)}}><DeleteIcon/></Link>

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    );
}

export default Users;
