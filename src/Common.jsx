import React from 'react';
import {NavLink} from 'react-router-dom';



const Common = (props) => {

    const name = props.name;
    const imgsrc = props.imgsrc;
    const visit = props.visit;
    const btname = props.btname;
    const para = props.para;




    return (<>

        <section id='header' className="d-flex align-items-center">
            <div className='container-fluid nav-bg '>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                <h1>{name} <strong className='brand-name'>TechSol.</strong></h1>
                                <p className='my-2'>{para} </p>
                                <div className='mt-3'>
                                    <NavLink to={visit} id='btn_home' className='btn btn-outline-success'>{btname}</NavLink>
                                </div>
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 header-img'>

                                <img src={imgsrc} className='img-fluid animated' alt='hm-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}


export default Common;

