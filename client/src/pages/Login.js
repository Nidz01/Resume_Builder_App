import React, { useContext } from 'react';

export default function Login(props) {
  return (
    <header>
      <main class="container flex flex-column items-center justify-center login">
        <form
          class="flex justify-between login-form"
          onSubmit={this.handleSubmit}
          autoComplete="off"
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
                value={this.state.username}
                onChange={this.handleChange}
                name="username"
              />
            </div>

            <div class="form-group">
              <input
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                type={this.state.showPassword ? "text" : "password"}
                placeholder="**************"
              />
              <span
                className="full float-right"
                aria-label="toggle password visibility"
                onClick={this.handleClickShowPassword}
                onMouseDown={this.handleMouseDownPassword}
              >
                {this.state.showPassword ? (
                  <p>Hide Password</p>
                ) : (
                  <p>Show Password</p>
                )}
              </span>
            </div>
            <div class="form-group">
              <input type="submit" value="LOGIN" />
            </div>
          </div>
          <aside class="flex flex-column justify-center items-center">
            <h1>welcome, back!</h1>
            <h2>
              by creating your account your are agree to our privacy and
              policy.
            </h2>
            <button type="button">
              <a href="/register/" className="text-white">
                SIGNUP
              </a>
            </button>
          </aside>
        </form>
      </main>
    </header>
  );
}