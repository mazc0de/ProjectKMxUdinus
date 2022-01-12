import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router";
import $ from "jquery";

const RegisterForm = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const navigate = useNavigate();

  const handleRegisterForm = (e) => {
    e.preventDefault();
    if (!username.match(/^[0-9a-z]+$/)) {
      setErrorMessage("Username must be alphanumeric gan!");
      return;
    }

    if (username.length < 6 || username.length > 20) {
      setErrorMessage("username minimum 6 characters and maximum 20 characters guys!");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("password minimum 6 characters bro!");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("passwordnya kok beda sob?!");
      return;
    }

    localStorage.setItem("LOCAL_STORAGE_USERNAME", JSON.stringify(username));
    localStorage.setItem("LOCAL_STORAGE_PASSWORD", JSON.stringify(password));

    setSuccessMessage("Register Success");
    $("body").css("cursor", "progress");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <Form onSubmit={handleRegisterForm} className="myForm">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {!!successMessage && <Alert variant="success">{successMessage}</Alert>}
        {!!errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

        <Form.Label className="sub-text-custom">Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
          className="sub-text-custom"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Your Password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="sub-text-custom"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Your Password"
          required
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
      </Form.Group>

      <div className="d-grid gap-2">
        <Button variant="warning" size="lg" type="submit" className="sub-text-custom fw-bold">
          REGISTER
        </Button>
        <Link to="/">already registered?</Link>
      </div>
    </Form>
  );
};

export default RegisterForm;
