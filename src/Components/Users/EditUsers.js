import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";


// initial values of the input field 
const initialFValues = {
    id:0,
    name:'',
    username:'',
    email:'',
    phone:'',
    company:''

}


const EditUser = () => {


    //History variable:-
    let history = useHistory();
    
    // state of the component:-
    const [fvalues, setValue] = useState(initialFValues);

     // UseParams variable declaration stores ID of the user as parameter from user page
     const {id} = useParams();
     
     useEffect(() =>{
         loadUser();
     }, [])   


    // called when the form is submited and get back to user page:-
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:3002/users/${id}`, fvalues);
        history.push('/users')
    
    }


    //clled when there is any change or event on the input fields:-
    const onInputChange = e => {
        setValue({ ...fvalues, [e.target.name]: e.target.value });
      }; 
      
      
    // Called when the page is loaded with parameter 
    // ID of the user so that we get that the data based on the Id from the API:-
    
    const loadUser = async () =>{
            const result = await axios.get(`http://localhost:3002/users/${id}`) 
            setValue(result.data);
    }

    return (
        <>
            <div className="container .center">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Edit A User</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Name"
                                name="name"
                                value={fvalues.name}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Username"
                                name="username"
                                value={fvalues.username}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="Enter Your E-mail Address"
                                name="email"
                                value={fvalues.email}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Phone Number"
                                name="phone"
                                value={fvalues.phone}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        {/* <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Website Name"
                                name="company"
                                value={fvalues.company}
                                onChange={e => onInputChange(e)}
                            />
                        </div> */}
                        <button className="btn btn-warning btn-block">Update User</button>
                    </form>
                </div>
            </div>
        </>
    )

}


export default EditUser;