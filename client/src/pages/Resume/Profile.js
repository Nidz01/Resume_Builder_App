import React, { useContext } from 'react';

export default function Profile(props) {
  return (
      <form
        className="flex signup-form"
        style={{ paddingLeft: "0px" }}
      >
    <div className="form-group">
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
      />
    </div>
    <div className="form-group">
      <input
        type="email"
        placeholder="someone@email.com"
        name="email"
      />
    </div>   
    </form>
  )
}
/*
<form class="flex signup-form" style="padding-left: 0px;">
  <aside class="flex flex-column justify-center items-center">
      </aside>
      <div class="content flex flex-column justify-center items-center">
      <input type="submit" value="SIGNUP"></div></div></form>
*/