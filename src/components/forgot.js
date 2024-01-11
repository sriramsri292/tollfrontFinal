import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  
} from "mdb-react-ui-kit";
import {  useNavigate } from 'react-router-dom';

export default function Forgot() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({
    message: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  useEffect (()=>
    {
      console.log(user);
    },[user])

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!user.email || !user.password ) {
      alert("Enter The Details ");
       return;
    }
    const data = {
      email: user.email,
      password: user.password,
    };
    try {
      const response = await fetch('https://toollogin.onrender.com/auth/forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      setMessage({
        message: result.message,
       
      });
  
      console.log(result.message);
  
      if (result.success) {
        
        navigate('/');
      }
      else{
        alert(result.message);
      }
      setUser({
        email: '',
        password: '',
      });
    } catch (error) {
      console.error(error);
  
     
    }
  };
  console.log(message);
  return (
    <div>
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?w=826&t=st=1704875317~exp=1704875917~hmac=7a2c92c1419a9604ed8974a5f066336260a6e31568aae49a906056a2b7e3f26a"
              class="img-fluid"
              alt="img"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <form onSubmit={handleSubmit}>
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlg"
                type="email"
                size="lg"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                name="password"
                value={user.password}
                onChange={handleChange}
              />

           

              <div className="text-center text-md-start mt-4 pt-2">
                <MDBBtn className="mb-0 px-5" size="lg" type="submit">
                  ResetPassword
                </MDBBtn>
                <p className="small fw-bold mt-2 pt-1 mb-2">
                  Don't have an account?{" "}
                  <a href="/register" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
