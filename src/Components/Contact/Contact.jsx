import React, { useState } from 'react';





const Contact=()=> {

  
const [data, setData] = useState({
  fullname : "",
  phone : '',
  email : '',
  msg:    '',
});


const changeEvent = (event) =>{

    const {name, value} = event.target;

    // console.log(event);
    console.log(event.target);
    console.log(name, value);



   // setData({...data, [name]: value} )
   
   setData ((preVal)=>(
        {
          ...preVal, [name]:value
        }


   ))

    //  setData((preVal) =>{
    //    return {
    //      ...preVal,
    //      [name]: value,
    //    }
    //  })

}

const formSubmit = (e)=>{

    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My number is ${data.phone}. email id ${data.email}
       and message is  ${data.msg}.  `
    )
  

    setData({ 
      fullname : "",
      phone : '',
      email : '',
      msg:    '',
  });
}



  return (
    <>
      <div className='my-3'>
        <h1 className='text-center' > Contact page</h1>
      </div>
      <div className='container container_div mb-4'>
        <div className='row'>

          <div className='col-md-6 col-10 mx-auto'>

            <form onSubmit = {formSubmit}>
              <div className="form-group">

                <div className='mb-3'>
                  <label for="exampleInputEmail1">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    name = 'fullname'
                    value = {data.fullname}
                    onChange = {changeEvent}
                    placeholder='Enter your name..'
                  />
                </div>

                <div className='mb-3'>
                  <label for="exampleInputEmail1">Phone Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    name = 'phone'
                    value = {data.phone}
                    onChange = {changeEvent}
                    placeholder='Enter your number..'
                  />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your number with anyone else.</small>
                </div>

                <div className='mb-3'>
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name = 'email'
                    value = {data.email}
                    onChange = {changeEvent} />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                  <textarea 
                  className="form-control" 
                  id="exampleFormControlTextarea1" 
                  rows="3"
                  name = 'msg'
                  value = {data.msg}
                  onChange = {changeEvent}></textarea>
                </div>

                  </div>
                    <button type="submit" className="btn btn-outline-success">Submit</button>
            </form>








          </div>
        </div>
      </div>

    </>
  );
}

export default Contact;
