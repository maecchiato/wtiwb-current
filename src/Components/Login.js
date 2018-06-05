import React from 'react';
import '../App.css';

const Login = () => (
          <div id = "Login" className = "mt-5">
            <div className ="input-group mb-3">
              <input type="text" className ="form-control" placeholder="Username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div className ="input-group-append">
                <span className ="input-group-text" id="basic-addon2">@waffletime.com</span>
              </div>
              </div>
          </div>
);

export default Login;
