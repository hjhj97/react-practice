import React, { ChangeEvent, FormEvent, useMemo, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const text = e.target.value;
    setSignupData((prev) => ({ ...prev, [name]: text }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("signup success");
    navigate("/");
  };

  const isNameValid = useMemo(() => {
    return signupData.name != "";
  }, [signupData.name]);

  const isEmailValid = useMemo(() => {
    const emailRegExp = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return emailRegExp.test(signupData.email);
  }, [signupData.email]);

  const isPwdValid = useMemo(() => {
    return {
      validLength: signupData.password.length >= 4 && signupData.password.length <= 10,
      includeSpecialCharacter: signupData.password.includes("!"),
    };
  }, [signupData.password]);

  const isPwdMatch = useMemo(() => {
    return signupData.confirmPassword !== "" && signupData.password === signupData.confirmPassword;
  }, [signupData.password, signupData.confirmPassword]);

  const isAllValid = useMemo(() => {
    return isPwdMatch && isPwdValid && isEmailValid && isNameValid;
  }, [isPwdMatch, isPwdValid, isEmailValid, isNameValid]);

  return (
    <div>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit} className="input-form">
        <div className="input-field">
          <label htmlFor="name">name</label>
          <div>
            <input type="text" id="name" name="name" value={signupData.name} onChange={onChangeInput} />
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="name">email</label>
          <div>
            <input type="email" id="email" name="email" value={signupData.email} onChange={onChangeInput} />
            {!isEmailValid && (
              <div>
                <p className="input-rule">이메일 형식을 확인해주세요</p>
              </div>
            )}
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="password">password</label>
          <div>
            <input type="password" id="password" name="password" value={signupData.password} onChange={onChangeInput} />
            <div>
              <li className={`input-rule ${isPwdValid.validLength && "valid"}`}>4글자 이상 10글자 이하</li>
              <li className={`input-rule ${isPwdValid.includeSpecialCharacter && "valid"}`}>특수문자 포함</li>
            </div>
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="confirm-password">confirm password</label>
          <div>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              value={signupData.confirmPassword}
              onChange={onChangeInput}
            />
            {!isPwdMatch && (
              <div>
                <p className="input-rule">비밀번호가 일치하지 않습니다.</p>
              </div>
            )}
          </div>
        </div>
        <button type="submit" disabled={!isAllValid}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
