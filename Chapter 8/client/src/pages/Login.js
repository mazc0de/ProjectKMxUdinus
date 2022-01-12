import LoginForm from "../components/LoginForm";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import $ from "jquery";

const Login = () => {
  $("body").css("cursor", "auto");

  return (
    <Container className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <Card className="w-25">
        <Card.Body>
          <h1 className="text-center login-register-header ">Login</h1>
          <LoginForm />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
