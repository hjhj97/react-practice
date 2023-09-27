import React, { useRef } from "react";
import { requestSignin } from "../api/auth";

function Signin() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const onClickSignin = async () => {
    const name = nameRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";
    const res = await requestSignin(name, password);
    if (res.success) {
      localStorage.setItem("token", res.token);
      localStorage.setItem("name", res.name);
      alert("Login Success");
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="name">name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" id="password" ref={passwordRef} />
      </div>
      <button onClick={onClickSignin}>Signin</button>
    </div>
  );
}

export default Signin;
