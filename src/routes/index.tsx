import AddIcon from "@mui/icons-material/Add";
import { Box, Fab, Stack } from "@mui/material";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

import bodyImage from "#/assets/body.jpg";

type MarkerProps = {
  top: string;
  left: string;
};

const Marker: React.FC<MarkerProps> = ({ top, left }) => {
  return (
    <Box
      style={{
        position: "absolute",
        top,
        left,
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "red",
      }}
    ></Box>
  );
};

export const Route = createFileRoute("/")({
  component: () => {
    const navigate = useNavigate({ from: "/" });
    return (
      <>
        <Stack sx={{ position: "relative" }}>
          <img alt="aa" src={bodyImage} />
          <Marker left="25%" top="75%" />
        </Stack>
        <Fab
          aria-label="add"
          color="primary"
          onClick={() => navigate({ to: "/add" })}
          sx={{ position: "fixed", bottom: "72px", right: "18px" }}
        >
          <AddIcon />
        </Fab>
      </>
    );
  },
});
