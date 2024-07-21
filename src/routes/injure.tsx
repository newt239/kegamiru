import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Typography } from "@mui/material";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/injure")({
  component: () => {
    const navigate = useNavigate({ from: "/" });
    return (
      <Box px={2}>
        <Button
          onClick={() => navigate({ to: "/list" })}
          startIcon={<ArrowBackIcon />}
          variant="text"
        >
          戻る
        </Button>
        <Typography variant="h4">ケガの情報</Typography>
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Duo Reges:
          constructio interrete. Quae cum dixisset paulumque institisset, Quid
          est? Quae cum essent dicta, discessimus.
        </Box>
      </Box>
    );
  },
});
