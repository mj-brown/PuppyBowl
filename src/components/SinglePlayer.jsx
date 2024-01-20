/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import PetsIcon from "@mui/icons-material/Pets";
import SinglePlayerBack from "./SinglePlayerBack";

const SinglePlayer = ({ player, setPlayers }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleSeeDetails = () => {
    setShowDetails(true);
  };

  const handleDeletePlayer = () => {
    // Update state to remove the deleted player
    setPlayers((prevPlayers) => prevPlayers.filter((p) => p.id !== player.id));
    console.log("Player deleted");
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
    <Card
      sx={{
        maxWidth: 345,
        border: "2px solid black",
        boxShadow: "2px 2px 5px #474747",
      }}
    >
      <CardMedia
        sx={{ height: 400 }}
        image={player.imageUrl}
        title={player.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          style={{ fontFamily: "Lemon", textAlign: "center" }}
        >
          {player.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={handleSeeDetails}
          variant="contained"
          size="small"
          startIcon={<PetsIcon />}
        >
          Details
        </Button>
        <Button
          onClick={handleDeletePlayer}
          variant="contained"
          size="small"
          startIcon={<DeleteIcon />}
        >
          Delete Player
        </Button>
      </CardActions>
    </Card>
  );
};

export default SinglePlayer;
