import React, { FormEvent } from "react";

function Signup() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>Signin</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="name">email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" id="password" />
        </div>
        <div>
          <label htmlFor="confirm-password">confirm password</label>
          <input type="password" id="confirm-password" />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
