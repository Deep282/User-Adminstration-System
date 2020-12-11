import React from 'react'
import { NavLink } from 'react-router-dom';



const Footer = () => {

    return (
        <>

            <footer className="page-footer font-small text-white bg-primary fixed-bottom">


                <div className="footer-copyright text-center py-3 text-white">© 2020 Copyright
                         <NavLink to="/home" className= 'text-white'> techsol.com</NavLink>
                </div>


            </footer>
        </>

    );

}

export default Footer;