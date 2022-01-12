import Card from "react-bootstrap/Card";
import "../assets/css/style.css";
import $ from "jquery";

const CardLevel = ({ level, handleClick }) => {
  $(document).on("click", "#cardLevel", function () {
    $(this).addClass("cardLevelActive").siblings().removeClass("cardLevelActive");
  });
  return (
    <>
      <Card className="text-white d-flex flex-row text-center align-items-center customCardLevel header-text-title" id="cardLevel" onClick={handleClick}>
        <Card.Body>{level}</Card.Body>
      </Card>
    </>
  );
};

export default CardLevel;
