import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardProfileNavbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("LOCAL_STORAGE_USERNAME");
    localStorage.removeItem("LOCAL_STORAGE_PASSWORD");
    localStorage.setItem("IS_LOGIN", JSON.stringify(false));
  };
  return (
    <Card style={{ backgroundColor: "#262626", width: "280px" }}>
      <Card.Body>
        <div className="row">
          <div className="col-4 d-flex align-items-center">
            <img src="https://i.pravatar.cc/300" className="img-fluid rounded-circle" width="50" style={{ boxShadow: "7px 2px #FFB740" }} />
          </div>
          <div className="col-8 text-white">
            <span>Daffa Hanifisyafiq</span>
            <div>GRAND MASTER</div>
            <div>1000 Points</div>
            <hr />
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardProfileNavbar;
