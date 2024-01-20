import { useState, useEffect } from "react";
import AllPlayers from "./pages/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm";
import fetchPlayers from "./API/index";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import "./styles/App.css";

function App() {
  const [players, setPlayers] = useState([]);
  const [playerAdded, setPlayerAdded] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [openNewPlayerForm, setOpenNewPlayerForm] = useState(false);

  useEffect(() => {
    if (playerAdded) {
      setOpenNewPlayerForm(false);
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
        console.error("Error fetching data:", error.message);
      });
  }, []); // Only fetch data on mount

  useEffect(() => {
    // Filter players based on search text
    const filtered = players.filter((player) =>
      player.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredPlayers(filtered);
  }, [searchText, players]);

  const handleAddNewPlayer = () => {
    setOpenNewPlayerForm(true);
  };

  const handleFormSubmit = (newPlayer) => {
    setPlayers([...players, newPlayer]);
    alert("Congratulations! You have added a new player to the Puppy Bowl!");
    setPlayerAdded(true);
  };

  const handleCancel = () => {
    setOpenNewPlayerForm(false);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    // Perform search logic if needed
    // For now, we rely on the useEffect to filter players based on searchText
  };

  return (
    <div className="appContainer">
      <header>
        <h1>The Puppy Bowl</h1>
      </header>
      <div>
        <p className="welcomeText">
          Welcome to the Puppy Bowl. <br />
          This is where users can build rosters of cute puppies, <br />
          that are <span>ready for adoption</span>, <br />
          to play in the Puppy Bowl.
        </p>
      </div>
      <div className="searchBar">
        <TextField
          id="outlined-basic"
          label="Search for a player..."
          variant="outlined"
          value={searchText}
          onChange={handleSearchChange}
          style={{
            marginRight: "15px",
            boxShadow: "2px 2px 5px #474747",
            border: "2px solid black",
            backgroundColor: "white",
          }}
        />
        <Button onClick={handleSearch} variant="contained" size="large">
          Search
        </Button>
      </div>
      <div className="newPlayerButtonContainer">
        <Button
          onClick={handleAddNewPlayer}
          variant="contained"
          style={{ marginTop: "15px" }}
          size="large"
        >
          Add New Player
        </Button>
        <Dialog open={openNewPlayerForm} onClose={handleCancel}>
          <DialogTitle>Add New Player</DialogTitle>
          <DialogContent>
            <NewPlayerForm
              onSubmit={handleFormSubmit}
              onCancel={handleCancel}
            />
          </DialogContent>
        </Dialog>
      </div>
      <AllPlayers
        players={searchText ? filteredPlayers : players}
        setPlayers={setPlayers}
      />
    </div>
  );
}

export default App;
