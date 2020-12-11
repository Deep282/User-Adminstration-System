import React from 'react';
import Common from '../../Common';
import about from "../../Images/about.JPG";


function About() {
  return (
    <>
       <Common 
                name ='Welecome to about page of'
                imgsrc = {about}
                visit = '/contact'
                btname = 'Contact now'
                para = 'We are the team of taleneted developers who work day night to give right solutions to our clients'
       />
    </>
  );
}

export default About;
