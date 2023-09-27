import React, { useRef } from "react";
import { requestSignin } from "../api/auth";
import { useAuthContext } from "../context/AuthContext";

function Signin() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const { setAuthData } = useAuthContext();

  const onClickSignin = async () => {
    const name = nameRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";

    const res = await requestSignin(name, password);
    if (res.success) {
      setAuthData({ name: res.name, token: res.token });
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
