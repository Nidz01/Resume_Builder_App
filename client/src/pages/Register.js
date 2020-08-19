import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Overlay, Popover } from "react-bootstrap";

export default function Register(props) {
  return (
    <header>
      <main class="container flex flex-column items-center justify-center signup">
        <form
          class="flex signup-form"
          onSubmit={this.handleSubmit}
          autoComplete="off"
          style={{ paddingLeft: "0px" }}
        >
          <aside class="flex flex-column justify-center items-center">
            <h1>hello, friend!</h1>
            <h2>
              by creating your account your are agree to our privacy and
              policy.
            </h2>
            <button type="button">
              {" "}
              <a href="/" className="text-white">
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
                placeholder="Enter your name"
                name="first_name"
                autoComplete="off"
                value={this.state.first_name}
                {/*onChange={this.handleChange}*/}
                ref="first_name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                placeholder="Enter your username"
                ref="username"
                name="username"
                autoComplete="off"
                value={this.state.username}
                {/*onChange={this.handleChange}*/}
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                placeholder="someone@email.com"
                ref="email"
                name="email"
                autoComplete="off"
                value={this.state.email}
                {/*onChange={this.handleChange}*/}
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                ref="password"
                value={this.state.password}
                {/*onChange={this.handleChange}*/}
              />
              {/* <span
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
              </span> */}
            </div>
            <div class="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                ref="confirmPassword"
                value={this.state.confirmPassword}
                {/*onChange={this.handleChange}*/}
              />
            </div>

            <div class="form-group">
              <input type="submit" value="SIGNUP" />
            </div>
          </div>
          <Overlay
            show={this.state.errorEmail}
            target={() => {
              return ReactDOM.findDOMNode(this.refs.email);
            }}
            placement="right"
          >
            <Popover id="popover-email" title="Niepoprawny e-mail">
              Error Email address Please check it
            </Popover>
          </Overlay>

          {/* <Overlay
                show={this.state.errorUsername}
                target={() => {
                  return ReactDOM.findDOMNode(this.refs.username);
                }}
                placement="right"
              >
                <Popover id="popover-email" title="Niepoprawny e-mail">
                  Username lenght is must be 3 or more
                </Popover>
              </Overlay> */}

          <Overlay
            show={this.state.errorPasswordLenght}
            target={() => {
              return ReactDOM.findDOMNode(this.refs.password);
            }}
            placement="right"
          >
            <Popover id="popover-password" title="Hasło za krótkie">
              Password length must be 6 or more
            </Popover>
          </Overlay>

          <Overlay
            show={this.state.errorPasswordMatch}
            target={() => {
              return ReactDOM.findDOMNode(this.refs.confirmPassword);
            }}
            placement="right"
          >
            <Popover id="popover-confirmPassword" title="Hasła nie pasują">
              Password and confirm password did not mactch
            </Popover>
          </Overlay>
        </form>
      </main>
    </header>
  );
}