/* eslint-disable react/prop-types */
import { useState } from 'react';
import SinglePlayerBack from './SinglePlayerBack';

const SinglePlayer = ({ player, setPlayers }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleSeeDetails = () => {
    setShowDetails(true);
  };

  const handleDeletePlayer = () => {
    // Update state to remove the deleted player
    setPlayers((prevPlayers) => prevPlayers.filter((p) => p.id !== player.id));
    console.log('Player deleted');
  };

  const handleGoBack = () => {
    setShowDetails(false);
  };

  if (!player) {
    return <p>Player not found</p>;
  }

  if (showDetails) {
    return <SinglePlayerBack player={player} onGoBack={handleGoBack} />;
  }

  return (
    <div className='cardFrontContainer'>
      <img src={player.imageUrl} alt={player.name} />
      <h2>{player.name}</h2>
      <button onClick={handleSeeDetails}>See Details</button>
      <button onClick={handleDeletePlayer}>Delete Player</button>
    </div>
  );
};

export default SinglePlayer;
