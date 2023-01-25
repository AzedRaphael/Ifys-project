import './username.css';
import logo from "../../images/logo1.png"
import key from "../../images/icon1.png"

function Password() {
  return (
    <div className="App">
      <div className='appContent'>
          <div className='logoContent'>
            <img src={logo} alt="logo" className="logo" />
            <p style={{color: "#8c8c8c", fontWeight: "600", fontSize:"20px"}}>Microsoft</p>
          </div>
          <div className="content">
            <p style={{fontWeight: "600", fontSize:"25px", marginTop:"2px"}}>Sign in</p>
            <form style={{marginTop:"-2px"}}>
              <input type="text" placeholder="Email, phone, or Skype" className='input' />
            </form>
            <p>
              No account? <span style={{color: "#2281cb"}}>Create One!</span>
            </p>
            <p style={{color: "#2281cb"}}>
              Can't access your account?
            </p>
          </div>
          <div className="controls">
            <button className='btn1'>
              Back
            </button>
            <button className='btn'>
              Next
            </button>
          </div>
      </div>
      <button className="innerContainer">
        <img src={key} alt="key" className='keyLogo' />
        <p className="innerContent">Sign-in options</p>       
      </button>
      <div className='conditions'>
        <h5>Terms of use</h5>
        <h5>Privacy & cookies</h5>
        <h5 style={{fontSize:"21px", marginBottom:"45px"}}>...</h5>
      </div>
    </div>
  );
}

export default Password;
