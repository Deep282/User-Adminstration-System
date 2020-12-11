import { colors, Grid, makeStyles, Paper, TextField} from '@material-ui/core';
import Axios from 'axios';
import React, {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
// import Button from '@material-ui/core/Button';
// Material Style for form 
const useStyles = makeStyles(theme =>({
    
    root: {
        '& .MuiFormControl-root':{
            width:'80%',
            margin: theme.spacing(1)
        }
    }

}))

//material style for paper
const usePaperStyle = makeStyles(theme =>({
        pageContent:{
            margin:theme.spacing(5),
            padding: theme.spacing(3),
            // background: '',
            // backgroundColor: "gey"
          
        }

}))

// initial values of the input field 
const initialFValues = {
        id:0,
        name:'',
        username:'',
        email:'',
        phone:'',
        company:''

}

const AddUsers = () => {

    let history = useHistory();
const [fvalues, setValue] = useState(initialFValues);

const oninputChange = e => {
    setValue ({...fvalues, [e.target.name]: e.target.value})
}

const onSubmit = async e =>{
    e.preventDefault();
    await Axios.post('http://localhost:3002/users', fvalues);
    history.push('/users')

}

const classes = useStyles();
const paperClass = usePaperStyle();

    return (
        <>
        <Paper className = {paperClass.pageContent} >
            <form onSubmit = {e=>onSubmit(e)} className = {classes.root}> 
                <Grid container >
                        <Grid item xs={6}>
                                <h2>Register/Add User</h2>
                             <TextField
                                variant='outlined'
                                label='Full Name'
                                name='name'
                                value = {fvalues.name}
                                onChange = {e=>oninputChange(e)}
                             />   

                             <TextField
                                variant='outlined'
                                label='username'
                                name='username'
                                value = {fvalues.username}
                                onChange = {e=>oninputChange(e)}
                             />   

                            <TextField
                                variant='outlined'
                                label='Email'
                                name='email'
                                value = {fvalues.email}
                                onChange = {e=>oninputChange(e)}
                             />   

                            <TextField
                                variant='outlined'
                                type = 'number'
                                label='phone'
                                name='phone'
                                value = {fvalues.phone}
                                onChange = {e=>oninputChange(e)}
                             />   
                             {/* <TextField
                                variant='outlined'
                                label='Company Name'
                                name='company'
                                value = {fvalues.company}
                                onChange = {e=>oninputChange(e)}
                             /> */}
                             
                             <div className= 'mb-0 py-2 '>
                             <button type="submit" className="btn btn-outline-success ">Register</button></div>   
                        
                             
                            
                        </Grid>
                 

                        
                        <Grid item xs={6}>
                        <h2>Sign In/Login</h2>
                        <TextField
                                variant='outlined'
                                label='Full Name'
                                value = {fvalues.fullname}
                             />   
                         <TextField
                                variant='outlined'
                                label='Full Name'
                                value = {fvalues.fullname}
                             />                                   
                            <div className= 'mb-0 py-2 mx-auto'>
                             <button type="submit" className="btn btn-outline-success">Login</button></div>                                              
                        </Grid>
                </Grid>
            </form>
            </Paper>
        </>
    );
}

export default AddUsers;
