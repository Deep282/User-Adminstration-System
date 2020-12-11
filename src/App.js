import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Servic/Service';
import Contact from './Components/Contact/Contact';
import Users from './Components/Users/Users';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AddUsers from './Components/Users/AddUsers';
import {Switch,Route,Redirect} from 'react-router-dom';
import editUser from './Components/Users/EditUsers';
import ViewUser from './Components/Users/ViewUser';



//Switch is used to switch between urls or navlinks and Route is used for routing it to that
// particular URL.

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path='/' component = {Home}/>
    <Route exact path='/about' component = {About}/>
    <Route exact path='/service' component = {Service}/>
    <Route exact path='/contact' component = {Contact}/>
    <Route exact path='/users' component = {Users}/>
    <Route exact path = '/signup' component = {AddUsers}/>
    <Route exact path = '/users/edit/:id' component = {editUser}/>
    <Route exact path = '/users/:id' component = {ViewUser}></Route>
    <Redirect to = '/' />
    </Switch>

    <Footer/>
    </>
  );
}

export default App;
