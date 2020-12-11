import React from 'react';
import homepage from "../../Images/homepage.JPG";
// import {NavLink} from 'react-router-dom';
import Common from '../../Common';

function Home() {
    return (
        <>
            <Common
                name ='Grow your business with us'
                imgsrc = {homepage}
                visit = '/about'
                btname = 'Getting Started'
                para = 'We are the team of taleneted developers'
            />
        </>
    );
}

export default Home;
