/* eslint-disable react/prop-types */
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function SinglePlayerBack({ player, onGoBack }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 532.64,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "2px solid black",
        boxShadow: "2px 2px 5px #474747",
      }}
    >
      <CardContent
        style={{
          textAlign: "center",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 35,
        }}
      >
        <Typography
          variant="h4"
          component="div"
          style={{ fontFamily: "Lemon", textAlign: "center" }}
        >
          {player.name}
        </Typography>
        <Typography variant="h5" style={{ textAlign: "left", marginTop: 50 }}>
          Breed: {player.breed}
          <br />
          Status: {player.status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={onGoBack}
          variant="contained"
          size="small"
          startIcon={<KeyboardBackspaceIcon />}
        >
          Back
        </Button>
      </CardActions>
    </Card>
  );
}

export default SinglePlayerBack;
