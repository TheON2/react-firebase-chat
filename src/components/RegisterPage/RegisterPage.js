import React from "react";
import {Link} from "react-router-dom";

function RegisterPage() {
  return (
    <div className="auth-wrapper">
      <div style={{textAlign : 'center'}}>
        <h3>Register</h3>
      </div>
      <form

      >
        {/* register your input into the hook by invoking the "register" function */}
        <label>Email</label>
        <input name="email" type="email"

        />

        {/* include validation with required or other standard HTML validation rules */}
        <label>Name</label>
        <input name="name"

        />
        {/* errors will return when field validation fails  */}
        <label>Password</label>
        <input name="password" type="password"

        />
        {/* errors will return when field validation fails  */}
        <label>Password Confirm</label>
        <input name="password_confirm" type="password"

        />
        {/* errors will return when field validation fails  */}


        <input type="submit" />
        <Link style={{ color : 'gray' , textDecoration: 'none'}} to="/login">
          이미 아이디가 있다면 ...
        </Link>
      </form>
    </div>
  )
}

export default RegisterPage