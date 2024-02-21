import React, { useEffect, useState } from "react";
import {loginAsync,updateTokenInState} from "./loginSlice";
import { useDispatch } from "react-redux";
import { useSaveAndDecode } from "./useSaveAndDecode";
import { useOnLogin } from "./hooks";

export const Login = () => {
  const { username, email } = useOnLogin();
  const {getTokenInLocal,decodeToken} = useSaveAndDecode()
  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log("Im the meleh");
    dispatch(loginAsync({ username: "nadav", password: "123" }));
  };

  useEffect(() => {
    const token = getTokenInLocal();
    if (token) {
        dispatch(updateTokenInState(token))
    }
  }, []);

  return (
    <div>
      Login
      <button onClick={() => handleLogin()}>Login</button>
      <h1>{username}</h1>
      <h1>{email}</h1>
    </div>
  );
};
