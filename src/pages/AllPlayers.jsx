import SinglePlayer from "../components/SinglePlayer";

function AllPlayers({ players, setPlayers }) {
  return (
    <>
      {players.map((player) => (
        <SinglePlayer key={player.id} player={player} setPlayers={setPlayers} />
      ))}
    </>
  );
}

export default AllPlayers;