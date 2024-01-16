import { useState, useEffect } from 'react';
import AllPlayers from "./pages/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm";
import fetchPlayers from './API/index';

function App() {
  const [showNewPlayerForm, setShowNewPlayerForm] = useState(false);
  const [players, setPlayers] = useState([]);
  const [playerAdded, setPlayerAdded] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    if (playerAdded) {
      setShowNewPlayerForm(false);
      setPlayerAdded(false);
    }
  }, [playerAdded]);

  useEffect(() => {
    // Fetch data from the API
    fetchPlayers()
      .then((responseData) => {
        const fetchedPlayers = responseData.data.players || [];
        setPlayers(fetchedPlayers);
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
      });
  }, []); // Only fetch data on mount


  useEffect(() => {
    // Filter players based on search text
    const filtered = players.filter(player => player.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredPlayers(filtered);
  }, [searchText, players]);

  const handleAddNewPlayer = () => {
    setShowNewPlayerForm(true);
  };

  const handleFormSubmit = (newPlayer) => {
    setPlayers([...players, newPlayer]);
    alert("Congratulations! You have added a new player to the Puppy Bowl!");
    setPlayerAdded(true);
  };

  const handleCancel = () => {
    setShowNewPlayerForm(false);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    // Perform search logic if needed
    // For now, we rely on the useEffect to filter players based on searchText
  };

  return (
    <div className='appContainer'>
      <header>
        <h1>The Puppy Bowl</h1>
        <p>
          Welcome to the Puppy Bowl. <br/>
          This is where users can build rosters of cute puppies, <br/>
          that are ready for adoption, <br/>
          to play in the Puppy Bowl.
        </p>
      </header>
      <div className='searchBar'>
        <input type="text" placeholder="Search for a player..." value={searchText} onChange={handleSearchChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className='newPlayerButtonContainer'>
        <button onClick={handleAddNewPlayer}>Add New Player</button>
        {showNewPlayerForm && <NewPlayerForm onSubmit={handleFormSubmit} onCancel={handleCancel} />}
      </div>
      <AllPlayers players={searchText ? filteredPlayers : players} setPlayers={setPlayers} />
    </div>
  );
}

export default App;
