/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import SinglePlayer from "../components/SinglePlayer"; // Import your SinglePlayer component

const PlayerContainer = ({ players, setPlayers }) => {
  return (
    <Grid
      container
      justifyContent="center"
      spacing={4}
      style={{ padding: "16px" }}
    >
      {players.map((player) => (
        <Grid
          item
          key={player.id}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          style={{ margin: "0 8px" }}
        >
          <SinglePlayer player={player} setPlayers={setPlayers} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PlayerContainer;
