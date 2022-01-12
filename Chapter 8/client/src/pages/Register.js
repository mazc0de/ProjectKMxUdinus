import RegisterForm from "../components/RegisterForm";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const Register = () => {
  return (
    <Container className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <Card className="w-25">
        <Card.Body>
          <h1 className="text-center login-register-header ">Register</h1>
          <RegisterForm />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
