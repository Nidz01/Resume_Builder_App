import React from 'react';
import "./style.css";

export default function Register(props) {
  return (
    <header>
      <main class="container flex flex-column items-center justify-center signup">
        <form
          class="flex signup-form"
          style={{ paddingLeft: "0px" }}
        >
          <aside class="flex flex-column justify-center items-center">
            <h1>hello, friend!</h1>
            <h2>
              by creating your account your agree to our privacy and policy.
            </h2>
            <button type="button">
              <a href="/login" className="text-white">
                LOGIN
              </a>
            </button>
          </aside>
          <div class="content flex flex-column justify-center items-center">
            <div class="text">
              <h1>create account</h1>
            </div>
            <div class="form-group">
              <input
                type="text"
                placeholder="Enter your username"
                name="username"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                placeholder="someone@email.com"
                name="email"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
              />
            </div>

            <div class="form-group">
              <input type="submit" value="SIGNUP" />
            </div>
          </div>
        </form>
      </main>
    </header>
  );
}