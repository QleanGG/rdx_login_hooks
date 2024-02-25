import React, { useEffect, useState } from "react";
import { loginAsync, updateTokenInState } from "./loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSaveAndDecode } from "./useSaveAndDecode";
import { useOnLogin } from "./hooks";
import { Button, Container, Form } from "react-bootstrap";

export const Login = () => {
  const { username, email } = useOnLogin();
  const [formUser, setFormUser] = useState('');
  const [formPass, setFormPass] = useState('');
  const { getTokenInLocal } = useSaveAndDecode();
  const dispatch = useDispatch();

  const handleUserChange = (e) => setFormUser(e.target.value);
  const handlePassChange = (e) => setFormPass(e.target.value);

  const handleLogin = () => {
    dispatch(loginAsync({ username: formUser, password: formPass }));
  };

  useEffect(() => {
    const token = getTokenInLocal();
    if (token) {
      dispatch(updateTokenInState(token));
    }
  }, []);

  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-center">
        <Form className="w-50">
          <h2 className="text-center mb-4">Login</h2>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" onChange={(e) => handleUserChange(e)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={handlePassChange}/>
          </Form.Group>

          <Button
            variant="primary"
            type="button"
            className="w-100"
            onClick={() => handleLogin()}
          >
            Login
          </Button>

          {username && (
            <h5 className="mt-4">Welcome back, {username} ({email})</h5>
          )}
        </Form>
      </div>
    </Container>
  );
};
