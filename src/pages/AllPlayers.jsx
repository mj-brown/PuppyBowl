import SinglePlayer from "../components/SinglePlayer";

function AllPlayers({ players, setPlayers }) {
  return (
    <div className="playerContainer">
      {players.map((player) => (
        <SinglePlayer key={player.id} player={player} setPlayers={setPlayers} />
      ))}
    </div>
  );
}

export default AllPlayers;