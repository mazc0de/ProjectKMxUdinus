import Card from "react-bootstrap/Card";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100 vh-100">
      <Card>
        <Card.Body>Oops! not found.</Card.Body>
      </Card>
    </div>
  );
};

export default NotFound;
