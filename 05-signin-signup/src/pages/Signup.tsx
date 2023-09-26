import React, { ChangeEvent, FormEvent, useMemo, useState } from "react";
import "../App.css";

function Signup() {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const text = e.target.value;
    setSignupData((prev) => ({ ...prev, [name]: text }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const isNameValid = useMemo(() => {
    return {
      validLength: signupData.name.length >= 4 && signupData.name.length <= 10,
      includeSpecialCharacter: signupData.name.includes("!"),
    };
  }, [signupData.name]);

  return (
    <div>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit} className="input-form">
        <div className="input-field">
          <label htmlFor="name">name</label>
          <div>
            <input type="text" id="name" name="name" value={signupData.name} onChange={onChangeInput} />
            <div>
              <li className={`input-rule ${isNameValid.validLength && "valid"}`}>4글자 이상 10글자 이하</li>
              <li className={`input-rule ${isNameValid.includeSpecialCharacter && "valid"}`}>특수문자 포함</li>
            </div>
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="name">email</label>
          <div>
            <input type="email" id="email" name="email" />
            {true && <p className="error-text">Error</p>}
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="password">password</label>
          <div>
            <input type="password" id="password" name="password" />
            {true && <p className="error-text">Error</p>}
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="confirm-password">confirm password</label>
          <div>
            <input type="password" id="confirm-password" />
            {true && <p className="error-text">Error</p>}
          </div>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
