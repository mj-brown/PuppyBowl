/* eslint-disable react/prop-types */
function SinglePlayerBack({ player, onGoBack }) {
  return (
    <div className='cardBackContainer'>
      <h2>{player.name}</h2>
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
      <button onClick={onGoBack}>Back</button>
    </div>
  );
}

export default SinglePlayerBack;