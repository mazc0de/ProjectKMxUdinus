import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import CardLevel from "../components/CardLevel";
import CardPlayer from "../components/CardPlayer";
import Footer from "../components/Footer";
import NavbarHeader from "../components/NavbarHeader";
import players from "../db/data.json";

const Dashboard = () => {
  const [dataPlayer, setDataPlayer] = useState(players);
  const [playerFilterByLevel, setplayerFilterByLevel] = useState(null);

  const levels = ["NOVICE", "CLASS D", "CLASS C", "CLASS B", "CLASS A", "CANDIDATE MASTER", "GRAND MASTER"];

  return (
    <>
      <NavbarHeader />
      <Container>
        <div className="row d-flex justify-content-between">
          <h1 className="text-white py-5 header-text-title">Choose Your Opponent</h1>
          {levels.map((level) => {
            return <CardLevel level={level} handleClick={() => setplayerFilterByLevel(level)} />;
          })}
        </div>

        <div className="row pt-5 ">{playerFilterByLevel == null ? <CardPlayer players={dataPlayer} /> : <CardPlayer players={dataPlayer.filter((p) => p.level === playerFilterByLevel)} />}</div>

        <Footer />
      </Container>
    </>
  );
};

export default Dashboard;
