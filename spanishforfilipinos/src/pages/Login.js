import React from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
export function Login() {
  return (
    <Container>
        <Container style={{width: 400}}>
        <form>
        <center><h3>Login</h3></center>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
          Does not have an account <a href="/register">Register?</a>
        </p>
      </form>
    </Container>
    </Container>
  );
}