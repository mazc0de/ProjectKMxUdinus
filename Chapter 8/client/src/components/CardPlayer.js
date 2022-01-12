import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import players from "../db/data.json";

const CardPlayer = ({ players }) => {
  return (
    <>
      {players.map((player, index) => (
        <div className="col-3 p-3">
          <Card key={index} className="w-100 p-3 custom-card-player">
            <Card.Header className="custom-header-footer-header">
              <div className="row">
                <div className="col-4">
                  <img src={player.avatar} alt={player.name} className="img-fluid rounded-circle img-profile-shadow" width="50" />
                </div>
                <div className="col-8">
                  <div className="header-text-title">{player.name}</div>
                  <div className="level-card-player">{player.level}</div>
                </div>
              </div>
            </Card.Header>
            <Card.Body className="text-white">
              <div className="bio-card-level">{player.bio}</div>
            </Card.Body>
            <Card.Footer className="pb-3 custom-footer-card">
              <div className="pb-2 custom-footer-card">Since {player.createdAt}</div>
              <Button className="rounded-pill w-50 bg-warning btn-card-footer " variant="warning">
                Fight
              </Button>
            </Card.Footer>
          </Card>
        </div>
      ))}
    </>
  );
};

export default CardPlayer;

// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

// const CardPlayer = ({ player }) => {
//   return (
//     <>
//       <Card style={{ backgroundColor: "#262626", borderRadius: "10px", height: "300px" }} key={player.id} className="w-100 p-3">
//         <Card.Header>
//           <div className="row">
//             <div className="col-4">
//               <img src={player.avatar} className="img-fluid rounded-circle" width="50" style={{ boxShadow: "7px 2px #FFB740" }} />
//             </div>
//             <div className="col-8">
//               <div style={{ fontWeight: "700", fontSize: "1rem", color: "#ffb548" }}>{player.name}</div>
//               <div style={{ color: "rgb(221 221 221)" }}>{player.level}</div>
//             </div>
//           </div>
//         </Card.Header>
//         <Card.Body className="text-white">
//           <div>{player.bio}</div>
//         </Card.Body>
//         <Card.Footer className="pb-3">
//           <div style={{ color: "grey" }} className="pb-2 ">
//             Since {player.createdAt}
//           </div>
//           <Button className="rounded-pill w-50 bg-warning" variant="warning">
//             Fight
//           </Button>
//         </Card.Footer>
//       </Card>
//     </>
//   );
// };

// export default CardPlayer;
