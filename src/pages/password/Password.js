import React from 'react'
import logo from "../../images/logo1.png"
import "./password.css"

const password = () => {
  return (
    <div className='password'>
        <div className='appCont'>
          <div className='logoCont'>
            <img src={logo} alt="logo" className="logoMicrosoft" />
            <p style={{color: "#666262", fontWeight: "600", fontSize:"19px"}}>Microsoft</p>
          </div>
          <p>
            azedraphael@gmail.com
          </p>
          <h3>Enter password</h3>
          <p>
            Because you're accessing sensitive info, you need to verify your password.
          </p>
          <form>
            <input type="text" placeholder="Password" className='pwdForm' />
          </form>
          <h2 className="pContent">
            Forgot Password?
          </h2>
          <h2  className="pContent">
            Email code to azedraphael@gmail.com
          </h2>
          <h2  className="pContent">
            Sign in with a different Microsoft account
          </h2>
          <div className='ctrl'>
            <button className='btn'>
              Sign in
            </button>
          </div>
        </div>
        <div className='conditions'>
            <h5>Terms of use</h5>
            <h5>Privacy & cookies</h5>
            <h5 style={{fontSize:"21px", marginBottom:"45px"}}>.{" "}.{" "}.</h5>
        </div>
    </div>
  )
}

export default password