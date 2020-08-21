import React from 'react';
import "./style.css";

export default function Login(props) {
  const login = () => {
    alert(props)
  }
  return (
    <header>
      <main class="container flex flex-column items-center justify-center login">
        <form
         onSubmit={login}
          class="flex justify-between login-form"
          style={{ paddingRight: "0px" }}
        >
          <div class="content flex flex-column justify-center items-center">
            <div class="text flex flex-column justify-center items-center">
              <h1>user login</h1>
            </div>
            <div class="form-group">
              <input
                type="text"
                placeholder="enter your username"
                name="username"
              />
            </div>

            <div class="form-group">
              <input
                name="password"
                placeholder="**************"
              />
              <span
                className="full float-right"
                aria-label="toggle password visibility"
              >
              </span>
            </div>
            <div class="form-group">
              <input type="submit" value="LOGIN" />
            </div>
          </div>
          <aside class="flex flex-column justify-center items-center">
            <h1>welcome, back!</h1>
            <h2>
              by creating your account your agree to our privacy and policy.
            </h2>
            <button type="button">
              <a href="/register" className="text-white">
                SIGNUP
              </a>
            </button>
          </aside>
        </form>
      </main>
    </header>
  );
}