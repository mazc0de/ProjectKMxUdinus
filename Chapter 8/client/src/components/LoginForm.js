import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router";
import $ from "jquery";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleLoginForm = (e) => {
    e.preventDefault();

    // jika error `TypeError: Cannot read properties of null (reading 'replace')`
    // harap register dahulu

    let getlocalStorageUsername = localStorage.getItem("LOCAL_STORAGE_USERNAME").replace(/"/g, "");
    let getlocalStoragePassword = localStorage.getItem("LOCAL_STORAGE_PASSWORD").replace(/"/g, "");

    if (getlocalStorageUsername === null || getlocalStoragePassword === null) {
      setErrorMessage("Harap isi form terlebih dahulu!");
      return;
    }

    if (username !== getlocalStorageUsername) {
      setErrorMessage("Username salah atau tidak terdaftar guys!");
      return;
    }
    if (password !== getlocalStoragePassword) {
      setErrorMessage("Password salah guys!");
      return;
    }

    localStorage.setItem("IS_LOGIN", JSON.stringify(true));

    setSuccessMessage("Login Success");
    $("body").css("cursor", "progress");

    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <Form onSubmit={handleLoginForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {!!successMessage && <Alert variant="success">{successMessage}</Alert>}
        {!!errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <Form.Label>Username</Form.Label>
        <Form.Control type="type" placeholder="Your Username" onChange={(e) => setUsername(e.target.value)} required className="sub-text-custom" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)} required className="sub-text-custom" />
      </Form.Group>

      <div className="d-grid gap-2">
        <Button variant="warning" size="lg" type="submit" className="sub-text-custom fw-bold">
          Login
        </Button>
        <Link to="/register">haven't registered?</Link>
      </div>
    </Form>
  );
};

export default LoginForm;
