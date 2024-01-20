/* eslint-disable react/prop-types */
import { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";

function NewPlayerForm({ onSubmit, onCancel }) {
  const [newPlayer, setNewPlayer] = useState({
    name: "",
    breed: "",
    status: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlayer((prevPlayer) => ({
      ...prevPlayer,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Call the onSubmit function with the new player data
    onSubmit(newPlayer);
  };

  const isSubmitDisabled =
    !newPlayer.name || !newPlayer.breed || !newPlayer.status;

  return (
    <div className="newPlayerFormContainer">
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={newPlayer.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Breed"
              variant="outlined"
              fullWidth
              name="breed"
              value={newPlayer.breed}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Status"
              variant="outlined"
              fullWidth
              name="status"
              value={newPlayer.status}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Image URL"
              variant="outlined"
              fullWidth
              name="imageUrl"
              value={newPlayer.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              onClick={handleSubmit}
              variant="contained"
              disabled={isSubmitDisabled}
              fullWidth
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={onCancel} variant="contained" fullWidth>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default NewPlayerForm;
