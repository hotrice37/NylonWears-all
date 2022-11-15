import * as React from 'react';

const Login = () => {
    return(
        <div class="offcanvas offcanvas-end show" id="login">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Login Screen</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>

      <div class="offcanvas-body"> 
        <div class="login_screen">
          <h1>WEAR THE BEST CLOTHES</h1>
          <form method="post">
            <div class="txt_field">
              <input type="text" required />
              <span></span>
              <label>EMAIL ADDRESS</label>
            </div>
            <div class="txt_field">
              <input type="password" required />
              <span></span>
              <label>PASSWORD</label>
            </div>
            <div class="pass">Forget Password ?</div>
            <input type="submit" value="Login" />
            <div class="signup_link">
              Already have an account? <a href="#">Sign up</a> 
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}

export default Login;