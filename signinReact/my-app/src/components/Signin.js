import React, { useState } from 'react';
import axios from "axios";
// import {  useFormik } from 'formik';



// const validate = values => {
//     const errors = {};
//     if (!values.userName) {
//       errors.userName = 'Required';
//     } else if (values.userName.length > 10) {
//       errors.userName = 'Must be 10 characters or less';
//     }
  
//     if (!values.password) {
//       errors.password = 'Required';
//     } else if (values.password.length > 8) {
//       errors.password = 'Must be 8 characters or less';
//     }
  
//       return errors;
//   };

function Signin() {

   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");

   const  handleUserName = (e)=> {
    e.preventDefault();
    setUserName(e.target.values)
   };
   const handlePassword=(e)=>{
    e.preventDefault();
    setPassword(e.target.value)
   };
   
  //  const handleSubmit=(e)=>{
  //   e.preventDefault();
  //  };

  const submitLogin = () => {
    axios
     .post("http://localhost:5000/login",{userName,password})
      .then((result)=> {
        console.log(result.data);
      
        });
    
      };
    
    //  formik = useFormik({
    //       initialValues: {
    //         userName: '',
    //         password: '',
           
    //       }, 

        // validate,
        // onClick: () => {
        //   // alert(JSON.stringify(values, null, 2));
        // },
   
   
    


    return (
      <div className='container'>
        <form>
            <h2 className='text - center pt-2'>Singin</h2>
            <div className=' mb-3'>
                <label className='form-label'
                onChange={handleUserName}>UserName</label>
                <input 
                type='text'
                className='form-control'
                placeholder='UserName'></input>
            </div>

            <div className=' mb-3'>
                <label className='form-label' onChange={handlePassword}>Password</label>
                <input 
                type='password'
                className='form-control'
                placeholder='Password'></input>
            </div>
            <button type='cancel' className='btn btn-success'>cancel</button> 

           <button onClick = {submitLogin} value = "submit">OK</button> 
           
        </form>

        
      </div>
      )
    
  }
  

  export default Signin
  