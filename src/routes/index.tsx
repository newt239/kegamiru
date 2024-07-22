import AddIcon from "@mui/icons-material/Add";
import { Fab, Stack } from "@mui/material";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

import bodyImage from "#/assets/body.jpg";

const Marker = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "75%",
        left: "25%",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "red",
      }}
    ></div>
  );
};

export const Route = createFileRoute("/")({
  component: () => {
    const navigate = useNavigate({ from: "/" });
    return (
      <>
        <Stack sx={{ position: "relative" }}>
          <img alt="aa" src={bodyImage} />
          <Marker />
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
