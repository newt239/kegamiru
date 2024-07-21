import { useEffect, useState } from "react";

import { Box } from "@mui/material";

import iconImage from "#/assets/icon.jpg";

export default function AppIconModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setShow(true);
    }
  }, [window.location.pathname]);

  if (!show) {
    return null;
  }

  return (
    <Box
      onClick={() => setShow(false)}
      sx={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        zIndex: 2000,
      }}
    >
      <img
        src={iconImage}
        style={{
          width: "30vw",
          height: "30vw",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </Box>
  );
}
